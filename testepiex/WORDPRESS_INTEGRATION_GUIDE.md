# 🎨 GUIA DE INTEGRAÇÃO - CME WORDPRESS IDENTITY
## Cruzada dos Militares Espíritas - Identidade Visual

---

## 📋 VISÃO GERAL

Este guia ensina como integrar a identidade visual completa da **Cruzada dos Militares Espíritas** em um site WordPress.

### Arquivos:
- `wordpress-cme-identity.css` - Estilos CSS (52KB)
- `wordpress-cme-identity.js` - Funcionalidades JavaScript (11KB)

### Funcionalidades:
✅ Navbar sticky com scroll effect
✅ Menu com sublinhado animado e item ativo
✅ Hero section com gradiente e animações
✅ Botões com ripple effect
✅ Scroll reveal (elementos entram animados)
✅ Acessibilidade (prefers-reduced-motion)

---

## 🛠️ OPÇÃO 1: INTEGRAÇÃO VIA CUSTOMIZER (Mais Fácil)

### Passo 1: Acessar o Customizer
1. Painel WordPress → **Aparência** → **Personalizar**
2. Ou vá para: `seu-site.com/wp-admin/customize.php`

### Passo 2: Adicionar CSS
1. No Customizer, clique em **CSS Adicional** (ou **Additional CSS**)
2. Copie TODO o conteúdo de `wordpress-cme-identity.css`
3. Cole na área de texto
4. Clique em **Publicar**

### Passo 3: Adicionar JavaScript
1. Você ainda precisa do JS. Vá para **Opção 2** (functions.php) ou **Opção 3** (Plugin)

---

## 🛠️ OPÇÃO 2: INTEGRAÇÃO VIA FUNCTIONS.PHP (Recomendado)

### Passo 1: Copiar Arquivos
1. Via FTP/SFTP ou File Manager do Hosting:
   - Crie pasta: `wp-content/themes/seu-tema/assets/cme/`
   - Coloque `wordpress-cme-identity.css` lá
   - Coloque `wordpress-cme-identity.js` lá

2. Estrutura final:
   ```
   wp-content/
   └── themes/
       └── seu-tema/
           └── assets/
               └── cme/
                   ├── wordpress-cme-identity.css
                   └── wordpress-cme-identity.js
   ```

### Passo 2: Editar functions.php
1. Painel WordPress → **Aparência** → **Editor de Arquivos do Tema**
   (ou edite via FTP)

2. Abra `functions.php` (está na raiz de `seu-tema/`)

3. **Antes** de `?>` (se existir), adicione:

```php
/**
 * CME - Cruzada dos Militares Espíritas
 * Enfileirar CSS e JavaScript da identidade visual
 */
function cme_enqueue_identity_assets() {
    
    // CSS
    wp_enqueue_style(
        'cme-identity-css',
        get_template_directory_uri() . '/assets/cme/wordpress-cme-identity.css',
        [],
        '1.0.0',
        'all'
    );
    
    // JavaScript
    wp_enqueue_script(
        'cme-identity-js',
        get_template_directory_uri() . '/assets/cme/wordpress-cme-identity.js',
        [],
        '1.0.0',
        true  // Carregar no footer
    );
    
}
add_action( 'wp_enqueue_scripts', 'cme_enqueue_identity_assets' );
```

4. Salve o arquivo

### Passo 3: Verificar
1. Vá para seu site (frontend)
2. Abra Console (F12 > Console)
3. Você deve ver: `CME - Cruzada dos Militares Espíritas` em azul

---

## 🛠️ OPÇÃO 3: INTEGRAÇÃO VIA PLUGIN (Mais Seguro)

Use o plugin **"Code Snippets"** (gratuito) para evitar editar functions.php:

### Passo 1: Instalar Plugin
1. Painel WordPress → **Plugins** → **Adicionar Novo**
2. Busque: `Code Snippets`
3. Instale e ative o plugin do **Code Snippets team**

### Passo 2: Adicionar Código
1. Painel WordPress → **Snippets** → **Adicionar Novo**
2. Nome: `CME - Enfileirar Assets`
3. Cole o código do **Passo 2** (functions.php) na área de código
4. Marque: **Executar em**: Everytime
5. Salve e ative

### Passo 3: Carregar Arquivos
Siga o **Passo 1** da Opção 2 (copiar arquivos via FTP)

---

## 🛠️ OPÇÃO 4: INTEGRAÇÃO VIA WP SUPER CACHE / OPTIMIZATION PLUGIN

Se usar plugin de cache:

