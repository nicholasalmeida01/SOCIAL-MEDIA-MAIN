export interface Package {
  name: string;
  qty: number;
  per: number;
  save: string | null;
  featured: boolean;
  msg: string;
}

export const PACKAGES: Package[] = [
  {
    name: "AVULSO",
    qty: 1,
    per: 300,
    save: null,
    featured: false,
    msg: "Olá! Vi seu trabalho e gostei muito. Quero fechar 1 vídeo avulso — como funciona?",
  },
  {
    name: "PACOTE 5",
    qty: 5,
    per: 270,
    save: "10% OFF",
    featured: false,
    msg: "Olá! Gostei muito do seu trabalho. Vamos fechar um pacote de 5 vídeos?",
  },
  {
    name: "PACOTE 10",
    qty: 10,
    per: 255,
    save: "15% OFF",
    featured: true,
    msg: "Olá! Gostei muito do seu trabalho. Vamos fechar um pacote de 10 vídeos?",
  },
  {
    name: "PACOTE 20",
    qty: 20,
    per: 225,
    save: "25% OFF",
    featured: false,
    msg: "Olá! Gostei muito do seu trabalho. Vamos fechar um pacote de 20 vídeos?",
  },
];

export const MARQUEE_ITEMS: string[] = [
  "1000+ VÍDEOS ENTREGUES",
  "FORMATOS VARIADOS",
  "ORÇAMENTO QUE CABE NO SEU BOLSO",
  "REELS",
  "INSTITUCIONAL",
  "PRODUTO",
  "DEPOIMENTO",
  "EVENTOS",
  "CONTEÚDO PARA REDES",
];
