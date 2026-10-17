// ===== Conteúdo educativo e perguntas do quiz — MISSÃO CIBERSEGURANÇA · EDIÇÃO DE NATAL =====
// HISTORY, QUIZ_TIPS, QUIZ_ARTICLE, QUIZ_BY_THEME, QUIZ_BY_THEME_AVANCADO
// Nesta edição as perguntas, as curiosidades e as dicas são todas sobre o NATAL (sem conteúdo religioso).
// As CHAVES dos temas (historia_internet, palavras_passe, …) são as mesmas do jogo normal, porque o resto do
// código (níveis, bosses, estatísticas) as usa; só o conteúdo mudou. Tema de cada chave, por ordem de nível:
//   1 · historia_internet      → A História do Natal
//   2 · palavras_passe         → Luzes de Natal
//   3 · dados_pessoais         → A Mesa de Natal em Portugal
//   4 · instituicoes_apoio     → O Natal pelo Mundo
//   5 · virus_malware          → A Ciência da Neve
//   6 · jogos_seguros          → Prendas Tecnológicas
//   7 · pegada_digital         → O Natal no Espaço
//   8 · fake_news              → Cartões e Correio de Natal
//   9 · phishing               → Músicas de Natal
//  10 · dispositivos           → A Matemática de Natal
//  11 · regras_familia         → Tradições em Família
//  12 · wifi_publico           → O Dia Mais Curto do Ano
//  13 · copias_seguranca       → Embrulhos e Reciclagem
//  14 · acessibilidade_digital → Um Natal para Todos
//  15 · spam_compras           → Compras de Natal
//  16 · denuncia_conteudo      → O Pai Natal e a Lapónia
//  17 · identidade_digital     → Filmes e Histórias de Natal
//  18 · privacidade            → Enfeites de Natal
//  19 · contacto_desconhecidos → O Natal Tecnológico
//  20 · direitos_digitais      → Passagem de Ano e Ano Novo
// A versão original, de cibersegurança, está guardada em _dev/original-ciberseguranca/.
// Alinhado por artIdx (0-19), na mesma ordem dos níveis.

export const HISTORY = [
  { title: "🎄 A História do Natal", text: "Muito antes de existirem telemóveis, as pessoas já celebravam o inverno com festas, luzes e banquetes. Os romanos faziam a Saturnália em dezembro, e os povos do norte da Europa festejavam o Yule. A árvore de Natal nasceu na Alemanha, e o príncipe Alberto ajudou a espalhá-la pelo Reino Unido." },
  { title: "💡 Luzes de Natal", text: "A primeira árvore de Natal com luzes elétricas foi montada em 1882 por Edward Johnson, um colaborador de Thomas Edison. Antes disso usavam-se pequenas velas. Hoje as luzes LED gastam muito menos energia e aquecem menos." },
  { title: "🍽️ A Mesa de Natal em Portugal", text: "Em Portugal, a noite de 24 de dezembro é a Consoada, com bacalhau cozido com batatas e couves. Na mesa não faltam o bolo-rei, as rabanadas, as filhós e a aletria. Cada região tem os seus doces e as suas receitas de família." },
  { title: "🌍 O Natal pelo Mundo", text: "Cada país festeja o Natal à sua maneira. Na Austrália é verão e há quem passe o dia na praia. No Japão muitas famílias comem frango frito. Na Islândia, segundo a tradição popular, 13 duendes visitam as crianças nos dias antes do Natal." },
  { title: "❄️ A Ciência da Neve", text: "Os flocos de neve são cristais de gelo, e quase todos têm seis lados ou seis pontas. A neve parece branca porque os cristais refletem a luz em todas as direções. Em Portugal, nevar com frequência só acontece nas zonas mais altas, como a Serra da Estrela." },
  { title: "🎮 Prendas Tecnológicas", text: "Consolas, tablets e brinquedos eletrónicos são prendas cada vez mais comuns. Antes de oferecer um jogo, vê a classificação PEGI, que indica a idade recomendada. Guarda a fatura, porque se a prenda tiver um defeito podes pedir a reparação ou a troca." },
  { title: "🛰️ O Natal no Espaço", text: "Todos os anos, a 24 de dezembro, o NORAD segue o Pai Natal pelo mundo num mapa online. A tradição começou em 1955, por engano, quando um anúncio publicou o número de telefone errado. Os astronautas da Estação Espacial Internacional também celebram o Natal, a cerca de 400 km de altura." },
  { title: "✉️ Cartões e Correio de Natal", text: "O primeiro cartão de Natal comercial foi enviado em 1843, em Londres, por sugestão de Henry Cole. Nesse mesmo ano, Charles Dickens publicou «Um Conto de Natal». Hoje, além das cartas e dos postais, mandamos votos de Boas Festas por mensagem e por videochamada." },
  { title: "🎶 Músicas de Natal", text: "«Jingle Bells» foi escrita por James Lord Pierpont e publicada em 1857, com outro título: «One Horse Open Sleigh». «White Christmas», de Irving Berlin, ficou famosa na voz de Bing Crosby em 1942. Em Portugal, cantam-se as Janeiras de porta em porta, no início do ano." },
  { title: "🧮 A Matemática de Natal", text: "O Natal está cheio de números: renas, luzes, prendas, descontos e dias para contar. Na canção «Os 12 Dias de Natal», as prendas vão-se repetindo e somam 364 ao todo. Saber somar, dividir e calcular percentagens ajuda a fazer boas compras!" },
  { title: "👨‍👩‍👧 Tradições em Família", text: "O Natal é um tempo para estar com a família e com os amigos. Muitas famílias fazem a Consoada, trocam prendas e jogam juntos. Há também quem ajude os outros, com campanhas de recolha de alimentos e de brinquedos para quem precisa." },
  { title: "🌍 O Dia Mais Curto do Ano", text: "Por volta de 21 de dezembro acontece o solstício de inverno: é o dia mais curto e a noite mais longa do ano no hemisfério norte. As estações existem porque o eixo da Terra está inclinado. Quando é inverno em Portugal, na Austrália é verão!" },
  { title: "♻️ Embrulhos e Reciclagem", text: "No Natal produzimos muito lixo: papel de embrulho, caixas, garrafas e embalagens. Em Portugal, o ecoponto azul é para papel e cartão, o amarelo para plástico e metal e o verde para vidro. Reduzir, reutilizar e reciclar ajuda o planeta!" },
  { title: "♿ Um Natal para Todos", text: "O Natal é de todos! As pessoas cegas leem com o sistema Braille, de pontos em relevo, e as pessoas surdas comunicam em Língua Gestual Portuguesa. Legendas, rampas e jogos adaptados ajudam a incluir toda a gente nas festas." },
  { title: "🛒 Compras de Natal", text: "Antes de comprar prendas, convém comparar preços, fazer um orçamento e guardar a fatura. Quando se compra na internet, na União Europeia, tens em regra 14 dias para devolver o produto sem dar explicações. Na Black Friday há muitas promoções, por isso compara sempre os preços!" },
  { title: "🎅 O Pai Natal e a Lapónia", text: "Na Finlândia, perto de Rovaniemi, fica a Aldeia do Pai Natal, mesmo em cima do Círculo Polar Ártico. Em finlandês, o Pai Natal chama-se Joulupukki. No inverno, a Lapónia tem noites polares e, com sorte, vê-se a aurora boreal no céu." },
  { title: "🎬 Filmes e Histórias de Natal", text: "O Natal também se vê no cinema e na televisão! «O Grinch» foi criado por Dr. Seuss em 1957, e «Sozinho em Casa» estreou em 1990. A rena Rudolfo nasceu num livro de 1939. Muitas famílias gostam de ver estes filmes juntas." },
  { title: "🎄 Enfeites de Natal", text: "A estrela-de-natal (ou poinsétia) vem do México, e as suas «pétalas» vermelhas são, na verdade, folhas modificadas! As bolas de vidro para a árvore surgiram na Alemanha, no século XIX. O abeto, o azevinho e o visco são plantas muito usadas nos enfeites de Natal." },
  { title: "💻 O Natal Tecnológico", text: "A 3 de dezembro de 1992, foi enviada a primeira mensagem SMS do mundo: dizia «Merry Christmas»! Hoje, os robôs aspiradores, as impressoras 3D e as videochamadas fazem parte de muitos Natais. Quem vive longe pode ver a família num ecrã, na noite de Natal." },
  { title: "🎆 Passagem de Ano e Ano Novo", text: "Na noite de 31 de dezembro, em Portugal, muita gente come 12 passas à meia-noite, uma por cada desejo, e vê o fogo de artifício. O Funchal, na Madeira, é famoso pelo seu espetáculo. À meia-noite canta-se «Auld Lang Syne», uma canção da Escócia. E depois… começa um ano novo!" }
];

export const QUIZ_TIPS = {
  historia_internet: "O Natal tem uma longa história: já os romanos trocavam presentes em dezembro, e a árvore de Natal nasceu na Alemanha.",
  palavras_passe: "Prefere luzes LED, apaga-as quando saíres de casa e confirma que têm a marcação CE.",
  dados_pessoais: "Na Consoada o bacalhau é o prato mais típico, e as rabanadas, o bolo-rei e as filhós são os doces mais conhecidos.",
  instituicoes_apoio: "O Natal é uma festa de todos, e cada país tem os seus costumes, a sua comida e a sua forma de dizer «Feliz Natal».",
  virus_malware: "A neve é feita de cristais de gelo, e os flocos têm normalmente seis lados.",
  jogos_seguros: "Antes de oferecer um jogo, vê o número PEGI, e guarda sempre a fatura da prenda tecnológica.",
  pegada_digital: "A Estação Espacial Internacional dá cerca de 16 voltas à Terra por dia, e os astronautas também festejam o Natal!",
  fake_news: "O primeiro cartão de Natal tem mais de 180 anos, e hoje os votos de Boas Festas também viajam por mensagem.",
  phishing: "As músicas de Natal enchem dezembro de alegria, e os guizos dos trenós dão-lhes o som tilintante.",
  dispositivos: "Para calcular um desconto de 25%, divide o preço por 4 e subtrai o resultado ao preço.",
  regras_familia: "O melhor do Natal é estar com quem gostamos, e ajudar quem precisa também faz parte da festa.",
  wifi_publico: "As estações existem por causa da inclinação do eixo da Terra, e não por a Terra estar mais perto ou mais longe do Sol.",
  copias_seguranca: "Azul para papel e cartão, amarelo para plástico e metal, verde para vidro. E, sempre que puderes, reutiliza!",
  acessibilidade_digital: "Convidar toda a gente e adaptar os jogos faz com que o Natal seja uma festa de todos.",
  spam_compras: "Faz um orçamento, compara preços e guarda a fatura. Nas compras online tens 14 dias para devolver.",
  denuncia_conteudo: "Na Lapónia, no inverno, há a noite polar e a aurora boreal, uma luz colorida no céu.",
  identidade_digital: "Ver um filme de Natal em família é uma tradição, e há muitas histórias que passam de geração em geração.",
  privacidade: "A estrela-de-natal vem do México, e o que parecem pétalas vermelhas são, afinal, folhas.",
  contacto_desconhecidos: "A primeira mensagem SMS do mundo foi «Merry Christmas», enviada em 1992!",
  direitos_digitais: "Faz 12 desejos e faz bons propósitos para o ano novo. Boas Festas e Feliz Ano Novo!"
};

