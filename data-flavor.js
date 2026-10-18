// ===== Frases soltas e mensagens de "tempero" — MISSÃO NATAL =====
// PRAISE, PAUSE_TIPS, LEVEL_ENTRY_PHRASES, DYNAMIC_MSGS_CORRECT, DYNAMIC_MSGS_WRONG,
// VB_LEVEL_INTRO, VB_HIT, VB_QUIZ_CORRECT, VB_QUIZ_WRONG, VB_STAR_POWER, VB_PERFECT_LEVEL

export const PRAISE = ["🌟 Excelente!", "🛡️ Muito bem!", "🔐 Boa resposta!", "🎉 Fantástico!", "✨ Brilhante!", "🏆 Continua assim!", "🎄 Ho ho ho! Muito bem!", "🎁 Resposta digna de uma prenda!", "❄️ Gelado de tão bom!"];

// PAUSE_TIPS são sobre MECÂNICAS de jogo (agachar, super-salto, power-ups,
// tipos de vilão), não sobre o tema — mantidos tal como no original.
export const PAUSE_TIPS = [
  "🔽 <b>Agachar:</b> Prime ↓, S ou o botão 'Agachar' para te esquivares de ataques altos e passares por baixo de obstáculos!",
  "💡 <b>Star Power:</b> Apanha a estrela ⭐ e atropela vilões durante 8 segundos — +50 pontos cada!",
  "🛡️ <b>Escudo:</b> Fica invencível por 8s e absorve um golpe de qualquer vilão.",
  "🦅 <b>Asas:</b> Dão um segundo salto no ar — ótimo para plataformas altas!",
  "❓ <b>Bloco surpresa:</b> Passa por cima dos blocos <b>❓</b> para revelar itens escondidos!",
  "🟠 <b>Trampolim:</b> Salta numa plataforma laranja para voar muito mais alto que o normal.",
  "🥇 <b>Bónus:</b> Completa um nível sem perder vidas para ganhar +50 pontos extra!",
  "🔴 Trapalhão — lento e previsível. 🔵 Saltitão — salta às vezes. 🟢 Perseguilão — persegue-te!",
  "❤️ <b>Coração:</b> Apanha-o para ganhar +1 vida (máximo 5 ao mesmo tempo).",
  "🦘 <b>Nível dos Trampolins:</b> Os vãos são intransponíveis sem trampolim — procura-os no chão!",
  "🔥 <b>Nível da Lava:</b> O chão queima! Mantém-te sempre em cima das plataformas.",
  "🏃 <b>Nível da Esteira:</b> Todas as plataformas se movem — observa o ritmo antes de saltar!"
];

// Frase curta mostrada ao entrar em cada nível — alinhada por posição no
// array LEVELS (0-19), NÃO por artIdx.
export const LEVEL_ENTRY_PHRASES = [
  "O Natal tem uma longa história! 🎄",
  "Luzes a brilhar, energia a poupar! 💡",
  "À mesa de Natal não falta nada! 🍽️",
  "Cada país tem o seu Natal! 🌍",
  "Cada floco de neve é especial! ❄️",
  "Escolhe prendas à tua idade! 🎮",
  "O Natal chega até ao espaço! 🛰️",
  "Um postal, um abraço! ✉️",
  "Que ritmo de Natal! 🎶",
  "Há muitos números no Natal! 🧮",
  "O Natal é melhor em família! 👨‍👩‍👧",
  "O dia mais curto do ano! 🌗",
  "Reduzir, reutilizar e reciclar! ♻️",
  "O Natal é de toda a gente! ♿",
  "Compara preços e poupa! 🛒",
  "Ho, ho, ho! Vamos à Lapónia! 🎅",
  "Que sessão de cinema de Natal! 🎬",
  "Vermelho, verde e dourado! 🎄",
  "O Natal também é tecnológico! 💻",
  "Último nível — Feliz Ano Novo! 🎆"
];

export const DYNAMIC_MSGS_CORRECT = [
  "🌟 Fantástico!", "✨ Excelente!", "🎉 És incrível!",
  "🛡️ Sabia que conseguias!", "🏆 Tesouro de Natal!", "🔐 Muito bem!"
];

