// Function to add smooth scroll behavior to a link
// Parameters:
// linkId: the ID of the clickable link element
// targetId: the ID of the section to scroll to
// offset: optional vertical offset to adjust scroll position (default is 0)
function scrollToSection(linkId, targetId, offset = 0) {
  // Add click event listener to the link
  document.getElementById(linkId).addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default jump to anchor behavior

    const destino = document.getElementById(targetId); // Get the target section element

    if (destino) {
      // Calculate the vertical scroll position, including the offset
      const y =
        destino.getBoundingClientRect().top + window.scrollY + offset;

      // Scroll smoothly to the calculated position
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  });
}

// Apply the scrollToSection function for each navigation link and its target section
scrollToSection("inicio", "first-container", -130);
scrollToSection("sobre", "aboutus-container", -80);
scrollToSection("contato", "contactus-container", 0); // No offset needed here

const textoPorEscopo = {
  "Mapeamento de Processos": `Histórico de projetos semelhantes mostra um padrão importante: quanto mais longo o projeto de Mapeamento de Processos, maior a probabilidade de insatisfação relacionada à rotatividade da equipe.
Em especial, a troca de profissionais ao longo do projeto tem causado confusão, perda de contexto e atrasos, comprometendo diretamente a percepção de valor do cliente.

🔍 O que precisamos ter em mente desde o início:
- Escopos de longa duração exigem continuidade, já que o entendimento acumulado sobre os processos da empresa é essencial.
- A rotatividade interfere diretamente na profundidade do diagnóstico e na confiança do cliente.
- 50% dos projetos longos de Mapeamento de Processos apresentam atrasos e reclamações ligadas à troca de equipe, principalmente em empresas de menor porte no estado de Minas Gerais.

⚠️ Nosso compromisso deve ser com estabilidade, planejamento e comunicação rigorosa.
- A cada possível transição de profissionais, o conhecimento precisa ser devidamente documentado, transmitido e validado.

✅ O que faremos para garantir o sucesso:
- Registrar todo o histórico do projeto desde a primeira etapa.
- Utilizar ferramentas de gestão que favoreçam a continuidade do conhecimento.
- Reduzir ao máximo trocas na equipe técnica durante o ciclo do projeto.
- Reforçar o alinhamento com o cliente a cada marco do projeto.

A maior adversidade em projetos de Mapeamento de Processos é a falta de contato com o cliente final.
Esse distanciamento prejudica a coleta de dados, reduz a assertividade das análises e compromete a fidelidade do mapeamento à realidade operacional.

🔍 O que precisamos ter em mente desde o início:
- Esse tipo de projeto exige proximidade com quem realmente executa os processos.
- Quando o time de projetos se limita ao contato com lideranças ou áreas administrativas, perde-se a visão do dia a dia e dos gargalos reais.
- 16% dos projetos de Mapeamento executados nos últimos anos apresentaram falhas diretamente ligadas à falta de contato com o cliente final, especialmente em pequenas empresas da cidade de Juiz de Fora.

⚠️ Nosso compromisso deve ser com escuta ativa, presença em campo e envolvimento direto com os operadores dos processos.
- A coleta de dados precisa ser baseada na realidade prática, e não apenas em relatórios ou narrativas intermediárias.

✅ O que faremos para garantir o sucesso:
- Priorizar entrevistas e observações diretas com os usuários dos processos.
- Validar as etapas mapeadas com os próprios executores antes de qualquer entrega.
- Incluir representantes da operação nas reuniões de alinhamento.
- Garantir que os diagnósticos reflitam a realidade do chão de fábrica ou setor operacional.`,

  "Pesquisa de Mercado": `Ao lidarmos com projetos de Pesquisa de Mercado, temos enfrentado um desafio recorrente que exige atenção imediata: a falta de aprofundamento técnico na apresentação dos dados.

📌 Principais pontos de atenção:
- A crítica mais comum está relacionada à forma como os dados são apresentados, especialmente em relatórios e apresentações finais.
- O público mais sensível a esse problema são indivíduos entre 36 a 41 anos e 60 a 65 anos, que frequentemente apontam a superficialidade técnica como falha.
- Essa adversidade ocorre em 15,4% dos projetos de Pesquisa de Mercado.
- Ocorre em diferentes regiões do Brasil e em momentos variados do ciclo do projeto.

⚠️ Recomendações para evitar retrabalho e insatisfação:
- Aprofundar a análise técnica dos dados apresentados.
- Garantir que os relatórios sejam claros, mas também robustos e fundamentados.
- Adaptar a linguagem conforme o perfil do público-alvo, sem perder a consistência técnica.`,

  "Planejamento Estratégico": `Histórico de projetos semelhantes mostra um padrão crítico: a rotatividade de equipes tem sido uma das principais causas de insatisfação dos clientes.
A troca de profissionais ao longo do projeto tem gerado confusão, atrasos e falhas na continuidade, comprometendo a qualidade da entrega e a relação de confiança com o cliente.

🔍 O que precisamos ter em mente desde o início:
- Este tipo de projeto é mais sensível à descontinuidade, pois depende de conhecimento acumulado e alinhamento constante.
- A maioria dos problemas surge da falta de cogestão eficiente após trocas na equipe.
- 50% dos projetos desse perfil já apresentaram queixas formais sobre isso, principalmente em empresas de menor porte, como o nosso cliente atual.

⚠️ Nosso compromisso deve ser com a estabilidade, a comunicação e a documentação rigorosa.
- Independentemente de qualquer mudança que possa ocorrer, o conhecimento precisa estar bem registrado, acessível e transmitido de forma eficaz entre todos os envolvidos.

✅ O que faremos para garantir o sucesso:
- Redobrar o cuidado com registro de decisões, processos e entregas.
- Adotar ferramentas e rotinas de transferência de conhecimento claras.
- Garantir alinhamento contínuo com o cliente e entre os membros da equipe.
- Manter a maior estabilidade possível no time alocado ao projeto.`,

  "Estruturação+Assessoria Financeira": `Apesar do impacto positivo que os projetos de gestão financeira costumam gerar nos resultados das empresas, o atraso nas entregas é um fator de insatisfação recorrente entre os clientes.
Mesmo quando o conteúdo é elogiado e o valor agregado é reconhecido, o prazo de entrega se torna um ponto sensível na percepção final do cliente.

🔍 O que precisamos ter em mente desde o início:
- A gestão de tempo e prazos, principalmente na fase final do projeto, influencia diretamente na experiência do cliente e na sua disposição em indicar o serviço.
- 33% dos projetos de Gestão Financeira executados em empresas de Juiz de Fora apresentam problemas relacionados a atrasos, independentemente do porte ou perfil da empresa.

⚠️ Nosso compromisso deve ser com previsibilidade e clareza nos cronogramas.
- O valor técnico precisa vir acompanhado de uma execução dentro dos prazos acordados, sob risco de o projeto perder força na avaliação final.

✅ O que faremos para garantir o sucesso:
- Reforçar a gestão ativa do cronograma desde o kick-off.
- Comunicar eventuais mudanças de escopo e prazos com máxima antecedência.
- Garantir entregas parciais para manter o cliente engajado durante o processo.
- Acompanhar e antecipar gargalos que impactem a fase final do projeto.`,

  "Valuation": `Embora os projetos de Valuation frequentemente ultrapassem os prazos previstos, a experiência do cliente continua sendo extremamente positiva.
Isso ocorre porque a entrega final supera as expectativas iniciais, tanto pela qualidade técnica quanto pela atenção e cuidado das equipes envolvidas.

🔍 O que aprendemos com esses projetos:
- O tempo de execução, apesar de variado e muitas vezes superior ao planejado, não é percebido como um problema relevante pelos clientes, especialmente quando há clareza no processo e entrega de valor real no final.
- 100% dos projetos de Valuation apresentaram atrasos, mas também obtiveram avaliações promotoras, evidenciando que o que pesa mais para o cliente é a qualidade da entrega final.

🎯 Nosso público é formado por empresários de 30 a 71 anos, donos de micro, pequenas e médias empresas, localizados em estados como MG, RJ, SP e MT.

✅ Nosso desafio está em manter a qualidade e atenção, otimizando os prazos sempre que possível:
- Reforçar a comunicação sobre as etapas e prazos desde o início.
- Identificar gargalos comuns que geram atraso.
- Priorizar entregas parciais quando aplicável, para manter a percepção de avanço.
- Garantir o padrão elevado de atendimento e personalização, que é o diferencial reconhecido pelos clientes.`
};

