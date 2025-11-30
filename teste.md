# 🧪 Relatório de Testes de Software
**Projeto:** Sistema de Controle de Acesso Veicular (Prefeitura Municipal)  
**Módulo:** Cadastro e Busca (Tabela Hash)  
**Responsável:** Geovane B. Bausen  
**Data da Execução:** 30/11/2025  

---

## 📋 Resumo da Execução
O objetivo desta bateria de testes foi validar a integridade dos dados, a consistência das regras de negócio (formato de placas Mercosul) e a persistência dos dados na estrutura de Tabela Hash implementada em JavaScript.

| Total de Casos | Aprovados | Reprovados | Cobertura |
| :---: | :---: | :---: | :---: |
| 4 | 4 | 0 | 100% |

---

## 🛠️ Cenários de Teste (Test Cases)

### 1. Validação de Entrada (Input Validation)

| ID | Cenário | Dados de Entrada | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :---: |
| **CT-01** | **Campos Vazios** | `Placa: ""` <br> `Proprietário: ""` <br> `Modelo: ""` | O sistema deve impedir o envio e exibir alerta: *"Preencha todos os campos"*. | ✅ |
| **CT-02** | **Formato Inválido** | `Placa: "abc1234"` <br> *(Minúsculas ou fora do padrão)* | O Regex deve invalidar a entrada e solicitar o formato `ABC1D34`. | ✅ |

### 2. Fluxo Principal (Core Business)

| ID | Cenário | Dados de Entrada | Resultado Esperado | Status |
| :--- | :--- | :--- | :--- | :---: |
| **CT-03** | **Novo Cadastro (Sucesso)** | `Placa: "ABC1D34"` <br> `Proprietário: "João Teste"` <br> `Modelo: "Uno"` | Cadastro realizado com sucesso. Mensagem de confirmação exibida e form limpo. | ✅ |
| **CT-04** | **Busca e Recuperação** | `Busca: "ABC1D34"` | O sistema deve exibir a tabela com os dados exatos do proprietário inserido no CT-03. | ✅ |

---

## 📂 Massa de Dados Utilizada (Stress Test)

Para validar a capacidade de armazenamento da **Tabela Hash**, foi inserida a seguinte massa de dados:

```json
[
  { "placa": "QJG7F66", "proprietario": "João Silva", "modelo": "Uno" },
  { "placa": "VMM6X56", "proprietario": "Maria Oliveira", "modelo": "Gol" },
  { "placa": "MHP8U92", "proprietario": "Carlos Pereira", "modelo": "Onix" },
  { "placa": "JBI7B72", "proprietario": "Ana Souza", "modelo": "HB20" }
]