export const DYNAMIC_MSGS_WRONG = [
  "💪 Quase!", "🔄 Vamos tentar novamente!", "📚 Aprender também é vencer!",
  "❤️ Não desistas!", "💡 Próxima vez consegues!"
];

// Fala mais longa do VanBerto's à entrada de cada nível — indexada por
// posição no array LEVELS (0-19), NÃO por artIdx. O motor usa sempre
// VB_LEVEL_INTRO[0] no arranque do jogo (ver dia-crianca.js).
export const VB_LEVEL_INTRO = [
  "Hoje vamos recuperar os Tesouros de Natal! 🎄 Estás preparado?",
  "Luzes LED gastam menos energia! 💡 Vamos descobrir mais sobre as luzes de Natal?",
  "A Consoada é uma festa à mesa! 🍽️ Vamos conhecer os pratos e os doces de Natal?",
  "Cada país festeja o Natal à sua maneira! 🌍 Vamos viajar pelo mundo?",
  "Cada floco de neve tem seis pontas! ❄️ Vamos descobrir a ciência da neve?",
  "Uma consola nova é uma prenda fantástica! 🎮 Vamos ver como escolher bem?",
  "Até os astronautas festejam o Natal! 🛰️ Vamos até ao espaço?",
  "Um cartão de Natal diz muito com poucas palavras! ✉️ Vamos descobrir a sua história?",
  "O Natal tem uma banda sonora especial! 🎶 Vamos ouvir?",
  "Quem sabe contar sabe poupar! 🧮 Vamos fazer contas de Natal?",
  "O melhor do Natal é estarmos juntos! 👨‍👩‍👧 Vamos lá?",
  "O dia mais curto do ano está a chegar! 🌗 Vamos perceber porquê?",
  "Um Natal verde também é um Natal feliz! ♻️ Vamos reciclar?",
  "O Natal é de toda a gente! ♿ Vamos incluir todos?",
  "Compara preços e faz contas! 🛒 Vamos às compras de Natal?",
  "O Pai Natal mora lá no norte! 🎅 Vamos visitar a Lapónia?",
  "Há filmes de Natal para todos os gostos! 🎬 Vamos ver quais?",
  "Vermelho, verde e dourado! 🎄 Vamos enfeitar o Natal?",
  "O Natal também chega por mensagem e por ecrã! 💻 Vamos ver como?",
  "Último nível — a festa do Ano Novo! 🎆 Dá tudo!"
];

export const VB_HIT = [
  "Ups! Perdemos uma vida, mas os heróis nunca desistem! 💪",
  "Autsch! Cuida-te! Os vilões estão rápidos hoje! 🔴",
  "Ai! Respira fundo e vamos de novo! ❤️",
  "Atenção aos vilões! Já consegues! 🛡️",
  "Não faz mal! Cada erro ensina algo novo! 📚",
  "Vamos lá, guerreiro digital! Ainda temos vidas! 🌟"
];

export const VB_QUIZ_CORRECT = [
  "INCRÍVEL! Sabias mesmo a resposta! 🏆",
  "Que craque! Tesouro recuperado! ✨",
  "Fantástico! Estou tão orgulhoso de ti! 🎉",
  "Isso mesmo! O Natal agradece! 🎄",
  "Brilhante! Nada te escapa! 🌟",
  "Que resposta! Mereces uma estrela! ⭐"
];

export const VB_QUIZ_WRONG = [
  "Quase! Aprende e vai mais forte na próxima! 📖",
  "Não faz mal! Errar também é aprender! 💡",
  "Boa tentativa! Desta vez não foi, mas chegas lá! 💪",
  "Até os heróis erram — o importante é tentar! ❤️",
  "Relê a dica e tenta outra vez! 🔄"
];

export const VB_STAR_POWER = [
  "STAR POWER! Agora és IMPARÁVEL! ⭐",
  "Uau, a estrela! Vai atropelar tudo! 💥",
  "SUPER VANBERTO'S ATIVADO! 🌟",
  "Estrela apanhada! 8 segundos de glória! ✨"
];

export const VB_PERFECT_LEVEL = [
  "PERFEITO! Nenhuma vida perdida! Lendário! 🏆",
  "Uau! Passaste o nível sem um arranhão! ⭐",
  "Impecável! Guardião do Natal nível máximo! 🌟",
  "Incrível! Isso merecia um bónus extra! 🎉"
];
