# Play to Play

Site institucional da Play to Play (produção de vídeo para redes sociais), com uma área de cliente autenticada, e o case de portfólio da Isack Nícholas — Fisioterapia em `/cases/fisioterapia`.

Next.js (App Router) + TypeScript, pensado para deploy na Vercel.

## Estrutura

- `app/(site)` — páginas públicas do Play to Play (Início, Portfólio, Pacotes, Sobre, Contato).
- `app/area-cliente` — login e dashboard da área do cliente.
- `app/api` — rotas server-side que falam com o Supabase (a chave nunca é exposta ao navegador).
- `app/cases/fisioterapia` — case de portfólio estático.
- `components/` — componentes React organizados por área (`site`, `portal`, `cases/fisio`).
- `lib/` — dados (`lib/data`), utilitários (`format.ts`, `whatsapp.ts`) e a integração com Supabase/sessão.
- `legacy/` — os HTMLs originais (pré-migração), mantidos como referência.

## Variáveis de ambiente

Crie um `.env.local` (nunca commitado) com:

```
SUPABASE_URL=...
SUPABASE_ANON_KEY=...
SESSION_SECRET=...
```

`SESSION_SECRET` assina o cookie de sessão da área do cliente — gere um valor aleatório (ex: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`) e nunca o reutilize entre ambientes.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy

Importe o repositório na Vercel e configure as mesmas variáveis de ambiente do `.env.local` nas configurações do projeto.
