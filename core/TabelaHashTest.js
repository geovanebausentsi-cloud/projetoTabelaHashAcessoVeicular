import { TabelaHash } from "../core/TabelaHash.js";

var tabela = new TabelaHash();

// 1. Inserção Inicial
tabela.inserir("ABC1D34", "Astolfo");
tabela.inserir("ABC1D38", "Osteinildo");
tabela.inserir("DEF4G56", "Clóvis");

console.log("--- Status Inicial ---");
console.log(`Obter "ABC1D34": ${tabela.obter("ABC1D34")}`); // Esperado: Astolfo
console.log(`Obter "ABC1D38": ${tabela.obter("ABC1D38")}`); // Esperado: Osteinildo
console.log("------------------------");

// 2. Primeira Exclusão: Chave Existente
// Tentativa de remover "Astolfo" da tabela.
console.log("--- 1º Exclusão: Chave Existente ---");
const sucessoExcluir1 = tabela.excluir("ABC1D34");
console.log(`Tentativa de excluir "ABC1D34": ${sucessoExcluir1} (Esperado: true)`);

// Verificação após a exclusão
console.log(`Verificação de "ABC1D34": ${tabela.obter("ABC1D34")} (Esperado: undefined)`);
console.log("------------------------");

// 3. Segunda Exclusão: Chave Inexistente
// Tentativa de remover uma placa que nunca foi inserida.
console.log("--- 2º Exclusão: Chave Inexistente ---");
const sucessoExcluir2 = tabela.excluir("XXX9999");
console.log(`Tentativa de excluir "XXX9999": ${sucessoExcluir2} (Esperado: false)`);

// Verificação final para garantir que "Osteinildo" e "Clóvis" permaneceram
console.log("\n--- Resumo Final ---");
console.log(`Obter "ABC1D38": ${tabela.obter("ABC1D38")}`); // Esperado: Osteinildo
console.log(`Obter "DEF4G56": ${tabela.obter("DEF4G56")}`); // Esperado: Clóvis