const textoFixo = `
A falta de alinhamento entre o que é prometido e o que é entregue tem sido uma das principais causas de insatisfação dos clientes.

A divergência nas expectativas gera confusão, falhas na comunicação e dificuldades na adaptação às necessidades específicas de cada cliente, comprometendo a qualidade da entrega e a relação de confiança.

🔍 O que precisamos ter em mente desde o início:
- Os projetos da Campe são sensíveis à falta de alinhamento de expectativas e continuidade entre as equipes, pois envolve detalhes específicos que precisam ser bem coordenados.
- Grande parte dos problemas está relacionada a falhas pequenas, como locais e horários para coleta, que acabam impactando diretamente a percepção do cliente.
- 43% das adversidades observadas têm como causa raiz justamente essa discrepância entre o que é prometido e o que é entregue, principalmente em projetos realizados no segundo semestre da gestão, na cidade de Juiz de Fora/MG, e envolvendo clientes com idade entre 36 e 41 anos.

⚠️ Nosso compromisso deve ser com o alinhamento contínuo, comunicação clara e adaptação às necessidades do cliente. Independentemente das circunstâncias, o entendimento compartilhado deve ser a base para todas as entregas.

✅ O que faremos para garantir o sucesso:
- Garantir clareza e alinhamento de expectativas desde o início do projeto.
- Estabelecer rotinas de comunicação eficazes e feedbacks frequentes com o cliente e a equipe.
- Adaptar processos para atender às especificidades e particularidades de cada cliente.
- Monitorar de perto os pequenos detalhes que impactam a percepção do cliente, como logística e horários de coleta.
`;

