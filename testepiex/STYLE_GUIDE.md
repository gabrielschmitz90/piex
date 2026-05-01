# 📋 Guia de Estilo - Cruzadas Militares Espíritas

## Visão Geral

Este documento define os padrões de design e desenvolvimento para a plataforma Cruzadas Militares Espíritas. Garante consistência visual e funcional em todo o projeto.

---

## 🎨 Sistema de Cores

### Cores Primárias
| Cor | Hex | Uso |
|-----|-----|-----|
| Azul Primário | #007EA7 | Títulos, headers, botões principais |
| Rosa/Púrpura | #9C4080 | Elementos de destaque e ênfase |

### Cores Neutras
| Cor | Hex | Uso |
|-----|-----|-----|
| Branco | #FFFFFF | Fundo padrão |
| Cinza Claro | #F5F5F5 | Fundos secundários |
| Cinza | #CCCCCC | Bordas e separadores |
| Cinza Escuro | #666666 | Texto secundário |
| Preto | #1A1A1A | Texto principal |

### Cores Funcionais
| Cor | Hex | Uso |
|-----|-----|-----|
| Verde (Sucesso) | #10B981 | Mensagens positivas |
| Laranja (Aviso) | #F59E0B | Alertas e avisos |
| Vermelho (Erro) | #EF4444 | Erros e problemas |
| Azul Claro (Info) | #3B82F6 | Informações |

---

## 🔤 Tipografia

### Famílias de Fontes
```css
Títulos: Montserrat (Google Fonts)
Corpo: Inter (Google Fonts)
```

### Hierarquia Tipográfica

| Elemento | Font | Tamanho | Peso | Uso |
|----------|------|---------|------|-----|
| H1 | Montserrat | 48px | 700 | Títulos principais de página |
| H2 | Montserrat | 36px | 700 | Títulos de seções |
| H3 | Montserrat | 30px | 700 | Subtítulos |
| H4 | Montserrat | 24px | 700 | Títulos de cards |
| H5 | Montserrat | 20px | 700 | Labels pequenos |
| H6 | Montserrat | 18px | 700 | Labels mínimos |
| Parágrafo | Inter | 16px | 400 | Corpo de texto |
| Pequeno | Inter | 14px | 400 | Textos secundários |

### Linha de Base
- **Normal**: 1.5 (24px para 16px)
- **Apertado**: 1.2 (para títulos)
- **Relaxado**: 1.75 (para blocos de texto longos)

---

## 🔘 Componentes

### Botões

#### Estados Primários
```html
<button class="btn btn-primary">Primário</button>
<button class="btn btn-primary" disabled>Desabilitado</button>
<button class="btn btn-primary" style="opacity: 0.9;">Hover</button>
```

**Especificações:**
- Altura: 44px (padrão)
- Padding: 12px 24px
- Border radius: 6px
- Font weight: 600
- Transição: 0.3s ease

#### Variações
```html
<!-- Tamanhos -->
<button class="btn btn-primary btn-small">Pequeno</button>
<button class="btn btn-primary">Normal</button>
<button class="btn btn-primary btn-large">Grande</button>

<!-- Estilos -->
<button class="btn btn-primary">Primário</button>
<button class="btn btn-accent">Destaque</button>
<button class="btn btn-outline">Outline</button>
```

### Cards

```html
<div class="card">
  <div class="card-image">
    <img src="image.jpg" alt="descrição">
  </div>
  <h4 class="card-title">Título</h4>
  <p class="card-text">Descrição do card</p>
  <button class="btn btn-primary">Ação</button>
</div>
```

**Especificações:**
- Padding: 24px
- Border radius: 8px
- Box shadow: 0 2px 8px rgba(0,0,0,0.1)
- Hover: Translação -4px com shadow aumentada

### Inputs e Forms

```html
<input type="text" placeholder="Texto...">
<input type="email" placeholder="Email...">
<textarea placeholder="Mensagem..."></textarea>
<select>
  <option>Opção 1</option>
</select>
```

**Especificações:**
- Padding: 12px
- Border: 1px solid #CCCCCC
- Border radius: 6px
- Focus: Border azul primário com box-shadow

### Badges

```html
<span class="badge badge-primary">Primário</span>
<span class="badge badge-accent">Destaque</span>
<span class="badge badge-success">Sucesso</span>
```

---

## 📐 Espaçamento

### Sistema de Espaçamento (em pixels)
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 32px
2xl: 40px
```

### Gaps de Grid
```css
gap-1: 10px
gap-2: 20px
gap-3: 30px
```

---

## 📏 Dimensões

### Container
- Largura máxima: 1200px
- Padding lateral: 20px (mobile: 15px)

### Breakpoints
- Mobile: até 768px
- Tablet: 768px a 1024px
- Desktop: acima de 1024px

---

## 🎭 Estados Visuais

### Hover
- Alterar cor ou aplicar transição suave
- Elevação visual (box-shadow)
- Mudança de cursor

### Focus
- Outline clara ou box-shadow
- Importante para acessibilidade

### Active
- Cor mais escura ou pressionada
- Feedback visual imediato

### Disabled
- Opacidade reduzida
- Cursor "not-allowed"

---

## 📊 Grid e Layout

### Grid Systems
```css
.grid-2 /* 2 colunas */
.grid-3 /* 3 colunas */
.grid-4 /* 4 colunas */
```

### Flexbox
```css
.flex /* display: flex */
.flex-center /* centralizadas */
.flex-between /* espaçadas */
.flex-column /* coluna */
.flex-wrap /* wrap habilitado */
```

---

## 🎥 Animações e Transições

### Transições Padrão
```css
transition: all 0.3s ease;
```

### Easing Functions
- `ease`: Suave e natural
- `ease-in`: Começa lenta
- `ease-out`: Termina lenta
- `ease-in-out`: Suave em ambos os lados

---

## ♿ Acessibilidade

### Contrates
- Texto vs fundo: Mínimo 4.5:1
- Ícones: Mínimo 3:1

### Tamanhos
- Botões: Mínimo 44x44px
- Texto: Mínimo 14px
- Espaçamento de toque: Mínimo 8px

### Semântica
- Use elementos `<button>`, `<a>`, `<form>` apropriados
- Adicione `aria-labels` quando necessário
- Estruture com headings corretamente

---

## 📱 Responsividade

### Breakpoint 768px
- Reduzir tamanños de fontes em 10-15%
- Ajustar grid de multi-coluna para single-column
- Aumentar padding em mobile para melhor touch

### Mobile First Approach
Sempre comece com estilos mobile e adicione media queries para telas maiores.

---

## 🔍 Checklist de Design

- [ ] Cores dentro da paleta definida
- [ ] Tipografia usando Montserrat/Inter
- [ ] Espaçamento consistente
- [ ] Componentes reutilizáveis
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] Contraste adequado
- [ ] Estados visuais claros
- [ ] Sem elementos orfãos

---

**Versão**: 1.0
**Última atualização**: Maio de 2026
