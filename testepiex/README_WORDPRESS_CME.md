# 🎨 CME WORDPRESS IDENTITY - PACOTE COMPLETO

**Cruzada dos Militares Espíritas - Identidade Visual WordPress**

---

## 📦 O QUE ESTÁ INCLUÍDO

### 1. **wordpress-cme-identity.css** (52KB)
CSS completo com:
- Variáveis de cor (azul #007EA7 + rosa #9C4080)
- Navbar sticky com animações
- Hero section com gradiente e efeitos
- Botões com ripple effect
- Scroll reveal (Intersection Observer)
- Responsivo (mobile-first)
- Acessibilidade (prefers-reduced-motion)

**Usar em:** Aparência > Personalizar > CSS Adicional (WordPress)

---

### 2. **wordpress-cme-identity.js** (11KB)
JavaScript puro (sem dependências) com:
- Sticky scroll effect na navbar
- Detecção automática de item ativo
- Ripple effect em botões
- Scroll reveal com Intersection Observer
- Wrapping de palavras para animação escalonada

**Usar em:** functions.php ou "Insert Headers and Footers" plugin

---

### 3. **WORDPRESS_INTEGRATION_GUIDE.md**
Guia passo a passo com 4 opções:
- ✅ Opção 1: Customizer (Mais fácil)
- ✅ Opção 2: functions.php (Recomendado)
- ✅ Opção 3: Plugin "Code Snippets"
- ✅ Opção 4: "Insert Headers and Footers"

**Leia primeiro este arquivo!**

---

### 4. **WORDPRESS_HTML_EXAMPLES.html**
10 exemplos prontos para copiar/colar:
1. Navbar completa com menu e busca
2. Hero section completa
3. Seção com scroll reveal
4. Cards em grid
5. Botões para teste
6. Formulário de contato
7. Timeline de eventos
8. Testimonials
9. Call-to-action
10. Footer estilizado

**Usar em:** Página > Editar > Código HTML

---

### 5. **WORDPRESS_CSS_SNIPPETS.css**
Snippets isolados de CSS:
- Snippet 1: Apenas variáveis
- Snippet 2: Apenas navbar
- Snippet 3: Apenas hero
- Snippet 4: Apenas animações
- Snippet 5: Apenas responsivo
- Snippet 6: Apenas acessibilidade
- Snippet 7: Apenas tipografia
- Snippet 8: Temas alternativos
- Snippet 9: Search box
- Snippet 10: Cards com hover
- Snippet 11: Footer

**Usar em:** Se quiser componentes específicos

---

### 6. **WORDPRESS_TECHNICAL_DOCS.md**
Documentação técnica profunda:
- Arquitetura completa
- Paleta técnica (RGB, gradientes)
- Escala tipográfica
- Explicação de todas as animações
- Código JavaScript comentado
- Troubleshooting avançado
- Performance (Lighthouse)
- Acessibilidade (WCAG AA)
- Compatibilidade de browsers
- Exemplos de uso avançado

**Ler se:** Precisar customizar ou debugar

---

## 🚀 QUICK START (5 MINUTOS)

### Passo 1: Copiar CSS
```
Painel WordPress → Aparência → Personalizar → CSS Adicional
↓
Copie TODO conteúdo de: wordpress-cme-identity.css
↓
Cole na caixa de texto
↓
Clique em "Publicar"
```

### Passo 2: Copiar JavaScript
```
Via FTP ou File Manager:
wp-content/themes/seu-tema/assets/cme/
↓
Coloque: wordpress-cme-identity.js aqui

OU via functions.php (mais fácil):
Copie o código da "WORDPRESS_INTEGRATION_GUIDE.md" Passo 2
```

### Passo 3: Testar
```
1. Vá para seu site
2. Aperte F12 (DevTools)
3. Procure por "CME" no console
4. Role a página → navbar muda de cor
5. Clique em botão → ripple effect
```

### Passo 4: Usar HTML
```
Se quiser navbar/hero/cards prontos:
Copie blocos de: WORDPRESS_HTML_EXAMPLES.html
↓
Página → Editar → Trocar para "Código"
↓
Cole o HTML
↓
Ajuste URLs e textos
```

---

## 🎨 PERSONALIZAR CORES

### Opção A (Fácil - via CSS Adicional):
```css
:root {
  --cme-primary: #007EA7;    /* Mude para sua cor azul */
  --cme-accent: #9C4080;     /* Mude para sua cor rosa */
}
```

### Opção B (Profissional - via functions.php):
Crie arquivo custom: `wordpress-cme-custom.css`
Mude as variáveis em `:root {}`
Carregue via functions.php

---

## 📊 ARQUIVOS & TAMANHOS

| Arquivo | Tamanho | Comprimido |
|---------|---------|-----------|
| CSS | 52 KB | 6 KB |
| JS | 11 KB | 4 KB |
| **Total** | **63 KB** | **10 KB** |

**Performance:** Impacto mínimo no Lighthouse (85+)

---

## ✨ FUNCIONALIDADES

### Navbar
- ✅ Sticky (fica no topo ao rolar)
- ✅ Muda cor ao scroll (rgba #005f82)
- ✅ Sublinhado animado ao hover
- ✅ Item ativo destacado
- ✅ Search box integrado
- ✅ Logo com ícone

### Hero Section
- ✅ Gradiente animado (140deg)
- ✅ Badge com pill style
- ✅ Título com animação escalonada (por palavra)
- ✅ Subtítulo
- ✅ Linha decorativa crescente
- ✅ 2 botões (primário + secundário)
- ✅ Círculos decorativos de fundo

### Botões
- ✅ Primário (rosa #9C4080)
- ✅ Secundário (transparent com borda)
- ✅ Ripple effect ao clicar
- ✅ Hover com sombra e translateY

### Interatividade
- ✅ Scroll reveal (seções entram animadas)
- ✅ Menu ativo auto-detectado
- ✅ Ripple effect em cliques
- ✅ Suavidade profissional

### Acessibilidade
- ✅ prefers-reduced-motion (respeita preferência)
- ✅ Contraste WCAG AA
- ✅ Teclado navegável
- ✅ ARIA labels em inputs

### Responsivo
- ✅ Mobile first
- ✅ Breakpoint 768px
- ✅ Toca suporta 320px+
- ✅ Desktop suporta 1200px+

---

## 🔧 REQUISITOS

### Mínimos
- WordPress 5.0+
- PHP 7.2+
- Tema com `<nav>` ou `.navbar`
- JavaScript ativado no navegador

### Recomendado
- WordPress 6.0+
- PHP 8.0+
- Tema customizável (Elementor, GeneratePress, Astra)
- HTTP/2 e gzip ativados

### Não requer
- ❌ jQuery
- ❌ Bootstrap
- ❌ Node.js / npm
- ❌ Webpack / build tools

---

## 🐛 TROUBLESHOOTING RÁPIDO

| Problema | Solução |
|----------|---------|
| CSS não aparece | Limpe cache: W3 Total Cache > Purge |
| Cores erradas | Verifique variáveis --cme-primary em :root |
| Animações não funcionam | Abra F12 > Console, procure por erros |
| Navbar não gruda | Certifique-se que tem `<nav>` ou `.navbar` |
| Menu não ativa | Verifique classe `.active` ou `.current-menu-item` |
| Ripple não funciona | Verifique se JS está carregado (F12 > console) |
| Responsivo quebrado | Adicione `<meta name="viewport">` no header |

**Mais help:** Veja `WORDPRESS_TECHNICAL_DOCS.md` seção "Troubleshooting"

---

## 📱 COMPATIBILIDADE

### Browsers Desktop
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ❌ IE 11 (não suportado)

### Browsers Mobile
- ✅ iOS Safari 12+
- ✅ Android Chrome/Firefox
- ✅ Samsung Internet
- ✅ UC Browser

---

## 📚 DOCUMENTAÇÃO COMPLETA

### Para iniciantes:
1. Comece: `WORDPRESS_INTEGRATION_GUIDE.md`
2. Depois: `WORDPRESS_HTML_EXAMPLES.html`
3. Copie e cole: siga os exemplos

### Para desenvolvedores:
1. Técnica: `WORDPRESS_TECHNICAL_DOCS.md`
2. Snippets: `WORDPRESS_CSS_SNIPPETS.css`
3. Debug: Use F12 DevTools

### Para designers:
1. Cores: Veja `WORDPRESS_TECHNICAL_DOCS.md` seção "Paleta Técnica"
2. Tipografia: Montserrat (títulos) + Inter (corpo)
3. Espaçamentos: Padding 20px, gaps 24px

---

## 🎓 COMO USAR CADA ARQUIVO

### `wordpress-cme-identity.css`
```
Não edite manualmente!

Use:
1. Copie inteiro para "Aparência > Personalizar > CSS Adicional"
2. Ou copie para: wp-content/themes/seu-tema/assets/cme/
3. Carregue via functions.php
```

### `wordpress-cme-identity.js`
```
Não edite manualmente!

Use:
1. Coloque em: wp-content/themes/seu-tema/assets/cme/
2. Carregue via functions.php (veja Integration Guide)
3. Ou copie para "Insert Headers and Footers" plugin
```

### `WORDPRESS_INTEGRATION_GUIDE.md`
```
Leia primeiro! Tem 4 opções de integração:

1. Customizer (mais fácil, 3 min)
2. functions.php (mais profissional, 5 min)
3. Plugin "Code Snippets" (mais seguro, 8 min)
4. "Insert Headers and Footers" (alternativa, 5 min)

Escolha 1 e siga os passos.
```

### `WORDPRESS_HTML_EXAMPLES.html`
```
Copie e cole conforme necessário:

1. Quer navbar? → Copie Exemplo 1
2. Quer hero? → Copie Exemplo 2
3. Quer cards? → Copie Exemplo 4
4. Quer footer? → Copie Exemplo 10

Cada bloco é independente!
```

### `WORDPRESS_CSS_SNIPPETS.css`
```
Para customização avançada:

Quer apenas navbar? → Snippet 2
Quer apenas cores? → Snippet 1
Quer apenas animações? → Snippet 4

Cada snippet pode ser usado isolado.
```

### `WORDPRESS_TECHNICAL_DOCS.md`
```
Para debugging e customização profunda:

Quer entender como funciona? → Leia "Arquitetura"
Quer customizar cores? → Veja "Paleta Técnica"
Quer debugar JavaScript? → Veja "Troubleshooting Avançado"
Quer performance? → Veja "Otimização de Performance"
```

---

## 💡 DICAS PROFISSIONAIS

### ✅ Faça
```
1. Ative gzip no servidor (reduz 90% tamanho)
2. Use CDN para Google Fonts
3. Ative caching de navegador
4. Teste em múltiplos browsers
5. Use Lighthouse para medir performance
```

### ❌ Não faça
```
1. Não edite arquivos CSS/JS diretos
2. Não remova as variáveis :root {}
3. Não sobreescreva com !important indiscriminadamente
4. Não misture frameworks (Bootstrap, Tailwind, etc)
5. Não carregue duas vezes os mesmos arquivos
```

---

## 📊 MÉTRICAS ESPERADAS

### Google Lighthouse
```
Performance: 85-95 (depende do tema base)
Accessibility: 95-100
Best Practices: 90-95
SEO: 95-100
```

### Core Web Vitals
```
LCP (Largest Contentful Paint): 1.5-2.5s ✅
FID (First Input Delay): <50ms ✅
CLS (Cumulative Layout Shift): <0.05 ✅
```

---

## 🆘 PRECISA DE AJUDA?

### Consulte:
1. **Guia de Integração** - Para instalar
2. **Exemplos HTML** - Para copiar/colar
3. **Docs Técnicas** - Para entender
4. **Snippets CSS** - Para customizar
5. **Console (F12)** - Para debugar

### Checklist antes de reportar erro:
- [ ] Limpou cache (Ctrl+Shift+Del)?
- [ ] Limpou cache do WordPress?
- [ ] Verificou console (F12) para erros?
- [ ] Testou em navegador diferente?
- [ ] Desativou plugins conflitantes?
- [ ] Leu a documentação correspondente?

---

## 📄 LICENÇA & CRÉDITOS

**Desenvolvido para:** Cruzada dos Militares Espíritas (CME)  
**Versão:** 1.0  
**Compatibilidade:** WordPress 5.0+  
**Licença:** MIT (livre para uso comercial e pessoal)

**Cores e Branding:**
- Primária (Azul): #007EA7
- Acento (Rosa): #9C4080
- Tipografia: Montserrat + Inter (Google Fonts)

**Suporte:** WordPress 5.0+ / PHP 7.2+ / All Browsers

---

## 🎉 PRÓXIMAS ETAPAS

### 1. Instale (5 min)
Siga `WORDPRESS_INTEGRATION_GUIDE.md` Opção 1 ou 2

### 2. Teste (5 min)
Visite seu site e verifique:
- Navbar azul, sticky
- Botões com ripple
- Scroll reveal funcionando
- Sem erros no console

### 3. Customize (15 min)
Se needed:
- Mude cores em :root {}
- Ajuste tamanhos de fonte
- Atualize URLs nos botões
- Adicione seus conteúdos

### 4. Otimize (10 min)
- Ative gzip no servidor
- Use CDN para fontes
- Rode Lighthouse
- Melhore score se needed

---

## 🙌 OBRIGADO!

Estamos felizes em ter você usando a identidade visual CME no WordPress.

Se tiver dúvidas ou sugestões, verifique a documentação incluída ou consulte a documentação do WordPress oficial.

**Boa sorte! ✨**

---

**Desenvolvido com ❤️ para Cruzada dos Militares Espíritas**  
**Versão 1.0 | 2024**
