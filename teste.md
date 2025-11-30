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

### 3. Testes de Cadastro (Inserção)

| ID | Cenário | Ação / Dados | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :---: |
| **CT-CAD-01** | **Cadastro Simples** | Placa: `BRA2E19`<br>Prop: `Ana Clara`<br>Modelo: `Civic` | Mensagem "Veículo cadastrado com sucesso!" e campos limpos. | ✅ |
| **CT-CAD-02** | **Cadastro Duplicado** | Tentar cadastrar a mesma placa `BRA2E19` novamente. | O sistema deve impedir (lançar erro) ou atualizar o registro (dependendo da regra). *Ideal: "Erro: Placa já cadastrada".* | ⚠️ |
| **CT-CAD-03** | **Validação de Formato** | Placa: `123456` (Apenas números) | Erro: "Formato de placa inválido". | ✅ |
| **CT-CAD-04** | **Inserção em Massa** | Rodar script de carga com 50 veículos. | O sistema deve processar as 50 inserções sem travar e permitir busca posterior. | ✅ |