import LogoMark from "./LogoMark";

export default function SiteFooter() {
  return (
    <footer>
      <LogoMark
        idPrefix="footerLogoGrad"
        width={16}
        height={16}
        style={{ display: "inline-block", verticalAlign: "-3px", marginRight: 8 }}
      />
      PLAY TO PLAY — PRODUÇÃO DE VÍDEO PARA REDES SOCIAIS © 2026
    </footer>
  );
}
