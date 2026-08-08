import Link from "next/link";
import RecBadge from "@/components/site/RecBadge";
import SectionHead from "@/components/site/SectionHead";
import Marquee from "@/components/site/Marquee";
import TestimonialGrid from "@/components/site/TestimonialGrid";
import ChatStrip from "@/components/site/ChatStrip";
import { ArrowRightIcon } from "@/components/site/icons";
import { TESTIMONIALS, CHATS } from "@/lib/data/testimonials";
import { MARQUEE_ITEMS } from "@/lib/data/packages";
import { whatsappLink } from "@/lib/whatsapp";

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="lens-iris">
          <video autoPlay muted loop playsInline className="lens-video">
            <source src="/video/hero-loop.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-top">
          <RecBadge>REC — DISPONÍVEL PARA NOVOS PROJETOS</RecBadge>
          <div className="hero-tagline">
            Produção de vídeo para redes sociais. Reels, institucional, produto e depoimento.
          </div>
        </div>
        <div className="hero-title-wrap">
          <h1 className="hero-title">
            <span className="line">
              <span>Vídeos que fazem</span>
            </span>
            <span className="line">
              <span>você parar</span>
            </span>
            <span className="line">
              <span>a tela.</span>
            </span>
          </h1>
        </div>
        <div className="hero-bottom">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hero-cta">
            SOLICITAR ORÇAMENTO
            <ArrowRightIcon />
          </a>
        </div>
      </div>

      <Marquee items={MARQUEE_ITEMS} />

      <div className="sec">
        <SectionHead
          title={
            <>
              O que dizem
              <br />
              meus clientes
            </>
          }
          description="PORTFÓLIO REAL, VÍDEOS QUE FIZ E CONVERSA DE VERDADE COM CLIENTE."
        />

        <TestimonialGrid items={TESTIMONIALS} />
        <ChatStrip threads={CHATS} />

        <div className="portfolio-cta reveal">
          <div className="portfolio-cta-text">
            <RecBadge>ISSO É SÓ UMA AMOSTRA</RecBadge>
            <h3>Veja o portfólio completo</h3>
          </div>
          <Link href="/portfolio" className="portfolio-cta-btn">
            IR PARA O PORTFÓLIO
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </>
  );
}
