document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');

  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const aberto = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
      menuBtn.textContent = aberto ? '✕' : '☰';
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
      });
    });
  }

  document.querySelectorAll('.ano-atual').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
});
