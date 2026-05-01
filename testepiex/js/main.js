/* JavaScript - Exemplo de Scripts para Cruzadas Militares Espíritas */

// NAVEGAÇÃO ATIVA
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname;
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.color = 'var(--color-accent)';
      link.style.borderBottomColor = 'var(--color-accent)';
    }
  });
});

// VALIDAÇÃO DE FORMULÁRIO
function validarFormulario(form) {
  const nome = form.querySelector('#nome');
  const email = form.querySelector('#email');
  const mensagem = form.querySelector('#mensagem');
  
  if (!nome.value.trim()) {
    alert('Por favor, preencha o campo Nome');
    return false;
  }
  
  if (!email.value.includes('@')) {
    alert('Por favor, preencha um email válido');
    return false;
  }
  
  if (!mensagem.value.trim()) {
    alert('Por favor, preencha a mensagem');
    return false;
  }
  
  return true;
}

// MENU RESPONSIVO (para implementação de hamburger menu)
function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('active');
}

// SUAVIZAÇÃO DE SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// CARREGAMENTO DE IMAGENS LAZY
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  });
  
  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ANIMAÇÃO AO SCROLL
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.card, .animate-on-scroll');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

window.addEventListener('scroll', animateOnScroll);

// MODO ESCURO (opcional para futuro)
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

// Verificar modo escuro salvo
if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
}

// EXEMPLO: Busca de Conteúdos
function buscarConteudos(termo) {
  const conteudos = document.querySelectorAll('.card');
  const resultados = [];
  
  conteudos.forEach(card => {
    const titulo = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
    const texto = card.querySelector('.card-text')?.textContent.toLowerCase() || '';
    
    if (titulo.includes(termo.toLowerCase()) || texto.includes(termo.toLowerCase())) {
      resultados.push(card);
    }
  });
  
  // Mostrar apenas resultados
  conteudos.forEach(card => card.style.display = 'none');
  resultados.forEach(card => card.style.display = 'block');
  
  return resultados.length;
}
