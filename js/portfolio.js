const body = document.body;
const btnTema = document.querySelector('#btn-tema');

if (btnTema) {
  const temaSalvo = localStorage.getItem('portfolio-theme');

  if (temaSalvo === 'light') {
    body.classList.add('light-theme');
    btnTema.textContent = '☀️ Tema Claro';
  }

  btnTema.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    const temaAtual = body.classList.contains('light-theme') ? 'light' : 'dark';
    localStorage.setItem('portfolio-theme', temaAtual);
    btnTema.textContent = temaAtual === 'light' ? '☀️ Tema Claro' : '🌙 Alterar Tema';
  });
}
