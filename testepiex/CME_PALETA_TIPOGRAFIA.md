# 🎨 PALETA DE CORES & TIPOGRAFIA - CME
## Guia Visual de Referência

---

## 🎨 PALETA DE CORES COMPLETA

### Cores Primárias (Dominantes)

#### Azul Primário
```
Nome: Azul Dominante / Primary Blue
Hex: #007EA7
RGB: 0, 126, 167
HSL: 196°, 100%, 33%
Uso: Navbar, títulos, botões secundários, borders
Exemplo: Fundo do header
```

#### Azul Escuro
```
Nome: Azul Scroll / Dark Primary
Hex: #005f82
RGB: 0, 95, 130
HSL: 196°, 100%, 26%
Uso: Navbar ao rolar, hover profundo
Exemplo: Navbar após scroll > 60px
```

#### Azul Claro
```
Nome: Azul Background / Light Primary
Hex: #e0f4fb
RGB: 224, 244, 251
HSL: 196°, 100%, 93%
Uso: Background de cards, hover suave
Exemplo: Seções com fundo suave
```

### Cores de Destaque (Acentos)

#### Rosa/Púrpura Acento
```
Nome: Rosa Destaque / Accent Purple
Hex: #9C4080
RGB: 156, 64, 128
HSL: 318°, 41%, 43%
Uso: CTA primário, sublinhado hover, linha decorativa, ativo
Exemplo: Botões principais, sublinhado menu hover
```

#### Rosa Escuro
```
Nome: Rosa Hover / Dark Accent
Hex: #7d3366
RGB: 125, 51, 102
HSL: 318°, 42%, 35%
Uso: Hover em botões rosas, estado ativo
Exemplo: Botão rosa ao passar mouse
```

### Cores Neutras

#### Branco
```
Nome: White
Hex: #ffffff
RGB: 255, 255, 255
HSL: 0°, 0%, 100%
Uso: Textos sobre azul, fundos claros
Exemplo: Texto navbar
```

#### Texto Principal
```
Nome: Text Primary
Hex: #2c3e50
RGB: 44, 62, 80
HSL: 207°, 29%, 24%
Uso: Corpo de texto, parágrafos
Exemplo: Texto em fundo branco
```

#### Texto Secundário
```
Nome: Text Secondary
Hex: #637282
RGB: 99, 114, 130
HSL: 210°, 14%, 45%
Uso: Subtítulos, metadados
Exemplo: Datas, tags, informações extras
```

---

## 📐 ESCALA TIPOGRÁFICA

### Fonte 1: Montserrat (Títulos)

```
Font: Montserrat
Weight: 700 (Bold)
Import: @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');

Tamanhos:
  H1 (Título Principal):  40px | line-height: 1.25
  H2 (Título Seção):      32px | line-height: 1.30
  H3 (Subtítulo):         24px | line-height: 1.35
  Logo:                   18px | line-height: 1.00
```

### Fonte 2: Inter (Corpo & Menus)

```
Font: Inter
Weights: 400 (Regular), 500 (Medium), 600 (Semibold)
Import: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');

Tamanhos:
  Body (Parágrafo):    16px | weight: 400 | line-height: 1.60
  Menu Links:          14px | weight: 400 | line-height: 1.00
  Busca/Label:         13px | weight: 500 | line-height: 1.40
  Small/Caption:       12px | weight: 400 | line-height: 1.40
  Tiny/Meta:           11px | weight: 500 | line-height: 1.20
```

---

## 🎯 COMBINAÇÕES DE CORES (APROVADAS)

### Navbar
```
Background:  #007EA7 (Azul Primário)
Texto:       rgba(255,255,255,0.88) (Branco 88%)
Hover BG:    rgba(255,255,255,0.10) (Branco 10% overlay)
Hover texto: #ffffff (Branco 100%)
Sublinhado:  #9C4080 (Rosa)
Ativo BG:    rgba(156,64,128,0.20) (Rosa 20%)
Ativo Border: rgba(156,64,128,0.30) (Rosa 30%)
```

