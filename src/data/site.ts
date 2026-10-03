export const site = {
  name: "Easy Wash Lavanderia Autoatendimento",
  shortName: "Easy Wash",
  category: "Lavanderia de Autoatendimento",
  city: "Novo Hamburgo",
  state: "RS",
  address: "Rua Caeté, 19 - Vila Rosa, Novo Hamburgo - RS",
  postalCode: "93315-180",
  plusCode: "8V96+QW Vila Rosa, Novo Hamburgo - RS",
  phoneDisplay: "(51) 99228-5222",
  phoneLink: "https://wa.me/5551992285222?text=Ol%C3%A1%2C%20Easy%20Wash!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20autoatendimento.",
  phoneDisplayAlt: "(51) 99228-5222",
  phoneLinkAlt: "https://wa.me/5551992285222",
  googlePhoneDisplay: "(51) 99228-5222",
  googlePhoneLink: "tel:+5551992285222",
  instagram: "https://www.instagram.com/easywashnh/",
  instagramHandle: "@easywashnh",
  googleProfile: "https://www.google.com/maps/place/Easy+Wash+Lavanderia+Autoatendimento+Novo+Hamburgo/@-29.6781012,-51.137327,656m/data=!3m1!1e3!4m15!1m8!3m7!1s0x951943003876459f:0x5d2179ee9022864e!2sEasy+Wash+Lavanderia+Autoatendimento+Novo+Hamburgo!8m2!3d-29.6781317!4d-51.137551!10e5!16s%2Fg%2F11xcyk9c7r!3m5!1s0x951943003876459f:0x5d2179ee9022864e!8m2!3d-29.6781317!4d-51.137551!16s%2Fg%2F11xcyk9c7r",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3469.873284055273!2d-51.137551!3d-29.6781317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943003876459f%3A0x5d2179ee9022864e!2sEasy%20Wash%20Lavanderia%20Autoatendimento%20Novo%20Hamburgo!5e0!3m2!1spt-BR!2sbr!4v1727960000000!5m2!1spt-BR!2sbr",
  mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=-29.6781317,-51.137551",
  rating: "5,0",
  socialStats: { followers: "500+", posts: "25+" },
  environmentalLicense: "Ecológica",
  freeDelivery: "Roupas Prontas em <1h",
  hours: [
    { days: "Segunda a Domingo", time: "06:00 às 23:00 (Aberto todos os dias)" },
  ],
  seo: {
    title: "Easy Wash Lavanderia Autoatendimento | Novo Hamburgo - RS",
    description: "Lave e seque suas roupas em menos de 1 hora na Easy Wash em Novo Hamburgo. Sabão e amaciante inclusos, espaço climatizado, Wi-Fi grátis e máquinas para edredom.",
    url: "https://easywashnh.com.br",
    ogImage: "/images/lavanderia-easy-wash.webp",
  },
  assets: {
    hero: "/images/lavanderia-easy-wash.webp",
    about: "/images/about-heritage.webp?v=2",
    institutional: "/images/lavanderia-easy-wash-hero.webp",
    logo: "/images/logo-lavanderia-easy-wash.webp",
    storefront: "/images/lavanderia-easy-wash.webp",
    instagram: "/images/service-roupas.webp",
    instagramFeed: "/images/service-roupas.webp",
  },
} as const;

export const services = [
  { id: "lavagem-dia-a-dia", image: "/images/service-roupas.webp", icon: "/images/icon-roupas.webp", imagePosition: "center", title: "Lavagem de roupas do dia a dia", text: "Ciclos rápidos (~30 min) com dosagem automática de sabão e amaciante de primeira linha. Suas roupas limpas e cheirosas.", query: "Lavagem de roupas do dia a dia" },
  { id: "secagem-alta-performance", image: "/images/service-secagem.webp", icon: "/images/icon-passadoria.webp", imagePosition: "center", title: "Secagem rápida de alta performance", text: "Secadoras profissionais que deixam suas roupas macias, quentinhas e totalmente secas em cerca de 30 a 45 minutos.", query: "Secagem de roupas" },
  { id: "edredons-cobertores", image: "/images/service-edredons.webp", icon: "/images/icon-tapetes.webp", imagePosition: "center", title: "Edredons, cobertores & mantas", text: "Máquinas industriais com grande capacidade para edredons de casal e queen, sem sobrecarregar sua máquina doméstica.", query: "Lavagem de edredom e cobertas" },
  { id: "cama-mesa-banho", image: "/images/service-cama-mesa-banho.webp", icon: "/images/icon-cortinas.webp?v=2", imagePosition: "center", title: "Roupas de cama, mesa & banho", text: "Higienização profunda com alto padrão de maciez para toalhas, lençóis e roupas de banho fofas e aconchegantes.", query: "Roupas de cama mesa e banho" },
  { id: "casacos-inverno", image: "/images/service-couro.webp", icon: "/images/icon-couro.webp?v=2", imagePosition: "center", title: "Casacos, jaquetas & peças pesadas", text: "Praticidade para renovar peças pesadas de inverno, almofadas e mantas com secagem uniforme sem mofo ou umidade.", query: "Lavagem de casacos e peças pesadas" },
  { id: "linha-esportiva", image: "/images/service-calcados.webp", icon: "/images/icon-calcados.webp?v=2", imagePosition: "center", title: "Roupas esportivas & tecidos leves", text: "Remoção eficaz de suor e odores preservando tecidos tecnológicos, dry fit e lycra com produtos seguros e eficientes.", query: "Lavagem de roupas esportivas" },
] as const;

