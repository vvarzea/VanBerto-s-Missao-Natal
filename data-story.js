// ===== Conteúdo narrativo — MISSÃO NATAL =====
// Ficheiro puramente de dados, sem lógica de jogo.

export const REGION_INTRO = {
  origens: {
    vanberto: "Vamos descobrir a história e as tradições do Natal... e recuperar os primeiros Tesouros!",
    arrival: "Bem-vindo ao Reino das Tradições — a história, as luzes, a mesa e a neve do Natal. 🎄 Está tudo coberto de neve! ❄️"
  },
  desenvolvimento: {
    vanberto: "Ouço música e vejo postais por todo o lado... vamos descobrir os segredos do Natal!",
    arrival: "Bem-vindo ao Vale das Prendas e da Música — prendas, espaço, cartões e canções. 🎶 Até as nuvens têm luzinhas de Natal! 🎄"
  },
  protecao: {
    vanberto: "Esta fortaleza guarda a família, o planeta e as compras... vamos fazer um Natal feliz e verde!",
    arrival: "A Fortaleza da Família guarda a matemática, as tradições, a reciclagem e as compras de Natal. 🏡 No Natal, as compras pedem ainda mais atenção! 🎁"
  },
  participacao: {
    vanberto: "Estamos quase lá! Sinto que alguém anda a espiar nas sombras... vamos proteger a magia do Natal!",
    arrival: "A Cidade da Magia guarda o Pai Natal, os filmes, os enfeites e a passagem de ano. 🎅 Até o Pai Natal tem de guardar bem a lista de prendas! 🎁"
  }
};

// "{N}" é substituído pelo número real de saltos necessários (def.hp, já
// com o +1 do modo Difícil aplicado) no momento em que o texto é mostrado —
// ver startBossFight() em dia-crianca.js. Nunca escrever o número aqui
// diretamente: antes disto, os 4 textos tinham sempre "3 vezes" fixo, o que
// ficava errado no modo Difícil (onde o boss aguenta 4 saltos).
export const BOSS_OBJECTIVE = {
  virus_gigante: "Desvia-te dos pedaços de carvão ⚫ que o Rei do Carvão atira e salta-lhe em cima {N} vezes para o vencer!",
  monstro_phishing: "Desvia-te das bengalas doces 🍬 que o Duende Trapaceiro lança e salta-lhe em cima {N} vezes para o vencer!",
  robo_spam: "Ele patrulha depressa a atirar engrenagens ⚙️ — apanha o ritmo e salta-lhe em cima {N} vezes para o vencer!",
  espiao_sombras: "Ele anda muito depressa a atirar bolas de neve sombrias ❄️! Salta-lhe em cima {N} vezes para o vencer!"
};

// Diálogo de boss, por boss.
// "reaction" = fala do VanBerto's ANTES do boss se apresentar (pressentir o perigo).
// "rally"    = fala do VanBerto's DEPOIS da ameaça do boss, mesmo antes do combate começar.
export const BOSS_INTRO_VB = {
  virus_gigante: {
    reaction: "Que calor de repente... e que cheiro a fumo!",
    rally: "Vamos apagar-lhe as brasas e salvar as meias de Natal!"
  },
  monstro_phishing: {
    reaction: "Ouço risinhos... alguém andou a trocar as prendas!",
    rally: "Não vai resultar! Já não nos enganas, duende!"
  },
  robo_spam: {
    reaction: "Ouço brinquedos a partir... isto não pode continuar assim!",
    rally: "Vamos arranjar todos os brinquedos e salvar as prendas!"
  },
  espiao_sombras: {
    reaction: "Está tudo tão escuro aqui dentro... as luzes de Natal estão a apagar-se!",
    rally: "A luz do Natal vence sempre a escuridão do inverno! Vamos a isso!"
  }
};

// Uma única fala de vitória por boss, ligada à competência que acabou de ser recuperada.
export const BOSS_VICTORY_VB = {
  virus_gigante: "Conseguimos! As brasas apagaram-se e as meias ficam com prendas!",
  monstro_phishing: "Vencemos! Já não há partidas com as prendas!",
  robo_spam: "Os brinquedos estão arranjados! Já pode haver Natal!",
  espiao_sombras: "A luz do Natal venceu a escuridão! Está tudo a brilhar!"
};

