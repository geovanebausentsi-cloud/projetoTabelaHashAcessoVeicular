# 🚗 Sistema de Cadastro de Veículos (Hash Table)

Este projeto implementa um sistema de gerenciamento de veículos utilizando uma **Tabela Hash** (Hash Table) com tratamento de colisões por encadeamento, desenvolvido em JavaScript puro (ES6 Modules).

O objetivo é demonstrar a eficiência de estruturas de dados na inserção e busca de registros e a manipulação do DOM para feedback visual ao usuário.

---

## 🛠️ Tecnologias
- **Linguagem:** JavaScript (ES6)
- **Interface:** HTML5 / CSS3
- **Estrutura de Dados:** Tabela Hash (Implementação própria)
- **Padrão de Projeto:** MVC (Model-View-Controller) simplificado

---

## 📂 Como Executar
1. Clone este repositório.
2. Abra o arquivo `index.html` (Busca) ou `cadastro.html` (Inserção) em um navegador moderno.
3. Utilize o console do navegador (`F12`) para acompanhar os logs de depuração e testes.

---

## 🧪 Plano de Testes e Validação

Abaixo estão detalhados os cenários de teste executados para validar a integridade dos dados, a lógica de colisão e a responsividade da interface.

### 🔍 Cenário de Teste: Validação de Busca

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

### 📝 2. Testes de Cadastro (Inserção)

**Objetivo:** Validar as regras de negócio para inserção de novos veículos, garantindo integridade e validação de dados.

| ID | Cenário | Ação / Dados | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :---: |
| **CT-CAD-01** | **Cadastro Simples** | Placa: `BRA2E19`<br>Prop: `Ana Clara`<br>Modelo: `Civic` | Mensagem "Veículo cadastrado com sucesso!" e campos limpos. | ✅ |
| **CT-CAD-02** | **Cadastro Duplicado** | Tentar cadastrar a mesma placa `BRA2E19` novamente. | O sistema deve impedir (lançar erro). *Ideal: "Erro: Veículo já existe no sistema.".* | ⚠️ |
| **CT-CAD-03** | **Validação de Formato** | Placa: `123456` (Apenas números) | Erro: "Formato de placa inválido". | ✅ |
| **CT-CAD-04** | **Inserção em Massa** | Rodar script de carga com 50 veículos. | O sistema deve processar as 50 inserções sem travar e permitir busca posterior. | ✅ |

---

### 🧑‍💻 Autor
Desenvolvido por **Geovane Brandemburg Bausen**.