1. **CSS Global**: Cole em **Aparência** → **Personalizar** → **CSS Adicional**
2. **JavaScript**: Use plugin **"Insert Headers and Footers"**:
   - Instale plugin
   - Vá para **Configurações** → **Insert Headers and Footers**
   - Em **Scripts in Footer**, cole:
   ```html
   <script src="<?php echo get_template_directory_uri(); ?>/assets/cme/wordpress-cme-identity.js"></script>
   ```

---

## 📝 HTML NECESSÁRIO NO TEMA

Para que tudo funcione, seu tema DEVE ter esta estrutura HTML:

### Navbar / Menu:
```html
<nav class="navbar">
  <div class="navbar-logo">
    <div class="logo-icon">✦</div>
    <div class="navbar-logo-text">
      <span class="navbar-logo-main">CME</span>
      <span class="navbar-logo-sub">Cruzada</span>
    </div>
  </div>
  
  <div class="menu-items">
    <a href="/" class="nav-link">Início</a>
    <a href="/quem-somos" class="nav-link">Quem Somos</a>
    <a href="/biblioteca" class="nav-link">Biblioteca</a>
    <!-- Mais links -->
  </div>
  
  <form class="search-form">
    <input type="search" placeholder="Buscar...">
    <button type="submit">Search</button>
  </form>
</nav>
```

### Hero Section:
```html
<section class="hero-section">
  <div class="badge">Bem-vindo</div>
  <h1>Bem-vindo à Cruzada dos Militares Espíritas</h1>
  <div class="hero-line"></div>
  <p class="subtitle">Plataforma de Informação e Experiência</p>
  
  <div class="hero-buttons">
    <a href="/biblioteca" class="btn btn-primary">Explorar Conteúdos</a>
    <a href="/agenda" class="btn btn-secondary">Ver Agenda</a>
  </div>
</section>
```

### Scroll Reveal:
```html
<section class="reveal">
  <h2>Seção que anima ao rolar</h2>
  <p>Conteúdo aqui...</p>
</section>
```

---

## 🎨 PERSONALIZAR CORES

### Opção A: Via CSS Adicional (Customizer)
Adicione no **Aparência** → **Personalizar** → **CSS Adicional**:

```css
:root {
  --cme-primary: #007EA7;        /* Mude para outra cor azul */
  --cme-primary-dark: #005f82;
  --cme-accent: #9C4080;         /* Mude para outra cor rosa */
  --cme-accent-dark: #7d3366;
}
```

### Opção B: Criar Custom CSS Theme
1. Duplicar o arquivo `wordpress-cme-identity.css`
2. Nomear: `wordpress-cme-custom.css`
3. Mudar cores em `:root {}`
4. Carregar via functions.php

### Cores Predefinidas:

```css
/* AZUIS */
--cme-primary: #007EA7;          /* Azul padrão */
--cme-primary-dark: #005f82;     /* Mais escuro */
--cme-primary-light: #e0f4fb;    /* Mais claro */

/* ACENTOS */
--cme-accent: #9C4080;           /* Rosa padrão */
--cme-accent-dark: #7d3366;      /* Mais escuro */

/* EXEMPLOS ALTERNATIVOS */
/* Verde/Esperança: #27ae60 */
/* Laranja/Energia: #e67e22 */
/* Roxo/Espiritismo: #8e44ad */
```

---

## ⚙️ PERSONALIZAR DURAÇÕES DE ANIMAÇÃO

No CSS, procure por `--transition-*`:

