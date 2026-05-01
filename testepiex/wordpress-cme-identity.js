/*
  ╔════════════════════════════════════════════════════════════════════════╗
  ║                    CME - CRUZADA DOS MILITARES ESPÍRITAS               ║
  ║                   IDENTIDADE VISUAL - WORDPRESS JAVASCRIPT              ║
  ║                                                                        ║
  ║  Funcionalidades:                                                      ║
  ║  1. Sticky scroll effect na navbar                                    ║
  ║  2. Item ativo no menu (click e auto-detect)                          ║
  ║  3. Ripple effect nos botões CTA                                      ║
  ║  4. Intersection Observer para scroll reveal                           ║
  ║  5. Wrapping de palavras em spans para animação escalonada            ║
  ╚════════════════════════════════════════════════════════════════════════╝
*/

(function() {
  'use strict';

  console.log('%cCME - Cruzada dos Militares Espíritas', 'color: #007EA7; font-size: 16px; font-weight: bold;');
  console.log('%cIdentidade Visual WordPress ativada ✨', 'color: #9C4080; font-size: 12px;');

  /* ════════════════════════════════════════════════════════════════════════ */
  /* 1. STICKY SCROLL EFFECT NA NAVBAR                                       */
  /* ════════════════════════════════════════════════════════════════════════ */

  /*
    O quê faz:
    - Detecta quando o usuário rola a página
    - Se scrollY > 60px, adiciona classe .scrolled à navbar
    - Classe .scrolled muda a cor e sombra da navbar (ver CSS)

    Como personalizar:
    1. Mude 60 para outro valor (ex: 100) para disparar mais tarde
    2. Mude 'scrolled' para outra classe se preferir
  */

  function initScrollEffect() {
    const navbar = document.querySelector('nav, .navbar, header, .site-header');

    if (!navbar) {
      console.warn('CME: Navbar não encontrada. Certifique-se de ter <nav> ou .navbar');
      return;
    }

    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScrollTop = scrollTop;
    });
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /* 2. ITEM ATIVO NO MENU                                                   */
  /* ════════════════════════════════════════════════════════════════════════ */

  /*
    O quê faz:
    - Ao clicar em um link, remove .active de todos e adiciona no clicado
    - Auto-detecta página atual e marca como active
    - Suporta classes: .active, .current-menu-item, .is-active

    Como personalizar:
    1. Mude os seletores se usar outras classes
    2. Adicione mais condições em setActiveLink() se needed
  */

  function initActiveLink() {
    const links = document.querySelectorAll('.nav-link, nav a, .menu-item > a, .navbar a');

    if (links.length === 0) {
      console.warn('CME: Links de menu não encontrados');
      return;
    }

    // Auto-detect página atual
    function setActiveLink() {
      const currentPath = window.location.pathname;

      links.forEach(link => {
        // Remove classes ativas
        link.classList.remove('active', 'current');
        link.parentElement?.classList.remove('current-menu-item', 'is-active');

        // Detecta página atual
        const href = link.getAttribute('href');

        if (href) {
          if (
            href === currentPath ||
            currentPath.includes(href.replace('/', '')) ||
            (currentPath === '/' && href.includes('home')) ||
            (currentPath === '/' && href === '/')
          ) {
            link.classList.add('active', 'current');
            link.parentElement?.classList.add('current-menu-item', 'is-active');
          }
        }
      });
    }

    // Click handler
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        links.forEach(l => {
          l.classList.remove('active', 'current');
          l.parentElement?.classList.remove('current-menu-item', 'is-active');
        });

        this.classList.add('active', 'current');
        this.parentElement?.classList.add('current-menu-item', 'is-active');
      });
    });

    // Executar ao carregar
    setActiveLink();

    // Re-executar se página mudar (SPA)
    window.addEventListener('popstate', setActiveLink);
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /* 3. RIPPLE EFFECT NOS BOTÕES                                             */
  /* ════════════════════════════════════════════════════════════════════════ */

  /*
    O quê faz:
    - Ao clicar em .btn ou .button, cria um efeito ripple
    - Ondulação cresce do ponto de clique para fora
    - Remove após 600ms

    Como personalizar:
    1. Mude .btn, .button para outros seletores se needed
    2. Mude 600 para outra duração (em ms)
    3. Mude a cor rgba(255,255,255,0.6) em .ripple do CSS
  */

  function initRippleEffect() {
    const buttons = document.querySelectorAll('.btn, .button, .cta, .btn-primary, .btn-secondary');

    buttons.forEach(button => {
      button.addEventListener('mousedown', function(e) {
        // Não animar se element já tiver ripple
        if (this.querySelector('.ripple')) {
          return;
        }

        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';

        this.appendChild(ripple);

        // Remove após animação
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /* 4. INTERSECTION OBSERVER - SCROLL REVEAL                                */
  /* ════════════════════════════════════════════════════════════════════════ */

  /*
    O quê faz:
    - Observa elementos com classe .reveal
    - Quando visível na tela, adiciona .visible
    - Ativa animação fadeInUp definida no CSS

    Como usar no HTML WordPress:
    <section class="reveal">
      <h2>Título que anima</h2>
    </section>

    Como personalizar:
    1. Mude .reveal para outro seletor
    2. Mude threshold (0.15 = elemento 15% visível)
    3. Mude rootMargin para carregar antes/depois de aparecer
  */

  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, section, .card, [data-reveal]');

    if (revealElements.length === 0) {
      console.log('CME: Nenhum elemento .reveal encontrado');
      return;
    }

    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(element => {
      observer.observe(element);
    });

    console.log(`CME: ${revealElements.length} elementos observados para scroll reveal`);
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /* 5. WRAP WORDS EM SPANS PARA ANIMAÇÃO ESCALONADA                         */
  /* ════════════════════════════════════════════════════════════════════════ */

  /*
    O quê faz:
    - Pega o texto de h1 (ex: "Bem-vindo à Cruzada")
    - Converte em <span class="word">Bem-vindo</span> <span class="word">à</span> ...
    - Cada span recebe delay diferente via .word:nth-child(n)
    - Resultado: cada palavra aparece com atraso (efeito profissional)

    Como personalizar:
    1. Mude 'h1' para outro seletor (ex: '.hero-title')
    2. Os delays estão no CSS (.word:nth-child(1) { delay: 0.2s })
  */

  function wrapWordsForAnimation() {
    const titles = document.querySelectorAll('h1, .hero-section h1, .hero-title, .page-title');

    titles.forEach(title => {
      // Não fazer wrap se já feito
      if (title.querySelector('.word')) {
        return;
      }

      const text = title.textContent;
      const words = text.split(/\s+/);

      title.innerHTML = words
        .map(word => `<span class="word">${word}</span>`)
        .join(' ');
    });

    console.log(`CME: ${titles.length} títulos preparados para animação escalonada`);
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /* INICIALIZAÇÃO - EXECUTAR TUDO AO CARREGAR                               */
  /* ════════════════════════════════════════════════════════════════════════ */

  /*
    Se usar jQuery, certifique-se de carregar DEPOIS de jQuery
    
    Se usar com WordPress:
    1. Adicione em functions.php:
       wp_enqueue_script('cme-identity', get_template_directory_uri() . '/js/cme-identity.js', [], false, true);
    
    2. Ou no rodapé do footer.php antes de </body>:
       <script src="<?php echo get_template_directory_uri(); ?>/js/cme-identity.js"></script>
  */

  if (document.readyState === 'loading') {
    // Ainda carregando
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Já carregou
    init();
  }

  function init() {
    console.log('%cInitializando CME Identity...', 'color: #007EA7; font-weight: bold;');

    // Executar todas as funcionalidades
    initScrollEffect();
    initActiveLink();
    initRippleEffect();
    initScrollReveal();
    wrapWordsForAnimation();

    console.log('%cCME Identity iniciado com sucesso! ✨', 'color: #9C4080; font-weight: bold;');
  }

  /* ════════════════════════════════════════════════════════════════════════ */
  /* UTILITÁRIOS - FUNÇÕES EXTRAS                                            */
  /* ════════════════════════════════════════════════════════════════════════ */

  /*
    Se precisar de funções extras, estão disponíveis globalmente:
    
    window.CMEIdentity = {
      // Funções para reutilizar
    };
  */

  window.CMEIdentity = {
    // Recarregar scroll reveal (útil se dinâmico)
    reloadScrollReveal: initScrollReveal,

    // Recarregar menu ativo
    reloadActiveLink: initActiveLink,

    // Método para logar
    log: function(msg, color = '#007EA7') {
      console.log(`%c[CME] ${msg}`, `color: ${color}; font-weight: bold;`);
    }
  };

})();

/* ════════════════════════════════════════════════════════════════════════ */
/* FIM DO SCRIPT CME IDENTITY                                              */
/* ════════════════════════════════════════════════════════════════════════ */