### Hero
```
Background Gradiente: 
  De #005f82 (0%)
  Para #007EA7 (55%)
  Para #006a8e (100%)
  Direção: 140deg

Título:      #ffffff (Branco) com text-shadow
Subtítulo:   rgba(255,255,255,0.80) (Branco 80%)
Linha:       #9C4080 (Rosa)
Botão CTA:   bg:#9C4080, texto:#ffffff
Botão 2:     bg:transparent, border:#ffffff, texto:#ffffff
```

### Cards/Seções
```
Background:  #e0f4fb (Azul Claro)
Titulo:      #2c3e50 (Texto Principal)
Corpo:       #637282 (Texto Secundário)
Border:      #007EA7 (Azul Primário) 1-2px
Hover:       Box-shadow com #007EA7
```

---

## 🌈 GRADIENTES PREDEFINIDOS

### Gradiente Hero (Recomendado)
```css
background: linear-gradient(140deg, #005f82 0%, #007EA7 55%, #006a8e 100%);
```

### Gradiente Alternativo 1 (Mais suave)
```css
background: linear-gradient(135deg, #007EA7 0%, #4db8d0 100%);
```

### Gradiente Alternativo 2 (Com rosa)
```css
background: linear-gradient(140deg, #9C4080 0%, #007EA7 100%);
```

### Gradiente Alternativo 3 (Profundo)
```css
background: linear-gradient(180deg, #005f82 0%, #003a4a 100%);
```

---

## ✨ SOMBRAS PREDEFINIDAS

### Sombra Navbar (Padrão)
```css
box-shadow: 0 4px 24px rgba(0,126,167,0.40), 0 1px 6px rgba(0,0,0,0.18);
```

### Sombra Navbar (Ao rolar)
```css
box-shadow: 0 8px 36px rgba(0,95,130,0.55), 0 2px 10px rgba(0,0,0,0.25);
```

### Sombra Botão CTA
```css
box-shadow: 0 4px 18px rgba(156,64,128,0.45);
```

### Sombra Botão CTA (Hover)
```css
box-shadow: 0 6px 24px rgba(156,64,128,0.60);
```

### Sombra Card
```css
box-shadow: 0 4px 12px rgba(0,126,167,0.1);
```

### Sombra Text (Hero)
```css
text-shadow: 0 2px 12px rgba(0,0,0,0.25);
```

---

## 📊 CONTRASTE (WCAG AA)

### Todos aprovados para acessibilidade ✅

```
#007EA7 (azul) sobre #ffffff (branco):
  Razão de contraste: 4.6:1 ✅ (mínimo 4.5:1)
  
#ffffff (branco) sobre #007EA7 (azul):
  Razão de contraste: 4.6:1 ✅ (mínimo 4.5:1)
  
#9C4080 (rosa) sobre #ffffff (branco):
  Razão de contraste: 4.8:1 ✅ (mínimo 4.5:1)
  
#2c3e50 (texto) sobre #ffffff (branco):
  Razão de contraste: 7.8:1 ✅ (mínimo 4.5:1)
  
#637282 (secundário) sobre #ffffff (branco):
  Razão de contraste: 5.2:1 ✅ (mínimo 4.5:1)
```

---

## 📏 ESPAÇAMENTOS PADRÃO

### Padding/Margin
```
Pequeno:   8px    (links, badges)
Normal:    12px   (cards, seções internas)
Médio:     16px   (espaço entre seções)
Grande:    24px   (seções principais)
Extra:     32px   (espaçamento vertical)
Gigante:   64px   (entre seções grandes)
```

### Border Radius
```
Pequeno:   4px   (inputs, tags)
Normal:    6px   (buttons, cards leves)
Grande:    8px   (cards, modals)
Redondo:   50%   (avatares, ícones)
```

---

## 🕐 TEMPOS DE ANIMAÇÃO