// Sem ligação ao cartaz de cibersegurança nesta edição.
export const QUIZ_ARTICLE = {
  historia_internet: null,
  palavras_passe: null,
  dados_pessoais: null,
  instituicoes_apoio: null,
  virus_malware: null,
  jogos_seguros: null,
  pegada_digital: null,
  fake_news: null,
  phishing: null,
  dispositivos: null,
  regras_familia: null,
  wifi_publico: null,
  copias_seguranca: null,
  acessibilidade_digital: null,
  spam_compras: null,
  denuncia_conteudo: null,
  identidade_digital: null,
  privacidade: null,
  contacto_desconhecidos: null,
  direitos_digitais: null
};

// Fácil — 3 opções por pergunta
export const QUIZ_BY_THEME = {
  historia_internet: [
    { q:"Que festa dos antigos romanos, em dezembro, tinha banquetes e troca de presentes?", a:[{t:"A Saturnália",ok:true},{t:"As Olimpíadas",ok:false},{t:"A Oktoberfest",ok:false}], exp:"Os romanos celebravam a Saturnália em dezembro, com banquetes, jogos e troca de pequenos presentes. É uma das festas de inverno que inspiraram tradições de hoje." },
    { q:"Em que país europeu nasceu a tradição de enfeitar uma árvore dentro de casa no Natal?", a:[{t:"Na Alemanha",ok:true},{t:"No Egito",ok:false},{t:"No Japão",ok:false}], exp:"A tradição de levar uma árvore verde para casa e enfeitá-la nasceu na Alemanha e foi-se espalhando por toda a Europa e pelo mundo." },
    { q:"Em que dia se celebra o Natal?", a:[{t:"A 25 de dezembro",ok:true},{t:"A 1 de dezembro",ok:false},{t:"A 31 de dezembro",ok:false}], exp:"O Natal celebra-se a 25 de dezembro, e a noite anterior, 24 de dezembro, é a Consoada em Portugal." },
    { q:"Quem traz as prendas às crianças em muitos países, segundo a tradição?", a:[{t:"O Pai Natal",ok:true},{t:"O Pai Inverno",ok:false},{t:"O Pai Verão",ok:false}], exp:"Em Portugal chama-se Pai Natal. Noutros países tem outros nomes, mas a ideia é a mesma: trazer prendas na noite de Natal." },
    { q:"Que planta de folhas verdes e bagas vermelhas é muito usada para enfeitar no Natal?", a:[{t:"O azevinho",ok:true},{t:"A tulipa",ok:false},{t:"O cato do deserto",ok:false}], exp:"O azevinho mantém as folhas verdes e as bagas vermelhas em pleno inverno, por isso é um enfeite de Natal muito querido." },
    { q:"Que fruta se pendurava antigamente nas árvores de Natal alemãs, antes de haver bolas de vidro?", a:[{t:"Maçãs",ok:true},{t:"Bananas",ok:false},{t:"Ananás",ok:false}], exp:"As primeiras árvores eram enfeitadas com maçãs, nozes e doces, e as bolas de vidro só chegaram muito mais tarde." }
  ],
  palavras_passe: [
    { q:"Que tipo de luzes gasta menos energia nos enfeites de Natal?", a:[{t:"As luzes LED",ok:true},{t:"As lâmpadas antigas de incandescência",ok:false},{t:"As velas",ok:false}], exp:"As luzes LED gastam muito menos energia e aquecem menos do que as lâmpadas antigas." },
    { q:"Qual destas árvores é muito usada como árvore de Natal?", a:[{t:"O abeto",ok:true},{t:"A palmeira",ok:false},{t:"A oliveira",ok:false}], exp:"O abeto e o pinheiro são as árvores mais usadas, porque são verdes todo o ano e têm uma forma de triângulo." },
    { q:"O que se pode fazer às luzes da árvore quando se sai de casa?", a:[{t:"Desligá-las",ok:true},{t:"Deixá-las sempre acesas",ok:false},{t:"Tapá-las com um lençol",ok:false}], exp:"Desligar as luzes poupa energia e evita perigos, como o aquecimento de cabos ou de lâmpadas." },
    { q:"O que é um temporizador ligado às luzes de Natal?", a:[{t:"Um aparelho que liga e desliga as luzes à hora",ok:true},{t:"Um aparelho que muda a cor das bolas",ok:false},{t:"Um aparelho que faz cair a neve",ok:false}], exp:"O temporizador liga e desliga as luzes à hora combinada, por exemplo ao anoitecer e à meia-noite." },
    { q:"Numa fiada antiga de luzes «em série», o que acontece se uma lâmpada se fundir?", a:[{t:"As outras podem apagar-se",ok:true},{t:"As outras ficam mais brilhantes",ok:false},{t:"Nada, todas continuam acesas",ok:false}], exp:"Numa ligação em série a corrente passa por todas as lâmpadas, por isso, se uma falhar, o circuito pode ficar cortado." },
    { q:"O que se coloca muitas vezes no topo da árvore de Natal?", a:[{t:"Uma estrela",ok:true},{t:"Uma bola de futebol",ok:false},{t:"Um guarda-chuva",ok:false}], exp:"A estrela no topo é um dos enfeites mais tradicionais da árvore de Natal." }
  ],
  dados_pessoais: [
    { q:"Como se chama a ceia de Natal na noite de 24 de dezembro, em Portugal?", a:[{t:"A Consoada",ok:true},{t:"O lanche",ok:false},{t:"O pequeno-almoço",ok:false}], exp:"A Consoada é a ceia que a família faz na noite de 24 de dezembro." },
    { q:"Que peixe é o prato mais típico da Consoada portuguesa?", a:[{t:"O bacalhau",ok:true},{t:"A sardinha",ok:false},{t:"O atum",ok:false}], exp:"O bacalhau cozido com batatas, couves e ovos é o prato mais tradicional da Consoada." },
    { q:"Que bolo em forma de coroa, com frutas cristalizadas, é típico do Natal português?", a:[{t:"O bolo-rei",ok:true},{t:"O pão de ló",ok:false},{t:"O bolo de bolacha",ok:false}], exp:"O bolo-rei tem a forma de uma coroa e é decorado com frutas cristalizadas e frutos secos." },
    { q:"Qual destes doces é típico do Natal em Portugal?", a:[{t:"As rabanadas",ok:true},{t:"O gelado de baunilha",ok:false},{t:"O cachorro-quente",ok:false}], exp:"As rabanadas, feitas com fatias de pão, leite, ovos e canela, são um doce clássico do Natal." },
    { q:"Qual destes frutos secos aparece muito na mesa de Natal?", a:[{t:"As nozes",ok:true},{t:"As bananas",ok:false},{t:"Os morangos",ok:false}], exp:"As nozes, as amêndoas e as avelãs fazem parte da mesa de Natal em muitas casas." },
    { q:"Que doce frito, feito com massa e polvilhado com açúcar e canela, aparece no Natal?", a:[{t:"As filhós",ok:true},{t:"O pão de forma",ok:false},{t:"A gelatina",ok:false}], exp:"As filhós são fritas e polvilhadas com açúcar e canela, e são um doce muito comum no Natal." }
  ],
  instituicoes_apoio: [
    { q:"Em que país o Natal costuma ser no verão, com praia e calor?", a:[{t:"Na Austrália",ok:true},{t:"No Canadá",ok:false},{t:"Na Finlândia",ok:false}], exp:"A Austrália fica no hemisfério sul, onde o Natal cai no verão, por isso é comum ir à praia no dia de Natal." },
    { q:"Como se diz «Feliz Natal» em inglês?", a:[{t:"Merry Christmas",ok:true},{t:"Happy Birthday",ok:false},{t:"Good Morning",ok:false}], exp:"«Merry Christmas» significa «Feliz Natal» em inglês." },
    { q:"Qual destas expressões significa «Feliz Natal» em espanhol?", a:[{t:"Feliz Navidad",ok:true},{t:"Joyeux Noël",ok:false},{t:"Frohe Weihnachten",ok:false}], exp:"Em espanhol diz-se «Feliz Navidad»." },
    { q:"Em que língua se diz «Joyeux Noël»?", a:[{t:"Em francês",ok:true},{t:"Em alemão",ok:false},{t:"Em italiano",ok:false}], exp:"«Joyeux Noël» é «Feliz Natal» em francês." },
    { q:"Que tradição é muito conhecida no Japão na época do Natal?", a:[{t:"Muitas famílias comem frango frito",ok:true},{t:"Todos fazem bonecos de neve na praia",ok:false},{t:"Todos comem bacalhau",ok:false}], exp:"No Japão, comer frango frito no Natal tornou-se uma tradição popular desde os anos 1970." },
    { q:"Qual destas coisas aparece muitas vezes nos Natais de países com neve?", a:[{t:"Bonecos de neve",ok:true},{t:"Surf de verão",ok:false},{t:"Guarda-sóis",ok:false}], exp:"Em países frios, as crianças gostam de fazer bonecos de neve nas férias de Natal." }
  ],
  virus_malware: [
    { q:"Quantos lados ou pontas tem, em regra, um floco de neve?", a:[{t:"Seis",ok:true},{t:"Quatro",ok:false},{t:"Oito",ok:false}], exp:"Os cristais de gelo formam-se em forma hexagonal, por isso quase todos os flocos de neve têm seis lados ou pontas." },
    { q:"De que é feita a neve?", a:[{t:"De cristais de gelo",ok:true},{t:"De algodão muito fofo",ok:false},{t:"De sal e de açúcar",ok:false}], exp:"A neve forma-se quando a água, muito fria, congela no ar, em forma de pequenos cristais." },
    { q:"A que temperatura a água se transforma em gelo?", a:[{t:"A 0 °C",ok:true},{t:"A 10 °C",ok:false},{t:"A 100 °C",ok:false}], exp:"A água congela, em condições normais, a 0 graus Celsius." },
    { q:"Que animal puxa o trenó do Pai Natal, segundo a tradição?", a:[{t:"As renas",ok:true},{t:"Os elefantes",ok:false},{t:"Os pinguins",ok:false}], exp:"Na tradição popular, é um grupo de renas que puxa o trenó do Pai Natal pelos céus." },
    { q:"Como se chama a rena de nariz vermelho brilhante?", a:[{t:"Rudolfo",ok:true},{t:"Bambi",ok:false},{t:"Dumbo",ok:false}], exp:"O Rudolfo é a rena de nariz vermelho que ilumina o caminho do trenó na noite de Natal." },
    { q:"Onde vivem naturalmente as renas?", a:[{t:"Em regiões frias do norte",ok:true},{t:"Em desertos quentes",ok:false},{t:"Em florestas tropicais",ok:false}], exp:"As renas estão adaptadas ao frio e vivem no norte da Europa, da Ásia e da América do Norte." }
  ],
  jogos_seguros: [
    { q:"O que mostra a classificação PEGI na caixa de um videojogo?", a:[{t:"A idade recomendada",ok:true},{t:"O preço do jogo",ok:false},{t:"A cor do comando",ok:false}], exp:"O PEGI ajuda a escolher jogos adequados à idade de quem vai jogar." },
    { q:"Qual destes aparelhos é uma prenda tecnológica?", a:[{t:"Uma consola de jogos",ok:true},{t:"Um par de meias",ok:false},{t:"Um cachecol",ok:false}], exp:"Consolas, tablets e brinquedos eletrónicos são prendas tecnológicas." },
    { q:"O que se deve fazer ao receber um brinquedo eletrónico novo?", a:[{t:"Ler as instruções",ok:true},{t:"Deitar a caixa fora sem ver nada",ok:false},{t:"Atirá-lo ao chão para testar",ok:false}], exp:"As instruções explicam como usar o brinquedo em segurança e como cuidar das pilhas ou da bateria." },
    { q:"O que faz funcionar um comando sem fios?", a:[{t:"Pilhas ou uma bateria",ok:true},{t:"Só a luz do sol",ok:false},{t:"Só a água",ok:false}], exp:"Os comandos sem fios precisam de pilhas ou de bateria recarregável." },
    { q:"Onde se devem deitar as pilhas gastas?", a:[{t:"No pilhão de recolha",ok:true},{t:"No lixo comum da cozinha",ok:false},{t:"Na sanita, com água",ok:false}], exp:"As pilhas têm substâncias poluentes e devem ser entregues em pilhões ou pontos de recolha." },
    { q:"O que é saudável fazer com uma prenda nova de jogos?", a:[{t:"Jogar um pouco e fazer pausas",ok:true},{t:"Jogar sem parar até de madrugada",ok:false},{t:"Jogar às escondidas à noite",ok:false}], exp:"Fazer pausas e combinar horários com a família ajuda a cuidar dos olhos e do sono." }
  ],
  pegada_digital: [
    { q:"Como se chama o satélite natural da Terra, que vemos à noite?", a:[{t:"A Lua",ok:true},{t:"O Sol",ok:false},{t:"Marte",ok:false}], exp:"A Lua é o único satélite natural da Terra." },
    { q:"Qual é a estrela que está no centro do nosso Sistema Solar?", a:[{t:"O Sol",ok:true},{t:"A Lua",ok:false},{t:"Júpiter",ok:false}], exp:"O Sol é uma estrela, e a Terra e os outros planetas andam à volta dele." },
    { q:"O que são as estrelas que vemos no céu à noite?", a:[{t:"Sóis muito distantes, bolas de gás a brilhar",ok:true},{t:"Pequenas lâmpadas penduradas no céu",ok:false},{t:"Pedaços de gelo a brilhar no espaço",ok:false}], exp:"As estrelas são enormes bolas de gás muito quentes, e parecem pequenas porque estão muito longe." },
    { q:"O que é a Estação Espacial Internacional (ISS)?", a:[{t:"Um laboratório que orbita a Terra",ok:true},{t:"Uma montanha muito alta e fria",ok:false},{t:"Um barco que anda no oceano",ok:false}], exp:"A ISS é um laboratório que orbita a Terra, e nele trabalham astronautas de vários países." },
    { q:"O que ajuda a ver melhor as estrelas?", a:[{t:"Um telescópio",ok:true},{t:"Uma colher",ok:false},{t:"Um guarda-chuva",ok:false}], exp:"O telescópio aproxima as imagens e mostra estrelas e planetas com muito mais pormenor." },
    { q:"Que aparelhos que andam à volta da Terra ajudam a televisão e o GPS?", a:[{t:"Os satélites",ok:true},{t:"Os balões de festa",ok:false},{t:"As bicicletas",ok:false}], exp:"Os satélites artificiais enviam sinais de televisão, de GPS e de telefone para a Terra." }
  ],
  fake_news: [
    { q:"Qual destas frases se escreve num cartão de Natal?", a:[{t:"Boas Festas!",ok:true},{t:"Parabéns pelo exame!",ok:false},{t:"Boa viagem!",ok:false}], exp:"«Boas Festas» é um desejo muito usado nos cartões e mensagens de Natal." },
    { q:"O que se cola no envelope para a carta seguir pelo correio?", a:[{t:"Um selo",ok:true},{t:"Uma estrela",ok:false},{t:"Um autocolante de fruta",ok:false}], exp:"O selo mostra que o envio foi pago, e sem ele a carta não segue." },
    { q:"Em Portugal, quem entrega as cartas e os postais?", a:[{t:"Os CTT",ok:true},{t:"Os bombeiros",ok:false},{t:"Os agricultores",ok:false}], exp:"Os CTT (Correios de Portugal) entregam cartas, postais e encomendas." },
    { q:"Para quem escrevem muitas crianças cartas com pedidos de prendas?", a:[{t:"Para o Pai Natal",ok:true},{t:"Para o Pai Inverno",ok:false},{t:"Para o Pai Verão",ok:false}], exp:"Muitas crianças escrevem ao Pai Natal para contar como se portaram e pedir prendas." },
    { q:"O que é indispensável escrever no envelope para a carta chegar ao destino?", a:[{t:"A morada",ok:true},{t:"O número do sapato",ok:false},{t:"A cor preferida",ok:false}], exp:"Sem a morada completa e o código postal, o correio não sabe para onde levar a carta." },
    { q:"O que é um postal?", a:[{t:"Um cartão com imagem, enviado pelo correio",ok:true},{t:"Um tipo de bolo para a Consoada",ok:false},{t:"Um aparelho para ouvir música",ok:false}], exp:"O postal tem uma imagem de um lado e espaço para escrever do outro, e envia-se pelo correio." }
  ],
  phishing: [
    { q:"Qual destas músicas é uma canção de Natal muito conhecida?", a:[{t:"Jingle Bells",ok:true},{t:"Atirei o Pau ao Gato",ok:false},{t:"Parabéns a Você",ok:false}], exp:"«Jingle Bells» é uma das canções de Natal mais conhecidas do mundo." },
    { q:"Em Portugal, em que mês se costuma «cantar as Janeiras» de porta em porta?", a:[{t:"Em janeiro",ok:true},{t:"Em junho",ok:false},{t:"Em setembro",ok:false}], exp:"As Janeiras são cantadas no início do ano, e o nome vem do mês de janeiro." },
    { q:"Que instrumento tem teclas pretas e brancas e é muito usado em canções de Natal?", a:[{t:"O piano",ok:true},{t:"A flauta",ok:false},{t:"O tambor",ok:false}], exp:"O piano tem teclas brancas e pretas e acompanha muitos cânticos de Natal." },
    { q:"O que é um coro?", a:[{t:"Um grupo de pessoas que canta junto",ok:true},{t:"Um tipo de bolo com cobertura",ok:false},{t:"Um instrumento de sopro dourado",ok:false}], exp:"Um coro reúne várias vozes a cantar em conjunto." },
    { q:"Como se chama a pequena bola de metal oca que tilinta, usada nos trenós e nas decorações?", a:[{t:"Guizo",ok:true},{t:"Pandeireta",ok:false},{t:"Tambor",ok:false}], exp:"O guizo tem uma bolinha lá dentro, e por isso tilinta quando se mexe." },
    { q:"Quantas notas musicais tem a escala «dó, ré, mi, fá, sol, lá, si»?", a:[{t:"Sete",ok:true},{t:"Cinco",ok:false},{t:"Dez",ok:false}], exp:"A escala tem sete notas diferentes: dó, ré, mi, fá, sol, lá e si." }
  ],
  dispositivos: [
    { q:"O Pai Natal tem 8 renas e mais o Rudolfo. Quantas renas são ao todo?", a:[{t:"9",ok:true},{t:"8",ok:false},{t:"10",ok:false}], exp:"8 + 1 = 9 renas." },
    { q:"Uma árvore tem 3 fiadas de luzes, cada uma com 10 lâmpadas. Quantas lâmpadas há ao todo?", a:[{t:"30",ok:true},{t:"13",ok:false},{t:"20",ok:false}], exp:"3 × 10 = 30 lâmpadas." },
    { q:"Se tens 12 bolas de Natal e penduras metade, quantas ficam penduradas?", a:[{t:"6",ok:true},{t:"4",ok:false},{t:"12",ok:false}], exp:"A metade de 12 é 6." },
    { q:"O Rui tinha 5 prendas e recebeu mais 4. Com quantas ficou?", a:[{t:"9",ok:true},{t:"8",ok:false},{t:"10",ok:false}], exp:"5 + 4 = 9." },
    { q:"Quantos dias tem o mês de dezembro?", a:[{t:"31",ok:true},{t:"30",ok:false},{t:"28",ok:false}], exp:"Dezembro tem 31 dias." },
    { q:"Se hoje é 20 de dezembro, quantos dias faltam para o dia 25?", a:[{t:"5",ok:true},{t:"4",ok:false},{t:"6",ok:false}], exp:"25 − 20 = 5 dias." }
  ],
  regras_familia: [
    { q:"O que fazem muitas famílias na noite de Natal?", a:[{t:"Reúnem-se para jantar e trocar prendas",ok:true},{t:"Vão todas para escolas diferentes",ok:false},{t:"Ficam cada uma numa sala fechada",ok:false}], exp:"O Natal é tempo de estar juntos à mesa e trocar prendas." },
    { q:"Qual é uma boa forma de passar tempo em família no Natal?", a:[{t:"Jogar um jogo de tabuleiro",ok:true},{t:"Cada um sozinho no seu canto sem falar",ok:false},{t:"Dormir o dia inteiro",ok:false}], exp:"Jogos de tabuleiro e de cartas juntam a família e divertem todos." },
    { q:"O que se pode fazer para ajudar quem tem menos no Natal?", a:[{t:"Doar alimentos ou brinquedos",ok:true},{t:"Esconder as prendas",ok:false},{t:"Estragar as decorações",ok:false}], exp:"Muitas escolas e instituições recolhem alimentos e brinquedos para quem precisa." },
    { q:"O que é uma prenda feita à mão?", a:[{t:"Uma prenda criada por nós",ok:true},{t:"Uma prenda comprada na loja",ok:false},{t:"Uma prenda que não se pode abrir",ok:false}], exp:"Uma prenda feita à mão é criada com o nosso tempo e a nossa imaginação." },
    { q:"O que se diz a quem nos dá uma prenda?", a:[{t:"Obrigado ou obrigada",ok:true},{t:"Não quero",ok:false},{t:"Já tenho uma igual",ok:false}], exp:"Agradecer é um sinal de educação e de carinho." },
    { q:"Para que serve uma lista de prendas?", a:[{t:"Para saber o que cada um quer receber",ok:true},{t:"Para decorar a árvore de Natal",ok:false},{t:"Para fazer a ceia de Natal",ok:false}], exp:"A lista ajuda a escolher prendas de que cada pessoa vai gostar." }
  ],
  wifi_publico: [
    { q:"O que acontece no dia mais curto do ano?", a:[{t:"Há menos horas de luz",ok:true},{t:"O dia tem 30 horas",ok:false},{t:"Não há noite nenhuma",ok:false}], exp:"No solstício de inverno, os dias têm poucas horas de luz e as noites são muito longas." },
    { q:"Em que estação do ano estamos no Natal, em Portugal?", a:[{t:"No inverno",ok:true},{t:"No verão",ok:false},{t:"Na primavera",ok:false}], exp:"O Natal é no início do inverno, no hemisfério norte." },
    { q:"Qual é o aparelho que mede a temperatura?", a:[{t:"O termómetro",ok:true},{t:"O relógio",ok:false},{t:"A balança",ok:false}], exp:"O termómetro mede o calor ou o frio, em graus Celsius." },
    { q:"O que se veste num dia muito frio?", a:[{t:"Roupa quente, em camadas",ok:true},{t:"Roupa de banho",ok:false},{t:"Só uma t-shirt",ok:false}], exp:"Roupa quente e em camadas ajuda a manter o corpo aquecido." },
    { q:"Por volta de que dia começa o inverno no hemisfério norte?", a:[{t:"Por volta de 21 de dezembro",ok:true},{t:"Por volta de 21 de junho",ok:false},{t:"Por volta de 1 de setembro",ok:false}], exp:"O inverno começa no solstício, por volta de 21 de dezembro." },
    { q:"O que pode acontecer à água de um lago em dias muito frios?", a:[{t:"Pode congelar",ok:true},{t:"Fica quente",ok:false},{t:"Desaparece",ok:false}], exp:"Quando a temperatura desce abaixo de 0 °C, a água pode congelar." }
  ],
  copias_seguranca: [
    { q:"Em que ecoponto se deita o papel de embrulho simples e as caixas de cartão?", a:[{t:"No azul",ok:true},{t:"No amarelo",ok:false},{t:"No verde",ok:false}], exp:"O ecoponto azul serve para papel e cartão." },
    { q:"Em que ecoponto se deitam garrafas e frascos de vidro?", a:[{t:"No verde",ok:true},{t:"No azul",ok:false},{t:"No amarelo",ok:false}], exp:"O ecoponto verde serve para o vidro de embalagens." },
    { q:"Em que ecoponto se deitam embalagens de plástico e de metal?", a:[{t:"No amarelo",ok:true},{t:"No verde",ok:false},{t:"No azul",ok:false}], exp:"O ecoponto amarelo serve para embalagens de plástico e de metal." },
    { q:"O que se pode fazer ao papel de embrulho que ainda está em bom estado?", a:[{t:"Guardá-lo para usar outra vez",ok:true},{t:"Queimá-lo na lareira",ok:false},{t:"Atirá-lo ao rio sem pensar",ok:false}], exp:"Reutilizar poupa recursos e dinheiro." },
    { q:"O que quer dizer «reutilizar»?", a:[{t:"Usar outra vez",ok:true},{t:"Partir em bocadinhos",ok:false},{t:"Comprar de novo",ok:false}], exp:"Reutilizar é dar uma nova vida ao que já temos." },
    { q:"O que se pode fazer à árvore de Natal artificial depois das festas?", a:[{t:"Guardá-la para o ano seguinte",ok:true},{t:"Deitá-la fora de imediato",ok:false},{t:"Partir todos os ramos",ok:false}], exp:"Guardar a árvore e os enfeites evita comprar tudo novo todos os anos." }
  ],
  acessibilidade_digital: [
    { q:"Como se chama o sistema de leitura em pontos em relevo, usado por pessoas cegas?", a:[{t:"Braille",ok:true},{t:"Morse",ok:false},{t:"Semáforo",ok:false}], exp:"O Braille usa pontos em relevo que se leem com a ponta dos dedos." },
    { q:"Como comunicam muitas pessoas surdas com as mãos?", a:[{t:"Com a língua gestual",ok:true},{t:"Com a língua de sinais de trânsito",ok:false},{t:"Com números",ok:false}], exp:"A língua gestual usa as mãos, o corpo e a expressão do rosto." },
    { q:"Para que serve uma legenda num vídeo?", a:[{t:"Para ler o que se diz",ok:true},{t:"Para tapar a imagem",ok:false},{t:"Para mudar a cor",ok:false}], exp:"As legendas ajudam quem não ouve bem, e também quem está num sítio com muito barulho." },
    { q:"Para que serve uma rampa à entrada de um edifício?", a:[{t:"Para entrarem cadeiras de rodas e carrinhos",ok:true},{t:"Para decorar a entrada de Natal",ok:false},{t:"Para andar de skate à porta",ok:false}], exp:"A rampa facilita a entrada de pessoas em cadeira de rodas, de carrinhos de bebé e de quem tem dificuldade em subir escadas." },
    { q:"Qual é a atitude certa para incluir todos nos jogos de Natal?", a:[{t:"Convidar todos e adaptar o jogo",ok:true},{t:"Escolher só quem corre mais",ok:false},{t:"Deixar alguns de fora do jogo",ok:false}], exp:"Incluir todos faz com que a festa seja mais divertida." },
    { q:"Quem é ajudado por um cão-guia?", a:[{t:"Uma pessoa cega",ok:true},{t:"Uma pessoa que dorme",ok:false},{t:"Uma pessoa que gosta de passear",ok:false}], exp:"O cão-guia é treinado para guiar pessoas cegas em segurança." }
  ],
  spam_compras: [
    { q:"O que convém fazer antes de comprar uma prenda?", a:[{t:"Comparar os preços em várias lojas",ok:true},{t:"Comprar a primeira que vês",ok:false},{t:"Comprar sempre a mais cara",ok:false}], exp:"Comparar preços ajuda a poupar dinheiro." },
    { q:"Porque se guarda a fatura ou o talão de uma prenda?", a:[{t:"Para trocar ou reclamar, se houver problema",ok:true},{t:"Para decorar a árvore de Natal",ok:false},{t:"Para fazer um desenho bonito",ok:false}], exp:"A fatura prova a compra e é preciso para trocar ou reclamar." },
    { q:"O que é um desconto?", a:[{t:"Uma redução do preço",ok:true},{t:"Um aumento do preço",ok:false},{t:"Um tipo de embrulho",ok:false}], exp:"Com um desconto, o preço desce, por exemplo, 10% ou 20%." },
    { q:"Qual é a moeda usada em Portugal?", a:[{t:"O euro",ok:true},{t:"O dólar",ok:false},{t:"A libra",ok:false}], exp:"Em Portugal paga-se em euros." },
    { q:"Se pagas 10 € por uma prenda de 7,50 €, quanto recebes de troco?", a:[{t:"2,50 €",ok:true},{t:"3,50 €",ok:false},{t:"1,50 €",ok:false}], exp:"10 − 7,50 = 2,50 €." },
    { q:"O que é útil fazer antes de ir às compras de Natal?", a:[{t:"Fazer uma lista e um orçamento",ok:true},{t:"Gastar tudo o que tens",ok:false},{t:"Comprar sem pensar em nada",ok:false}], exp:"Uma lista e um orçamento ajudam a gastar só o que se pode." }
  ],
  denuncia_conteudo: [
    { q:"De que cores é a roupa do Pai Natal?", a:[{t:"Vermelha e branca",ok:true},{t:"Azul e amarela",ok:false},{t:"Preta e cor-de-rosa",ok:false}], exp:"O Pai Natal costuma vestir roupa vermelha com detalhes brancos." },
    { q:"Que som costuma fazer o Pai Natal quando se ri?", a:[{t:"Ho, ho, ho!",ok:true},{t:"Piu, piu, piu!",ok:false},{t:"Au, au, au!",ok:false}], exp:"O «Ho, ho, ho!» é a gargalhada do Pai Natal." },
    { q:"Por onde entra o Pai Natal nas casas, segundo a tradição?", a:[{t:"Pela chaminé",ok:true},{t:"Pela janela da casa de banho",ok:false},{t:"Pelo telhado de vidro",ok:false}], exp:"Na história, ele desce pela chaminé para deixar as prendas." },
    { q:"Que veículo usa o Pai Natal para viajar?", a:[{t:"Um trenó",ok:true},{t:"Um avião",ok:false},{t:"Uma bicicleta",ok:false}], exp:"O trenó do Pai Natal é puxado por renas." },
    { q:"Quem ajuda o Pai Natal a fazer os brinquedos, na tradição popular?", a:[{t:"Os duendes",ok:true},{t:"Os pinguins",ok:false},{t:"Os dinossauros",ok:false}], exp:"Os duendes (ou elfos) trabalham na oficina do Pai Natal." },
    { q:"Em que país fica a Aldeia do Pai Natal, em Rovaniemi?", a:[{t:"Na Finlândia",ok:true},{t:"Em Portugal",ok:false},{t:"No Egito",ok:false}], exp:"A Aldeia do Pai Natal fica em Rovaniemi, na Lapónia finlandesa." }
  ],
  identidade_digital: [
    { q:"Como se chama, em Portugal, o filme em que um rapaz fica sozinho em casa e a defende de ladrões?", a:[{t:"Sozinho em Casa",ok:true},{t:"Casa Segura",ok:false},{t:"A Casa Mágica",ok:false}], exp:"«Sozinho em Casa» é o título em Portugal do filme «Home Alone»." },
    { q:"Qual é a personagem verde e rabugenta que tenta estragar o Natal, numa história do Dr. Seuss?", a:[{t:"O Grinch",ok:true},{t:"O Gato das Botas",ok:false},{t:"O Pateta",ok:false}], exp:"O Grinch é uma personagem verde que não gosta do Natal." },
    { q:"Onde se veem muitos filmes de Natal em casa?", a:[{t:"Na televisão",ok:true},{t:"No frigorífico",ok:false},{t:"No forno",ok:false}], exp:"Muitas famílias veem filmes de Natal na televisão." },
    { q:"O que é um desenho animado?", a:[{t:"Um filme feito com desenhos",ok:true},{t:"Um livro de receitas",ok:false},{t:"Um tipo de bolo de Natal",ok:false}], exp:"Num desenho animado, as imagens parecem mexer-se." },
    { q:"O que é uma sequela?", a:[{t:"A continuação de um filme",ok:true},{t:"O primeiro capítulo",ok:false},{t:"Um tipo de sapato",ok:false}], exp:"Uma sequela conta o que acontece depois de um filme." },
    { q:"O que se vê no fim de um filme, com os nomes de quem trabalhou nele?", a:[{t:"Os créditos",ok:true},{t:"O cartaz",ok:false},{t:"A pipoca",ok:false}], exp:"Os créditos mostram o nome de todos os que fizeram o filme." }
  ],
  privacidade: [
    { q:"Como se chama a planta de folhas vermelhas muito usada como decoração de Natal?", a:[{t:"Estrela-de-natal",ok:true},{t:"Girassol",ok:false},{t:"Margarida",ok:false}], exp:"A estrela-de-natal, ou poinsétia, tem folhas vermelhas e é muito usada em dezembro." },
    { q:"O que se pendura na árvore de Natal para a enfeitar?", a:[{t:"Bolas e fitas",ok:true},{t:"Pratos de sopa",ok:false},{t:"Chinelos",ok:false}], exp:"Bolas, fitas, luzes e estrelas enfeitam a árvore." },
    { q:"Que doce em forma de J, às riscas vermelhas e brancas, enfeita muitas árvores de Natal?", a:[{t:"A bengala doce",ok:true},{t:"O bolo de chocolate",ok:false},{t:"A queijada",ok:false}], exp:"A bengala doce é um doce e um enfeite de Natal." },
    { q:"Que enfeite redondo, com folhas e um laço, se põe muitas vezes na porta?", a:[{t:"A grinalda",ok:true},{t:"A caixa de sapatos",ok:false},{t:"A bola de ténis",ok:false}], exp:"A grinalda é um enfeite redondo, que se pendura na porta." },
    { q:"O que são fios de ouropel?", a:[{t:"Fitas brilhantes para enfeitar",ok:true},{t:"Fios de pesca muito finos",ok:false},{t:"Fios de lã para tricotar",ok:false}], exp:"O ouropel brilha e ajuda a refletir as luzes na árvore." },
    { q:"Que cores se usam tradicionalmente nos enfeites de Natal?", a:[{t:"Vermelho, verde e dourado",ok:true},{t:"Cinzento, preto e castanho",ok:false},{t:"Bege, cinzento e branco",ok:false}], exp:"Vermelho, verde e dourado são as cores clássicas do Natal." }
  ],
  contacto_desconhecidos: [
    { q:"O que é um robô aspirador?", a:[{t:"Limpa o chão sozinho",ok:true},{t:"Faz bolos de Natal",ok:false},{t:"É um brinquedo de praia",ok:false}], exp:"O robô aspirador anda pela casa e aspira o chão, sem ninguém o empurrar." },
    { q:"O que é um SMS?", a:[{t:"Uma mensagem curta de texto",ok:true},{t:"Um tipo de jogo de cartas",ok:false},{t:"Uma marca de sapatos novos",ok:false}], exp:"SMS quer dizer mensagem curta de texto." },
    { q:"Como se chama a chamada em que vês a pessoa no ecrã enquanto falas?", a:[{t:"Videochamada",ok:true},{t:"Rádio",ok:false},{t:"Carta",ok:false}], exp:"Na videochamada, vês e ouves a pessoa em tempo real." },
    { q:"O que faz uma impressora 3D?", a:[{t:"Faz objetos, camada a camada",ok:true},{t:"Imprime só fotografias em papel",ok:false},{t:"Corta o cabelo",ok:false}], exp:"A impressora 3D constrói objetos reais a partir de um modelo no computador." },
    { q:"Para que serve um carregador?", a:[{t:"Dar energia à bateria",ok:true},{t:"Apagar o ecrã",ok:false},{t:"Limpar os cabos todos",ok:false}], exp:"O carregador liga o aparelho à eletricidade e enche a bateria." },
    { q:"O que é um robô?", a:[{t:"Uma máquina programada",ok:true},{t:"Um tipo de planta",ok:false},{t:"Um tipo de nuvem",ok:false}], exp:"Os robôs seguem instruções que os programadores lhes dão." }
  ],
  direitos_digitais: [
    { q:"Qual é o primeiro dia do ano?", a:[{t:"1 de janeiro",ok:true},{t:"1 de dezembro",ok:false},{t:"25 de dezembro",ok:false}], exp:"O ano novo começa a 1 de janeiro." },
    { q:"O que se vê no céu à meia-noite do fim de ano?", a:[{t:"Fogo de artifício",ok:true},{t:"A Lua a desaparecer",ok:false},{t:"O Sol a nascer",ok:false}], exp:"O fogo de artifício é uma tradição na passagem de ano." },
    { q:"Quantos meses tem um ano?", a:[{t:"12",ok:true},{t:"10",ok:false},{t:"13",ok:false}], exp:"Um ano tem 12 meses." },
    { q:"Quantas passas se comem, em muitas casas portuguesas, à meia-noite?", a:[{t:"12",ok:true},{t:"7",ok:false},{t:"24",ok:false}], exp:"Come-se uma passa por cada badalada, e faz-se um desejo por cada uma." },
    { q:"Como se chama a noite de 31 de dezembro para 1 de janeiro?", a:[{t:"Passagem de ano",ok:true},{t:"Noite das Estrelas",ok:false},{t:"Noite de Verão",ok:false}], exp:"A passagem de ano é a noite em que o ano velho dá lugar ao ano novo." },
    { q:"O que se faz no fim do ano para melhorar no seguinte?", a:[{t:"Pensar em desejos e bons propósitos",ok:true},{t:"Esquecer tudo",ok:false},{t:"Ficar zangado com toda a gente",ok:false}], exp:"Muitas pessoas fazem uma lista de bons propósitos para o ano novo." }
  ]
};

