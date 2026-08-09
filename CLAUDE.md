# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Play to Play — site institucional de produção de vídeo para redes sociais, com uma área de cliente autenticada, e o case de portfólio da Isack Nícholas — Fisioterapia (`/cases/fisioterapia`). Next.js 16 (App Router) + TypeScript + React 19, deploy na Vercel.

## Commands

```bash
npm run dev      # next dev — dev server (writes/refreshes the AGENTS.md block, see below)
npm run build    # next build
npm run start    # next start (serve production build)
npm run lint      # eslint
```

There is no test suite configured in this repo.

### Environment variables

`.env.local` (never committed) needs:

```
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SESSION_SECRET=...
```

`SESSION_SECRET` signs the client-area session cookie (HMAC) — generate with `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` and never reuse it across environments.

## Before writing code

Read `AGENTS.md` first (imported above). This Next.js version has breaking changes from training data — check `node_modules/next/dist/docs/` for current APIs/conventions before assuming anything. That block is auto-managed by `next dev`; don't hand-edit it, but do commit it if `next dev` re-adds it.

## Architecture

Single Next.js app (no separate frontend/backend packages) with two distinct "sites" living in one App Router tree, plus server-only routes that talk to Supabase.

- **`app/(site)`** — the public Play to Play marketing site (Início, Portfólio, Pacotes, Sobre, Contato) and the client-area routes (`area-cliente`, `area-cliente/dashboard`). Shares `app/(site)/layout.tsx` (`TopBar` + `SiteFooter`, Play to Play fonts/CSS) and styling in `play-to-play.css`.
- **`app/cases/fisioterapia`** — a self-contained portfolio case study with its own layout, fonts, and CSS (`fisio.css`), unrelated to the Play to Play site chrome.
- **`app/api`** — server-side route handlers that are the only code allowed to talk to Supabase; the anon key is read from `process.env` server-side and never bundled for the browser (see `lib/supabase/server.ts`).
- **`components/`** — organized by area: `site/` (Play to Play marketing), `portal/` (client-area login/dashboard), `cases/fisio/` (the fisio case study). Don't cross-import between these — each area has its own visual system.
- **`lib/data/`** — static content (packages, testimonials, videos, fisio copy) as plain TS modules, not fetched from anywhere.
- **`legacy/`** — the original pre-migration static HTML files, kept only as a reference for content/behavior parity. Not built or served.

### Client-area auth flow

Custom cookie-session auth, not Supabase Auth:

1. `POST /api/client-login` (`app/api/client-login/route.ts`) takes an access code (`codigo`), looks it up via `getClientDashboard` (`lib/supabase/server.ts`), which calls a Postgres RPC `get_client_dashboard` — a security-definer function that scopes results to that code so the anon key can't be used to enumerate other clients.
2. On success it signs an HMAC session token (`lib/session.ts`, `createSessionToken`/`verifySessionToken`) and sets it as an httpOnly cookie (`SESSION_COOKIE = "client_session"`, 30-day expiry).
3. `app/(site)/area-cliente/dashboard/page.tsx` is a server component that reads the cookie via `next/headers`, verifies it, and redirects to `/area-cliente` if invalid — then re-fetches the dashboard for render.
4. `POST /api/client-logout` just clears the cookie.

When touching this flow, keep the Supabase anon key server-only (`lib/supabase/server.ts` is imported only from route handlers and server components) and don't weaken the RPC-based scoping.
