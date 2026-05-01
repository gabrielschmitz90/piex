# Cruzadas Militares Espíritas - Plataforma de Informação e Experiência

## 📋 Visão Geral

Cruzadas Militares Espíritas (CME) é uma plataforma web moderna de informação e experiência, desenvolvida com arquitetura clara e bem organizada para facilitar manutenção e expansão futura.

---

## 🎨 Identidade Visual

### Paleta de Cores
- **Cor Primária**: Azul (#007EA7) - Usada em títulos, headers, botões principais
- **Cor de Destaque**: Rosa/Púrpura (#9C4080) - Usada em elementos de ênfase
- **Cores Neutras**: Branco, cinza claro, cinza escuro, preto
- **Cores Funcionais**: Verde (sucesso), Laranja (aviso), Vermelho (erro), Azul claro (info)

### Tipografia
- **Títulos (H1-H6)**: Montserrat Bold (700)
  - Usada em: Cabeçalhos, títulos de seções, nomes de colunistas
  - Hierarquia visual clara
  
- **Corpo de Texto**: Inter Regular (400)
  - Usada em: Artigos, comunicados, descrições, menus
  - Leitura fluida e confortável

---

## 📁 Estrutura de Pastas

```
cme/
├── index.html                 # Home - Página principal
├── assets/                    # Recursos estáticos
│   ├── colors/               # Configuração de cores
│   │   └── palette.css       # Variáveis CSS de cores
│   ├── fonts/                # Tipografia
│   │   └── typography.css    # Estilos tipográficos
│   └── images/               # Imagens do projeto
├── pages/                    # Páginas do site
│   ├── home/                 # Home (redundante com index.html)
│   ├── quem-somos/           # Página: Quem Somos
│   │   └── index.html
│   ├── agenda-eventos/       # Página: Agenda/Eventos
│   │   └── index.html
│   ├── conteudos/            # Página: Conteúdos
│   │   └── index.html
│   ├── midia/                # Página: Mídia
│   │   └── index.html
│   └── contato/              # Página: Contato
│       └── index.html
├── components/               # Componentes reutilizáveis
│   ├── header.html           # Header/Navegação
│   └── footer.html           # Footer
├── styles/                   # Estilos CSS
│   ├── main.css              # Importação de todos os estilos
│   ├── reset.css             # Normalização CSS
│   ├── layout.css            # Estilos de layout
│   └── components.css        # Estilos de componentes
├── js/                       # JavaScript
│   └── (Adicionar scripts conforme necessário)
└── README.md                 # Este arquivo
```

---

## 🗂️ Descrição das Pastas Principais

### `/assets/colors/`
Centraliza toda a configuração de cores do projeto. O arquivo `palette.css` define variáveis CSS que podem ser usadas em qualquer lugar do projeto.

### `/assets/fonts/`
Contém definições tipográficas. Importa fontes do Google Fonts e define estilos para todos os elementos de texto.

### `/pages/`
Cada seção do menu principal tem sua própria pasta com um arquivo `index.html`:
- **Home**: Página inicial com destaques
- **Quem Somos**: História, missão, visão e valores
- **Agenda/Eventos**: Calendário de eventos
- **Conteúdos**: Artigos, estudos e publicações
- **Mídia**: Galeria de fotos e vídeos
- **Contato**: Formulário e localização

### `/components/`
Componentes reutilizáveis (header, footer, etc.)

### `/styles/`
Todos os arquivos CSS, organizados por funcionalidade:
- `main.css`: Arquivo de entrada que importa todos os outros
- `reset.css`: Normalização de estilos padrão
- `layout.css`: Grid, flexbox e estrutura de página
- `components.css`: Botões, cards, badges, inputs, etc.

---

## 🌐 Menu de Navegação

O site possui 6 seções principais, acessíveis em máximo 2 cliques:

1. **Home** - Início com destaques e avisos
2. **Quem Somos** - História, Missão e Visão
3. **Agenda/Eventos** - Calendário de reuniões e atividades
4. **Conteúdos** - Artigos, estudos e publicações
5. **Mídia** - Galeria de fotos e vídeos
6. **Contato** - Formulário e localização

---

## 🎯 Componentes Disponíveis

### Botões
```html
<button class="btn btn-primary">Botão Primário</button>
<button class="btn btn-accent">Botão Destaque</button>
<button class="btn btn-outline">Botão Outline</button>
<button class="btn btn-small">Pequeno</button>
<button class="btn btn-large">Grande</button>
```

### Cards
```html
<div class="card">
  <h4 class="card-title">Título</h4>
  <p class="card-text">Descrição</p>
</div>
```

### Grid
```html
<div class="grid-2 gap-2"><!-- 2 colunas --></div>
<div class="grid-3 gap-2"><!-- 3 colunas --></div>
<div class="grid-4 gap-2"><!-- 4 colunas --></div>
```

### Badges
```html
<span class="badge badge-primary">Primário</span>
<span class="badge badge-accent">Destaque</span>
<span class="badge badge-success">Sucesso</span>
```

### Alerts
```html
<div class="alert alert-success">Mensagem de sucesso</div>
<div class="alert alert-warning">Mensagem de aviso</div>
<div class="alert alert-error">Mensagem de erro</div>
```

---

## 🚀 Como Usar

### 1. Adicionar Nova Página
1. Crie uma pasta em `/pages/novo-topico/`
2. Crie um arquivo `index.html` dentro da pasta
3. Copie a estrutura básica de uma página existente
4. Atualize o menu de navegação em todos os arquivos

### 2. Modificar Cores
1. Edite `/assets/colors/palette.css`
2. As variáveis CSS serão atualizadas em todo o projeto

### 3. Modificar Tipografia
1. Edite `/assets/fonts/typography.css`
2. Ajuste tamanhos, pesos e espaçamentos conforme necessário

### 4. Adicionar Componentes
1. Crie os estilos em `/styles/components.css`
2. Use as classes em suas páginas

---

## 📱 Responsividade

Todos os estilos incluem media queries para dispositivos móveis (768px e menores).

---

## 🔍 Acessibilidade

- Cores contrastantes para melhor legibilidade
- Hierarquia tipográfica clara
- Estrutura semântica HTML
- Tamanhos de botão adequados para interação

---

## 📝 Convenções de Código

### Nomes de Classes CSS
- Use nomenclatura BEM ou descritiva
- Exemplo: `.btn-primary`, `.card-image`, `.flex-between`

### Estrutura HTML
- Use elementos semânticos (header, main, section, footer)
- Mantenha indentação consistente
- Use comentários HTML para seções principais

### Variáveis CSS
- Defina em `:root` no arquivo apropriado
- Use nomenclatura `--category-property`
- Exemplo: `--color-primary`, `--font-size-xl`

---

## 🛠️ Manutenção

### Checklist de Manutenção
- [ ] Validar links de navegação
- [ ] Testar responsividade em dispositivos diferentes
- [ ] Verificar compatibilidade de navegadores
- [ ] Atualizar conteúdos regularmente
- [ ] Manter backup da estrutura de pastas

---

## 📧 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através de:
- Email: contato@cme.com.br
- Telefone: (XX) XXXX-XXXX

---

## 📄 Licença

[Adicione informações de licença se necessário]

---

**Última atualização**: Maio de 2026