const tamanhoEmpresa = {
  grande: {
    nome: "Grande Empresa",
    texto: `
B) Histórico de projetos semelhantes mostra um padrão crítico: empresas de grande e médio porte têm demonstrado uma expectativa por conteúdos mais profundos e técnicos.

A coleta de dados realizada até então, muitas vezes com entrevistas rápidas e amostras que não representam adequadamente o todo, aliada à falta de conhecimento técnico nas entregas, tem gerado insatisfação.

🔍 O que precisamos ter em mente desde o início:
- Este tipo de projeto demanda profundidade técnica e participação qualificada, como a inclusão de especialistas (por exemplo, professores da UF), para garantir entregas que atendam às expectativas.
- Grande parte dos problemas surge da superficialidade das coletas e da ausência de especialistas na condução dos processos.
- 33,33% das empresas de grande e médio porte já manifestaram esse tipo de insatisfação, especialmente em Minas Gerais, onde o tempo para coleta e análise dos dados tem sido muito variado.

⚠️ Nosso compromisso deve ser com a qualidade técnica, amostragens representativas e participação de especialistas durante todo o projeto. Independentemente da duração ou da complexidade, o conhecimento técnico deve estar presente e bem aplicado em todas as etapas, garantindo credibilidade e profundidade.

✅ O que faremos para garantir o sucesso:
- Aprofundar as coletas de dados, com amostras mais representativas e detalhadas.
- Incluir especialistas e professores em reuniões-chave para trazer maior rigor técnico.
- Estabelecer processos claros para garantir conhecimento técnico consistente e compartilhado.
- Monitorar o andamento com foco na profundidade e qualidade das entregas, atendendo às expectativas das empresas de grande e médio porte.
`
  },
  medio: {
    nome: "Média Empresa",
    texto: `
B) Histórico de projetos semelhantes mostra um padrão crítico: empresas de grande e médio porte têm demonstrado uma expectativa por conteúdos mais profundos e técnicos.

A coleta de dados realizada até então, muitas vezes com entrevistas rápidas e amostras que não representam adequadamente o todo, aliada à falta de conhecimento técnico nas entregas, tem gerado insatisfação.

🔍 O que precisamos ter em mente desde o início:
- Este tipo de projeto demanda profundidade técnica e participação qualificada, como a inclusão de especialistas (por exemplo, professores da UF), para garantir entregas que atendam às expectativas.
- Grande parte dos problemas surge da superficialidade das coletas e da ausência de especialistas na condução dos processos.
- 33,33% das empresas de grande e médio porte já manifestaram esse tipo de insatisfação, especialmente em Minas Gerais, onde o tempo para coleta e análise dos dados tem sido muito variado.

⚠️ Nosso compromisso deve ser com a qualidade técnica, amostragens representativas e participação de especialistas durante todo o projeto. Independentemente da duração ou da complexidade, o conhecimento técnico deve estar presente e bem aplicado em todas as etapas, garantindo credibilidade e profundidade.

✅ O que faremos para garantir o sucesso:
- Aprofundar as coletas de dados, com amostras mais representativas e detalhadas.
- Incluir especialistas e professores em reuniões-chave para trazer maior rigor técnico.
- Estabelecer processos claros para garantir conhecimento técnico consistente e compartilhado.
- Monitorar o andamento com foco na profundidade e qualidade das entregas, atendendo às expectativas das empresas de grande e médio porte.
`
  },
  pequena: {
    nome: "Pequena Empresa",
    texto: `
B) Histórico de projetos semelhantes mostra um padrão claro: a realização de visitas presenciais tem sido um diferencial valorizado especialmente por empresas de menor porte.

A presença física da equipe durante reuniões e a interação direta com o cliente têm garantido uma comunicação mais eficaz, possibilitando ajustes rápidos e melhor alinhamento ao longo do projeto.

🔍 O que precisamos ter em mente desde o início:
- Este tipo de projeto valoriza muito a proximidade e o contato direto, pois permite compreender com maior precisão as necessidades do cliente e adaptar as entregas conforme o andamento.
- Grande parte dos benefícios surge da comunicação presencial, que fortalece o relacionamento e a troca de informações relevantes para o sucesso do projeto.
- 100% das empresas que destacaram as visitas presenciais como algo positivo são de pequeno porte (MEI, Micro ou Pequena), especialmente na cidade de Juiz de Fora, com prazos variados para a execução.

⚠️ Nosso compromisso deve ser com a manutenção desse contato próximo e frequente, garantindo que a comunicação seja clara, direta e eficiente em todas as etapas do projeto.

✅ O que faremos para garantir o sucesso:
- Priorizar visitas presenciais e reuniões físicas sempre que possível.
- Adaptar o projeto conforme as informações coletadas presencialmente, promovendo ajustes ágeis.
- Manter um canal aberto e frequente de comunicação para garantir alinhamento contínuo.
`
  },
  microempresa: {
    nome: "Microempresa",
    texto: `
B) Histórico de projetos semelhantes mostra um padrão claro: a realização de visitas presenciais tem sido um diferencial valorizado especialmente por empresas de menor porte.

A presença física da equipe durante reuniões e a interação direta com o cliente têm garantido uma comunicação mais eficaz, possibilitando ajustes rápidos e melhor alinhamento ao longo do projeto.

🔍 O que precisamos ter em mente desde o início:
- Este tipo de projeto valoriza muito a proximidade e o contato direto, pois permite compreender com maior precisão as necessidades do cliente e adaptar as entregas conforme o andamento.
- Grande parte dos benefícios surge da comunicação presencial, que fortalece o relacionamento e a troca de informações relevantes para o sucesso do projeto.
- 100% das empresas que destacaram as visitas presenciais como algo positivo são de pequeno porte (MEI, Micro ou Pequena), especialmente na cidade de Juiz de Fora, com prazos variados para a execução.

⚠️ Nosso compromisso deve ser com a manutenção desse contato próximo e frequente, garantindo que a comunicação seja clara, direta e eficiente em todas as etapas do projeto.

✅ O que faremos para garantir o sucesso:
- Priorizar visitas presenciais e reuniões físicas sempre que possível.
- Adaptar o projeto conforme as informações coletadas presencialmente, promovendo ajustes ágeis.
- Manter um canal aberto e frequente de comunicação para garantir alinhamento contínuo.
`
  },
  mei: {
    nome: "MEI - Microempreendedor Individual",
    texto: `
B) Histórico de projetos semelhantes mostra um padrão claro: a realização de visitas presenciais tem sido um diferencial valorizado especialmente por empresas de menor porte.

A presença física da equipe durante reuniões e a interação direta com o cliente têm garantido uma comunicação mais eficaz, possibilitando ajustes rápidos e melhor alinhamento ao longo do projeto.

🔍 O que precisamos ter em mente desde o início:
- Este tipo de projeto valoriza muito a proximidade e o contato direto, pois permite compreender com maior precisão as necessidades do cliente e adaptar as entregas conforme o andamento.
- Grande parte dos benefícios surge da comunicação presencial, que fortalece o relacionamento e a troca de informações relevantes para o sucesso do projeto.
- 100% das empresas que destacaram as visitas presenciais como algo positivo são de pequeno porte (MEI, Micro ou Pequena), especialmente na cidade de Juiz de Fora, com prazos variados para a execução.

⚠️ Nosso compromisso deve ser com a manutenção desse contato próximo e frequente, garantindo que a comunicação seja clara, direta e eficiente em todas as etapas do projeto.

✅ O que faremos para garantir o sucesso:
- Priorizar visitas presenciais e reuniões físicas sempre que possível.
- Adaptar o projeto conforme as informações coletadas presencialmente, promovendo ajustes ágeis.
- Manter um canal aberto e frequente de comunicação para garantir alinhamento contínuo.
`
  },
  mej: {
    nome: "MEJ - Empresa Júnior",
    texto: "" // Não foi mencionado texto específico para MEJ
  },
  pessoaFisica: {
    nome: "Pessoa Física",
    texto: "" // Não foi mencionado texto específico para Pessoa Física
  }
};