// Frases curtas mostradas (sem parar o jogo, só um "floatie") sempre que se
// apanha um objeto de conhecimento no combate do Monstro do Phishing.
export const KNOWLEDGE_FACTS = [
  "🎄 O Natal é a 25 de dezembro.",
  "🎁 Dar é tão bom como receber.",
  "⭐ Uma estrela no topo da árvore!",
  "🔔 Os guizos tilintam no trenó.",
  "❄️ Cada floco de neve tem seis pontas."
];

// Falas curtas do boss em marcos de HP durante o combate.
export const BOSS_HP_TAUNTS = {
  virus_gigante: {
    atStart: ["Vou encher as meias de carvão!", "Não me consegues apanhar!", "Só há carvão debaixo desta árvore!"],
    hp2: ["Argh! Isso queimou... a mim!", "Não contava com esse salto!", "Ainda tenho brasas de sobra!"],
    hp1: ["Não... as minhas brasas estão a apagar-se!", "Isto não pode ser...", "Estou a arrefecer!"]
  },
  monstro_phishing: {
    atStart: ["Hi, hi, hi! Troquei as etiquetas!", "Ninguém escapa às minhas partidas!", "Achas que me vais apanhar?"],
    hp2: ["Isso foi sorte!", "Não contava com esse salto...", "Grrr, tenta outra vez!"],
    hp1: ["Não! Descobriram a minha partida!", "Isto não pode ser...", "A alegria... é mais forte!"]
  },
  robo_spam: {
    atStart: ["Vou estragar todos os brinquedos!", "Não me apanhas, sou rápido demais!", "Peças soltas para todo o lado!"],
    hp2: ["Essa amolgou-me a chapa!", "Não contava com essa pancada!", "Ainda tenho muitos brinquedos para estragar!"],
    hp1: ["Não... estão todos a ser arranjados!", "Os meus circuitos... estão a falhar!", "Isto não pode ser!"]
  },
  espiao_sombras: {
    atStart: ["A noite vai ficar mais comprida!", "Nunca me vais apanhar no ar!", "Vou apagar as luzes do Natal!"],
    hp2: ["Impossível! Consegues ver-me no escuro?", "Isso não devia ter acontecido...", "Grrr, mais rápido da próxima vez!"],
    hp1: ["Não... a luz do Natal está a vencer!", "As sombras... estão a desaparecer!", "Isto não pode ser o fim!"]
  }
};

// Um "letreiro"/NPC por nível — alinhado por artIdx (0-19), tal como HISTORY[].
export const NPC_SIGNS = [
  { emoji:"🎄", text:"Sabias que a árvore de Natal nasceu na Alemanha, há mais de 400 anos?" },
  { emoji:"💡", text:"As luzes LED gastam muito menos energia do que as lâmpadas antigas!" },
  { emoji:"🍽️", text:"Em Portugal, a ceia de 24 de dezembro chama-se Consoada!" },
  { emoji:"🌍", text:"Na Austrália o Natal é no verão, e há quem vá à praia!" },
  { emoji:"❄️", text:"Quase todos os flocos de neve têm seis pontas!" },
  { emoji:"🎮", text:"O número PEGI na caixa do jogo indica a idade recomendada!" },
  { emoji:"🛰️", text:"A Estação Espacial Internacional dá cerca de 16 voltas à Terra por dia!" },
  { emoji:"✉️", text:"O primeiro cartão de Natal comercial foi enviado em 1843!" },
  { emoji:"🎶", text:"«Jingle Bells» foi publicada em 1857, com outro título!" },
  { emoji:"🧮", text:"Na canção «Os 12 Dias de Natal» há 364 prendas ao todo!" },
  { emoji:"👨‍👩‍👧", text:"O melhor do Natal é estar em família e ajudar quem precisa!" },
  { emoji:"🌗", text:"Por volta de 21 de dezembro é o dia mais curto do ano!" },
  { emoji:"♻️", text:"Azul para papel, amarelo para plástico e metal, verde para vidro!" },
  { emoji:"♿", text:"O Braille usa pontos em relevo para as pessoas cegas lerem!" },
  { emoji:"🛒", text:"Nas compras online, tens em regra 14 dias para devolver!" },
  { emoji:"🎅", text:"Em finlandês, o Pai Natal chama-se Joulupukki!" },
  { emoji:"🎬", text:"O Grinch foi criado pelo Dr. Seuss, em 1957!" },
  { emoji:"🎄", text:"A estrela-de-natal vem do México!" },
  { emoji:"💻", text:"A primeira mensagem SMS do mundo foi «Merry Christmas»!" },
  { emoji:"🎆", text:"No Funchal há um dos fogos de artifício mais famosos do mundo!" }
];
