(() => {
  const copyChanges = new Map([
    [
      "Seu iPhone na mão, sem consulta ao Serasa/SPC.",
      "Seu iPhone na mão, sem consulta ao SPC/Serasa."
    ],
    [
      "Locação de iPhone, novo ou seminovo, com mensalidade fixa e entrada facilitada — a aprovação não trava no Serasa/SPC. A partir de R$119/mês, e no fim do contrato o aparelho é seu por R$2.",
      "Locação de iPhone, pagamento no boleto e entrada facilitada — a partir de R$119/mês."
    ],
    ["Cliente", "Maria"],
    ["12-24 meses", "12 - 18 - 24 meses"],
    [
      "Sem consulta ao Serasa/SPC · Entrada facilitada · Vire dono por R$2 no fim · Boleto mensal, sem cartão",
      "Sem consulta ao SPC/Serasa · Entrada facilitada · Vire dono por R$2 no fim do contrato · Seguro incluso · Boleto mensal, sem cartão"
    ],
    ["Aprovação sem o Serasa travar", "Aprovamos negativados"],
    [
      "Sua nota no bureau não decide por você. O que conta é o acordo daqui pra frente.",
      "Sua nota no Serasa não interfere para nós. O que importa é o nosso acordo."
    ],
    [
      "Saia com o iPhone na hora, com uma entrada facilitada pro seu perfil.",
      "Garanta o seu iPhone, com uma entrada facilitada que caiba no seu orçamento."
    ],
    ["Aparelho pronto pra usar", "Aparelho pronto para usar"],
    [
      "iPhone novo ou seminovo, configurado, com acessórios e capa inclusos.",
      "iPhone novo ou seminovo, configurado, com todos os acessórios inclusos."
    ],
    ["Conserto sem susto", "iPhone já com seguro"],
    ["Desgaste natural é por nossa conta. Dano por uso? Só o custo da peça.", "Proteção e segurança."],
  ]);

  const iphones = [
    ["iPhone 17e", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17e/iphone-17e-colors.png"],
    ["iPhone 17 Pro Max", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-pro-max-colors.png"],
    ["iPhone 17 Pro", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-pro-colors.png"],
    ["iPhone 17", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-17-colors.png"],
    ["iPhone Air", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-air-colors.png"],
    ["iPhone 16e", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16e/iphone-16e-colors.png"],
    ["iPhone 16 Pro Max", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-pro-max-colors.png"],
    ["iPhone 16 Pro", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-pro-colors.png"],
    ["iPhone 16 Plus", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-plus-colors.png"],
    ["iPhone 16", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-16-colors.png"],
    ["iPhone 15 Pro Max", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro-max.png"],
    ["iPhone 15 Pro", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-pro.png"],
    ["iPhone 15 Plus", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15-plus.png"],
    ["iPhone 15", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/fall-2023-iphone-colors-iphone-15.png"],
    ["iPhone 14 Pro Max", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-pro-max-colors.png"],
    ["iPhone 14 Pro", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-pro-colors.png"],
    ["iPhone 14 Plus", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-plus-colors-spring-2023.png"],
    ["iPhone 14", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-14-colors-spring-2023.png"],
    ["iPhone SE (3ª geração)", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/iphone-se-3rd-gen-colors.png"],
    ["iPhone 13 Pro Max", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-pro-max-colors.png"],
    ["iPhone 13 Pro", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-pro-colors.png"],
    ["iPhone 13", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-spring-iphone13-colors.png"],
    ["iPhone 13 mini", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2022-iphone13-mini-colors.png"],
    ["iPhone 12 Pro Max", "./assets/iphone-12-pro.webp"],
    ["iPhone 12 Pro", "./assets/iphone-12-pro.webp"],
    ["iPhone 12", "https://cdsassets.apple.com/live/7WUAS350/images/iphone/2021-iphone12-colors.png"],
  ];

  const mechanisms = [
    "Sem consulta ao SPC/Serasa",
    "Entrada facilitada",
    "Vire dono por R$2 no fim do contrato",
    "Seguro incluso",
    "Boleto mensal, sem cartão",
  ];

  const pricingModels = [
    { condition: "Seminovo", name: "iPhone 11 128GB", price: "119", image: "./assets/iphone-11.png", imageScale: 0.92 },
    { condition: "Seminovo", name: "iPhone 12 Pro 256GB", price: "199", image: "./assets/iphone-12-pro.webp", imageScale: 0.86, popular: true },
    { condition: "Seminovo", name: "iPhone 15 128GB", price: "279", image: "./assets/iphone-15.png", imageScale: 1.42 },
    { condition: "Novo · Lacrado", name: "iPhone 17 256GB", price: "469", image: "./assets/iphone-17.png", imageScale: 0.86 },
    { condition: "Novo · Lacrado", name: "iPhone 17 Pro Max 256GB", price: "699", image: "./assets/iphone-17-pro-max-orange.png", imageScale: 1.18 },
  ];

  const modelBenefits = [
    "Capa, película e carregador",
    "Seguro contra furto e roubo",
    "Aparelho reserva",
    "Dono por apenas R$2 no fim",
  ];

  const modelSet = (models, hidden = false) => {
    const set = document.createElement("div");
    set.className = "seal-iphone-set";
    if (hidden) set.setAttribute("aria-hidden", "true");

    for (const [name, image] of models) {
      const card = document.createElement("article");
      card.className = "seal-iphone-card";

      const img = document.createElement("img");
      img.src = image;
      img.alt = name;
      img.loading = "lazy";
      img.decoding = "async";

      const label = document.createElement("span");
      label.textContent = name;
      card.append(img, label);
      set.append(card);
    }

    return set;
  };

  const modelRow = (models, reverse = false) => {
    const row = document.createElement("div");
    row.className = "seal-iphone-row";

    const track = document.createElement("div");
    track.className = `seal-iphone-track${reverse ? " seal-iphone-track--reverse" : ""}`;
    track.append(modelSet(models), modelSet(models, true));
    row.append(track);
    return row;
  };

  const buildCarousel = (title) => {
    const partnerCard = title.closest('[data-framer-name="Partners"]');
    if (!partnerCard || partnerCard.dataset.sealCarousel === "true") return;

    const ticker = partnerCard.querySelector('[data-framer-name="ticker wrap"]');
    if (!ticker) return;

    title.textContent = "São mais de 26 modelos para você escolher";
    partnerCard.classList.add("seal-iphone-partners");
    ticker.classList.add("seal-iphone-ticker-wrap");
    const carousel = document.createElement("div");
    carousel.className = "seal-iphone-carousel";
    carousel.setAttribute("aria-label", "Carrossel com 26 modelos de iPhone");

    carousel.append(
      modelRow(iphones),
      modelRow([...iphones].reverse(), true),
    );
    ticker.replaceChildren(carousel);
    for (const element of partnerCard.querySelectorAll("p, a")) {
      if (element.textContent.trim() !== "Contrato claro, com tudo por escrito") continue;
      (element.closest("p") || element).classList.add("seal-carousel-contract-copy");
    }
    partnerCard.dataset.sealCarousel = "true";
  };

  const mechanismSet = (hidden = false) => {
    const set = document.createElement("div");
    set.className = "seal-mechanism-set";
    if (hidden) set.setAttribute("aria-hidden", "true");

    for (const text of mechanisms) {
      const item = document.createElement("span");
      item.className = "seal-mechanism-item";
      item.textContent = text;
      set.append(item);
    }

    return set;
  };

  const buildMechanismCarousel = () => {
    const section = document.querySelector('section[data-framer-name="section-logo-list"]');
    if (!section || section.dataset.sealMechanisms === "true") return;

    const inner = document.createElement("div");
    inner.className = "seal-mechanism-inner";

    const title = document.createElement("p");
    title.className = "seal-mechanism-title";
    title.textContent = "As condições que deixam seu iPhone mais acessível";

    const window = document.createElement("div");
    window.className = "seal-mechanism-window";
    window.setAttribute("aria-label", "Benefícios da locação Seal Go");

    const track = document.createElement("div");
    track.className = "seal-mechanism-track";
    track.append(mechanismSet(), mechanismSet(true));
    window.append(track);
    inner.append(title, window);
    section.replaceChildren(inner);
    section.classList.add("seal-mechanism-section");
    section.dataset.sealMechanisms = "true";
  };

  const modelCard = ({ condition, name, price, image, imageScale = 1.18, popular = false }) => {
    const card = document.createElement("article");
    card.className = `seal-model-card${popular ? " seal-model-card--popular" : ""}`;

    if (popular) {
      const badge = document.createElement("span");
      badge.className = "seal-model-popular";
      badge.textContent = "Mais procurado";
      card.append(badge);
    }

    const top = document.createElement("div");
    top.className = "seal-model-top";

    const conditionLabel = document.createElement("p");
    conditionLabel.className = "seal-model-condition";
    const conditionText = document.createElement("span");
    conditionText.textContent = condition;
    const conditionToggle = document.createElement("span");
    conditionToggle.className = "seal-model-toggle";
    conditionLabel.append(conditionText, conditionToggle);

    const heading = document.createElement("h3");
    heading.className = "seal-model-name";
    heading.textContent = name;
    top.append(heading, conditionLabel);

    const imageWrap = document.createElement("div");
    imageWrap.className = "seal-model-image-wrap";
    const productImage = document.createElement("img");
    productImage.className = "seal-model-image";
    productImage.src = image;
    productImage.alt = name;
    productImage.loading = "lazy";
    productImage.decoding = "async";
    if (image.startsWith("./assets/")) {
      productImage.classList.add("seal-model-image--provided");
      productImage.style.setProperty("--seal-product-scale", imageScale);
    }
    imageWrap.append(productImage);

    const priceLabel = document.createElement("p");
    priceLabel.className = "seal-model-price";
    priceLabel.append("a partir de ", Object.assign(document.createElement("strong"), { textContent: `R$${price}` }), Object.assign(document.createElement("small"), { textContent: "/mês" }));

    const benefits = document.createElement("ul");
    benefits.className = "seal-model-benefits";
    for (const benefit of modelBenefits) {
      const item = document.createElement("li");
      const check = document.createElement("span");
      check.className = "seal-model-check";
      check.textContent = "✓";
      const text = document.createElement("span");
      text.textContent = benefit;
      item.append(check, text);
      benefits.append(item);
    }

    const cta = document.createElement("a");
    cta.className = "seal-model-cta";
    cta.href = "#pre-venda";
    cta.textContent = "Quero este";
    card.append(top, imageWrap, priceLabel, benefits, cta);
    return card;
  };

  const buildPricing = () => {
    const section = document.querySelector('section[data-framer-name="section-pricing"]');
    if (!section || section.dataset.sealPricing === "true") return;

    const shell = document.createElement("div");
    shell.className = "seal-pricing-shell";

    const header = document.createElement("header");
    header.className = "seal-pricing-header";

    const eyebrow = document.createElement("p");
    eyebrow.className = "seal-pricing-eyebrow";
    eyebrow.textContent = "Modelos e mensalidades";

    const heading = document.createElement("h2");
    heading.className = "seal-pricing-heading";
    heading.textContent = "Escolha o iPhone. A parcela a gente monta com você.";

    const description = document.createElement("p");
    description.className = "seal-pricing-description";
    description.textContent = "Sua mensalidade depende do modelo, do prazo (12, 18 ou 24 meses) e da entrada. Sem tabela de juros, sem pegadinha — a partir de R$119/mês.";
    header.append(eyebrow, heading, description);

    const grid = document.createElement("div");
    grid.className = "seal-pricing-grid";
    pricingModels.forEach((model) => grid.append(modelCard(model)));

    const trade = document.createElement("article");
    trade.className = "seal-trade-card";
    const tradeTitle = document.createElement("h3");
    tradeTitle.textContent = "Tem um aparelho?";
    const tradeText = document.createElement("p");
    tradeText.textContent = "Use como parte da entrada e deixe sua parcela mais leve.";
    const tradeCta = document.createElement("a");
    tradeCta.className = "seal-trade-cta";
    tradeCta.href = "#pre-venda";
    tradeCta.textContent = "Simular troca";
    trade.append(tradeTitle, tradeText, tradeCta);
    grid.append(trade);

    const footnote = document.createElement("p");
    footnote.className = "seal-pricing-footnote";
    footnote.textContent = 'Valores "a partir de", conforme prazo e entrada. Sua proposta exata é montada no atendimento.';
    shell.append(header, grid, footnote);
    section.replaceChildren(shell);
    section.classList.add("seal-pricing-section");
    section.id = "modelos";
    section.dataset.sealPricing = "true";
  };

  const buildFaq = () => {
    const section = document.querySelector('section[data-framer-name="section-blog"]');
    if (!section || section.dataset.sealFaq === "true") return;

    const faqs = [
      [
        "Vocês consultam o Serasa/SPC?",
        "A aprovação não trava por consulta a bureau. O que pesa é seu comportamento de pagamento daqui pra frente, não sua nota.",
      ],
      [
        "Preciso dar entrada?",
        "Sim, uma entrada facilitada conforme seu perfil. É ela que destrava a aprovação e deixa a parcela leve.",
      ],
      [
        "Preciso de fiador?",
        "Sim. A locação é garantida por um fiador, que assina o contrato junto com você. O especialista te explica certinho como funciona.",
      ],
      [
        "O iPhone é meu?",
        "Durante o contrato é da Seal e você tem a posse pra usar. No fim, você compra por R$2 e fica com ele — ou renova, ou troca.",
      ],
      [
        "Posso trocar por um modelo mais novo?",
        "Pode, a qualquer momento, com uma taxa administrativa e ajuste na parcela, conforme disponibilidade.",
      ],
      [
        "Vende para negativado?",
        "Sim. Temos outro método de análise e essa questão não é problema.",
      ],
      [
        "Como eu pago?",
        "Boleto mensal. Sem precisar de cartão de crédito.",
      ],
      [
        "É novo ou seminovo?",
        "Os dois. Você escolhe o modelo; todos vão configurados e prontos pra usar.",
      ],
    ];

    const shell = document.createElement("div");
    shell.className = "seal-faq-shell";

    const eyebrow = document.createElement("p");
    eyebrow.className = "seal-faq-eyebrow";
    eyebrow.textContent = "FAQ";

    const heading = document.createElement("h2");
    heading.className = "seal-faq-heading";
    heading.textContent = "Dúvidas frequentes";

    const list = document.createElement("div");
    list.className = "seal-faq-list";

    for (const [question, answer] of faqs) {
      const item = document.createElement("details");
      item.className = "seal-faq-item";
      item.open = false;

      const summary = document.createElement("summary");
      const label = document.createElement("span");
      label.textContent = question;
      const icon = document.createElement("span");
      icon.className = "seal-faq-icon";
      icon.textContent = "+";
      summary.append(label, icon);

      const body = document.createElement("p");
      body.textContent = answer;
      item.append(summary, body);
      list.append(item);
    }

    shell.append(eyebrow, heading, list);
    section.replaceChildren(shell);
    section.classList.add("seal-faq-section");
    section.id = "duvidas";
    section.dataset.sealFaq = "true";
  };

  const HOW_BEVEL_SRC = "https://framerusercontent.com/images/H6ikNqzkIq1SwwLemc1wA6DPYQE.png";

  const howSteps = [
    {
      kicker: "Passo 1",
      title: "Entre na pré-venda",
      text: "Preencha o formulário. Leva 2 minutos, sem compromisso.",
      screen: `
        <div class="seal-scr-bar"><span>9:41</span><span class="seal-scr-brand">SealGo</span></div>
        <div class="seal-scr-body">
          <p class="seal-scr-ey">Pré-venda</p>
          <h4 class="seal-scr-title">Garanta seu iPhone</h4>
          <div class="seal-field"><span>Nome</span><strong>Maria Silva</strong></div>
          <div class="seal-field"><span>WhatsApp</span><strong>(11) 99999-0000</strong></div>
          <div class="seal-field seal-field--active"><span>Modelo desejado</span><strong>iPhone 15 · 128GB</strong></div>
          <button class="seal-scr-btn">Quero garantir</button>
          <p class="seal-scr-note">Leva 2 minutos · Sem consulta que te bloqueia</p>
        </div>`,
    },
    {
      kicker: "Passo 2",
      title: "Análise de crédito",
      text: "Aqui a gente faz a análise do seu cadastro — rápida e sem complicação.",
      screen: `
        <div class="seal-scr-bar"><span>9:41</span><span class="seal-scr-brand">SealGo</span></div>
        <div class="seal-scr-body">
          <p class="seal-scr-ey">Análise de crédito</p>
          <h4 class="seal-scr-title">Analisando seu cadastro</h4>
          <div class="seal-ring"><span class="seal-ring-num">100%</span></div>
          <ul class="seal-checks">
            <li class="ok"><i>✓</i> Cadastro recebido</li>
            <li class="ok"><i>✓</i> Dados validados</li>
            <li class="ok"><i>✓</i> Sem consulta ao SPC/Serasa</li>
          </ul>
          <div class="seal-result"><span>Resultado</span><strong>Pré-aprovado</strong></div>
        </div>`,
    },
    {
      kicker: "Passo 3",
      title: "Fale com um especialista",
      text: "A gente te chama no WhatsApp e monta sua proposta: modelo, prazo e entrada.",
      screen: `
        <div class="seal-wa-top">
          <span class="seal-wa-avatar">S</span>
          <div class="seal-wa-id"><strong>Seal Go</strong><span>online agora</span></div>
        </div>
        <div class="seal-wa-body">
          <div class="seal-wa-msg in">Oi, Maria! Vi seu interesse no iPhone 15 🙌</div>
          <div class="seal-wa-msg in">Montei sua proposta 👇</div>
          <div class="seal-wa-card">
            <p class="seal-wa-card-title">iPhone 15 · 128GB</p>
            <ul>
              <li><span>Prazo</span><strong>18 meses</strong></li>
              <li><span>Entrada</span><strong>Facilitada</strong></li>
              <li><span>Mensalidade</span><strong>R$279/mês</strong></li>
            </ul>
          </div>
          <div class="seal-wa-msg out">Perfeito! Quero seguir ✅</div>
        </div>
        <div class="seal-wa-input"><span>Mensagem</span><i>➤</i></div>`,
    },
    {
      kicker: "Passo 4",
      title: "Contrato 100% digital",
      text: "Gostou da proposta? Você assina online, com tudo por escrito e sem burocracia.",
      screen: `
        <div class="seal-scr-bar"><span>9:41</span><span class="seal-scr-brand">SealGo</span></div>
        <div class="seal-scr-body">
          <div class="seal-scr-eyrow"><p class="seal-scr-ey">Contrato</p><span class="seal-tag">100% digital</span></div>
          <h4 class="seal-scr-title">Tudo por escrito</h4>
          <div class="seal-doc">
            <span class="seal-doc-line w80"></span>
            <span class="seal-doc-line w55"></span>
            <div class="seal-doc-rows">
              <div><span>Mensalidade</span><strong>R$279/mês</strong></div>
              <div><span>Prazo</span><strong>18 meses</strong></div>
              <div><span>No fim, é seu por</span><strong>R$2</strong></div>
            </div>
            <div class="seal-sign"><span>Assinatura</span><b>Maria Silva</b></div>
          </div>
          <button class="seal-scr-btn">Assinar contrato</button>
        </div>`,
    },
    {
      kicker: "Passo 5",
      title: "O seu iPhone na mão",
      text: "É só agendar a entrega ou o envio do seu aparelho. Pronto pra usar.",
      screen: `
        <div class="seal-scr-bar"><span>9:41</span><span class="seal-scr-brand">SealGo</span></div>
        <div class="seal-scr-body">
          <p class="seal-scr-ey">Entrega</p>
          <h4 class="seal-scr-title">Seu iPhone está a caminho</h4>
          <div class="seal-track">
            <img src="./assets/iphone-15.png" alt="iPhone 15" loading="lazy" decoding="async">
            <ul class="seal-track-steps">
              <li class="done"><i></i> Contrato assinado</li>
              <li class="done"><i></i> Aparelho separado</li>
              <li class="active"><i></i> Saiu para entrega</li>
            </ul>
          </div>
          <div class="seal-deliver">
            <div class="seal-deliver-date"><span>Entrega agendada</span><strong>Ter, 24 jun</strong></div>
            <div class="seal-deliver-tabs"><span class="on">Em casa</span><span>Retirar</span></div>
          </div>
          <button class="seal-scr-btn">Agendar entrega</button>
        </div>`,
    },
  ];

  const buildHowItWorks = () => {
    const section = document.querySelector('section[data-framer-name="section-how-it-works"]');
    if (!section || section.dataset.sealHow === "true") return;

    const shell = document.createElement("div");
    shell.className = "seal-how-shell";

    const header = document.createElement("header");
    header.className = "seal-how-head";
    const eyebrow = document.createElement("p");
    eyebrow.className = "seal-how-eyebrow";
    eyebrow.textContent = "Como funciona";
    const heading = document.createElement("h2");
    heading.className = "seal-how-heading";
    heading.textContent = "Do seu “quero” ao iPhone na mão";
    header.append(eyebrow, heading);

    const grid = document.createElement("div");
    grid.className = "seal-how-grid";

    const track = document.createElement("div");
    track.className = "seal-how-track";

    const stage = document.createElement("div");
    stage.className = "seal-how-stage";
    const phone = document.createElement("div");
    phone.className = "seal-how-phone";
    const screensWrap = document.createElement("div");
    screensWrap.className = "seal-how-screens";
    const bevel = document.createElement("img");
    bevel.className = "seal-how-bevel";
    bevel.src = HOW_BEVEL_SRC;
    bevel.alt = "";
    bevel.setAttribute("aria-hidden", "true");
    phone.append(screensWrap, bevel);
    stage.append(phone);

    howSteps.forEach((step, index) => {
      const article = document.createElement("article");
      article.className = "seal-how-step";
      article.dataset.index = String(index);
      const kicker = document.createElement("p");
      kicker.className = "seal-how-kicker";
      kicker.textContent = step.kicker;
      const title = document.createElement("h3");
      title.className = "seal-how-step-title";
      title.textContent = step.title;
      const text = document.createElement("p");
      text.className = "seal-how-step-text";
      text.textContent = step.text;

      const inlineStage = document.createElement("div");
      inlineStage.className = "seal-how-step-stage";
      const inlinePhone = document.createElement("div");
      inlinePhone.className = "seal-how-phone seal-how-phone--inline";
      inlinePhone.innerHTML = `<div class="seal-how-screens"><div class="seal-how-screen seal-how-screen--${index} is-active">${step.screen}</div></div><img class="seal-how-bevel" src="${HOW_BEVEL_SRC}" alt="" aria-hidden="true">`;
      inlineStage.append(inlinePhone);

      article.append(kicker, title, text, inlineStage);
      track.append(article);

      const screen = document.createElement("div");
      screen.className = `seal-how-screen seal-how-screen--${index}`;
      screen.dataset.index = String(index);
      screen.innerHTML = step.screen;
      screensWrap.append(screen);
    });

    grid.append(track, stage);
    shell.append(header, grid);
    section.replaceChildren(shell);
    section.classList.add("seal-how-section");
    section.id = "como-funciona";
    section.dataset.sealHow = "true";

    document.querySelectorAll('a[href="#por-que"]').forEach((anchor) => {
      anchor.setAttribute("href", "#como-funciona");
    });

    const steps = [...track.querySelectorAll(".seal-how-step")];
    const screens = [...screensWrap.querySelectorAll(".seal-how-screen")];
    const setActive = (index) => {
      steps.forEach((element, i) => element.classList.toggle("is-active", i === index));
      screens.forEach((element, i) => element.classList.toggle("is-active", i === index));
    };
    setActive(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      { rootMargin: "-48% 0px -48% 0px", threshold: 0 },
    );
    steps.forEach((element) => observer.observe(element));
  };

  const buildIntroBalloons = () => {
    const section = document.querySelector('section[data-framer-name="section-intro"]');
    if (!section) return;
    section.id = "introducao";
    for (const heading of section.querySelectorAll("h2")) {
      heading.textContent = "Por que a Seal Go";
      heading.classList.add("seal-intro-heading");
    }

    for (const phone of section.querySelectorAll('[data-framer-name="phone-screens"]')) {
      if (phone.dataset.sealBalloons === "true") continue;

      const screenBrand = document.createElement("div");
      screenBrand.className = "seal-intro-screen-brand";
      screenBrand.textContent = "SealGo";

      const balloons = document.createElement("div");
      balloons.className = "seal-intro-balloons";
      balloons.innerHTML = `
        <article class="seal-intro-balloon seal-intro-benefit seal-intro-benefit--one">
          <h3>Aprovamos negativados</h3>
          <p>Sua nota no Serasa não interfere para nós. O que é importa é o nosso acordo.</p>
        </article>
        <article class="seal-intro-balloon seal-intro-benefit seal-intro-benefit--two">
          <h3>Parcela fixa, sem pegadinha</h3>
          <p>Mensalidade transparente, sem IOF nem taxa de cadastro inflando o custo.</p>
        </article>
        <article class="seal-intro-balloon seal-intro-benefit seal-intro-benefit--three">
          <h3>Entrada que cabe no seu momento</h3>
          <p>Garanta o seu iPhone, com uma entrada facilitada e que caiba no teu seu orçamento</p>
        </article>
        <article class="seal-intro-balloon seal-intro-benefit seal-intro-benefit--four">
          <h3>Use agora, vire dono depois</h3>
          <p>No fim do contrato você compra o aparelho por R$2 e ele é seu. Ou renova, ou troca.</p>
        </article>
      `;
      phone.append(screenBrand, balloons);
      phone.classList.add("seal-intro-phone");
      phone.dataset.sealBalloons = "true";
    }
  };

  const updateHero = () => {
    const hero = document.querySelector('section[data-framer-name="hero"]');
    if (!hero) return;

    for (const paragraph of hero.querySelectorAll("p")) {
      const text = paragraph.textContent.trim();
      if (!text.startsWith("Locação de iPhone,")) continue;
      const price = document.createElement("strong");
      price.textContent = "R$119/mês";
      paragraph.replaceChildren(
        "Locação de iPhone, pagamento no boleto e entrada facilitada — a partir de ",
        price,
        ".",
      );
      paragraph.closest(".ssr-variant")?.classList.add("seal-hero-description-variant");
    }

    for (const start of hero.querySelectorAll('[data-framer-name="Start"]')) {
      const current = start.textContent.replace(/\s/g, "");
      if (!current.includes("$0.00") && current !== "AprovadoAprovado" && current !== "Aprovado") continue;

      const badge = document.createElement("span");
      badge.className = "seal-approved-badge";
      badge.textContent = "Aprovado";
      start.replaceChildren(badge);
      start.classList.add("seal-approved-value");
    }

    for (const card of hero.querySelectorAll('[data-framer-name="income"]')) {
      const value = [...card.querySelectorAll("p")].find((element) => element.textContent.trim() === "Facilitada");
      if (!value) continue;
      card.classList.add("seal-proposal-card");
      value.classList.add("seal-card-value");
      value.parentElement?.classList.add("seal-card-value-wrap");
    }

    for (const card of hero.querySelectorAll('[data-framer-name="expense"]')) {
      const value = [...card.querySelectorAll("p")].find((element) => {
        const text = element.textContent.trim();
        return text === "R$279/mês" || text === "R$279";
      });
      if (!value) continue;
      value.textContent = "R$279";
      card.classList.add("seal-proposal-card");
      value.classList.add("seal-card-value");
      value.parentElement?.classList.add("seal-card-value-wrap");
    }
  };

  const updateText = () => {
    updateHero();
    buildMechanismCarousel();
    buildPricing();
    buildFaq();
    buildHowItWorks();
    buildIntroBalloons();
    const elements = document.querySelectorAll("h1, h2, h3, h4, p, span, a, button");

    for (const element of elements) {
      const current = element.textContent.trim();
      const replacement = copyChanges.get(current);
      const isIntroBenefit = Boolean(element.closest(".seal-intro-benefit"));
      if (replacement && !isIntroBenefit && element.children.length === 0) element.textContent = replacement;

      if (current === "Uma operação da Seal Store" && element.tagName === "P") {
        buildCarousel(element);
      }
    }
  };

  const run = () => requestAnimationFrame(updateText);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run, { once: true });
  } else {
    run();
  }

  [100, 500, 1500].forEach((delay) => setTimeout(updateText, delay));
})();
