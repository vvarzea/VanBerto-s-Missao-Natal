// ===== NATAL — decoração da «Edição de Natal» (neve a cair + luzinhas + botão «Neve») =====
// Fica isolado do resto do jogo: não mexe no Phaser nem no progresso. Para tirar o efeito, basta
// apagar a linha <script src="natal.js"> do index.html (o jogo continua a funcionar sem ele).
// A neve desenha-se num <canvas> por cima de tudo, sem apanhar cliques (pointer-events:none).

const SNOW_KEY = "vanbertos_natal_neve_v1";   // "1" = ligada, "0" = desligada (só neste dispositivo)
const reduceMotion = !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);

function loadSnowPref() {
  try { const v = localStorage.getItem(SNOW_KEY); if (v === "0") return false; if (v === "1") return true; } catch {}
  return !reduceMotion;                        // por omissão: ligada, a não ser que o sistema peça menos movimento
}
function saveSnowPref(v) { try { localStorage.setItem(SNOW_KEY, v ? "1" : "0"); } catch {} }

let snowOn = loadSnowPref();

// ---------- Neve ----------
const canvas = document.createElement("canvas");
canvas.id = "natalSnow";
canvas.setAttribute("aria-hidden", "true");
const ctx = canvas.getContext("2d");
let W = 0, H = 0, flakes = [], raf = 0, last = 0;
// Modo económico automático: se o computador estiver lento, a neve fica mais leve e, em último caso, desliga-se
// (só nesta sessão — a escolha guardada no botão «Neve» não é alterada).
let lite = 0;                                  // 0 = normal, 1 = menos flocos e sem animação nas luzes, 2 = neve desligada
let prevRaw = 0, sumRaw = 0, nRaw = 0, startedAt = performance.now(), flakeScale = 1;

function makeFlakes() {
  const n = Math.max(25, Math.round(Math.max(35, Math.min(110, Math.round((W * H) / 9500))) * flakeScale));
  flakes = Array.from({ length: n }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    r: 1 + Math.random() * 2.4,                // raio
    v: 22 + Math.random() * 40,                // velocidade vertical (px/s)
    a: Math.random() * Math.PI * 2,            // fase do balanço
    s: 0.5 + Math.random() * 1.1,              // velocidade do balanço
    o: 0.45 + Math.random() * 0.4,             // opacidade
  }));
}
function resize() {
  W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight;
  makeFlakes();
}
function degrade() {
  lite++;
  if (lite === 1) { flakeScale = 0.5; makeFlakes(); lights.classList.add("lite"); }
  else if (lite >= 2) { snowAuto = false; applySnow(); }
}
let snowAuto = true;
function frame(t) {
  raf = 0;
  if (!snowOn || !snowAuto) { ctx.clearRect(0, 0, W, H); return; }
  raf = requestAnimationFrame(frame);
  if (document.hidden) { last = t; prevRaw = 0; return; }
  // mede o ritmo real do navegador (ignora os primeiros 4 s, em que o jogo ainda está a carregar)
  if (prevRaw && t - prevRaw < 500 && performance.now() - startedAt > 4000) {
    sumRaw += t - prevRaw; nRaw++;
    if (nRaw >= 90) { const mean = sumRaw / nRaw; sumRaw = 0; nRaw = 0; if (mean > 55 && lite < 2) degrade(); }
  }
  prevRaw = t;
  if (t - last < 33) return;                   // ~30 imagens/s chegam (poupa o computador)
  const dt = Math.min(0.1, (t - last) / 1000 || 0.033); last = t;
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "#fff";
  for (const f of flakes) {
    f.y += f.v * dt; f.a += f.s * dt;
    f.x += Math.sin(f.a) * 14 * dt;
    if (f.y - f.r > H) { f.y = -f.r; f.x = Math.random() * W; }
    if (f.x < -4) f.x = W + 4; else if (f.x > W + 4) f.x = -4;
    ctx.globalAlpha = f.o;
    ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2); ctx.fill();
  }
  ctx.globalAlpha = 1;
}
function applySnow() {
  const show = snowOn && snowAuto;
  canvas.style.display = show ? "block" : "none";
  if (show && !raf) raf = requestAnimationFrame(frame);
  if (!show) { cancelAnimationFrame(raf); raf = 0; ctx.clearRect(0, 0, W, H); }
  const btn = document.getElementById("btnNeve");
  if (btn) {
    // em ecrãs estreitos o texto encurta-se, para a linha de botões do menu continuar numa só linha
    const narrow = window.matchMedia && window.matchMedia("(max-width: 480px)").matches;
    btn.textContent = (narrow ? "❄️ " : "❄️ Neve: ") + (snowOn && snowAuto ? "ON" : "OFF");
    btn.setAttribute("aria-label", "Neve: " + (snowOn && snowAuto ? "ligada" : "desligada"));
    btn.setAttribute("aria-pressed", String(snowOn));
  }
}

// ---------- Luzinhas de Natal (fio no topo do ecrã) ----------
const lights = document.createElement("div");
lights.id = "natalLights";
lights.setAttribute("aria-hidden", "true");
const COLORS = ["#ff3b30", "#ffd60a", "#34c759", "#4aa8ff"];
function buildLights() {
  const n = Math.max(8, Math.floor(window.innerWidth / 30));
  lights.textContent = "";
  for (let i = 0; i < n; i++) {
    const b = document.createElement("i");
    b.style.setProperty("--c", COLORS[i % COLORS.length]);
    b.style.animationDelay = ((i % 4) * 0.4) + "s";
    lights.appendChild(b);
  }
}

function init() {
  document.body.appendChild(canvas);
  document.body.appendChild(lights);
  resize(); buildLights(); applySnow();
  let rt = 0;
  window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(() => { resize(); buildLights(); applySnow(); }, 150); });
  const btn = document.getElementById("btnNeve");
  if (btn) btn.addEventListener("click", () => {
    if (snowOn && !snowAuto) { snowAuto = true; lite = 0; flakeScale = 1; lights.classList.remove("lite"); makeFlakes(); sumRaw = nRaw = 0; startedAt = performance.now(); } // tenta outra vez
    else { snowOn = !snowOn; saveSnowPref(snowOn); }
    applySnow();
  });
  window.__natal = { isSnowOn: () => snowOn && snowAuto, liteLevel: () => lite, setSnow: (v) => { snowOn = !!v; saveSnowPref(snowOn); applySnow(); } };
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
