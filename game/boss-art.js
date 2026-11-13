/*************************************************
 * VanBerto's — Missão Natal 🎄  ·  game/boss-art.js
 * Arte dos bosses (imagens recortadas, fundo transparente).
 * Para cada boss desenhamos a textura "boss_<id>" (e as variantes _ouch / _angry /
 * _sad / _laugh que o motor já usa) numa tela de 232×232 — o dobro da antiga
 * (116×116) — por isso o bossScale nos dados é 0.75 em vez de 1.5: hitbox e
 * tamanho no ecrã ficam iguais. Se uma imagem faltar, fica o desenho antigo
 * (textures.js), por isso o jogo nunca fica sem boss.
 *************************************************/
export const BOSS_ART_FILES = {
  virus_gigante:    "boss-pai-natal.png",   // Mundo 1 — Pai Natal Malvado
  monstro_phishing: "boss-duende.png",      // Mundo 2 — Duende Trapaceiro
  robo_spam:        "boss-gengibre.png",    // Mundo 3 — Homem de Gengibre Gigante
  espiao_sombras:   "boss-boneco.png"       // Mundo 4 — Boneco de Neve Furioso
};

export function loadBossArt(scene) {
  Object.entries(BOSS_ART_FILES).forEach(([id, file]) => {
    if (!scene.textures.exists("bossimg_" + id)) scene.load.image("bossimg_" + id, file);
  });
}

function canvasTex(scene, key, w, h) {
  if (scene.textures.exists(key)) scene.textures.remove(key);
  const t = scene.textures.createCanvas(key, w, h);
  return { t, c: t.getContext() };
}

export function buildBossArt(scene) {
  const S = 232;
  Object.keys(BOSS_ART_FILES).forEach(id => {
    const srcKey = "bossimg_" + id;
    if (!scene.textures.exists(srcKey)) return;                 // sem imagem → mantém o desenho antigo
    const img = scene.textures.get(srcKey).getSourceImage();
    if (!img || !img.width) return;
    const k = Math.min(210 / img.width, 212 / img.height);
    const w = img.width * k, h = img.height * k;
    const draw = (c, mode) => {
      c.clearRect(0, 0, S, S);
      c.drawImage(img, (S - w) / 2, 214 - h, w, h);              // pés a ~107px do centro (como o desenho antigo)
      c.globalCompositeOperation = "source-atop";
      if (mode === "ouch")  { c.fillStyle = "rgba(255,255,255,0.55)"; c.fillRect(0, 0, S, S); }
      if (mode === "angry") { c.fillStyle = "rgba(255,40,40,0.34)";   c.fillRect(0, 0, S, S); }
      if (mode === "sad")   { c.fillStyle = "rgba(70,100,170,0.50)";  c.fillRect(0, 0, S, S); }
      c.globalCompositeOperation = "source-over";
    };
    const done = new Set();
    [["", null], ["_laugh", null], ["_ouch", "ouch"], ["_angry", "angry"], ["_sad", "sad"]].forEach(([suffix, mode]) => {
      const { t, c } = canvasTex(scene, "boss_" + id + suffix, S, S);
      draw(c, mode); t.refresh(); done.add("boss_" + id + suffix);
    });
    // Outras variantes do desenho antigo (ex.: "_armsdown", usadas ao atirar) passam a mostrar a mesma imagem
    scene.textures.getTextureKeys().filter(k => k.startsWith("boss_" + id + "_") && !done.has(k)).forEach(k => {
      const { t, c } = canvasTex(scene, k, S, S);
      draw(c, null); t.refresh();
    });
  });

  // ----- projéteis novos (30×30) -----
  if (!scene.textures.exists("boss_proj_cookie")) {          // homenzinho de gengibre (Homem de Gengibre Gigante)
    const { t, c } = canvasTex(scene, "boss_proj_cookie", 30, 30);
    c.lineCap = "round"; c.lineJoin = "round";
    const limbs = () => { c.beginPath(); c.moveTo(6, 13); c.lineTo(24, 13); c.moveTo(15, 11); c.lineTo(15, 21); c.moveTo(15, 20); c.lineTo(9, 27); c.moveTo(15, 20); c.lineTo(21, 27); c.stroke(); };
    c.strokeStyle = "#1e1b4b"; c.lineWidth = 9; limbs();
    c.beginPath(); c.arc(15, 7, 6.6, 0, 7); c.fillStyle = "#1e1b4b"; c.fill();
    c.strokeStyle = "#c8782c"; c.lineWidth = 6; limbs();
    c.beginPath(); c.arc(15, 7, 5.2, 0, 7); c.fillStyle = "#c8782c"; c.fill();
    c.strokeStyle = "#ffffff"; c.lineWidth = 1.3;                                  // glacê nos braços e pernas
    c.beginPath(); c.moveTo(8, 13); c.lineTo(10, 13); c.moveTo(20, 13); c.lineTo(22, 13); c.moveTo(11, 26); c.lineTo(12.5, 24); c.moveTo(19, 26); c.lineTo(17.5, 24); c.stroke();
    c.fillStyle = "#1e1b4b"; c.beginPath(); c.arc(13, 6.5, 0.9, 0, 7); c.arc(17, 6.5, 0.9, 0, 7); c.fill();
    c.fillStyle = "#e53935"; c.beginPath(); c.arc(15, 14.5, 1.3, 0, 7); c.arc(15, 18.5, 1.3, 0, 7); c.fill();
    t.refresh();
  }
  if (!scene.textures.exists("boss_proj_snowball")) {        // bola de neve (Boneco de Neve Furioso)
    const { t, c } = canvasTex(scene, "boss_proj_snowball", 30, 30);
    c.fillStyle = "#1e1b4b"; c.beginPath(); c.arc(15, 15, 13.5, 0, 7); c.fill();
    const g = c.createRadialGradient(11, 10, 2, 15, 15, 12);
    g.addColorStop(0, "#ffffff"); g.addColorStop(0.6, "#e3f3ff"); g.addColorStop(1, "#a9d4f5");
    c.fillStyle = g; c.beginPath(); c.arc(15, 15, 11.5, 0, 7); c.fill();
    c.fillStyle = "rgba(120,170,220,0.55)"; [[19, 19, 2.2], [12, 21, 1.6], [21, 12, 1.4]].forEach(([x, y, r]) => { c.beginPath(); c.arc(x, y, r, 0, 7); c.fill(); });
    c.fillStyle = "#ffffff"; c.beginPath(); c.arc(10.5, 9.5, 2.2, 0, 7); c.fill();
    t.refresh();
  }
}
