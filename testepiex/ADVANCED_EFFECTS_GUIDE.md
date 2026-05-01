# 🎨 Guia Completo - Efeitos CSS Avançados
## Cruzada dos Militares Espíritas (CME)

---

## 📋 Visão Geral

Este guia explica como usar e personalizar os **efeitos visuais modernos** adicionados ao site CME.

### Arquivos Principais:
- `styles/advanced-header.css` - Efeitos do menu e navbar
- `styles/advanced-hero.css` - Efeitos do hero section
- `scripts/advanced-effects.js` - Comportamentos dinâmicos em JavaScript
- `styles/main.css` - Importa todos os estilos

---

## 🎯 EFEITOS DO MENU/HEADER

### 1. **Sticky Navbar com Sombra Progressiva**

**O que faz:**
- Menu fica fixo no topo ao rolar
- Sombra aumenta gradualmente com o scroll

**Personalizar:**

```css
/* Em advanced-header.css, procure por: */
header.scrolled {
  box-shadow: 0 10px 30px rgba(0, 126, 167, 0.15); /* Altere o valor de blur */
  background-color: rgba(255, 255, 255, 0.98); /* Transparência */
}

/* Aumentar sombra: mude de 0.15 para 0.3 */
/* Diminuir blur: mude 30px para 15px */
```

---

### 2. **Sublinhado Animado no Hover**

**O que faz:**
- Linha colorida cresce da esquerda para a direita ao passar o mouse

**Personalizar:**

```css
/* Em advanced-header.css */
nav a.nav-link::after {
  height: 3px; /* Aumentar para 4px ou 5px para linha mais grossa */
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  /* Trocar cores: #007EA7 e #9C4080 para outras */
}

nav a.nav-link:hover::after {
  width: calc(100% - 24px); /* 24px = 2x padding (12px cada lado) */
  transition: width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  /* Aumentar 0.4s para movimento mais lento */
}
```

---

### 3. **Indicador de Página Ativa**

**O que faz:**
- Mostra bolinha pulsante e linha permanente na página atual

**Personalizar:**

```css
/* Em advanced-header.css */
nav a.nav-link.active::before {
  width: 6px; /* Tamanho da bolinha - aumentar para 8px, 10px */
  background-color: var(--color-accent);
  animation: pulse-indicator 2s ease-in-out infinite;
  /* Alterar duração: 2s para 3s, 1.5s, etc */
}

@keyframes pulse-indicator {
  0%, 100% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) scale(1.3); /* 1.3 = 30% maior, altere para 1.5, 2.0 */
    opacity: 0.6; /* 0.6 = 60% opacidade, altere para 0.5, 0.4 */
  }
}
```

---

### 4. **Frosted Glass Effect (Blur no Fundo)**

**O que faz:**
- Menu transparente com efeito de vidro fosco

**Personalizar:**

```css
/* Em advanced-header.css */
header {
  backdrop-filter: blur(10px); /* Aumentar para 20px, 30px para mais blur */
  background-color: rgba(255, 255, 255, 0.95);
  /* 0.95 = 95% opaco, mude para 0.9, 0.8, etc */
}

header.scrolled {
  backdrop-filter: blur(20px); /* Aumenta ao rolar */
}
```

---

### 5. **Search Box com Expansão**

**O que faz:**
- Caixa de busca pequena que expande ao clicar

**Personalizar:**

```css
/* Em advanced-header.css */
.search-box input {
  width: 0; /* Começa com 0 */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.search-box input.expanded {
  width: 200px; /* Mude para 250px, 300px para caixa maior */
}

.search-box button {
  width: 40px; /* Tamanho do botão */
  height: 40px;
}
```

**Ativar no HTML:**

```html
<!-- Index.html já tem, mas se quiser adicionar em outro lugar: -->
<div class="search-box">
  <input type="text" placeholder="Digite aqui sua busca">
  <button>🔍</button>
</div>
```

---

## 🌟 EFEITOS DO HERO SECTION

### 1. **Gradiente Animado**

**O que faz:**
- Fundo muda de cor lentamente (animação contínua)

**Personalizar:**