export const aboutBenefits = [
  { icon: "/images/about-tradition.webp", alt: "Autonomia", title: "Pronto em<br>menos de 1 hora" },
  { icon: "/images/about-eco.webp", alt: "Tudo incluso", title: "Sabão e amaciante<br>já inclusos" },
  { icon: "/images/about-team.webp", alt: "Conforto", title: "Ambiente climatizado<br>& Wi-Fi veloz" },
  { icon: "/images/about-quality.webp", alt: "Economia", title: "Economia real de<br>água e energia" },
] as const;

export const processSteps = [
  { title: "Coloque as peças<br>na máquina", text: "Escolha uma máquina disponível e acomode suas roupas ou edredom com espaço para circulação ideal da água.", icon: "/images/process-step1.webp", alt: "Cesto de roupas" },
  { title: "Produtos dosados<br>automaticamente", text: "Não precisa trazer sabão nem amaciante. A máquina faz a dosagem correta de produtos profissionais.", icon: "/images/process-step2.webp", alt: "Máquina de Lavar" },
  { title: "Pague com PIX<br>ou cartão no totem", text: "Totem de autoatendimento simples e didático. Pague em segundos via PIX, crédito ou débito.", icon: "/images/process-step3.webp", alt: "Totem de Pagamento" },
  { title: "Transfira para a<br>secadora e saia pronto", text: "Em menos de 1 hora você sai com as roupas quentinhas, secas, cheirosas e prontas para usar ou guardar.", icon: "/images/process-step4.webp", alt: "Roupas limpas e dobradas" },
] as const;

export const reviews = [
  {
    name: "Rafaela Godoy Heinrichs",
    city: "Novo Hamburgo",
    text: "Ambiente agradável e muito fácil e didático de usar as máquinas! Me salvou mt, pois precisava lavar uma coberta ainda hoje e na lavanderia convencional levaria alguns dias para ficar pronto.\nMeu único ponto é que senti falta de ter um banheiro 😅 (se tinha não vi, não achei sinalização sobre)\nDe qualquer maneira sai satisfeita!",
  },
  {
    name: "Felipe Gomes",
    city: "Novo Hamburgo",
    text: "O Wi-Fi disponível é muito rápido e bom! Lugar climatizado, confortável e limpo! Excelente!",
  },
  {
    name: "Carla Monica Zardo",
    city: "Novo Hamburgo",
    text: "Excelente economia! Não lavo mais edredons em casa. Entre lavagem e secagem as máquinas de casa ficavam 4hs e meia gastando energia.",
  },
  {
    name: "Julia Zardo da Rosa",
    city: "Novo Hamburgo",
    text: "Tive uma ótima experiência na EasyWash. Ambiente limpo, organizado e aconchegante, praticidade e excelente custo benefício. Minha coberta ficou pronta em menos de 1h (lavagem e secagem) e o resultado foi nota 10!! Com certeza voltarei mais vezes",
  },
  {
    name: "Carlos Douglas Melo",
    city: "Novo Hamburgo",
    text: "Wi-Fi disponível de alta velocidade, lugar climatizado, confortável e sossegado......recomendo.",
  },
  {
    name: "Ramona Rosa",
    city: "Novo Hamburgo",
    text: "Recomendo ! Roupas limpas, cheirosas e sequinhas.\nO ambiente é aconchegante e agradável.\nO atendimento para dúvidas e ajuda  é ótimo .",
  },
] as const;

export const faqs = [
  ["Preciso levar sabão e amaciante de casa?", "Não precisa levar nada! As lavadoras da Easy Wash possuem dosagem automática de sabão e amaciante profissionais de primeira linha, já inclusos no ciclo sem nenhum custo adicional."],
  ["Quanto tempo demora para lavar e secar?", "O ciclo de lavagem leva em média 30 a 35 minutos, e a secagem em torno de 30 a 45 minutos. Em menos de 1 hora você sai da loja com suas roupas totalmente limpas, desodorizadas e secas."],
  ["É possível lavar edredom de casal e cobertas volumosas?", "Sim! Nossas máquinas profissionais de alta capacidade foram projetadas para lavar e secar edredons, cobertores pesados e mantas volumosas que não cabem ou demoram horas na máquina de casa."],
  ["Quais são as formas de pagamento aceitas?", "O pagamento é realizado de forma autônoma no nosso totem eletrônico, que aceita PIX instantâneo, cartão de crédito e cartão de débito das principais bandeiras."],
  ["O que posso fazer enquanto minhas roupas lavam?", "Nosso espaço oferece total conforto: ambiente 100% climatizado, limpo, sossegado e seguro, com Wi-Fi gratuito de alta velocidade para você trabalhar, estudar ou relaxar."],
  ["Como funciona o suporte caso eu tenha dúvidas na hora de usar?", "O sistema é super simples e didático, com instruções visuais claras no local. Se precisar de qualquer ajuda, basta chamar no nosso WhatsApp (51) 99228-5222 para atendimento rápido."],
] as const;
