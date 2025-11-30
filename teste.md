## 🔍 Cenário de Teste: Validação de Busca Mista

**Objetivo:** Verificar o comportamento do sistema ao alternar entre buscas de placas cadastradas e não cadastradas, garantindo que a interface limpe os resultados anteriores corretamente.

**Pré-condição:** Os seguintes veículos devem estar cadastrados na memória (Tabela Hash):
1. `QJG7F66` (João Silva)
2. `VMM6X56` (Maria Oliveira)
3. `MHP8U92` (Carlos Pereira)

| Ordem | Ação (Digitar Placa) | Tipo de Teste | Resultado Esperado | Comportamento Visual | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **1** | Buscar: `QJG7F66` | ✅ Existente | Encontrar "João Silva" | Tabela aparece com dados do veículo. | 🟢 |
| **2** | Buscar: `XYZ0000` | ❌ Inexistente | Erro: "Veículo não encontrado" | Tabela deve **sumir**. Mensagem de erro vermelha aparece. | 🟢 |
| **3** | Buscar: `VMM6X56` | ✅ Existente | Encontrar "Maria Oliveira" | Mensagem de erro some. Tabela reaparece com dados novos. | 🟢 |
| **4** | Buscar: `KKK9999` | ❌ Inexistente | Erro: "Veículo não encontrado" | Tabela some novamente. Mensagem de erro aparece. | 🟢 |
| **5** | Buscar: `MHP8U92` | ✅ Existente | Encontrar "Carlos Pereira" | Tabela reaparece com dados do Carlos. | 🟢 |

---

### 📝 Análise do Comportamento
O teste acima valida a lógica do `BuscaController.js`, especificamente:
1. **Limpeza de Estado:** Se havia um erro na tela, ele é removido ao fazer uma nova busca com sucesso.
2. **Toggle de Visibilidade:** O `style.display = 'none'` e `'table'` da tabela está funcionando conforme o retorno da Tabela Hash.
3. **Persistência:** Garante que múltiplas consultas não "quebram" a estrutura de dados.