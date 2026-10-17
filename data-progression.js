// ===== Sistemas de progressão: mapa, artefactos, conquistas — MISSÃO CIBERSEGURANÇA =====
// MAP_REGIONS, ARTEFACTS, ARTEFACT_SETS, SET_REACTIONS, ACHIEVEMENTS_DEFS

// Mantém os 20 níveis e a sua dificuldade intactos (só o TEMA de cada
// nível mudou, ver data-levels.js). Os 4 mundos e as posições dos bosses
// mantêm-se exatamente iguais à estrutura original.
export const MAP_REGIONS = [
  { id:"origens",        icon:"🌐", name:"Reino dos Fundamentos",         sub:"Origens, luzes, mesa de Natal, neve e o Vírus Gigante",      levels:[0,1,2,3,4],
    mapBg:"map-mundo1.webp",
    nodePos:[{x:22.7,y:85.0},{x:37.1,y:76.5},{x:52.6,y:68.0},{x:68.8,y:51.0},{x:85.5,y:20.2}] },
  { id:"desenvolvimento",icon:"📡", name:"Vale da Comunicação Segura",    sub:"Prendas, espaço, cartões, música e o Monstro do Phishing",    levels:[5,6,7,8],
    mapBg:"map-mundo2.webp",
    nodePos:[{x:25.0,y:53.0},{x:40.0,y:56.5},{x:53.0,y:58.5},{x:60.5,y:54.5}] },
  { id:"protecao",       icon:"🛡️", name:"Fortaleza da Proteção Digital", sub:"Matemática, família, reciclagem, compras e o Robô do Spam",  levels:[9,10,11,12,13,14],
    mapBg:"map-mundo3.webp",
    nodePos:[{x:5.0,y:87.0},{x:14.5,y:76.0},{x:24.5,y:67.5},{x:22.5,y:57.0},{x:33.0,y:54.0},{x:40.0,y:49.5}] },
  { id:"participacao",   icon:"🔒", name:"Cidade da Identidade Digital",  sub:"Pai Natal, filmes, enfeites, tecnologia e o Espião das Sombras",   levels:[15,16,17,18,19],
    mapBg:"map-mundo4.webp",
    nodePos:[{x:5.0,y:78.0},{x:18.0,y:89.0},{x:35.0,y:82.0},{x:30.0,y:59.0},{x:50.0,y:53.0}] },
  { id:"base",           icon:"🏠", name:"Base do VanBerto's",            sub:"O teu ponto de partida",                           levels:[] },
];

