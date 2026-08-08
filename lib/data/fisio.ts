export interface Article {
  tag: string;
  title: string;
  text: string;
}

export const ARTICLES: Article[] = [
  {
    tag: "Reabilitação",
    title: "O que esperar nas primeiras semanas com a prótese",
    text: "Um guia prático sobre o período de adaptação e os marcos mais importantes.",
  },
  {
    tag: "Evidência científica",
    title: "O que diz a literatura sobre treino de marcha protética",
    text: "Resenha de estudos recentes aplicados à prática clínica.",
  },
  {
    tag: "Esporte",
    title: "Voltar a correr depois da amputação: por onde começar",
    text: "Etapas de condicionamento para retomar a atividade física com segurança.",
  },
  {
    tag: "Ortopedia",
    title: "Dor no ombro: quando é hora de procurar um fisioterapeuta",
    text: "Sinais de alerta e o que a literatura diz sobre o tempo certo de avaliar.",
  },
];

export interface FisioPackage {
  name: string;
  price: string;
  features: string[];
  featured: boolean;
}

export const FISIO_PACKAGES: FisioPackage[] = [
  {
    name: "Sessão avulsa",
    price: "R$ 100",
    features: ["Atendimento individual", "Sem fidelidade", "1 sessão"],
    featured: false,
  },
  {
    name: "Pacote 5 sessões",
    price: "R$ [X]",
    features: ["Acompanhamento de evolução", "Ajuste contínuo do protocolo", "5 sessões"],
    featured: true,
  },
  {
    name: "Pacote 10 sessões",
    price: "R$ [X]",
    features: ["Melhor custo por sessão", "Acompanhamento completo", "10 sessões"],
    featured: false,
  },
];