```css
/* Em advanced-hero.css */
.hero-section {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,      /* Azul */
    var(--color-primary-dark) 50%, /* Azul escuro */
    var(--color-accent) 100%       /* Roxo */
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
  /* Aumentar 15s para 20s, 25s para movimento mais lento */
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

---

### 2. **Padrão Geométrico Animado**

**O que faz:**
- Padrão diagonal sutil se move no fundo

**Personalizar:**

```css
/* Em advanced-hero.css */
.hero-section::before {
  background-size: 60px 60px; /* Tamanho do padrão - alterar para 30px, 100px */
  animation: pattern-move 20s linear infinite;
  /* Aumentar 20s para 30s, 40s para movimento mais lento */
  opacity: 0.5; /* 0.5 = 50% opaco, alterar para 0.3, 0.7 */
}
```

---

### 3. **Texto com Entrada Escalonada**

**O que faz:**
- Cada palavra do título aparece com atraso (fade-in + slide)

**Personalizar:**

```css
/* Em advanced-hero.css */
.hero-content h1 .word {
  animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  /* Aumentar 0.8s para 1s, 1.2s para entrada mais lenta */
}

.hero-content h1 .word:nth-child(1) { animation-delay: 0.1s; }
.hero-content h1 .word:nth-child(2) { animation-delay: 0.2s; }
/* Aumentar delays (0.1s, 0.2s) para espaçamento maior entre palavras */

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px); /* 30px = distância inicial, alterar para 50px, 20px */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Ativar no HTML:**

O JavaScript já faz wrap automático. Se quiser manual:

```html
<h1 class="hero-content">
  <span class="word">Bem-vindo</span>
  <span class="word">à</span>
  <span class="word">Cruzada</span>
  <!-- ... -->
</h1>
```

---

### 4. **Linha Decorativa Animada**

**O que faz:**
- Linha cresce da esquerda para a direita abaixo do subtítulo

**Personalizar:**

```css
/* Em advanced-hero.css */
.hero-line {
  height: 4px; /* Espessura - alterar para 2px, 6px */
  background: linear-gradient(90deg, transparent, var(--color-accent), transparent);
  /* Alterar para var(--color-primary) ou outra cor */
  width: 0;
  animation: line-grow 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
  /* 2.5s = duração, 0.8s = quando começa */
}

@keyframes line-grow {
  from { width: 0; }
  to { width: 120px; } /* Comprimento final - alterar para 80px, 150px */
}
```

**Adicionar no HTML (hero section):**

```html
<div class="hero-line"></div>
<p>Seu subtítulo aqui</p>
```

---

### 5. **Botões com Ripple Effect**

**O que faz:**
- Efeito de ondulação ao clicar, brilho suave no hover

**Personalizar:**

```css
/* Em advanced-hero.css */
.btn-ripple {
  position: relative;
  overflow: hidden;
  padding: 14px 32px;
  /* Alterar padding para botões maiores/menores */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-ripple.primary:hover {
  transform: translateY(-3px); /* Descer menos: -2px, mais: -5px */
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.25);
}

@keyframes ripple-burst {
  to {
    transform: scale(4); /* Tamanho do ripple - alterar para 3, 5 */
    opacity: 0;
  }
}
```

**Usar no HTML:**

```html
<a href="#" class="btn-ripple primary">Explorar Conteúdos</a>
<a href="#" class="btn-ripple secondary">Ver Agenda</a>
```

---

## 🎬 EFEITOS DO JAVASCRIPT

### 1. **Sticky Navbar com Shadow**

Automático! Já implementado.

```javascript
/* Em advanced-effects.js */
window.addEventListener('scroll', () => {
  if (scrollTop > 50) { /* Alterar 50 para 30, 100 */
    header.classList.add('scrolled');
  }
});
```

---

### 2. **Scroll Reveal (Fade-in ao aparecer)**

**O que faz:**
- Seções entram animadas conforme você rola

**Personalizar:**

```javascript
/* Em advanced-effects.js */
const revealOptions = {
  threshold: 0.15, /* 0.15 = 15% visível antes de animar */
  rootMargin: '0px 0px -100px 0px' /* -100px = já começa antes de visível */
  /* Alterar para -50px (mais cedo), -150px (mais tarde) */
};
```

---

### 3. **Indicador de Página Ativa**

Automático! Detecta qual página está ativa.

```javascript
/* Em advanced-effects.js */
function setActiveLink() {
  /* Procura pelo path atual e marca como .active */
}
```

---

### 4. **Search Box Expansão**

Automático! Implementado.

```javascript
searchButton.addEventListener('click', (e) => {
  searchInput.classList.toggle('expanded');
});
```

---

### 5. **Partículas Flutuantes**

Já criadas automaticamente! Personalizar:

```javascript
/* Em advanced-effects.js */
function createParticles(container, count = 20) {
  /* count = número de partículas, alterar para 10, 50, 100 */
}

// Chamar:
createParticles(heroSection, 30); /* 30 partículas */
```

---

## 🛠️ COMO INTEGRAR

### Passo 1: Importar CSS

✅ **Já feito!** O arquivo `styles/main.css` já importa:

```css
@import url('./advanced-header.css');
@import url('./advanced-hero.css');
```