export const ARTEFACTS = [
  // idx 0-4 — Conjunto: Tradições e Ciência
  { emoji:"🎄", name:"Pinha Dourada", short:"A História do Natal", color:"#40d0ff", glow:"rgba(64,208,255,0.6)", vanberto:"O Natal tem uma história muito antiga!", set:0 },
  { emoji:"💡", name:"Fio de Luzes", short:"Luzes de Natal", color:"#ffd700", glow:"rgba(255,215,0,0.6)", vanberto:"Luzes LED, menos energia!", set:0 },
  { emoji:"🍽️", name:"Bolo-Rei", short:"A Mesa de Natal", color:"#ff9060", glow:"rgba(255,144,96,0.6)", vanberto:"Bacalhau, rabanadas e bolo-rei!", set:0 },
  { emoji:"🌍", name:"Globo de Natal", short:"O Natal pelo Mundo", color:"#80ffb0", glow:"rgba(128,255,176,0.6)", vanberto:"Cada país tem o seu Natal!", set:0 },
  { emoji:"❄️", name:"Floco de Neve", short:"A Ciência da Neve", color:"#e0409a", glow:"rgba(224,64,154,0.6)", vanberto:"Seis pontas em cada floco!", set:0 },
  // idx 5-9 — Conjunto: Natal Digital e Música
  { emoji:"🎮", name:"Comando de Natal", short:"Prendas Tecnológicas", color:"#c0a0ff", glow:"rgba(192,160,255,0.6)", vanberto:"Vê o PEGI antes de oferecer um jogo!", set:1 },
  { emoji:"🛰️", name:"Satélite Festivo", short:"O Natal no Espaço", color:"#60e060", glow:"rgba(96,224,96,0.6)", vanberto:"Até no espaço se festeja o Natal!", set:1 },
  { emoji:"✉️", name:"Postal de Natal", short:"Cartões e Correio", color:"#ffa040", glow:"rgba(255,160,64,0.6)", vanberto:"O primeiro cartão tem mais de 180 anos!", set:1 },
  { emoji:"🎶", name:"Sino Musical", short:"Músicas de Natal", color:"#8a5cff", glow:"rgba(138,92,255,0.6)", vanberto:"Jingle Bells por todo o lado!", set:1 },
  { emoji:"🧮", name:"Calculadora Festiva", short:"A Matemática de Natal", color:"#ffe060", glow:"rgba(255,224,96,0.6)", vanberto:"Somar, dividir e poupar!", set:1 },
  // idx 10-14 — Conjunto: Família e Planeta
  { emoji:"👨‍👩‍👧", name:"Mesa em Família", short:"Tradições em Família", color:"#60ffff", glow:"rgba(96,255,255,0.6)", vanberto:"O melhor do Natal é estar juntos!", set:2 },
  { emoji:"🌗", name:"Relógio do Solstício", short:"O Dia Mais Curto", color:"#ffc060", glow:"rgba(255,192,96,0.6)", vanberto:"Hoje é o dia mais curto do ano!", set:2 },
  { emoji:"♻️", name:"Laço Reciclado", short:"Embrulhos e Reciclagem", color:"#80c8ff", glow:"rgba(128,200,255,0.6)", vanberto:"Reduzir, reutilizar e reciclar!", set:2 },
  { emoji:"♿", name:"Estrela para Todos", short:"Um Natal para Todos", color:"#ff6060", glow:"rgba(255,96,96,0.6)", vanberto:"O Natal é de toda a gente!", set:2 },
  { emoji:"🛒", name:"Cesto de Natal", short:"Compras de Natal", color:"#ffd080", glow:"rgba(255,208,128,0.6)", vanberto:"Compara preços e guarda a fatura!", set:2 },
  // idx 15-19 — Conjunto: Magia do Natal
  { emoji:"🎅", name:"Gorro do Pai Natal", short:"O Pai Natal e a Lapónia", color:"#c080ff", glow:"rgba(192,128,255,0.6)", vanberto:"Ho, ho, ho! Aurora boreal na Lapónia!", set:3 },
  { emoji:"🎬", name:"Bobine de Natal", short:"Filmes de Natal", color:"#ff80a0", glow:"rgba(255,128,160,0.6)", vanberto:"Uma sessão de cinema em família!", set:3 },
  { emoji:"🎄", name:"Bola de Natal", short:"Enfeites de Natal", color:"#60d0ff", glow:"rgba(96,208,255,0.6)", vanberto:"Vermelho, verde e dourado!", set:3 },
  { emoji:"💻", name:"Pacote Tecnológico", short:"O Natal Tecnológico", color:"#80ff80", glow:"rgba(128,255,128,0.6)", vanberto:"A primeira SMS foi «Merry Christmas»!", set:3 },
  { emoji:"🎆", name:"Foguete de Ano Novo", short:"Passagem de Ano", color:"#ff6b35", glow:"rgba(255,107,53,0.6)", vanberto:"Feliz Ano Novo! 12 passas, 12 desejos!", set:3 },
];

export const ARTEFACT_SETS = [
  { name:"Tradições e Ciência do Natal", icon:"🎄", bonus:150 },
  { name:"Natal Digital e Música",         icon:"🎶", bonus:150 },
  { name:"Natal em Família e no Planeta",  icon:"🏡", bonus:150 },
  { name:"A Magia do Natal",               icon:"🎅", bonus:200 },
];

export const SET_REACTIONS = [
  "🎉 Conjunto TRADIÇÕES E CIÊNCIA completo! Já sabes muito sobre o Natal!",
  "🎶 Conjunto NATAL DIGITAL E MÚSICA completo! Que sinfonia de saber!",
  "🏡 Conjunto FAMÍLIA E PLANETA completo! Um Natal em família e amigo do ambiente!",
  "🎅 Conjunto COMPLETO! MESTRE SUPREMO do Natal!",
];

export const ACHIEVEMENTS_DEFS = [
  { id:"primeiros_passos", tier:"🥉", name:"Primeiros Passos",        desc:"Completa o primeiro nível." },
  { id:"curioso",          tier:"🥉", name:"Curioso",                  desc:"Lê 10 curiosidades." },
  { id:"explorador",       tier:"🥈", name:"Explorador",               desc:"Encontra todos os segredos de um nível." },
  { id:"sabio",            tier:"🥈", name:"Sábio",                    desc:"Acerta 20 perguntas." },
  { id:"caca_tesouros",    tier:"🏆", name:"Caçador de Tesouros",      desc:"Encontra todas as salas secretas do jogo." },
  { id:"guardiao",         tier:"🥇", name:"Guardião da Cibersegurança",desc:"Completa o jogo." },
  { id:"mestre",           tier:"🥇", name:"Mestre VanBerto's",        desc:"Acerta todas as perguntas à primeira tentativa." },
  { id:"lenda",            tier:"🏆", name:"Lenda Digital",            desc:"100% de conclusão — todos os níveis e todas as estrelas." },
];
