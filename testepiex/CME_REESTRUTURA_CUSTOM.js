/*
  ╔════════════════════════════════════════════════════════════════════════╗
  ║          CME – CRUZADA DOS MILITARES ESPÍRITAS                        ║
  ║          REESTRUTURAÇÃO COMPLETA - CUSTOM.JS                          ║
  ║                                                                        ║
  ║  Script vanilla (sem jQuery) com 5 funcionalidades:                   ║
  ║  1. Sticky scroll effect na navbar                                    ║
  ║  2. Item ativo no menu por clique                                     ║
  ║  3. Ripple effect nos botões CTA                                      ║
  ║  4. Scroll reveal com Intersection Observer                           ║
  ║  5. Linha decorativa do hero                                          ║
  ║                                                                        ║
  ║  INSTRUÇÕES DE USO:                                                   ║
  ║  • WordPress: Plugins → Insert Headers and Footers → Scripts Footer   ║
  ║  • Ou: Salvar como wp-content/themes/seu-tema/custom.js              ║
  ║    e enfileirar via functions.php                                     ║
  ╚════════════════════════════════════════════════════════════════════════╝
*/

(function() {
  'use strict';

  // ══════════════════════════════════════════════════════════════════════════
  // AGUARDAR DOM PRONTO
  // ══════════════════════════════════════════════════════════════════════════

  function onReady(callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SCRIPT 1: STICKY SCROLL EFFECT NA NAVBAR
  // ══════════════════════════════════════════════════════════════════════════

  /*
    O QUÊ FAZ:
    - Escuta evento window scroll
    - Se scrollY > 60px: adiciona classe .scrolled no header
    - CSS cuida do resto (background escurece, sombra intensifica)
    
    SELETORES TESTADOS: #masthead, #site-header, .site-header, header
    CLASSE: .scrolled
    THRESHOLD: 60px
  */

  function initScrollEffect() {
    const navbar = document.querySelector(
      '#masthead, #site-header, .site-header, header.site-header, header'
    );

    if (!navbar) {
      console.warn('[CME] Navbar não encontrada para scroll effect');
      return;
    }

    let ticking = false;

    function updateScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    }, false);

    console.log('[CME] Scroll effect iniciado ✓');
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SCRIPT 2: ITEM ATIVO NO MENU POR CLIQUE
  // ══════════════════════════════════════════════════════════════════════════

  /*
    O QUÊ FAZ:
    - Seleciona todos os links do menu
    - Ao clicar: remove .active/.current de todos
    - Adiciona em clicado
    - Também auto-detecta página atual
    
    CLASSES: .active, .current, .current-menu-item
    SELETORES: #site-navigation a, .menu-item a, nav a, etc
  */

  function initActiveLink() {
    const links = document.querySelectorAll(
      '#site-navigation a, .main-navigation a, .nav-menu a, ' +
      'nav a, .menu-item > a, header a'
    );

    if (links.length === 0) {
      console.warn('[CME] Links de menu não encontrados');
      return;
    }

    // Auto-detect página atual
    function setActiveByPath() {
      const currentPath = window.location.pathname;
      const currentPage = window.location.hostname + currentPath;

      links.forEach(link => {
        // Remover classes ativas
        link.classList.remove('active', 'current');
        link.parentElement?.classList.remove('current-menu-item', 'is-active', 'active');

        // Comparar href
        const href = link.getAttribute('href') || '';

        if (
          href === currentPath ||
          currentPage.includes(href.replace(/^\//, '')) ||
          (currentPath === '/' && (href === '/' || href.includes('home')))
        ) {
          link.classList.add('active', 'current');
          link.parentElement?.classList.add('current-menu-item', 'is-active', 'active');
        }
      });
    }

    // Click handler
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // Não prevenir default — deixar navegação acontecer
        // Só atualizar classes após click
        setTimeout(() => {
          links.forEach(l => {
            l.classList.remove('active', 'current');
            l.parentElement?.classList.remove('current-menu-item', 'is-active', 'active');
          });

          this.classList.add('active', 'current');
          this.parentElement?.classList.add('current-menu-item', 'is-active', 'active');
        }, 50);
      });
    });

    // Executar ao carregar página
    setActiveByPath();

    // Re-executar se mudança de página (SPA)
    window.addEventListener('popstate', setActiveByPath);

    console.log('[CME] Item ativo do menu iniciado ✓');
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SCRIPT 3: RIPPLE EFFECT NOS BOTÕES
  // ══════════════════════════════════════════════════════════════════════════

  /*
    O QUÊ FAZ:
    - Ao mousedown em .btn, .button, .wp-block-button__link
    - Cria span.ripple no ponto do clique
    - Anima scale(0) → scale(4) com opacity fade
    - Remove após 600ms
    
    SELETORES: .wp-block-button__link, .btn, .btn-primary, .elementor-button
    DURAÇÃO: 600ms
    CLASSE: .ripple
  */

  function initRippleEffect() {
    const buttons = document.querySelectorAll(
      '.wp-block-button__link, .btn, .btn-primary, .btn-secondary, ' +
      '.elementor-button, .cta, .hero .btn, button.wp-block-button__link'
    );

    if (buttons.length === 0) {
      console.warn('[CME] Botões para ripple não encontrados');
      return;
    }

    buttons.forEach(button => {
      button.addEventListener('mousedown', function(e) {
        // Não executar se já tem ripple
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

        // Remover após animação
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });

    console.log('[CME] Ripple effect iniciado em ' + buttons.length + ' botões ✓');
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SCRIPT 4: SCROLL REVEAL COM INTERSECTION OBSERVER
  // ══════════════════════════════════════════════════════════════════════════

  /*
    O QUÊ FAZ:
    - Observa elementos com classe .reveal
    - Quando 15% visível na viewport: adiciona classe .visible
    - CSS transição faz fadeInUp
    
    CLASSE: .reveal
    NOVA CLASSE: .visible (adicionada ao intersectar)
    THRESHOLD: 0.15 (15% visível)
    ROOTMARGIN: '0px 0px -100px 0px' (dispara 100px antes de aparecer)
  */

  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, section, .card, [data-reveal]');

    if (revealElements.length === 0) {
      console.log('[CME] Nenhum elemento .reveal encontrado');
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
          // Opcional: desobservar para economizar performance
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(element => {
      observer.observe(element);
    });

    console.log('[CME] Scroll reveal iniciado em ' + revealElements.length + ' elementos ✓');
  }

  // ══════════════════════════════════════════════════════════════════════════
  // SCRIPT 5: LINHA DECORATIVA DO HERO
  // ══════════════════════════════════════════════════════════════════════════

  /*
    O QUÊ FAZ:
    - Encontra elemento .hero-line
    - Após 300ms: adiciona classe .grown
    - CSS transição anima width 0 → 72px em 1.1s
    
    CLASSE: .hero-line
    NOVA CLASSE: .grown (ativa animação)
    DELAY: 300ms (aguarda outros elementos aparecerem)
  */

  function initHeroLine() {
    const heroLine = document.querySelector('.hero-line, .accent-line, .divider');

    if (!heroLine) {
      console.log('[CME] Elemento .hero-line não encontrado');
      return;
    }

    setTimeout(() => {
      heroLine.classList.add('grown');
    }, 300);

    console.log('[CME] Linha decorativa do hero iniciada ✓');
  }

  // ══════════════════════════════════════════════════════════════════════════
  // INICIALIZAÇÃO - EXECUTAR TUDO
  // ══════════════════════════════════════════════════════════════════════════

  onReady(function() {
    console.log('%cCME - Cruzada dos Militares Espíritas', 'color: #007EA7; font-size: 16px; font-weight: bold;');
    console.log('%cReestruturação visual ativada ✨', 'color: #9C4080; font-size: 12px;');

    // Executar todas as funcionalidades
    initScrollEffect();
    initActiveLink();
    initRippleEffect();
    initScrollReveal();
    initHeroLine();

    console.log('%cTodas as funcionalidades foram inicializadas! 🎉', 'color: #007EA7; font-weight: bold;');
  });

})();

// ═══════════════════════════════════════════════════════════════════════════
// FIM DO SCRIPT CME
// ═══════════════════════════════════════════════════════════════════════════

/*
  RESUMO DAS FUNCIONALIDADES:

  1. SCROLL EFFECT
     Navbar muda cor e sombra ao rolar > 60px
     Classe adicionada: .scrolled
     Performance: requestAnimationFrame

  2. ACTIVE LINK
     Menu detecta página atual e marca como .active
     Função também ativa ao clicar em links

  3. RIPPLE EFFECT
     Clique em botão cria ondulação visual
     Animação CSS (0.6s ease-out)
     Cria span.ripple dinamicamente

  4. SCROLL REVEAL
     Seções entram animadas ao entrar em viewport
     Intersection Observer (sem scroll listener)
     Classe .reveal + CSS transição

  5. HERO LINE
     Linha decorativa cresce de 0 a 72px
     Delay de 300ms
     Transição CSS suave

  COMPATIBILIDADE:
  • Vanilla JavaScript (sem jQuery)
  • Performance otimizada (requestAnimationFrame, Intersection Observer)
  • Todos navegadores modernos
  • Funciona com Elementor e temas padrão

  PRÓXIMO PASSO: Adicionar este JS via Insert Headers and Footers ou functions.php
*/