const idadeCliente = {
  jovem1: {
    faixa: "18-23",
    texto: `
C) A percepção de que os projetos superam as expectativas tem sido notada especialmente entre os clientes mais jovens. Isso ocorre devido à execução rápida, à qualidade do serviço e à comunicação eficaz, que encantam esses clientes e geram uma sensação de surpresa positiva.

🔍 O que precisamos ter em mente desde o início:
- Os clientes mais jovens, principalmente aqueles entre 18 e 35 anos, tendem a valorizar a capacidade de adaptação rápida e a entrega eficaz. Para esses clientes, a expectativa é que o projeto não apenas atenda, mas supere suas necessidades, com resultados além do esperado.
- A maioria dos problemas surge da falta de uma execução ágil e de um atendimento que não corresponde às altas expectativas, especialmente em empresas menores.
- 34% dos clientes mais jovens declararam que seus projetos superaram as expectativas devido à execução eficaz e à boa comunicação, especialmente em empresas de pequeno porte.

⚠️ Nosso compromisso deve ser com a rapidez na execução, a comunicação clara e a entrega de resultados de qualidade que superem as expectativas dos clientes mais jovens.

✅ O que faremos para garantir o sucesso:
- Priorizar a execução eficiente e a entrega de resultados rápidos e impactantes.
- Focar em um atendimento de alta qualidade e comunicação constante para manter as expectativas alinhadas.
- Implementar metodologias ágeis para garantir que os projetos atinjam e superem as expectativas dos clientes.
- Manter um alinhamento contínuo com o cliente, ajustando as entregas conforme necessário para garantir um impacto positivo no negócio.
`
  },
  jovem2: {
    faixa: "24-29",
    texto: `
C) A percepção de que os projetos superam as expectativas tem sido notada especialmente entre os clientes mais jovens. Isso ocorre devido à execução rápida, à qualidade do serviço e à comunicação eficaz, que encantam esses clientes e geram uma sensação de surpresa positiva.

🔍 O que precisamos ter em mente desde o início:
- Os clientes mais jovens, principalmente aqueles entre 18 e 35 anos, tendem a valorizar a capacidade de adaptação rápida e a entrega eficaz. Para esses clientes, a expectativa é que o projeto não apenas atenda, mas supere suas necessidades, com resultados além do esperado.
- A maioria dos problemas surge da falta de uma execução ágil e de um atendimento que não corresponde às altas expectativas, especialmente em empresas menores.
- 34% dos clientes mais jovens declararam que seus projetos superaram as expectativas devido à execução eficaz e à boa comunicação, especialmente em empresas de pequeno porte.

⚠️ Nosso compromisso deve ser com a rapidez na execução, a comunicação clara e a entrega de resultados de qualidade que superem as expectativas dos clientes mais jovens.

✅ O que faremos para garantir o sucesso:
- Priorizar a execução eficiente e a entrega de resultados rápidos e impactantes.
- Focar em um atendimento de alta qualidade e comunicação constante para manter as expectativas alinhadas.
- Implementar metodologias ágeis para garantir que os projetos atinjam e superem as expectativas dos clientes.
- Manter um alinhamento contínuo com o cliente, ajustando as entregas conforme necessário para garantir um impacto positivo no negócio.
`
  },
  jovem3: {
    faixa: "30-35",
    texto: `
C) A percepção de que os projetos superam as expectativas tem sido notada especialmente entre os clientes mais jovens. Isso ocorre devido à execução rápida, à qualidade do serviço e à comunicação eficaz, que encantam esses clientes e geram uma sensação de surpresa positiva.

🔍 O que precisamos ter em mente desde o início:
- Os clientes mais jovens, principalmente aqueles entre 18 e 35 anos, tendem a valorizar a capacidade de adaptação rápida e a entrega eficaz. Para esses clientes, a expectativa é que o projeto não apenas atenda, mas supere suas necessidades, com resultados além do esperado.
- A maioria dos problemas surge da falta de uma execução ágil e de um atendimento que não corresponde às altas expectativas, especialmente em empresas menores.
- 34% dos clientes mais jovens declararam que seus projetos superaram as expectativas devido à execução eficaz e à boa comunicação, especialmente em empresas de pequeno porte.

⚠️ Nosso compromisso deve ser com a rapidez na execução, a comunicação clara e a entrega de resultados de qualidade que superem as expectativas dos clientes mais jovens.

✅ O que faremos para garantir o sucesso:
- Priorizar a execução eficiente e a entrega de resultados rápidos e impactantes.
- Focar em um atendimento de alta qualidade e comunicação constante para manter as expectativas alinhadas.
- Implementar metodologias ágeis para garantir que os projetos atinjam e superem as expectativas dos clientes.
- Manter um alinhamento contínuo com o cliente, ajustando as entregas conforme necessário para garantir um impacto positivo no negócio.
`
  },
  senior: {
    faixa: "36-41, 42-47, 48-53, 54-59, 60-65, 66-71, 72+",
    texto: `
C) A ausência de dados detalhados e análises robustas gerou desconfiança, pois os clientes, particularmente aqueles com mais de 40 anos, esperam que, por ser uma empresa júnior, o nível de entrega seja ainda mais elevado.

🔍 O que precisamos ter em mente desde o início:
- Exige-se um nível de profundidade técnica e análise que, se não atendido, pode comprometer a confiança do cliente e afetar negativamente a avaliação final do trabalho.
- A maioria dos problemas surge da percepção de que uma empresa júnior não possui a maturidade necessária para realizar entregas técnicas de alta qualidade.
- 57,14% dos clientes que demonstraram descredibilização por ser uma empresa júnior associaram isso à falta de profundidade nas entregas, especialmente em empresas de pequeno a grande porte.

⚠️ Nosso compromisso deve ser com a qualidade técnica e a entrega de conteúdos robustos e bem fundamentados. Independentemente da nossa identidade como empresa júnior, o nível de excelência precisa ser mantido em todas as etapas do projeto.

✅ O que faremos para garantir o sucesso:
- Investir em análises mais detalhadas e aprofundadas para suprir as expectativas dos clientes.
- Reforçar a confiança do cliente com entregas que atendam ao padrão esperado, com dados concretos e análises consistentes.
- Adotar ferramentas e metodologias mais técnicas para garantir maior profundidade nas pesquisas e resultados.
- Garantir um alinhamento contínuo e transparente com o cliente, para que as expectativas sejam atendidas em todas as fases do projeto.
`
  }
};


