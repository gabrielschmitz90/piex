# 🔧 Guia de Manutenção - Cruzadas Militares Espíritas

## Tarefas de Manutenção Periódica

### Diária
- [ ] Verificar formulários de contato recebidos
- [ ] Monitorar erros no console do navegador
- [ ] Responder mensagens de usuários

### Semanal
- [ ] Atualizar agenda com novos eventos
- [ ] Revisar e publicar novos conteúdos
- [ ] Verificar links de navegação
- [ ] Testar responsividade em diferentes dispositivos

### Mensal
- [ ] Fazer backup completo do projeto
- [ ] Revisar métricas de acesso (se houver analytics)
- [ ] Atualizar informações de contato
- [ ] Validar todas as páginas
- [ ] Testar compatibilidade com navegadores principais

### Trimestral
- [ ] Revisar e atualizar a seção "Quem Somos"
- [ ] Atualizar galeria de mídia
- [ ] Revisar e melhorar conteúdos
- [ ] Planejar novas features

### Anual
- [ ] Revisar paleta de cores e tipografia
- [ ] Atualizar estrutura geral se necessário
- [ ] Implementar melhorias de segurança
- [ ] Revisar performance do site

---

## 📝 Como Adicionar Novos Conteúdos

### Adicionar Novo Evento
1. Vá para `pages/agenda-eventos/index.html`
2. Copie uma div de evento existente
3. Atualize data, hora, título e descrição
4. Salve o arquivo

### Adicionar Novo Artigo
1. Vá para `pages/conteudos/index.html`
2. Copie um card de artigo
3. Atualize título, descrição e data
4. Altere a cor do gradiente se desejado
5. Salve o arquivo

### Adicionar Foto à Galeria
1. Vá para `pages/midia/index.html`
2. Copie um item da galeria de fotos
3. Substitua o emoji por uma imagem real (ou deixe o emoji como placeholder)
4. Salve o arquivo

### Atualizar Informações de Contato
1. Edite o footer em cada página OU
2. Edite `pages/contato/index.html`
3. Atualize email, telefone, endereço e horários
4. Atualize em TODAS as páginas para consistência

---

## 🐛 Solução de Problemas Comuns

### Links Quebrados
- Verifique se o caminho do link está correto
- Use `../` para voltar de pasta
- Teste todos os links regularmente

### Estilos Não Aplicados
- Verifique se o arquivo CSS está linkado corretamente no HTML
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique a hierarquia de seletores CSS

### Imagens Não Carregam
- Verifique o caminho da imagem
- Confirme que o arquivo existe na pasta `/assets/images/`
- Use caminho relativo correto

### Menu Desalinhado em Mobile
- Verifique media queries em `styles/layout.css`
- Teste em diferentes tamanhos de tela
- Use DevTools do navegador (F12)

---

## 🔐 Segurança

### Dicas de Segurança
- [ ] Validar sempre entrada de formulários
- [ ] Sanitizar dados antes de processar
- [ ] Nunca exponha senhas em código
- [ ] Use HTTPS em produção
- [ ] Atualize dependências regularmente

### Checklist de Segurança
- [ ] Remover console.log() de produção
- [ ] Não incluir informações sensíveis em comentários
- [ ] Usar Content Security Policy (CSP)
- [ ] Validar CORS se necessário

---

## 📊 Otimização e Performance

### Checklist de Performance
- [ ] Comprimir imagens (use TinyPNG ou similar)
- [ ] Minificar CSS e JavaScript
- [ ] Usar lazy loading para imagens
- [ ] Verificar Core Web Vitals
- [ ] Otimizar renderização

### Ferramentas Úteis
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Chrome DevTools Lighthouse

---

## 🚀 Deploy e Publicação

### Antes de Publicar
- [ ] Testar em todos os navegadores principais
- [ ] Validar HTML com W3C Validator
- [ ] Testar em dispositivos móveis reais
- [ ] Verificar todos os links
- [ ] Testar formulários

### Processo de Deploy
1. Faça backup local
2. Teste em ambiente de staging (se houver)
3. Valide todos os arquivos
4. Upload via FTP/Git
5. Teste site em produção
6. Monitore por erros

---

## 📖 Versionamento

### Versionamento de Arquivos
Mantenha registro de mudanças:

```
v1.0 - Lançamento inicial
v1.1 - Adicionado seção de eventos
v1.2 - Melhorias de responsividade
v1.3 - Novos conteúdos
```

---

## 📞 Suporte e Contato

Para dúvidas sobre manutenção:
- Email: suporte@cme.com.br
- Documentação: Leia README.md e STYLE_GUIDE.md

---

## 📝 Log de Manutenção

| Data | Tarefa | Responsável | Status |
|------|--------|-------------|--------|
| 01/05/2026 | Lançamento | Equipe | ✓ Concluído |
| | | | |
| | | | |

---

**Última atualização**: Maio de 2026
**Responsável**: [Nome do Administrador]
