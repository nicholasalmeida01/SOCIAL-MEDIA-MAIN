export interface Testimonial {
  name: string;
  role: string;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Cliente 01", role: "DEPOIMENTO EM VÍDEO" },
  { name: "Cliente 02", role: "DEPOIMENTO EM VÍDEO" },
  { name: "Cliente 03", role: "DEPOIMENTO EM VÍDEO" },
];

export interface ChatBubble {
  text: string;
  self: boolean;
  time: string;
}

export interface ChatThread {
  initials: string;
  client: string;
  bubbles: ChatBubble[];
}

export const CHATS: ChatThread[] = [
  {
    initials: "01",
    client: "Relato de cliente",
    bubbles: [
      { text: "Ficarammmm topp \u{1F525}", self: false, time: "15:17" },
      { text: "Vc colocou mais cabelo em mim? \u{1F602}", self: false, time: "15:17" },
      { text: "Hahahaha, nada só, vc que tá nessa cabeleira toda", self: true, time: "18:44" },
    ],
  },
  {
    initials: "02",
    client: "Relato de cliente",
    bubbles: [
      { text: "TÔ MUITO FELIZZZZZZZZ! Vc arrasouuuuuuu demais demais!!!! \u{1F973}\u{1F973}\u{1F973}", self: false, time: "15:09" },
      { text: "Envio do vídeo finalizado ✅", self: true, time: "15:02" },
      { text: "UAUUUUUUU, EU AMEIIIII", self: false, time: "15:30" },
    ],
  },
  {
    initials: "03",
    client: "Relato de cliente",
    bubbles: [
      { text: "Chegou o material, olha o link da pasta \u{1F4C1}", self: true, time: "14:12" },
      { text: "Toppppp", self: false, time: "14:16" },
      { text: "Vale muito mais que os R$300 do vídeo, o resultado ficou incrível", self: false, time: "15:14" },
    ],
  },
];