const finalizaNesteSemestre = {
  sim: {
    resposta: "Sim",
    texto: "" // Quando a resposta é "Sim", não aparece texto na letra D.
  },
  nao: {
    resposta: "Não",
    texto: `
D) Histórico de projetos semelhantes mostra um padrão crítico: a troca de equipes tem gerado insatisfações, apesar do resultado final do projeto ter sido considerado satisfatório.

A rotatividade de profissionais ao longo do projeto tem causado falhas de comunicação, repetições desnecessárias para o cliente e atrasos, comprometendo a continuidade e a relação de confiança com o cliente.

🔍 O que precisamos ter em mente desde o início:
- Os projetos da Campe são sensíveis à troca de equipes, pois a continuidade e o alinhamento são fundamentais para manter a qualidade do trabalho.
- A maioria dos problemas surge devido à falta de comunicação eficiente entre as equipes que se alternam ao longo do projeto.
- 71% dos clientes que criticaram a troca de equipes mencionaram problemas de comunicação e andamento do projeto, especialmente durante o primeiro semestre da gestão.

⚠️ Nosso compromisso deve ser com a estabilidade da equipe, a comunicação clara e a documentação rigorosa. Independentemente das mudanças, o conhecimento precisa ser bem transmitido, registrado e acessível a todos os envolvidos.

✅ O que faremos para garantir o sucesso:
- Manter a equipe estável ao máximo possível, evitando trocas frequentes.
- Implementar rotinas e ferramentas claras para a transferência de conhecimento entre as equipes.
- Garantir um alinhamento contínuo com o cliente para ajustar expectativas e melhorar a comunicação.
- Registrar decisões e processos de forma eficiente, assegurando que todos os envolvidos estejam bem informados.
`
  }
};

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Captura valores do formulário
    const porte = this.porte.value;
    const idade = this.idade.value;
    const finaliza = this.finaliza.value;

    // Monta texto para o tamanho da empresa
    let textoPorte = '';
    if (porte === 'Grande' || porte === 'Media') {
        textoPorte = `Histórico de projetos semelhantes mostra um padrão crítico: empresas de grande e médio porte têm demonstrado uma expectativa por conteúdos mais profundos e técnicos.
        ... (seu texto completo aqui)`;
    } else if (porte === 'Pequena' || porte === 'Microempresa' || porte === 'Mei') {
        textoPorte = `Histórico de projetos semelhantes mostra um padrão claro: a realização de visitas presenciais tem sido um diferencial valorizado especialmente por empresas de menor porte.
        ... (seu texto completo aqui)`;
    }

    // Monta texto para idade
    let textoIdade = '';
    if (['18', '24', '30'].includes(idade)) {  // ajuste os valores conforme seu select
        textoIdade = `A percepção de que os projetos superam as expectativas tem sido notada especialmente entre os clientes mais jovens.
        ... (seu texto completo aqui)`;
    } else {
        textoIdade = `A ausência de dados detalhados e análises robustas gerou desconfiança, pois os clientes, particularmente aqueles com mais de 40 anos,
        ... (seu texto completo aqui)`;
    }

    // Monta texto para finalização do projeto
    let textoFinaliza = '';
    if (finaliza === 'Nao') {
        textoFinaliza = `Histórico de projetos semelhantes mostra um padrão crítico: a troca de equipes tem gerado insatisfações, apesar do resultado final do projeto ter sido considerado satisfatório.
        ... (seu texto completo aqui)`;
    }

    // Monta objeto com as variáveis que quer enviar pro EmailJS
    const templateParams = {
        porte_texto: textoPorte,
        idade_texto: textoIdade,
        finaliza_texto: textoFinaliza,
        email_cliente: this.email.value,  // supondo que tem um input com name="email"
        // capture outras infos do formulário que quiser
    };

    emailjs.send('contact_service', 'contact_form', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
});
