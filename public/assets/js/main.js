// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ── EQ bars animation ──
const eqBars = document.querySelectorAll('#wf-eq .eq-bar');
function animateEQ() {
  eqBars.forEach(bar => {
    const h = 30 + Math.random() * 70;
    bar.style.height = h + '%';
  });
}
setInterval(animateEQ, 600);

// ── Tweaks ──
window.addEventListener('message', (e) => {
  if (e.data?.type === '__activate_edit_mode') {
    document.getElementById('tweaks-panel').style.display = 'flex';
  }
  if (e.data?.type === '__deactivate_edit_mode') {
    document.getElementById('tweaks-panel').style.display = 'none';
  }
});
window.parent.postMessage({ type: '__edit_mode_available' }, '*');

function setAccent(color) {
  document.documentElement.style.setProperty('--neon', color);
}
function setBg(bg, fg) {
  document.documentElement.style.setProperty('--black', bg);
  document.documentElement.style.setProperty('--ink', bg === '#F4F4F2' ? '#E8E8E6' : '#0D0D0D');
  document.documentElement.style.setProperty('--white', fg);
  document.documentElement.style.setProperty('--border', bg === '#F4F4F2' ? '#D0D0CE' : '#1C1C1C');
  document.body.style.background = bg;
  document.body.style.color = fg;
}
let gridOn = true;
function toggleGrid(on) {
  gridOn = on;
  const hero = document.querySelector('.hero');
  if (!on) {
    hero.style.setProperty('--grid-opacity','0');
    hero.style.backgroundImage = 'none';
  } else {
    hero.style.backgroundImage = '';
  }
}