/*const botao = document.getElementById('botao-tema');
const body = document.body;

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});
*/

const botao = document.getElementById('botao-tema');
const body = document.body;

// Carregar tema salvo
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');  // ← ISSO FALTAVA

// Função para ativar/desativar o modo escuro
function temaEscuro(ativo) {
    if (ativo) {
        body.classList.add('escuro');
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Clique no botão
botao.addEventListener('click', (event) => {
    event.preventDefault(); // ← Impede o <a> de recarregar a página

    const isEscuro = body.classList.toggle('escuro');

    temaEscuro(isEscuro); // Atualiza ícone
    localStorage.setItem('tema', isEscuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});