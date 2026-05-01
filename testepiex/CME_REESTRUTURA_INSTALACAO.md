# 🎨 GUIA DE INSTALAÇÃO - CME REESTRUTURAÇÃO VISUAL
## Cruzada dos Militares Espíritas - WordPress

---

## 📋 VISÃO GERAL

Este guia ensina como aplicar a reestruturação visual completa do site CME em WordPress, corrigindo:

- ✅ Bolinhas roxas no menu (REMOVIDAS)
- ✅ Navbar branca (AZUL #007EA7)
- ✅ Hero com texto ilegível (TIPOGRAFIA CORRIGIDA)
- ✅ Sem hierarquia tipográfica (MONTSERRAT + INTER)
- ✅ Cores fragmentadas (PALETA COESA)

---

## 📦 ARQUIVOS NECESSÁRIOS

1. **CME_REESTRUTURA_STYLE.css** (14KB)
   - CSS com !important para sobrepor tema
   - Seletores múltiplos para compatibilidade
   - Animações, responsivo, acessibilidade

2. **CME_REESTRUTURA_CUSTOM.js** (10KB)
   - JavaScript vanilla (sem jQuery)
   - 5 funcionalidades: scroll effect, active link, ripple, scroll reveal, hero line

3. **Este arquivo (GUIA)**
   - Instruções passo a passo de integração

---

## 🎯 ESCOLHA SUA OPÇÃO DE INSTALAÇÃO

### ⭐ OPÇÃO 1: WordPress Nativo + Plugin (RECOMENDADO - Mais Fácil)

**Melhor para:** Temas padrão, GeneratePress, Astra, Neve  
**Tempo:** 5 minutos  
**Dificuldade:** Iniciante

#### Passo 1: Adicionar CSS

1. Vá para: **Painel WordPress → Aparência → Personalizar**
2. Na barra lateral, procure por **"CSS Adicional"** ou **"Custom CSS"**
3. Copie TODO conteúdo do arquivo `CME_REESTRUTURA_STYLE.css`
4. Cole na caixa de texto
5. Clique em **"Publicar"**

**Pronto!** O CSS está ativo.

#### Passo 2: Adicionar JavaScript

1. Vá para: **Plugins → Adicionar Novo**
2. Busque por: `"Insert Headers and Footers"` (do plugin do wpcode)
3. Instale e ative o plugin **"Insert Headers and Footers"** (by WP Code)

Ou instale **"Code Snippets"** (gratuito):

1. **Plugins → Adicionar Novo**
2. Busque: `"Code Snippets"`
3. Instale e ative

#### Passo 3: Colar o JavaScript

**Se usar "Insert Headers and Footers":**
1. Painel WordPress → **Configurações → Insert Headers and Footers**
2. Em **"Scripts in Footer"**, cole:

```html
<script>
<!-- Copie TODO conteúdo de CME_REESTRUTURA_CUSTOM.js aqui -->
</script>
```

**Se usar "Code Snippets":**
1. Painel WordPress → **Snippets → Adicionar Novo**
2. Nome: `CME - Reestruturação Visual`
3. Copie TODO conteúdo de `CME_REESTRUTURA_CUSTOM.js` na área de código
4. Marque: **Executar em**: Everywhere
5. Clique em **Salvar e Ativar**

#### Passo 4: Testar

1. Acesse seu site
2. Aperte **F12** (DevTools)
3. Vá para **Console**
4. Procure por mensagens azuis:
   - "CME - Cruzada dos Militares Espíritas"
   - "Reestruturação visual ativada ✨"
   - "Todas as funcionalidades foram inicializadas! 🎉"

5. Role a página → Navbar muda de cor ✅
6. Clique em botão → Ripple effect ✅

---

### 💻 OPÇÃO 2: WordPress + functions.php (Para Developers)

**Melhor para:** Temas customizados, desenvolvedores  
**Tempo:** 8 minutos  
**Dificuldade:** Intermediário

#### Passo 1: Copiar Arquivos

Via FTP ou File Manager do Hosting:

1. Crie pasta: `wp-content/themes/seu-tema/assets/cme/`
2. Coloque `CME_REESTRUTURA_STYLE.css` lá
3. Coloque `CME_REESTRUTURA_CUSTOM.js` lá

Estrutura final:
```
wp-content/
└── themes/
    └── seu-tema/
        └── assets/
            └── cme/
                ├── CME_REESTRUTURA_STYLE.css
                └── CME_REESTRUTURA_CUSTOM.js
```

#### Passo 2: Editar functions.php

1. Vá para: **Painel WordPress → Aparência → Editor de Arquivos do Tema**
2. Na lista de arquivos à direita, clique em **"functions.php"**
3. **Antes** de `?>` (se existir no final), adicione:

```php
/**
 * CME - Cruzada dos Militares Espíritas
 * Enfileirar CSS e JavaScript da reestruturação visual
 */
function cme_enqueue_assets() {
    
    // CSS
    wp_enqueue_style(
        'cme-reestrutura-css',
        get_template_directory_uri() . '/assets/cme/CME_REESTRUTURA_STYLE.css',
        [],
        '1.0.0',
        'all'
    );
    
    // JavaScript
    wp_enqueue_script(
        'cme-reestrutura-js',
        get_template_directory_uri() . '/assets/cme/CME_REESTRUTURA_CUSTOM.js',
        [],
        '1.0.0',
        true  // Carregar no footer (após DOM)
    );
    
}
add_action( 'wp_enqueue_scripts', 'cme_enqueue_assets' );
```

4. Clique em **"Atualizar Arquivo"**

#### Passo 3: Testar (igual Opção 1)

---

### 🎨 OPÇÃO 3: Elementor + Configurações Globais

**Melhor para:** Sites com Elementor  
**Tempo:** 10 minutos  
**Dificuldade:** Intermediário

#### Passo 1: CSS Elementor

1. Vá para: **Elementor → Configurações Globais → Personalizar**
2. Na seção **"CSS Adicional"** ou **"Custom CSS"**
3. Cole TODO conteúdo de `CME_REESTRUTURA_STYLE.css`
4. Salve as mudanças

#### Passo 2: JavaScript Elementor

**Opção A (Plugin Code Snippets):**
1. Instale e ative "Code Snippets"
2. Painel → **Snippets → Adicionar Novo**
3. Copie `CME_REESTRUTURA_CUSTOM.js`
4. Salve e ative

**Opção B (Custom Code Widget):**
1. Em uma página Elementor, adicione widget **"HTML"**
2. Cole `CME_REESTRUTURA_CUSTOM.js` envolto em `<script>` tags
3. Salve

#### Passo 3: Testar (igual Opção 1)

---

## 🔍 COMO IDENTIFICAR SELETORES DO SEU TEMA (DEBUGGING)

Se os estilos não aplicarem, verifique os seletores do seu tema:

### Passo 1: Abrir DevTools

1. Acesse seu site
2. Aperte **F12** ou **Ctrl+Shift+I** (Windows) / **Cmd+Option+I** (Mac)
3. Clique na aba **"Inspector"** (ou **"Elements"**)

### Passo 2: Inspecionar Navbar

1. Clique no ícone de seta (canto superior esquerdo do DevTools)
2. Clique na navbar do seu site
3. No Inspector, você verá:

```html
<header id="masthead" class="site-header">
  <!-- ou -->
<nav class="main-navigation">
  <!-- ou -->
<header class="site-header">
```

**Anote o ID ou classe** que aparecer (ex: `#masthead` ou `.site-header`)

### Passo 3: Verificar CSS Aplicado

1. No inspector, procure pela seção **"Styles"** (lado direito)
2. Você verá qual CSS está sendo aplicado
3. Se houver conflito, procure por:
   - `background-color: white;` (override)
   - Regras sem `!important`

### Passo 4: Adicionar Novos Seletores (Se Necessário)

Se seu tema usar seletores diferentes, adicione ao CSS Adicional:

```css
/* Se navbar usar ID diferente */
#my-custom-header {
  background-color: #007EA7 !important;
  position: sticky !important;
  top: 0 !important;
  z-index: 999 !important;
}
```

---

## ✅ CHECKLIST DE INSTALAÇÃO

- [ ] CSS adicionado (Personalizar > CSS Adicional OU functions.php)
- [ ] JavaScript adicionado (Insert Headers and Footers OU Code Snippets)
- [ ] Navegador atualizado (F5 ou Ctrl+Shift+Del)
- [ ] Console sem erros (F12 > Console)
- [ ] Mensagens CME aparecem no console
- [ ] Navbar azul (#007EA7)
- [ ] Sem bolinhas roxas no menu
- [ ] Scroll navbar fica mais escuro
- [ ] Botões têm ripple effect ao clicar
- [ ] Hero tem tipografia branca com sombra
- [ ] Seções animam ao rolar (scroll reveal)

---

## 🐛 TROUBLESHOOTING

### ❌ CSS não aparece

**Solução 1: Limpar cache**
- Painel → **Settings/Configurações** → Procure por cache plugin
- Limpe cache (W3 Total Cache, WP Super Cache, Elementor, etc)

**Solução 2: Cache do navegador**
- Abra DevTools (F12)
- Clique direito no botão atualizar → "Esvaziar cache e fazer recarga forçada"
- Ou: Ctrl+Shift+Delete

**Solução 3: Verificar se CSS está no lugar certo**
- F12 > Inspector > Procure por `CME_REESTRUTURA_STYLE.css` em Sources
- Se não aparecer, o arquivo não foi enfileirado corretamente

**Solução 4: Verificar !important**
- Procure na barra de estilos do inspector
- Se ver uma cor diferente e riscada, outra regra está sobrescrevendo
- Adicione `!important` a essa regra no CSS Adicional

### ❌ JavaScript não funciona

**Solução 1: Verificar console**
- F12 > Console
- Procure por mensagens "[CME]"
- Se não aparecer, JS não está carregando

**Solução 2: Verificar se JS está no lugar certo**
- F12 > Sources > Procure por `CME_REESTRUTURA_CUSTOM.js`
- Se não aparecer, o arquivo não foi enfileirado

**Solução 3: Verificar erros**
- F12 > Console
- Procure por mensagens vermelhas
- Note o erro e procure por conflito com outro plugin

**Solução 4: Teste JS manualmente**
- F12 > Console
- Cole: `console.log('teste')`
- Se aparecer "teste", console está OK
- Problema é com o script

### ❌ Navbar continua branca

**Solução 1: Força máxima**
- Vá para **CSS Adicional** e adicione:

```css
header, nav, #masthead, .site-header {
  background-color: #007EA7 !important;
}
```

**Solução 2: Encontrar seletor exato**
- F12 > Inspecione navbar
- Veja qual tag/classe está sendo usada
- Crie uma regra específica para isso

**Solução 3: Remover conflitos**
- Desative plugins um por um
- Se navbar ficar azul ao desativar um, aquele plugin está conflitando

### ❌ Menu tem bolinhas ainda visíveis

**Verificar:**
- F12 > Inspecione uma bolinha
- Procure por: `::before`, `::marker`, `list-style`
- Se encontrou, seu tema usa seletor diferente

**Adicionar ao CSS Adicional:**
```css
/* Remover bolinhas personalizadas */
.seu-menu-classe::before {
  content: none !important;
}

.seu-menu-classe li::marker {
  content: none !important;
}
```

### ❌ Ripple effect não funciona

**Causa comum:** Plugin de segurança bloqueando JavaScript

**Solução:**
1. Desative plugins de segurança temporariamente
2. Teste ripple
3. Se funcionar, configure plugin para permitir JS customizado

### ❌ Scroll reveal não funciona

**Causa:** Intersection Observer não suportado (IE muito antigo)

**Solução:** Seu navegador é muito antigo. Atualize ou use navegador moderno.

### ❌ Página branca / Erro 500

**Causa provável:** Erro de sintaxe no functions.php

**Solução:**
1. Painel → Aparência → Editor de Arquivos → functions.php
2. Verifique se tem aspas desequilibradas
3. Ou acesse via FTP e remova a adição que fez
4. Retest

---

## 📱 TESTE EM MOBILE

1. Abra seu site no celular
2. Verifique:
   - [ ] Navbar reduzida (56px)
   - [ ] Menu responsivo
   - [ ] Texto hero legível
   - [ ] Botões clicáveis
   - [ ] Scroll reveal funciona

---

## 🚀 PRÓXIMAS ETAPAS OPCIONAIS

### 1. Otimizar Performance
- Ative gzip no servidor
- Use CDN para Google Fonts
- Configure lazy loading de imagens

### 2. Adicionar Mais Conteúdo
- Crie páginas com classe `.reveal` para scroll reveal
- Adicione botões com classe `.btn-primary` para ripple

### 3. Customizar Cores
- No CSS Adicional, mude variáveis `:root`:
```css
:root {
  --cme-primary: #007EA7;     /* Mude para sua cor */
  --cme-accent: #9C4080;      /* Mude para sua cor */
}
```

### 4. Testar SEO
- Use Lighthouse (F12 > Lighthouse)
- Mire acima de 85 em Performance
- Corrija problemas de acessibilidade

---

## 💬 SUPORTE & DÚVIDAS

### Antes de reportar erro:
1. Limpou cache? ✅
2. Testou em navegador diferente? ✅
3. Abriu DevTools (F12)? ✅
4. Procurou por mensagens de erro? ✅
5. Leu a seção "Troubleshooting"? ✅

### Se persistir erro:
1. Anote exatamente qual é o erro (F12 > Console)
2. Anote qual tema está usando
3. Anote qual plugins de cache tem ativados
4. Tente desativar plugins um por um

---

## 📊 RESUMO DAS OPÇÕES

| Opção | Tempo | Dificuldade | Melhor Para | Recomendação |
|-------|-------|------------|-------------|--------------|
| 1: Personalizar | 5 min | Fácil | Todos | ⭐⭐⭐ |
| 2: functions.php | 8 min | Média | Devs | ⭐⭐⭐⭐ |
| 3: Elementor | 10 min | Média | Elementor | ⭐⭐⭐ |

**Recomendação:** Comece com **Opção 1** (mais simples). Se não funcionar, tente **Opção 2**.

---

## ✨ FIM DA REESTRUTURAÇÃO

**Parabéns!** Seu site CME agora tem:

✅ Navbar azul coesa  
✅ Menu sem bolinhas  
✅ Hero com tipografia profissional  
✅ Botões com efeito ripple  
✅ Scroll reveal suave  
✅ Paleta de cores consistente  
✅ Acessibilidade WCAG AA  
✅ Performance otimizada  

**Próximo passo:** Adicione conteúdo de qualidade e promova seu site!

---

**Desenvolvido para:** Cruzada dos Militares Espíritas (CME)  
**Versão:** 1.0  
**Data:** 2024  
**Compatibilidade:** WordPress 5.0+ | Todos os temas | Todos os navegadores modernos

Bora decorar o site! 🎉✨
