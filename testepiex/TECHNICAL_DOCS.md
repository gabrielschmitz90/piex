# 🔧 Documentação Técnica - Sistema de Desafio da Semana

## Visão Geral

O sistema de "Desafio da Semana" permite que o diretor da instituição atualize semanalmente uma cruzadinha e um versículo espírita que aparece na página inicial.

## Arquitetura

### Arquivos Envolvidos:
1. **admin.html** - Painel administrativo (formulário)
2. **index.html** - Página principal (exibição do desafio)
3. **localStorage** - Armazenamento de dados (client-side)

### Fluxo de Dados:

```
┌─────────────────────────┐
│   admin.html            │
│   (Formulário)          │
│   Diretor preenche      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   localStorage          │
│   (Armazenamento)       │
│   Salva dados JSON      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│   index.html            │
│   (Página Principal)    │
│   Exibe desafio         │
└─────────────────────────┘
```

## Estrutura de Dados

Os dados são salvos em JSON no localStorage com a chave `weeklyChallenge`:

```json
{
  "dataInicio": "2026-05-05",
  "temaPalestra": "O Caminho da Redenção",
  "cruzadinha": "1. Virtude que nos liberta (8 letras): ________",
  "versiculo": "Fora da caridade não há salvação. - Allan Kardec",
  "resposta": "COMPAIXÃO",
  "dataSalvada": "2026-05-01T10:30:00.000Z"
}
```

## Funcionalidades

### 1. Armazenamento (admin.html)

**Evento**: Submit do formulário
```javascript
localStorage.setItem('weeklyChallenge', JSON.stringify(data))
```

**Validações:**
- Todos os campos são obrigatórios
- Dados são convertidos para JSON
- Timestamp é adicionado automaticamente

### 2. Exibição (index.html)

**Evento**: DOMContentLoaded
```javascript
const savedChallenge = localStorage.getItem('weeklyChallenge')
```

**Cálculos:**
- Data de fim = Data de início + 6 dias
- Dias restantes = (Data fim - Data hoje) / 1000 ms / 60 seg / 60 min / 24 horas
- Resposta mostrada se: dias restantes ≤ 3

### 3. Lógica de Revelação de Resposta

```javascript
const mostrarResposta = diasRestantes <= 3
```

- Semana 1-3 dias: Resposta oculta
- Semana 4-7 dias: Resposta visível
- Próximas semanas: Nova cruzadinha carregada

## Segurança e Limitações

### Segurança Atual:
- ✅ Dados armazenados apenas no navegador do usuário
- ✅ Sem transmissão de dados sensíveis
- ✅ localStorage isolado por domínio

### Limitações:
- ⚠️ Não há autenticação no painel admin
  - **Solução**: Adicionar senha simples em versão futura
- ⚠️ Dados não sincronizam entre dispositivos
  - **Solução**: Implementar backend/banco de dados
- ⚠️ Sem histórico de desafios antigos
  - **Solução**: Salvar array de desafios no localStorage

## Próximas Melhorias Sugeridas

### Curto Prazo:
1. **Autenticação Simples:**
   ```javascript
   const senha = prompt("Senha do diretor:");
   if (senha === "senhaSegura123") { /* permitir */ }
   ```

2. **Validação de Data:**
   ```javascript
   if (new Date(data) < new Date()) {
     alert("Data não pode ser no passado");
   }
   ```

3. **Preview em Tempo Real:**
   - Já implementado ✅

### Médio Prazo:
4. **Histórico de Desafios:**
   ```javascript
   let historico = JSON.parse(localStorage.getItem('challengeHistory')) || []
   historico.push(novoDesafio)
   localStorage.setItem('challengeHistory', JSON.stringify(historico))
   ```

5. **Exportar/Importar Dados:**
   - Opção de backup em JSON
   - Importar dados de arquivo

### Longo Prazo:
6. **Backend Integrado:**
   - Banco de dados MySQL/PostgreSQL
   - API REST
   - Múltiplos usuários

7. **Recursos Avançados:**
   - Upload de imagens
   - Editor rich-text (para formatar versículos)
   - Integração com calendário
   - Notificações por email

## Exemplos de Uso

### Adicionar Novo Desafio (JavaScript):
```javascript
const novoDesafio = {
  dataInicio: "2026-05-12",
  temaPalestra: "Médiuns e Responsabilidade",
  cruzadinha: "Quem é o intermediário entre o mundo espiritual e material?",
  versiculo: "Aquele que fala em espírito, não é ele que fala, mas o Espírito que fala por seu intermédio.",
  resposta: "MÉDIUM",
  dataSalvada: new Date().toISOString()
};

localStorage.setItem('weeklyChallenge', JSON.stringify(novoDesafio));
```

### Recuperar Desafio Atual:
```javascript
const desafioAtual = JSON.parse(localStorage.getItem('weeklyChallenge'));
console.log(desafioAtual.temaPalestra);
// Output: "Médiuns e Responsabilidade"
```

### Limpar Dados:
```javascript
localStorage.removeItem('weeklyChallenge');
```

## Compatibilidade

- ✅ Chrome 4+
- ✅ Firefox 3.5+
- ✅ Safari 4+
- ✅ Edge 12+
- ✅ Opera 10.5+
- ✅ Internet Explorer 8+

**Espaço disponível**: ~5-10MB por domínio (varia por navegador)

## Troubleshooting

### Problema: Desafio não aparece na home
**Solução:**
```javascript
// Verificar se há dados
console.log(localStorage.getItem('weeklyChallenge'))

// Limpar e recarregar
localStorage.removeItem('weeklyChallenge')
location.reload()
```

### Problema: Dados desaparecem após fechar o navegador
**Nota:** localStorage persiste permanentemente. Se desapareceu:
- Usuário limpou cache/histórico
- Navegador em modo privado
- LocalStorage desabilitado

### Problema: Resposta não aparece após 3 dias
**Verificar:**
```javascript
const desafio = JSON.parse(localStorage.getItem('weeklyChallenge'))
const dataInicio = new Date(desafio.dataInicio)
const diasPassados = (new Date() - dataInicio) / (1000 * 60 * 60 * 24)
console.log(diasPassados) // Deve ser >= 3
```

## Contato e Suporte

Para dúvidas sobre a implementação técnica, consulte a documentação do localStorage:
- [MDN - Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)
- [JavaScript.info - LocalStorage](https://javascript.info/localstorage)

---

**Versão**: 1.0  
**Última atualização**: Maio de 2026  
**Desenvolvido para**: Cruzada dos Militares Espíritas