---

### Passo 2: Importar JavaScript

✅ **Já feito!** O `index.html` já tem:

```html
<script src="scripts/advanced-effects.js"></script>
```

---

### Passo 3: Estrutura HTML Necessária

Seu header já tem a classe `.nav-link`:

```html
<nav>
  <ul>
    <li><a href="index.html" class="nav-link">Início</a></li>
    <!-- Outros links -->
  </ul>
</nav>
```

Seu hero section precisa dessa estrutura:

```html
<section class="hero-section">
  <div class="hero-content">
    <h1>Bem-vindo à Cruzada dos Militares Espíritas</h1>
    <div class="hero-line"></div>
    <p>Plataforma de Informação e Experiência</p>
    
    <div class="hero-buttons">
      <a href="#" class="btn-ripple primary">Explorar Conteúdos</a>
      <a href="#" class="btn-ripple secondary">Ver Agenda</a>
    </div>
  </div>
</section>
```

---

## 🎨 PERSONALIZAR CORES

As cores usam variáveis CSS:

```css
/* Definidas em assets/colors/palette.css */
--color-primary: #007EA7;        /* Azul */
--color-primary-dark: #005f7f;   /* Azul escuro */
--color-accent: #9C4080;         /* Roxo */
--color-accent-dark: #6d2d5a;    /* Roxo escuro */
```

**Para mudar:**

1. Edite `assets/colors/palette.css`
2. Ou adicione no `index.html`:

```html
<style>
  :root {
    --color-primary: #1a7a8a;      /* Novo azul-petróleo */
    --color-primary-dark: #0d4d59;
    --color-accent: #7b3f7b;       /* Novo roxo/vinho */
    --color-accent-dark: #5a2d5a;
  }
</style>
```

---

## ⚙️ PERFORMANCE

### Otimizações incluídas:

✅ Intersection Observer (lazy scroll reveal)
✅ Debounce no scroll
✅ Lazy loading de imagens (com `data-src`)
✅ CSS transforms (GPU aceleração)
✅ Will-change (só onde necessário)

### Remover efeitos se necessário:

Descomente em `advanced-header.css` ou `advanced-hero.css`:

```css
/* Remover animações: */
animation: none !important;
transition: none !important;
```

---

## ♿ ACESSIBILIDADE

Todos os arquivos respeitam:

✅ `prefers-reduced-motion` - Respeita preferência do usuário
✅ Contraste WCAG AA
✅ Teclado navegável
✅ Sem movimentos que causam epilepsia

Se um usuário tem `prefers-reduced-motion: reduce`, as animações não funcionam.

---

## 📱 RESPONSIVO

Todos os efeitos têm media queries para mobile.

```css
@media (max-width: 768px) {
  /* Estilos mobile */
  .hero-content h1 {
    font-size: 2.2rem; /* Menor em mobile */
  }
}
```

---

## 🔍 TROUBLESHOOTING

### Problema: Efeitos não aparecem

**Solução:**
1. Verifique se `advanced-header.css` e `advanced-hero.css` estão em `styles/`
2. Verifique se `advanced-effects.js` está em `scripts/`
3. Abra console (F12) e veja se há erros

### Problema: Scroll reveal não funciona

**Solução:**
```javascript
// Adicione no console (F12):
console.log(document.querySelectorAll('section').length);
```

Se retornar 0, as seções não têm a classe correta.

### Problema: Logo desaparece ao rolar

**Solução:** Isso é proposital! Adicione:

```css
/* Em advanced-header.css */
header.scrolled .logo-icon-img {
  display: none; /* ou scale(0) em vez de scale(0.95) */
}
```

---

## 💡 DICAS EXTRAS

### 1. Adicionar loading screen:

```html
<!-- Antes de </body> -->
<div id="loading-screen" style="
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: opacity 0.5s;
">
  <div>Carregando...</div>
</div>
```

### 2. Adicionar dropdown menu:

```html
<li class="dropdown-trigger">
  <a href="#" class="nav-link">Menu</a>
  <div class="dropdown-menu">
    <a href="#">Opção 1</a>
    <a href="#">Opção 2</a>
  </div>
</li>
```

### 3. Usar cursor customizado (opcional):

```css
body {
  cursor: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="blue" stroke-width="2"/></svg>') 12 12, auto;
}
```

---

## 📞 SUPORTE

Para dúvidas:
- Verifique a seção relevante deste guia
- Consulte comentários nos arquivos CSS/JS
- Teste no console (F12) do navegador

---

**Desenvolvido para:** Cruzada dos Militares Espíritas (CME)  
**Versão:** 1.0  
**Última atualização:** Maio de 2026
