// 1. Menú de celular: abre y cierra
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  burger.setAttribute('aria-expanded', abierto);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('abierto');
  burger.setAttribute('aria-expanded', 'false');
}));

// 2. Resalta en el menú la sección que se está viendo
const enlaces = [...menu.querySelectorAll('a')];
const secciones = enlaces.map(a => document.querySelector(a.getAttribute('href')));
function marcarMenu() {
  const y = window.scrollY + 120;
  let actual = 0;
  secciones.forEach((s, i) => { if (s && s.offsetTop <= y) actual = i; });
  enlaces.forEach((a, i) => a.classList.toggle('active', i === actual));
}

// 3. Botón "subir" aparece al bajar
const subir = document.getElementById('subir');
subir.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
window.addEventListener('scroll', () => {
  subir.classList.toggle('visible', window.scrollY > 400);
  marcarMenu();
});

// 4. Año automático en el pie de página
document.getElementById('anio').textContent = new Date().getFullYear();