```css
:root {
  --transition-fast: 0.2s ease;      /* Rápido (hover) */
  --transition-normal: 0.35s ease;   /* Normal (scroll) */
  --transition-smooth: 0.55s ease-out; /* Suave (entrada) */
  --transition-cubic: cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Para mais rápido:** mude para `0.15s`, `0.25s`, etc.
**Para mais lento:** mude para `0.5s`, `0.7s`, etc.

---

## 🔍 SELETORES CSS - CLASSES E IDs

Se seu tema usa diferentes classes, mude os seletores:

### Navbar:
```css
/* Se não for <nav>, mude para: */
header .site-header .wp-navbar
```

### Links:
```css
/* Se não for .nav-link, adicione: */
.menu-item > a,
.nav-menu a,
.main-menu a
```

### Herós:
```css
/* Se não for .hero-section: */
.banner,
.hero,
.page-banner,
.jumbotron
```

### Botões:
```css
/* Se não for .btn: */
.button,
.wp-block-button__link,
a.cta
```

---

## 🧪 TESTAR

### Passo 1: Verificar CSS
1. Abra seu site
2. Aperte F12 (DevTools)
3. Inspecione a navbar
4. Você deve ver cores azul/rosa aplicadas

### Passo 2: Verificar JavaScript
1. Console (F12 > Console)
2. Você deve ver:
   ```
   CME - Cruzada dos Militares Espíritas
   Identidade Visual WordPress ativada ✨
   ```

### Passo 3: Testar Funcionalidades
- **Scroll**: Role a página → navbar muda de cor
- **Menu**: Clique em links → sublinhado aparece
- **Botões**: Clique → ripple effect
- **Seções**: Role → elementos entram animados

---

## 🐛 TROUBLESHOOTING

### Problema: CSS não aparece
**Solução:**
- Limpe cache do WordPress (Settings → W3 Total Cache → Purge)
- Limpe cache do navegador (Ctrl+Shift+Del)
- Verifique se arquivo está em local correto
- Verifique caminho em functions.php

### Problema: Menu não fica sticky
**Solução:**
- Certifique-se que tem `<nav>` ou `.navbar` no HTML
- Verifique se não tem outro CSS anulando `position: sticky`

### Problema: Cores erradas
**Solução:**
- Verifique valores de --cme-primary e --cme-accent
- Limpe cache
- Inspecione elemento (F12) e veja qual CSS está aplicado

### Problema: Animações não funcionam
**Solução:**
- Verifique se JavaScript está carregando (F12 > Console)
- Verifique se elementos têm classes corretas (.reveal, .btn, etc)
- Verifique se não tem `prefers-reduced-motion: reduce` ativado

### Problema: Ripple não funciona
**Solução:**
- Certifique-se de ter `.btn` ou `.button` nos botões
- Verifique se JavaScript está ativo (Console)

---

## 📱 RESPONSIVO

O CSS já trata:
- Desktop (1200px+)
- Tablet (768px-1200px)
- Mobile (320px-768px)

Todas as animações reduzem ou desaparecem em mobile para performance.

---

## ♿ ACESSIBILIDADE

O código respeita:
- ✅ `prefers-reduced-motion` (remove animações se usuário ativa)
- ✅ Contraste WCAG AA
- ✅ Teclado navegável
- ✅ Sem Flash (nenhuma animação acima de 3Hz)

---

## 🚀 PERFORMANCE

- CSS: ~6KB (comprimido)
- JS: ~4KB (comprimido)
- **Sem bibliotecas externas** (jQuery, Bootstrap, etc)
- **GPU acelerado** (transforms)
- **Lazy loading** (Intersection Observer)

Resultado: impacto mínimo no LCP/FID/CLS (Core Web Vitals)

---

## 💡 EXEMPLOS PRÁTICOS

### Exemplo 1: Aplicar ao Menu Existente
Se seu tema já tem menu, só precisa adicionar classes:

```html
<!-- Seu menu atual -->
<ul class="wp-menu">
  <li><a href="/">Home</a></li>
</ul>

<!-- Mude para: -->
<nav class="navbar">
  <ul class="menu-items">
    <li><a href="/" class="nav-link">Home</a></li>
  </ul>
</nav>
```

### Exemplo 2: Múltiplas Cores
Se quiser diferentes heróis com cores diferentes:

```html
<!-- Hero 1 - Azul (padrão) -->
<section class="hero-section">
  ...
</section>

<!-- Hero 2 - Roxo (custom) -->
<section class="hero-section" style="--cme-primary: #8e44ad;">
  ...
</section>
```

### Exemplo 3: Desabilitar Animações
Se quiser uma seção SEM animações:

```html
<!-- Remova classe .reveal para não animar -->
<section>
  <h2>Sem animação</h2>
</section>
```

---

## 📞 SUPORTE

Se tiver dúvidas:

1. **Verifique console** (F12 > Console) para erros
2. **Inspecione elemento** (F12 > Inspector) para ver CSS
3. **Teste em outro navegador** (Firefox, Chrome, Safari)
4. **Desative plugins** para ver se conflita

---

## 📚 REFERÊNCIAS

- [MDN - CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [MDN - Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [WordPress - Enqueuing Scripts](https://developer.wordpress.org/plugins/hooks/actions/wp_enqueue_scripts/)
- [WebAIM - WCAG Accessibility](https://webaim.org/articles/wcag/)

---

## ✅ CHECKLIST FINAL

Antes de publicar, verifique:

- [ ] CSS carregando (cores azul/rosa aparece)
- [ ] JavaScript ativado (console sem erros)
- [ ] Navbar sticky funciona
- [ ] Menu ativo destaca
- [ ] Botões têm ripple
- [ ] Seções animam ao rolar
- [ ] Funciona em mobile
- [ ] Sem conflitos com plugins
- [ ] Contraste OK (WCAG)
- [ ] Lighthouse score acima de 85

---

**Desenvolvido para:** Cruzada dos Militares Espíritas (CME)  
**Versão:** 1.0  
**Compatibilidade:** WordPress 5.0+  
**Browsers:** Chrome 60+, Firefox 55+, Safari 12+, Edge 79+

Bora decorar o site! 🎉✨