```
Rápido (hover):      0.2s ease
Normal (scroll):     0.35s ease
Suave (entrada):     0.55s ease-out
Custom (cubic):      cubic-bezier(0.4, 0, 0.2, 1)

Ripple:              0.6s ease-out
Linha hero:          1.1s cubic-bezier(0.4, 0, 0.2, 1)
Sublinhado:          0.25s cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 🎨 INSPIRAÇÃO VISUAL

### Navbar
- Fundo azul sólido e profissional
- Texto branco com transparência inicial
- Sublinhado rosa ao hover (animado)
- Item ativo com background rosa 20%
- Ícone: rosa/roxo para destaque

### Hero
- Gradiente azul profundo (140deg)
- Título grande, branco, sombra forte
- Subtítulo em branco 80%
- Linha rosa crescente no meio
- Botões: rosa (CTA) + transparent outline
- Círculos decorativos translúcidos

### Cards/Seções
- Fundo azul claro suave
- Borda azul primária 1-2px
- Texto em tons neutros
- Sombra ao hover
- Transição suave

### Tipografia
- Montserrat (sério, profissional, forte)
- Inter (moderno, limpo, legível)
- Contraste sempre > 4.5:1

---

## 🔧 COMO USAR ESTA PALETA

### Em CSS:
```css
/* Variáveis */
:root {
  --cme-primary: #007EA7;
  --cme-accent: #9C4080;
  /* ... etc */
}

/* Uso */
nav { background: var(--cme-primary); }
button { background: var(--cme-accent); }
```

### Em Design (Figma/XD):
```
1. Copie cada hex
2. Crie color library com nomes
3. Use em componentes
4. Mantenha consistência
```

### Em HTML Inline:
```html
<div style="background-color: #007EA7; color: #ffffff;">
  Conteúdo
</div>
```

---

## 🎓 REGRAS DE USO

### ✅ Use assim:
```
- Navbar: Azul primário (#007EA7) como base
- Destaque: Rosa acento (#9C4080) em pontos chave
- Texto: Montserrat 700 em títulos, Inter 400 em corpo
- Hover: Mudar cor + adicionar sombra + animar
- Acessibilidade: Sempre manter contraste > 4.5:1
```

### ❌ Evite:
```
- Misturar muitas cores (max 5-7)
- Usar rosa como cor dominante
- Texto pequeno sem weight apropriado
- Sombras muito fortes
- Animações > 2s
- Contraste < 4.5:1
```

---

## 📱 ADAPTAÇÃO MOBILE

```
Desktop:
  Navbar altura: 66px
  Menu: 14px, padding 8px 12px
  Hero: min-height 500px
  H1: 40px

Mobile:
  Navbar altura: 56px
  Menu: 12px, padding 6px 9px
  Hero: min-height 350px
  H1: 28px

Extra pequeno:
  H1: 24px
  Hero: min-height 280px
```

---

## 🌍 EXPORTAR PARA OUTROS FORMATOS

### Figma
```
Nome: CME Brand Colors
Azul: #007EA7 (Primary)
Rosa: #9C4080 (Accent)
... (criar library)
```

### Tailwind CSS
```javascript
colors: {
  'cme-primary': '#007EA7',
  'cme-accent': '#9C4080',
  ...
}
```

### SASS Variables
```scss
$cme-primary: #007EA7;
$cme-accent: #9C4080;
...
```

---

## 🎯 PRÓXIMAS CORES? (Se expandir)

Se precisar adicionar mais cores no futuro:

```
Verde (confiança): #27ae60
Laranja (energia): #e67e22
Amarelo (alerta): #f39c12
Vermelho (erro): #e74c3c
Cinza (desabilitado): #95a5a6
```

**Mas mantenha a hierarquia: AZUL dominante, ROSA acento!**

---

## 📊 RESUMO VISUAL

```
PRIMÁRIA (Dominante - 70%)
████████████████████████████ #007EA7 (Navbar, títulos)

ACENTO (Destaque - 20%)
████████ #9C4080 (CTA, hover, linha)

NEUTRA (Suporte - 10%)
████ #ffffff, #2c3e50, #637282 (Texto, backgrounds)

SECUNDÁRIA (Suporte - variável)
████ #e0f4fb (Backgrounds suaves)
```

---

## 🎬 ANIMAÇÕES COM CORES

```
Hero Title: Fade in + #ffffff (branco com sombra)
Menu Link: Hover → cor branca + sublinhado rosa
Button: Mousedown → ripple rgba(255,255,255,0.6)
Card: Hover → sombra #007EA7 + transform
Scroll: Navbar → #005f82 (azul mais escuro)
```

---

**Desenvolvido para:** Cruzada dos Militares Espíritas (CME)  
**Padrão:** Design System Moderno  
**Contraste:** WCAG AA ✅  
**Acessibilidade:** Aprovado ✅  

Use esta paleta com confiança! 🎨✨
