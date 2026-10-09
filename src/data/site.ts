export const site = {
  name: "#1 Lavanderia Express Estância Velha",
  shortName: "#1 Lavanderia Express",
  category: "Lavanderia de Autoatendimento",
  city: "Estância Velha",
  state: "RS",
  address: "Av. Vicente Jorge da Silva, 180 - Rincão dos Ilhéus, Estância Velha - RS",
  postalCode: "93608-400",
  plusCode: "8VQR+48 Rincão dos Ilhéus, Estância Velha - RS",
  phoneDisplay: "(51) 99950-4063",
  phoneLink: "https://wa.me/5551999504063?text=Ol%C3%A1%2C%20%231%20Lavanderia%20Express!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20autoatendimento.",
  phoneDisplayAlt: "(51) 99950-4063",
  phoneLinkAlt: "https://wa.me/5551999504063",
  googlePhoneDisplay: "(51) 99950-4063",
  googlePhoneLink: "tel:+5551999504063",
  instagram: "https://www.instagram.com/lavanderia1_ev/",
  instagramHandle: "@lavanderia1_ev",
  googleProfile: "https://www.google.com/maps/place/%231+Lavanderia+Express+Est%C3%A2ncia+Velha/@-29.6620287,-51.1466713,980m/data=!3m1!1e3!4m15!1m8!3m7!1s0x951943a23154d671:0xe9bb047bedbd7250!2s%231+Lavanderia+Express+Est%C3%A2ncia+Velha!8m2!3d-29.6621101!4d-51.146682!10e5!16s%2Fg%2F11xf_gmkmc!3m5!1s0x951943a23154d671:0xe9bb047bedbd7250!8m2!3d-29.6621101!4d-51.146682!16s%2Fg%2F11xf_gmkmc",
  mapsEmbedUrl: "https://maps.google.com/maps?q=-29.6621101,-51.146682&hl=pt-BR&z=16&output=embed",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=-29.6621101,-51.146682",
  rating: "4,9",
  reviewCount: "13",
  socialStats: { followers: "1.700+", posts: "90+" },
  environmentalLicense: "Ecológica",
  freeDelivery: "Roupas Prontas em <1h",
  hours: [
    { days: "Segunda a Domingo", time: "06:00 às 23:00 (Aberto todos os dias)" },
  ],
  seo: {
    title: "#1 Lavanderia Express Estância Velha | Autoatendimento em Menos de 1h",
    description: "Lave e seque suas roupas em menos de 1h na #1 Lavanderia Express em Estância Velha. Sabão e amaciante inclusos, espaço kids, café expresso, TV, ar-condicionado e Wi-Fi.",
    url: "https://studiotche.github.io/lavanderia--1-lavanderia-express",
    ogImage: "/images/lavanderia-easy-wash.webp",
  },
  assets: {
    hero: "/images/lavanderia-easy-wash.webp",
    about: "/images/about-#1-lavanderia-express.webp",
    institutional: "/images/lavanderia-easy-wash-hero.webp",
    logo: "/images/logo-lavanderia-#1-express.webp",
    storefront: "/images/lavanderia-easy-wash.webp",
    instagram: "/images/service-roupas.webp",
    instagramFeed: "/images/service-roupas.webp",
  },
} as const;

export const services = [
  { id: "lavagem-dia-a-dia", image: "/images/service-roupas.webp", icon: "/images/icon-roupas.webp", imagePosition: "center", title: "Lavagem de roupas do dia a dia", text: "Ciclos rápidos (~30 min) com dosagem automática de sabão e amaciante de primeira linha. Suas roupas limpas e cheirosas.", query: "Lavagem de roupas do dia a dia" },
  { id: "secagem-alta-performance", image: "/images/service-secagem.webp", icon: "/images/icon-secagem-rapida.webp", imagePosition: "center", title: "Secagem rápida de alta performance", text: "Secadoras profissionais que deixam suas roupas macias, quentinhas e totalmente secas em cerca de 30 a 45 minutos.", query: "Secagem de roupas" },
  { id: "edredons-cobertores", image: "/images/service-edredons.webp", icon: "/images/icon-edredon.webp", imagePosition: "center", title: "Edredons, cobertores & mantas", text: "Máquinas industriais com grande capacidade para edredons de casal, queen e mantas, sem sobrecarregar sua máquina doméstica.", query: "Lavagem de edredom e cobertas" },
  { id: "cama-mesa-banho", image: "/images/service-cama-mesa-banho.webp", icon: "/images/icon-roupa-de-cama.webp", imagePosition: "center", title: "Roupas de cama, mesa & banho", text: "Higienização profunda com alto padrão de maciez para toalhas, lençóis e roupas de banho fofas e aconchegantes.", query: "Roupas de cama mesa e banho" },
  { id: "casacos-inverno", image: "/images/service-couro.webp", icon: "/images/icon-couro.webp?v=2", imagePosition: "center", title: "Casacos, jaquetas & peças pesadas", text: "Praticidade para renovar peças pesadas de inverno, almofadas e mantas com secagem uniforme sem mofo ou umidade.", query: "Lavagem de casacos e peças pesadas" },
  { id: "linha-esportiva", image: "/images/service-esportivas.webp", icon: "/images/icon-roupas-esportivas.webp", imagePosition: "center", title: "Roupas esportivas & tecidos leves", text: "Remoção eficaz de suor e odores preservando tecidos tecnológicos, dry fit e lycra com produtos seguros e eficientes.", query: "Lavagem de roupas esportivas" },
] as const;

