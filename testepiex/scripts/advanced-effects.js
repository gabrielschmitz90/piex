/*
  JAVASCRIPT - EFEITOS AVANÇADOS
  Cruzada dos Militares Espíritas (CME)
  
  Inclui:
  - Sticky navbar com shadow progressiva
  - Scroll reveal com Intersection Observer
  - Ripple effect nos botões
  - Expansão da search box
  - Página ativa do menu
  - Loading screen
*/

// ============================================
// 1. STICKY NAVBAR COM SHADOW PROGRESSIVA
// ============================================

const header = document.querySelector('header');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ============================================
// 2. INDICADOR DE PÁGINA ATIVA NO MENU
// ============================================

function setActiveLink() {
  const links = document.querySelectorAll('nav a.nav-link');
  const currentPath = window.location.pathname;

  links.forEach(link => {
    link.classList.remove('active');
    
    // Verificar se o link é da página atual
    if (link.getAttribute('href') === currentPath || 
        link.getAttribute('href').includes(currentPath.split('/').pop())) {
      link.classList.add('active');
    }

    // Se for home, ativar no index
    if ((currentPath === '/' || currentPath.endsWith('index.html')) && 
        link.getAttribute('href').includes('index')) {
      link.classList.add('active');
    }
  });
}

// Executar ao carregar
document.addEventListener('DOMContentLoaded', setActiveLink);

// ============================================
// 3. SEARCH BOX COM EXPANSÃO
// ============================================

const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

if (searchButton && searchInput) {
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    searchInput.classList.toggle('expanded');
    
    if (searchInput.classList.contains('expanded')) {
      searchInput.focus();
    } else {
      searchInput.blur();
    }
  });

  // Fechar ao pressionar Escape
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      searchInput.classList.remove('expanded');
    }
  });
}

// ============================================
// 4. RIPPLE EFFECT NOS BOTÕES
// ============================================

document.addEventListener('click', (e) => {
  const button = e.target.closest('.btn-ripple, .btn');

  if (button && !button.classList.contains('no-ripple')) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }
});

// ============================================
// 5. SCROLL REVEAL COM INTERSECTION OBSERVER
// ============================================

const revealElements = document.querySelectorAll(
  'section, .card, .fade-in-stagger'
);

const revealOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const revealOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
      entry.target.style.opacity = '0';
      
      // Trigger animation
      setTimeout(() => {
        entry.target.style.opacity = '1';
      }, 10);

      revealOnScroll.unobserve(entry.target);
    }
  });
}, revealOptions);

revealElements.forEach(element => {
  revealOnScroll.observe(element);
});

// ============================================
// 6. DROPDOWN MENU (se existir)
// ============================================

const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');

dropdownTriggers.forEach(trigger => {
  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    const menu = trigger.nextElementSibling;

    if (menu && menu.classList.contains('dropdown-menu')) {
      menu.classList.toggle('show');
    }
  });

  // Fechar ao clicar fora
  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !trigger.nextElementSibling?.contains(e.target)) {
      const menu = trigger.nextElementSibling;
      if (menu) menu.classList.remove('show');
    }
  });
});

// ============================================
// 7. LOADING SCREEN (OPCIONAL)
// ============================================

function showLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    loader.style.opacity = '1';
    loader.style.pointerEvents = 'auto';
  }
}

function hideLoadingScreen() {
  const loader = document.getElementById('loading-screen');
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.pointerEvents = 'none';
      loader.style.transition = 'opacity 0.5s ease-out';
    }, 500);
  }
}

// Esconder ao carregar
window.addEventListener('load', hideLoadingScreen);

// ============================================
// 8. WRAPPING WORDS PARA ANIMAÇÃO
// ============================================

function wrapWords(selector) {
  const elements = document.querySelectorAll(selector);

  elements.forEach(element => {
    const text = element.textContent;
    const words = text.split(' ');
    const wrapped = words
      .map(word => `<span class="word">${word}</span>`)
      .join(' ');

    element.innerHTML = wrapped;
  });
}

// Aplicar ao h1 do hero
document.addEventListener('DOMContentLoaded', () => {
  wrapWords('.hero-content h1');
});

// ============================================
// 9. CRIAR PARTÍCULAS FLUTUANTES (OPCIONAL)
// ============================================

function createParticles(container, count = 20) {
  const particlesContainer = document.createElement('div');
  particlesContainer.classList.add('hero-particles');

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.width = (Math.random() * 3 + 2) + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 15) + 's';

    particlesContainer.appendChild(particle);
  }

  if (container) {
    container.appendChild(particlesContainer);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    createParticles(heroSection, 30);
  }
});

// ============================================
// 10. SMOOTH SCROLL BEHAVIOR
// ============================================

if (CSS.supports('scroll-behavior', 'smooth')) {
  document.documentElement.style.scrollBehavior = 'smooth';
}

// ============================================
// 11. RESPEITAR PREFERÊNCIA DE MOVIMENTO REDUZIDO
// ============================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  document.documentElement.style.scrollBehavior = 'auto';
  // CSS já trata isso via media query
}

// ============================================
// 12. TECH ENHANCEMENT - LAZY LOAD IMAGES
// ============================================

if ('IntersectionObserver' in window) {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ============================================
// 13. PERFORMANCE - DEBOUNCE SCROLL
// ============================================

function debounce(func, wait = 20) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Aplicar debounce ao scroll event se necessário
const debouncedScroll = debounce(() => {
  // Eventos de scroll aqui
}, 20);

// ============================================
// 14. CUSTOM CURSOR (DESKTOP ONLY)
// ============================================

function initCustomCursor() {
  if (window.matchMedia('(hover: hover)').matches) {
    // Implementação de cursor customizado opcional
    const style = document.createElement('style');
    style.textContent = `
      a, button, input[type="button"], input[type="submit"] {
        cursor: pointer;
      }
    `;
    document.head.appendChild(style);
  }
}

document.addEventListener('DOMContentLoaded', initCustomCursor);

// ============================================
// 15. CONSOLE MESSAGE (OPCIONAL)
// ============================================

console.log('%cCruzada dos Militares Espíritas', 'color: #007EA7; font-size: 20px; font-weight: bold;');
console.log('%c✨ Site desenvolvido com efeitos CSS avançados e acessibilidade', 'color: #9C4080; font-size: 14px;');