// Difícil e Extremo — 4 opções por pergunta
export const QUIZ_BY_THEME_AVANCADO = {
  historia_internet: [
    { q:"Que príncipe, casado com a rainha Vitória, ajudou a popularizar a árvore de Natal no Reino Unido?", a:[{t:"O príncipe Alberto",ok:true},{t:"O príncipe Carlos",ok:false},{t:"O príncipe Henrique",ok:false},{t:"O príncipe Guilherme",ok:false}], exp:"O príncipe Alberto, de origem alemã, trouxe a tradição da árvore de Natal para a corte britânica. Uma gravura da família real à volta da árvore, em 1848, tornou-a moda." },
    { q:"Em que século há registos de árvores de Natal decoradas em casas na Alemanha?", a:[{t:"No século XVI",ok:true},{t:"No século X",ok:false},{t:"No século XX",ok:false},{t:"No século V",ok:false}], exp:"Há registos de árvores decoradas em casas alemãs desde o século XVI. A tradição foi-se espalhando e só chegou a muitos países séculos depois." },
    { q:"Em que ano apareceu a primeira árvore de Natal no Rockefeller Center, em Nova Iorque?", a:[{t:"Em 1931",ok:true},{t:"Em 1901",ok:false},{t:"Em 1951",ok:false},{t:"Em 1981",ok:false}], exp:"Em 1931, trabalhadores da construção do Rockefeller Center montaram uma pequena árvore, e hoje a árvore do centro é famosa em todo o mundo." },
    { q:"Que povos do norte da Europa celebravam o Yule, uma festa de inverno?", a:[{t:"Os germânicos e nórdicos",ok:true},{t:"Os egípcios",ok:false},{t:"Os incas",ok:false},{t:"Os gregos antigos",ok:false}], exp:"O Yule era uma festa de inverno dos povos germânicos e nórdicos, com fogueiras e banquetes. Algumas tradições de hoje, como as luzes e as plantas verdes, ligam-se a estas festas." },
    { q:"Porque se usavam plantas sempre verdes, como o pinheiro e o azevinho, nas festas de inverno?", a:[{t:"Porque continuavam verdes no inverno, símbolo de vida",ok:true},{t:"Porque eram as únicas que davam flores no inverno",ok:false},{t:"Porque eram as mais baratas do mercado",ok:false},{t:"Porque davam frutos doces no inverno",ok:false}], exp:"As plantas que não perdem as folhas lembravam que a vida continuava mesmo no frio, por isso entraram nas decorações das festas de inverno." }
  ],
  palavras_passe: [
    { q:"Quem criou, em 1882, a primeira fiada de luzes elétricas para uma árvore de Natal?", a:[{t:"Edward Johnson, que trabalhava com Edison",ok:true},{t:"Alexander Graham Bell, inventor",ok:false},{t:"Nikola Tesla, engenheiro",ok:false},{t:"Guglielmo Marconi, físico",ok:false}], exp:"Edward Johnson, que trabalhava com Edison, enfeitou uma árvore em Nova Iorque com lâmpadas elétricas coloridas em 1882." },
    { q:"Antes da eletricidade, como se iluminavam as árvores de Natal?", a:[{t:"Com pequenas velas",ok:true},{t:"Com lâmpadas LED a pilhas",ok:false},{t:"Com ecrãs de televisão",ok:false},{t:"Com lanternas elétricas",ok:false}], exp:"Eram usadas velas presas aos ramos, o que era muito perigoso por causa do risco de incêndio." },
    { q:"Comparando com as antigas lâmpadas de incandescência, quanta energia gastam as luzes LED?", a:[{t:"Muito menos, até mais de 80% menos",ok:true},{t:"Mais ou menos o mesmo",ok:false},{t:"O dobro da energia",ok:false},{t:"Cerca de 10% mais energia",ok:false}], exp:"As LED transformam mais energia em luz e menos em calor, por isso gastam muito menos eletricidade." },
    { q:"Numa fiada ligada «em série», o que acontece se uma lâmpada se fundir?", a:[{t:"O circuito corta-se e as outras apagam-se",ok:true},{t:"As outras lâmpadas ficam mais fortes",ok:false},{t:"Só a lâmpada ao lado também se apaga",ok:false},{t:"Todas as lâmpadas passam a mudar de cor",ok:false}], exp:"Em série, a corrente passa por todas as lâmpadas uma a seguir à outra. Se uma interrompe o caminho, as restantes deixam de acender." },
    { q:"Que marcação, na embalagem das luzes, mostra que o produto cumpre as regras de segurança da União Europeia?", a:[{t:"A marcação CE",ok:true},{t:"O código QR",ok:false},{t:"O símbolo PEGI",ok:false},{t:"A marca de reciclagem",ok:false}], exp:"A marcação CE indica que o fabricante declara que o produto cumpre os requisitos de segurança da União Europeia." }
  ],
  dados_pessoais: [
    { q:"De que país chegou a receita do bolo-rei a Portugal, em 1869, através da Confeitaria Nacional, em Lisboa?", a:[{t:"De França",ok:true},{t:"De Espanha",ok:false},{t:"Da Alemanha",ok:false},{t:"Da Itália",ok:false}], exp:"A receita veio de França e foi levada para Lisboa por Baltazar Roiz Castanheiro, da Confeitaria Nacional." },
    { q:"Que dois elementos se escondiam tradicionalmente na massa do bolo-rei?", a:[{t:"Uma fava e um brinde",ok:true},{t:"Uma noz e uma bolota",ok:false},{t:"Uma moeda e um botão",ok:false},{t:"Um anel e uma chave",ok:false}], exp:"Quem encontrava a fava tinha, por tradição, de pagar o bolo-rei seguinte. O brinde era uma pequena prenda." },
    { q:"Com o que se faz a aletria, um doce típico do Natal?", a:[{t:"Com massa fina cozida em leite",ok:true},{t:"Com arroz cozido em água salgada",ok:false},{t:"Com batata e queijo ralado",ok:false},{t:"Com farinha de milho e azeitonas",ok:false}], exp:"A aletria faz-se com fios finos de massa cozidos em leite, e leva açúcar, ovos e canela." },
    { q:"Como se fazem as rabanadas tradicionais?", a:[{t:"Com pão molhado em leite e ovo, frito e com canela",ok:true},{t:"Com massa de pizza, tomate e queijo",ok:false},{t:"Com arroz e salsa, cozidos no forno",ok:false},{t:"Com massa folhada e queijo fresco",ok:false}], exp:"As rabanadas aproveitam o pão do dia anterior, que se molha, se frita e se polvilha com açúcar e canela." },
    { q:"Com que se acompanha o bacalhau cozido na Consoada?", a:[{t:"Com batatas, couves e ovos cozidos",ok:true},{t:"Com hambúrguer e batatas fritas",ok:false},{t:"Com pizza e salada de fruta",ok:false},{t:"Com gelado e bolachas de chocolate",ok:false}], exp:"O bacalhau cozido costuma vir com batatas, couves e ovos cozidos, tudo regado com azeite." }
  ],
  instituicoes_apoio: [
    { q:"Como se chama o Pai Natal em França?", a:[{t:"Père Noël",ok:true},{t:"Weihnachtsmann",ok:false},{t:"Babbo Natale",ok:false},{t:"Papá Noel",ok:false}], exp:"Em França, o Pai Natal chama-se «Père Noël»." },
    { q:"Como se diz «Feliz Natal» em italiano?", a:[{t:"Buon Natale",ok:true},{t:"Feliz Navidad",ok:false},{t:"Joyeux Noël",ok:false},{t:"Merry Christmas",ok:false}], exp:"«Buon Natale» é «Feliz Natal» em italiano." },
    { q:"Quantos duendes do Natal visitam as crianças islandesas, segundo a tradição, nos dias antes do Natal?", a:[{t:"13",ok:true},{t:"7",ok:false},{t:"24",ok:false},{t:"3",ok:false}], exp:"Segundo a tradição popular da Islândia, 13 duendes vão chegando, um por noite, nos 13 dias antes do Natal." },
    { q:"Qual destes países tem o Natal no verão por ficar no hemisfério sul?", a:[{t:"A Nova Zelândia",ok:true},{t:"A Suécia",ok:false},{t:"A Rússia",ok:false},{t:"A Noruega",ok:false}], exp:"A Nova Zelândia fica no hemisfério sul, por isso o Natal cai no verão." },
    { q:"Como se diz «Feliz Natal» em alemão?", a:[{t:"Frohe Weihnachten",ok:true},{t:"Joyeux Noël",ok:false},{t:"Buon Natale",ok:false},{t:"Feliz Navidad",ok:false}], exp:"Em alemão diz-se «Frohe Weihnachten»." }
  ],
  virus_malware: [
    { q:"Porque têm os flocos de neve seis lados?", a:[{t:"Pela forma como a água se organiza ao congelar",ok:true},{t:"Porque o vento os corta quando caem",ok:false},{t:"Porque os flocos caem sempre a rodar",ok:false},{t:"Porque se partem ao tocar no chão",ok:false}], exp:"As moléculas de água arrumam-se numa estrutura hexagonal ao congelar, e isso dá aos cristais de gelo as seis pontas." },
    { q:"Como se chama, na América do Norte, a rena selvagem?", a:[{t:"Caribu",ok:true},{t:"Alce",ok:false},{t:"Bisonte",ok:false},{t:"Lince",ok:false}], exp:"O caribu e a rena são da mesma espécie. Caribu é o nome usado na América do Norte." },
    { q:"Porque parece branca a neve, se o gelo é transparente?", a:[{t:"Porque os cristais refletem a luz",ok:true},{t:"Porque tem tinta branca natural",ok:false},{t:"Porque está misturada com sal",ok:false},{t:"Porque é feita de leite congelado",ok:false}], exp:"Os muitos cristais refletem a luz em todas as direções, e por isso vemos branco, mesmo sendo o gelo transparente." },
    { q:"Qual destas frases sobre os cornos das renas é verdadeira?", a:[{t:"As fêmeas costumam manter os cornos no inverno",ok:true},{t:"Só os machos têm cornos, mais nenhuma",ok:false},{t:"Nenhuma rena tem cornos em dezembro",ok:false},{t:"Só as renas muito novas têm cornos",ok:false}], exp:"As renas são dos poucos veados em que as fêmeas também têm cornos. Muitos machos perdem-nos no fim do outono, mas as fêmeas guardam-nos até à primavera." },
    { q:"Qual é o ponto mais alto de Portugal continental, onde neva com mais frequência?", a:[{t:"A Serra da Estrela",ok:true},{t:"A Serra de Sintra",ok:false},{t:"A Serra da Arrábida",ok:false},{t:"A Serra do Caldeirão",ok:false}], exp:"A Torre, na Serra da Estrela, tem quase 2000 metros e é o ponto mais alto de Portugal continental." }
  ],
  jogos_seguros: [
    { q:"O que significa PEGI?", a:[{t:"Pan European Game Information",ok:true},{t:"Portuguese Electronic Games Institute",ok:false},{t:"Public Entertainment Game Index",ok:false},{t:"Personal Electronic Gaming Interface",ok:false}], exp:"PEGI é o sistema europeu que classifica os jogos por idade, e significa Pan European Game Information." },
    { q:"Quais são as idades usadas pelo PEGI?", a:[{t:"3, 7, 12, 16 e 18",ok:true},{t:"5, 10, 15 e 20",ok:false},{t:"6, 9, 14 e 21",ok:false},{t:"1, 2, 3 e 4",ok:false}], exp:"O PEGI usa as classificações 3, 7, 12, 16 e 18, e há ainda símbolos que indicam o tipo de conteúdo." },
    { q:"Que tipo de bateria recarregável é mais usado nos telemóveis e nas consolas portáteis?", a:[{t:"De iões de lítio",ok:true},{t:"De chumbo e ácido, como a dos carros",ok:false},{t:"De carvão",ok:false},{t:"De sal e água",ok:false}], exp:"As baterias de iões de lítio guardam muita energia em pouco peso." },
    { q:"Onde se devem entregar, em Portugal, comandos e consolas velhos que já não funcionam?", a:[{t:"Em lojas ou ecocentros de recolha",ok:true},{t:"No ecoponto do vidro, junto à rua",ok:false},{t:"No contentor azul do papel",ok:false},{t:"Em qualquer jardim ou parque",ok:false}], exp:"Os equipamentos elétricos e eletrónicos usados têm materiais que se reciclam e outros que poluem, por isso devem ir para pontos de recolha próprios." },
    { q:"Que direito tens se uma prenda tecnológica nova vier com defeito?", a:[{t:"Pedir a reparação ou a troca ao vendedor",ok:true},{t:"Nenhum, tens de ficar com ela",ok:false},{t:"Só podes reclamar no dia seguinte",ok:false},{t:"Só se pagares mais dinheiro",ok:false}], exp:"Em Portugal, os produtos novos têm garantia legal, e por isso o vendedor deve reparar ou trocar o que vier com defeito. Convém guardar a fatura." }
  ],
  pegada_digital: [
    { q:"Desde que ano o NORAD «segue» o Pai Natal todos os anos, a 24 de dezembro?", a:[{t:"Desde 1955",ok:true},{t:"Desde 1925",ok:false},{t:"Desde 2005",ok:false},{t:"Desde 1985",ok:false}], exp:"Tudo começou em 1955, quando um anúncio publicou por engano o número de telefone de um centro militar de defesa aérea, e as crianças ligaram para lá para falar com o Pai Natal." },
    { q:"Que música de Natal foi tocada no espaço pelos astronautas da missão Gemini 6A, em 1965?", a:[{t:"Jingle Bells",ok:true},{t:"Feliz Navidad",ok:false},{t:"White Christmas",ok:false},{t:"Last Christmas",ok:false}], exp:"Os astronautas Wally Schirra e Tom Stafford tocaram «Jingle Bells» com uma gaita de boca e guizos, e dizem que foi das primeiras músicas tocadas no espaço." },
    { q:"A que altura, aproximadamente, orbita a Estação Espacial Internacional?", a:[{t:"Cerca de 400 km",ok:true},{t:"Cerca de 40 km",ok:false},{t:"Cerca de 40 000 km",ok:false},{t:"Cerca de 4 000 km",ok:false}], exp:"A ISS orbita a cerca de 400 quilómetros de altura." },
    { q:"Quantas voltas à Terra dá a Estação Espacial Internacional por dia?", a:[{t:"Cerca de 16",ok:true},{t:"Apenas uma",ok:false},{t:"Cerca de 60",ok:false},{t:"Cerca de 4",ok:false}], exp:"A ISS viaja a uma velocidade muito grande e dá cerca de 16 voltas à Terra em 24 horas, por isso os astronautas veem muitos nasceres do Sol por dia." },
    { q:"Qual é, aproximadamente, a distância à estrela mais próxima do Sol, a Proxima Centauri?", a:[{t:"Cerca de 4,2 anos-luz",ok:true},{t:"Cerca de 4,2 minutos-luz",ok:false},{t:"Cerca de 420 anos-luz",ok:false},{t:"Cerca de 42 anos-luz",ok:false}], exp:"Mesmo a estrela mais próxima do Sol está a cerca de 4,2 anos-luz, o que quer dizer que a sua luz demora mais de quatro anos a chegar até nós." }
  ],
  fake_news: [
    { q:"Em que ano foi enviado o primeiro cartão de Natal comercial?", a:[{t:"Em 1843",ok:true},{t:"Em 1743",ok:false},{t:"Em 1943",ok:false},{t:"Em 1893",ok:false}], exp:"O primeiro cartão de Natal comercial foi feito em Londres, em 1843." },
    { q:"Quem encomendou o primeiro cartão de Natal comercial?", a:[{t:"Sir Henry Cole",ok:true},{t:"Charles Dickens",ok:false},{t:"Thomas Edison",ok:false},{t:"Rowland Hill",ok:false}], exp:"Sir Henry Cole, que trabalhava nos correios britânicos, encomendou o cartão a um ilustrador e vendeu cópias." },
    { q:"Em que país surgiu o primeiro selo postal do mundo, o «Penny Black», em 1840?", a:[{t:"No Reino Unido",ok:true},{t:"Em Portugal",ok:false},{t:"Nos Estados Unidos",ok:false},{t:"Em França",ok:false}], exp:"O Penny Black, de 1840, foi o primeiro selo postal do mundo e apareceu no Reino Unido." },
    { q:"Em que ano surgiram os primeiros selos postais portugueses?", a:[{t:"Em 1853",ok:true},{t:"Em 1753",ok:false},{t:"Em 1953",ok:false},{t:"Em 1903",ok:false}], exp:"Os primeiros selos portugueses foram emitidos em 1853, no reinado de D. Maria II." },
    { q:"Que escritor britânico publicou «Um Conto de Natal» em 1843?", a:[{t:"Charles Dickens",ok:true},{t:"William Shakespeare",ok:false},{t:"Oscar Wilde",ok:false},{t:"Lewis Carroll",ok:false}], exp:"Charles Dickens publicou «Um Conto de Natal» em dezembro de 1843, e a história ajudou a popularizar o espírito do Natal." }
  ],
  phishing: [
    { q:"Quem escreveu «Jingle Bells», publicada em 1857?", a:[{t:"James Lord Pierpont",ok:true},{t:"Irving Berlin",ok:false},{t:"Bing Crosby",ok:false},{t:"Mariah Carey",ok:false}], exp:"James Lord Pierpont escreveu a canção, que na altura tinha outro título." },
    { q:"Qual era o título original de «Jingle Bells»?", a:[{t:"«One Horse Open Sleigh»",ok:true},{t:"«Bells of Winter»",ok:false},{t:"«The Snowman's Song»",ok:false},{t:"«Ring the Bells»",ok:false}], exp:"«One Horse Open Sleigh» significa «Trenó aberto de um só cavalo»." },
    { q:"Quem compôs «White Christmas», que Bing Crosby tornou famosa em 1942?", a:[{t:"Irving Berlin",ok:true},{t:"Frank Sinatra",ok:false},{t:"Elvis Presley",ok:false},{t:"Paul McCartney",ok:false}], exp:"Irving Berlin compôs «White Christmas», e a gravação de Bing Crosby é das mais vendidas de sempre." },
    { q:"Em que década foi lançada «All I Want for Christmas Is You», de Mariah Carey?", a:[{t:"Nos anos 90 (1994)",ok:true},{t:"Nos anos 70",ok:false},{t:"Nos anos 2010",ok:false},{t:"Nos anos 2000",ok:false}], exp:"A canção foi lançada em 1994 e voltou ao topo das tabelas em muitos Natais." },
    { q:"Que grupo lançou, em 1984, a canção «Last Christmas»?", a:[{t:"Os Wham!",ok:true},{t:"Os ABBA",ok:false},{t:"Os Queen",ok:false},{t:"Os Beatles",ok:false}], exp:"«Last Christmas» foi lançada pelos Wham!, a banda de George Michael e Andrew Ridgeley, em 1984." }
  ],
  dispositivos: [
    { q:"Na canção «Os 12 Dias de Natal», as prendas repetem-se de dia para dia (1 no 1.º dia, 1+2 no 2.º dia, e por aí fora). Quantas prendas são dadas ao todo nos 12 dias?", a:[{t:"364",ok:true},{t:"78",ok:false},{t:"144",ok:false},{t:"288",ok:false}], exp:"Somam-se os números triangulares de 1 a 12, e o resultado é 364." },
    { q:"Uma árvore leva 120 luzes e cada fiada tem 20 luzes. Quantas fiadas são precisas?", a:[{t:"6",ok:true},{t:"4",ok:false},{t:"12",ok:false},{t:"8",ok:false}], exp:"120 ÷ 20 = 6 fiadas." },
    { q:"Uma prenda custa 18 € e tem um desconto de 25%. Quanto custa agora?", a:[{t:"13,50 €",ok:true},{t:"4,50 €",ok:false},{t:"15 €",ok:false},{t:"14,50 €",ok:false}], exp:"25% de 18 € é 4,50 €, e 18 − 4,50 = 13,50 €." },
    { q:"O trenó percorre 1 200 km em 4 horas, sempre à mesma velocidade. Qual é a velocidade?", a:[{t:"300 km/h",ok:true},{t:"120 km/h",ok:false},{t:"30 km/h",ok:false},{t:"400 km/h",ok:false}], exp:"1 200 ÷ 4 = 300 km/h." },
    { q:"Quantos dias passam entre o dia 25 de dezembro e o dia 1 de janeiro?", a:[{t:"7",ok:true},{t:"5",ok:false},{t:"8",ok:false},{t:"6",ok:false}], exp:"De 25 a 31 de dezembro são 6 dias e mais 1 até 1 de janeiro, o que dá 7 dias." }
  ],
  regras_familia: [
    { q:"O que é o «Amigo Secreto» (ou «Pai Natal Secreto»)?", a:[{t:"Cada pessoa sorteia alguém e dá-lhe uma prenda em segredo",ok:true},{t:"Todos os convidados compram prendas iguais",ok:false},{t:"Só os adultos da família dão prendas",ok:false},{t:"Escondem-se as prendas no jardim e procuram-se",ok:false}], exp:"No Amigo Secreto sorteiam-se os nomes, e cada pessoa oferece uma prenda à pessoa sorteada, sem revelar quem é." },
    { q:"O que significa fazer voluntariado no Natal?", a:[{t:"Ajudar os outros sem receber dinheiro",ok:true},{t:"Trabalhar numa loja, a receber ordenado",ok:false},{t:"Vender prendas na rua da cidade",ok:false},{t:"Fazer as compras de Natal",ok:false}], exp:"Voluntariado é dar o nosso tempo e trabalho para ajudar, sem receber pagamento." },
    { q:"Em Portugal, o dia 25 de dezembro é feriado?", a:[{t:"Sim, é feriado nacional",ok:true},{t:"Não, só em Lisboa",ok:false},{t:"Só nas escolas",ok:false},{t:"Só em janeiro",ok:false}], exp:"O Natal, a 25 de dezembro, é feriado nacional em Portugal." },
    { q:"Qual destas campanhas é típica da época de Natal em Portugal?", a:[{t:"Recolha de alimentos e de brinquedos",ok:true},{t:"A venda de bilhetes para o carnaval",ok:false},{t:"Os grandes saldos de verão",ok:false},{t:"A feira de verão da escola",ok:false}], exp:"Muitas escolas, bancos alimentares e instituições fazem campanhas de solidariedade no Natal." },
    { q:"Qual é uma boa forma de repartir as tarefas no Natal em família?", a:[{t:"Cada pessoa ajuda numa tarefa, e todos dividem o trabalho",ok:true},{t:"Só uma pessoa faz tudo",ok:false},{t:"Ninguém ajuda",ok:false},{t:"Os adultos fazem tudo e as crianças fogem",ok:false}], exp:"Quando todos ajudam, o trabalho é mais leve e a festa é de todos." }
  ],
  wifi_publico: [
    { q:"Como se chama o dia em que a noite é mais longa no hemisfério norte, por volta de 21 de dezembro?", a:[{t:"Solstício de inverno",ok:true},{t:"Solstício de verão",ok:false},{t:"Equinócio de primavera",ok:false},{t:"Equinócio de outono",ok:false}], exp:"No solstício de inverno, o hemisfério norte recebe menos luz do Sol e o dia é o mais curto do ano." },
    { q:"Porque há estações do ano?", a:[{t:"Porque o eixo da Terra está inclinado",ok:true},{t:"Porque a Lua muda de forma",ok:false},{t:"Porque o Sol se apaga no inverno",ok:false},{t:"Porque a Terra está sempre mais perto do Sol no verão e mais longe no inverno",ok:false}], exp:"A inclinação do eixo faz com que cada hemisfério receba a luz do Sol de modo diferente ao longo do ano." },
    { q:"Quando é verão em Portugal, que estação é na Austrália?", a:[{t:"Inverno",ok:true},{t:"Verão também",ok:false},{t:"Primavera",ok:false},{t:"Outono",ok:false}], exp:"A Austrália está no hemisfério sul, onde as estações são opostas às do hemisfério norte." },
    { q:"Porque há um ano bissexto, com 29 de fevereiro, de quatro em quatro anos?", a:[{t:"Porque o ano dura cerca de 365,25 dias",ok:true},{t:"Porque o inverno é mais comprido",ok:false},{t:"Porque a Lua fica maior nesse ano",ok:false},{t:"Porque a Terra fica parada um dia",ok:false}], exp:"A Terra demora cerca de 365 dias e 6 horas a dar a volta ao Sol. Essas horas acumuladas dão um dia a mais de quatro em quatro anos." },
    { q:"Quanto tempo demora a Terra, aproximadamente, a dar uma volta sobre si própria?", a:[{t:"24 horas",ok:true},{t:"12 horas",ok:false},{t:"7 dias",ok:false},{t:"365 dias",ok:false}], exp:"A Terra gira sobre si mesma em cerca de 24 horas, e isso dá origem ao dia e à noite." }
  ],
  copias_seguranca: [
    { q:"Quais são os três «R» do lema do ambiente?", a:[{t:"Reduzir, reutilizar e reciclar",ok:true},{t:"Recortar, repetir e reparar",ok:false},{t:"Rasgar, rolar e regar",ok:false},{t:"Rever, rimar e repartir",ok:false}], exp:"Reduzir o que se gasta, reutilizar o que se tem e reciclar o que já não serve." },
    { q:"Qual destes embrulhos NÃO deve ir ao ecoponto azul?", a:[{t:"Papel com purpurinas ou com plástico",ok:true},{t:"Uma caixa de cartão simples",ok:false},{t:"Um jornal",ok:false},{t:"Uma revista antiga",ok:false}], exp:"O papel com plástico ou purpurinas mistura materiais e não se recicla com o papel normal." },
    { q:"Qual é uma alternativa ecológica ao papel de embrulho descartável?", a:[{t:"Embrulhar com tecido que se pode usar muitas vezes",ok:true},{t:"Usar muita fita adesiva",ok:false},{t:"Usar plástico de bolhas e deitar fora",ok:false},{t:"Embrulhar tudo em várias camadas de plástico",ok:false}], exp:"Embrulhar com tecido (como no furoshiki japonês) evita lixo e pode usar-se várias vezes." },
    { q:"O que é um ecocentro?", a:[{t:"Local onde se entregam resíduos grandes, como móveis",ok:true},{t:"Um centro comercial só de Natal",ok:false},{t:"Uma fábrica de brinquedos de plástico",ok:false},{t:"Uma loja de produtos biológicos",ok:false}], exp:"Os ecocentros recebem resíduos volumosos ou perigosos, que não devem ir para os ecopontos." },
    { q:"Como se chama o símbolo de reciclagem de três setas em triângulo?", a:[{t:"Anel de Möbius",ok:true},{t:"Triângulo de Pitágoras",ok:false},{t:"Seta de Newton",ok:false},{t:"Roda de Arquimedes",ok:false}], exp:"O símbolo de reciclagem é conhecido como anel (ou fita) de Möbius." }
  ],
  acessibilidade_digital: [
    { q:"Quem inventou o sistema de escrita Braille?", a:[{t:"Louis Braille",ok:true},{t:"Alexander Graham Bell",ok:false},{t:"Samuel Morse",ok:false},{t:"Thomas Edison",ok:false}], exp:"Louis Braille, que ficou cego em criança, criou o sistema quando era adolescente, em França." },
    { q:"Como se chama a língua das pessoas surdas em Portugal?", a:[{t:"Língua Gestual Portuguesa (LGP)",ok:true},{t:"Mímica Universal",ok:false},{t:"Braille Português",ok:false},{t:"Língua Portuguesa Falada",ok:false}], exp:"A Língua Gestual Portuguesa é protegida pela Constituição da República Portuguesa desde 1997." },
    { q:"O que é a audiodescrição?", a:[{t:"Narração que descreve imagens para quem não vê",ok:true},{t:"Um aumento do volume do som",ok:false},{t:"Uma música de fundo no filme",ok:false},{t:"Um filme sem som nenhum",ok:false}], exp:"A audiodescrição conta o que se passa no ecrã, para que pessoas cegas ou com baixa visão acompanhem filmes e peças de teatro." },
    { q:"Quantos pontos tem uma célula do Braille tradicional?", a:[{t:"Seis",ok:true},{t:"Quatro",ok:false},{t:"Doze",ok:false},{t:"Dezasseis",ok:false}], exp:"A célula Braille tem seis pontos, em duas colunas de três, e cada combinação forma uma letra ou um número." },
    { q:"Que desenho se usa em todo o mundo para indicar acesso para pessoas com mobilidade reduzida?", a:[{t:"Uma figura numa cadeira de rodas",ok:true},{t:"Um cão a passear",ok:false},{t:"Uma cruz verde em fundo branco",ok:false},{t:"Uma seta a apontar para cima",ok:false}], exp:"O símbolo internacional de acesso mostra uma figura numa cadeira de rodas." }
  ],
  spam_compras: [
    { q:"Na União Europeia, em quantos dias se pode, em regra, devolver um produto comprado online, sem dar explicações?", a:[{t:"14 dias",ok:true},{t:"2 dias",ok:false},{t:"1 ano",ok:false},{t:"7 dias",ok:false}], exp:"Em regra, a lei dá 14 dias para o consumidor se arrepender de uma compra feita à distância." },
    { q:"O que é a «Black Friday»?", a:[{t:"Uma sexta-feira de grandes promoções",ok:true},{t:"Um dia em que as lojas ficam fechadas",ok:false},{t:"Uma festa de Natal na escola",ok:false},{t:"Um dia de eleições em Portugal",ok:false}], exp:"A Black Friday é um dia de promoções que vem dos Estados Unidos e se espalhou pelo mundo, no fim de novembro." },
    { q:"O que significa IVA no preço de um produto?", a:[{t:"Imposto sobre o Valor Acrescentado",ok:true},{t:"Imposto sobre Vendas Avulsas",ok:false},{t:"Índice de Vendas Anuais",ok:false},{t:"Imposto sobre Veículos Antigos",ok:false}], exp:"O IVA é um imposto que já está incluído no preço final." },
    { q:"Uma prenda de 40 € tem 10% de desconto. Quanto custa agora?", a:[{t:"36 €",ok:true},{t:"30 €",ok:false},{t:"39 €",ok:false},{t:"4 €",ok:false}], exp:"10% de 40 € é 4 €, e 40 − 4 = 36 €." },
    { q:"Qual é a vantagem de fazer um orçamento para as prendas?", a:[{t:"Saber quanto se pode gastar",ok:true},{t:"Gastar sempre mais",ok:false},{t:"Esquecer o que já tens",ok:false},{t:"Comprar tudo no último dia",ok:false}], exp:"Um orçamento ajuda a escolher bem e a não gastar mais do que se pode." }
  ],
  denuncia_conteudo: [
    { q:"Que linha imaginária passa junto à Aldeia do Pai Natal, em Rovaniemi?", a:[{t:"O Círculo Polar Ártico",ok:true},{t:"O Equador",ok:false},{t:"O Trópico de Câncer",ok:false},{t:"O Meridiano de Greenwich",ok:false}], exp:"A aldeia está mesmo em cima do Círculo Polar Ártico." },
    { q:"Como se chama o Pai Natal em finlandês?", a:[{t:"Joulupukki",ok:true},{t:"Weihnachtsmann",ok:false},{t:"Julenisse",ok:false},{t:"Tomte",ok:false}], exp:"Em finlandês, o Pai Natal é o «Joulupukki»." },
    { q:"Qual é a capital da Lapónia finlandesa?", a:[{t:"Rovaniemi",ok:true},{t:"Helsínquia",ok:false},{t:"Estocolmo",ok:false},{t:"Oslo",ok:false}], exp:"Rovaniemi é a capital administrativa da Lapónia finlandesa." },
    { q:"O que é a «noite polar»?", a:[{t:"Período de inverno sem Sol, nas regiões polares",ok:true},{t:"Uma noite com muitas estrelas a brilhar",ok:false},{t:"Uma noite de chuva forte e vento",ok:false},{t:"Uma noite sem Lua e sem nuvens",ok:false}], exp:"Perto dos polos, no inverno, passam-se dias em que o Sol não chega a nascer." },
    { q:"Que fenómeno luminoso e colorido se vê no céu da Lapónia, no inverno?", a:[{t:"A aurora boreal",ok:true},{t:"O eclipse total",ok:false},{t:"O arco-íris de Natal",ok:false},{t:"A chuva de meteoros",ok:false}], exp:"A aurora boreal acontece quando partículas do Sol chocam com a atmosfera da Terra e produzem luz." }
  ],
  identidade_digital: [
    { q:"Em que ano se estreou o filme «Sozinho em Casa» (Home Alone)?", a:[{t:"Em 1990",ok:true},{t:"Em 1970",ok:false},{t:"Em 2005",ok:false},{t:"Em 1980",ok:false}], exp:"«Home Alone» estreou em 1990." },
    { q:"Quem escreveu e ilustrou o livro «O Grinch», publicado em 1957?", a:[{t:"Dr. Seuss",ok:true},{t:"Roald Dahl",ok:false},{t:"Beatrix Potter",ok:false},{t:"Hans Christian Andersen",ok:false}], exp:"Dr. Seuss escreveu e ilustrou «How the Grinch Stole Christmas!» em 1957." },
    { q:"Em que ano foi criada a rena Rudolfo, num livro de uma loja de departamentos norte-americana?", a:[{t:"Em 1939",ok:true},{t:"Em 1839",ok:false},{t:"Em 1989",ok:false},{t:"Em 1909",ok:false}], exp:"Robert L. May criou o Rudolfo em 1939 para uma loja de departamentos nos Estados Unidos." },
    { q:"«O Homem de Neve» (The Snowman), curta de animação britânica de 1982, baseia-se em que tipo de obra?", a:[{t:"Num livro ilustrado de Raymond Briggs",ok:true},{t:"Num jogo de computador de aventuras",ok:false},{t:"Numa canção de rock muito famosa",ok:false},{t:"Numa peça de teatro de rua",ok:false}], exp:"O filme inspira-se no livro ilustrado, quase sem palavras, de Raymond Briggs." },
    { q:"O que é um argumentista?", a:[{t:"Quem escreve o guião de um filme",ok:true},{t:"Quem filma as cenas com a câmara",ok:false},{t:"Quem escolhe as pipocas da sala",ok:false},{t:"Quem monta o cenário do estúdio",ok:false}], exp:"O argumentista escreve a história e os diálogos do filme." }
  ],
  privacidade: [
    { q:"De que país é originária a estrela-de-natal (poinsétia)?", a:[{t:"Do México",ok:true},{t:"Da Finlândia",ok:false},{t:"Do Japão",ok:false},{t:"Da Islândia",ok:false}], exp:"A estrela-de-natal é originária do México." },
    { q:"O que são, na verdade, as «pétalas» vermelhas da estrela-de-natal?", a:[{t:"Folhas modificadas (brácteas)",ok:true},{t:"Flores enormes",ok:false},{t:"Frutos pintados",ok:false},{t:"Raízes",ok:false}], exp:"As partes vermelhas são folhas especiais, chamadas brácteas, e as verdadeiras flores são pequenas e amarelas no centro." },
    { q:"Em que país foram feitas as primeiras bolas de vidro para a árvore, na aldeia de Lauscha, no século XIX?", a:[{t:"Na Alemanha",ok:true},{t:"Em Portugal",ok:false},{t:"No Brasil",ok:false},{t:"No Egito",ok:false}], exp:"As primeiras bolas de vidro sopradas para árvores de Natal surgiram em Lauscha, na Alemanha." },
    { q:"Como cresce o visco, uma planta usada nos enfeites de Natal?", a:[{t:"Como semiparasita, nos ramos de árvores",ok:true},{t:"Só debaixo de água, como uma alga",ok:false},{t:"Só no deserto, sem água",ok:false},{t:"Só em vasos de cozinha",ok:false}], exp:"O visco cresce nos ramos de outras árvores, de onde tira água e nutrientes." },
    { q:"Que tipo de árvore é o abeto, muito usado como árvore de Natal?", a:[{t:"Uma conífera sempre verde, de folhas em forma de agulha",ok:true},{t:"Uma árvore que perde as folhas no inverno",ok:false},{t:"Uma palmeira",ok:false},{t:"Um arbusto de flores",ok:false}], exp:"O abeto é uma conífera, e por isso mantém as folhas verdes todo o ano." }
  ],
  contacto_desconhecidos: [
    { q:"Qual foi a primeira mensagem SMS enviada no mundo, a 3 de dezembro de 1992?", a:[{t:"«Merry Christmas»",ok:true},{t:"«Hello World»",ok:false},{t:"«Happy New Year»",ok:false},{t:"«Can you hear me?»",ok:false}], exp:"O engenheiro Neil Papworth enviou «Merry Christmas» de um computador para um telemóvel, na rede da Vodafone, no Reino Unido." },
    { q:"Quantos carateres pode ter, no máximo, um SMS tradicional?", a:[{t:"160",ok:true},{t:"80",ok:false},{t:"280",ok:false},{t:"100",ok:false}], exp:"O SMS tradicional pode ter até 160 carateres." },
    { q:"Para que serve um código QR?", a:[{t:"Para guardar um endereço ou texto que a câmara lê",ok:true},{t:"Para limpar o ecrã do telemóvel",ok:false},{t:"Para carregar a bateria mais depressa",ok:false},{t:"Para medir a temperatura da sala",ok:false}], exp:"A câmara lê o desenho do código QR e abre, por exemplo, uma página ou um texto." },
    { q:"O que é um drone?", a:[{t:"Um veículo aéreo sem piloto",ok:true},{t:"Um tipo de bolo de Natal",ok:false},{t:"Uma peça de roupa quente",ok:false},{t:"Um tipo de aspirador",ok:false}], exp:"Os drones voam sem ninguém a bordo, e são controlados por comando ou por programa." },
    { q:"O que quer dizer «inteligência artificial»?", a:[{t:"Programas que aprendem com muitos dados",ok:true},{t:"Uma árvore com lâmpadas",ok:false},{t:"Um aparelho para limpar o chão",ok:false},{t:"Um aparelho que mede o tempo",ok:false}], exp:"A inteligência artificial é feita de programas que aprendem a partir de muitos dados." }
  ],
  direitos_digitais: [
    { q:"Que cidade portuguesa é famosa pelo espetáculo de fogo de artifício na passagem de ano, que chegou a ser reconhecido pelo Guinness World Records?", a:[{t:"O Funchal, na Madeira",ok:true},{t:"Évora",ok:false},{t:"Bragança",ok:false},{t:"Aveiro",ok:false}], exp:"O fogo de artifício do Funchal é conhecido no mundo inteiro e já foi reconhecido como um dos maiores do mundo." },
    { q:"De que país é originária a canção «Auld Lang Syne», muitas vezes cantada à meia-noite na passagem de ano?", a:[{t:"Da Escócia",ok:true},{t:"Da Irlanda",ok:false},{t:"Dos Estados Unidos",ok:false},{t:"Da Espanha",ok:false}], exp:"A canção nasceu de um poema do escocês Robert Burns, e canta-se em muitos países na passagem de ano." },
    { q:"Quantos dias tem um ano bissexto?", a:[{t:"366",ok:true},{t:"364",ok:false},{t:"365",ok:false},{t:"367",ok:false}], exp:"O ano bissexto tem 366 dias, porque fevereiro tem 29." },
    { q:"Em que ano foi criado o calendário gregoriano, que usamos hoje?", a:[{t:"Em 1582",ok:true},{t:"Em 1492",ok:false},{t:"Em 1755",ok:false},{t:"Em 1910",ok:false}], exp:"O calendário gregoriano foi criado em 1582, para corrigir o desvio dos dias, e Portugal adotou-o nesse mesmo ano." },
    { q:"Quantos segundos tem uma hora?", a:[{t:"3 600",ok:true},{t:"60",ok:false},{t:"360",ok:false},{t:"6 000",ok:false}], exp:"Uma hora tem 60 minutos, e cada minuto tem 60 segundos, o que dá 3 600 segundos." }
  ]
};