export const aboutBenefits = [
  { icon: "/images/about-tradition.webp", alt: "Autonomia", title: "Pronto em<br>menos de 1 hora" },
  { icon: "/images/about-eco.webp", alt: "Tudo incluso", title: "Sabão e amaciante<br>já inclusos" },
  { icon: "/images/about-team.webp", alt: "Conforto", title: "Espaço Kids, TV<br>& café expresso" },
  { icon: "/images/about-quality.webp", alt: "Economia", title: "Climatizado com<br>Wi-Fi gratuito" },
] as const;

export const processSteps = [
  { title: "Coloque as peças<br>na máquina", text: "Escolha uma máquina disponível e acomode suas roupas ou edredom com espaço para circulação ideal da água.", icon: "/images/process-step1.webp", alt: "Cesto de roupas" },
  { title: "Produtos dosados<br>automaticamente", text: "Não precisa trazer sabão nem amaciante. A máquina faz a dosagem correta de produtos profissionais de ponta.", icon: "/images/process-step2.webp", alt: "Máquina de Lavar" },
  { title: "Pague com PIX<br>ou cartão no totem", text: "Totem de autoatendimento simples e didático. Pague em segundos via PIX, crédito ou débito.", icon: "/images/process-step3.webp", alt: "Totem de Pagamento" },
  { title: "Transfira para a<br>secadora e saia pronto", text: "Em menos de 1 hora você sai com as roupas quentinhas, secas, cheirosas e prontas para usar ou guardar.", icon: "/images/process-step4.webp", alt: "Roupas limpas e dobradas" },
] as const;

export const reviews = [
  {
    name: "Ezequiel Roberto",
    city: "Estância Velha",
    text: "Amo ir nesse lugar é um espaço bem confortável, tem cafezinho de máquina muito saboroso, ar condicionado, e TV para quem gosta eu super recomendo esse lugar, Aaah eu já ia esquecendo de mencionar.. tem um espaço para quem tem crianças pequenas então é um lugar bem completo e super aconchegante, se vc ainda não foi, vá e confira vc mesmo. Você vai amar!",
  },
  {
    name: "Ana Paula",
    city: "Estância Velha",
    text: "Excelente experiência na #1 Lavanderia Express. Tive a oportunidade de conhecer a dona, me deu várias dicas e o cheirinho que oferecem para burrificar nas roupas é ótimo! Ambiente acolhedor, confortável para ficar aguardando o processo das roupas e com café expresso muito gostoso! RECOMENDO!",
  },
  {
    name: "Paula Grassmann",
    city: "Estância Velha",
    text: "Amei, espaço super equipado com agua, cafezinho, ar condicionado e até televisão, tudo para ficar confortável enquanto aguarda a lavagem das roupas.\nAmbiente sempre limpo e organizado.\nCheiro das roupas absurdamente bom!\nPrático, rápido e barato... super indico!",
  },
  {
    name: "Julio Korzekwa",
    city: "Estância Velha",
    text: "Muito bom. Boas máquinas, ambiente organizado com área Kids e cafe.",
  },
  {
    name: "Renati Thoma",
    city: "Estância Velha",
    text: "Simplesmente perfeito, vendedores muito atenciosos, educados e gentis, espaço chique e maravilhoso com café expresso, espaço kids, internet liberada, lava e seca super rápido além de deixar muito cheiroso. Recomendo muito, irei mais vezes com certeza e já recomendei para todos meus familiares, recomendo você a ir também. 🌹❤️",
  },
  {
    name: "Daniel Andrei Schuck",
    city: "Estância Velha",
    text: "Ótima iniciativa! Máquinas grandes, roupa sai limpa e super seca! Super recomendo! 👍\nCafé expresso ótimo também ☕",
  },
] as const;

export const faqs = [
  ["Preciso levar sabão e amaciante de casa?", "Não precisa levar nada! As lavadoras da #1 Lavanderia Express possuem dosagem automática de sabão e amaciante profissionais de primeira linha, já inclusos no ciclo sem nenhum custo adicional."],
  ["Quanto tempo demora para lavar e secar?", "O ciclo de lavagem leva em média 30 a 35 minutos, e a secagem em torno de 30 a 45 minutos. Em menos de 1 hora você sai da loja com suas roupas totalmente limpas, desodorizadas, secas e cheirosas."],
  ["É possível lavar edredom de casal e cobertas volumosas?", "Sim! Nossas máquinas profissionais de alta capacidade foram projetadas para lavar e secar edredons de casal, queen, king e cobertores pesados que não cabem ou demoram horas na máquina de casa."],
  ["Quais são as formas de pagamento aceitas?", "O pagamento é realizado de forma autônoma e rápida no nosso totem eletrônico, que aceita PIX instantâneo, cartão de débito e cartão de crédito das principais bandeiras."],
  ["O que posso fazer enquanto minhas roupas lavam?", "Nosso espaço oferece total conforto para você e sua família: ambiente 100% climatizado, TV, Wi-Fi gratuito de alta velocidade, café expresso saboroso de máquina e um cantinho especial com espaço kids."],
  ["Como funciona o suporte caso eu tenha dúvidas na hora de usar?", "O sistema é super simples e didático, com orientações passo a passo no local. Se precisar de qualquer ajuda, basta chamar no nosso WhatsApp (51) 99950-4063 para suporte rápido."],
] as const;
