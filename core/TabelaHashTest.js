import { TabelaHash } from "../core/TabelaHash.js";
import { ServicoCadastro } from "../core/ServicoCadastro.js";

const tabela = new TabelaHash();
const servico = new ServicoCadastro(tabela);

console.log("=== PREPARAÇÃO: DADOS INICIAIS ===");
servico.cadastrarVeiculo("QJG7F66", "João Silva", "Uno");
servico.cadastrarVeiculo("VMM6X56", "Maria Oliveira", "Gol");
servico.cadastrarVeiculo("MHP8U92", "Carlos Pereira", "Onix");
console.log("Dados inseridos.\n");


console.log("=== 1. TESTES DE BUSCA ===");

// 1. Buscar: QJG7F66 (Existente)
const busca1 = tabela.obter("QJG7F66");
console.log(`1. QJG7F66: ${busca1 ? busca1.proprietario : "Não Encontrado"} (Esperado: João Silva)`);

// 2. Buscar: XYZ0000 (Inexistente)
const busca2 = tabela.obter("XYZ0000");
console.log(`2. XYZ0000: ${busca2 ? busca2.proprietario : "Não Encontrado"} (Esperado: Não Encontrado)`);

// 3. Buscar: VMM6X56 (Existente)
const busca3 = tabela.obter("VMM6X56");
console.log(`3. VMM6X56: ${busca3 ? busca3.proprietario : "Não Encontrado"} (Esperado: Maria Oliveira)`);

// 4. Buscar: KKK9999 (Inexistente)
const busca4 = tabela.obter("KKK9999");
console.log(`4. KKK9999: ${busca4 ? busca4.proprietario : "Não Encontrado"} (Esperado: Não Encontrado)`);

// 5. Buscar: MHP8U92 (Existente)
const busca5 = tabela.obter("MHP8U92");
console.log(`5. MHP8U92: ${busca5 ? busca5.proprietario : "Não Encontrado"} (Esperado: Carlos Pereira)`);
console.log("\n");


console.log("=== 2. TESTES DE CADASTRO ===");

// CT-CAD-01: Cadastro Simples
try {
    const res = servico.cadastrarVeiculo("BRA2E19", "Ana Clara", "Civic");
    console.log(`CT-CAD-01: ${res.mensagem}`);
} catch (e) {
    console.log(`CT-CAD-01 Erro: ${e.message}`);
}

// CT-CAD-02: Cadastro Duplicado
try {
    servico.cadastrarVeiculo("BRA2E19", "Ana Clara Clonada", "Civic");
    console.log("CT-CAD-02: Falha (Permitiu duplicado)");
} catch (e) {
    console.log(`CT-CAD-02: Sucesso (${e.message})`);
}

// CT-CAD-03: Validação de Formato
try {
    servico.cadastrarVeiculo("123456", "Hacker", "Tank");
    console.log("CT-CAD-03: Falha (Aceitou placa inválida)");
} catch (e) {
    console.log(`CT-CAD-03: Sucesso (${e.message})`);
}
console.log("\n");


console.log("=== 3. INSERÇÃO EM MASSA (MANUAL) ===");

try {
    servico.cadastrarVeiculo("TST1A01", "Proprietario 01", "Modelo A");
    servico.cadastrarVeiculo("TST1A02", "Proprietario 02", "Modelo B");
    servico.cadastrarVeiculo("TST1A03", "Proprietario 03", "Modelo C");
    servico.cadastrarVeiculo("TST1A04", "Proprietario 04", "Modelo D");
    servico.cadastrarVeiculo("TST1A05", "Proprietario 05", "Modelo E");
    servico.cadastrarVeiculo("TST1A06", "Proprietario 06", "Modelo F");
    servico.cadastrarVeiculo("TST1A07", "Proprietario 07", "Modelo G");
    servico.cadastrarVeiculo("TST1A08", "Proprietario 08", "Modelo H");
    servico.cadastrarVeiculo("TST1A09", "Proprietario 09", "Modelo I");
    servico.cadastrarVeiculo("TST1A10", "Proprietario 10", "Modelo J");
    servico.cadastrarVeiculo("TST1A11", "Proprietario 11", "Modelo K");
    servico.cadastrarVeiculo("TST1A12", "Proprietario 12", "Modelo L");
    servico.cadastrarVeiculo("TST1A13", "Proprietario 13", "Modelo M");
    servico.cadastrarVeiculo("TST1A14", "Proprietario 14", "Modelo N");
    servico.cadastrarVeiculo("TST1A15", "Proprietario 15", "Modelo O");
    servico.cadastrarVeiculo("TST1A16", "Proprietario 16", "Modelo P");
    servico.cadastrarVeiculo("TST1A17", "Proprietario 17", "Modelo Q");
    servico.cadastrarVeiculo("TST1A18", "Proprietario 18", "Modelo R");
    servico.cadastrarVeiculo("TST1A19", "Proprietario 19", "Modelo S");
    servico.cadastrarVeiculo("TST1A20", "Proprietario 20", "Modelo T");
    servico.cadastrarVeiculo("TST1A21", "Proprietario 21", "Modelo U");
    servico.cadastrarVeiculo("TST1A22", "Proprietario 22", "Modelo V");
    servico.cadastrarVeiculo("TST1A23", "Proprietario 23", "Modelo W");
    servico.cadastrarVeiculo("TST1A24", "Proprietario 24", "Modelo X");
    servico.cadastrarVeiculo("TST1A25", "Proprietario 25", "Modelo Y");
    servico.cadastrarVeiculo("TST1A26", "Proprietario 26", "Modelo Z");
    servico.cadastrarVeiculo("TST1A27", "Proprietario 27", "Modelo A");
    servico.cadastrarVeiculo("TST1A28", "Proprietario 28", "Modelo B");
    servico.cadastrarVeiculo("TST1A29", "Proprietario 29", "Modelo C");
    servico.cadastrarVeiculo("TST1A30", "Proprietario 30", "Modelo D");
    servico.cadastrarVeiculo("TST1A31", "Proprietario 31", "Modelo E");
    servico.cadastrarVeiculo("TST1A32", "Proprietario 32", "Modelo F");
    servico.cadastrarVeiculo("TST1A33", "Proprietario 33", "Modelo G");
    servico.cadastrarVeiculo("TST1A34", "Proprietario 34", "Modelo H");
    servico.cadastrarVeiculo("TST1A35", "Proprietario 35", "Modelo I");
    servico.cadastrarVeiculo("TST1A36", "Proprietario 36", "Modelo J");
    servico.cadastrarVeiculo("TST1A37", "Proprietario 37", "Modelo K");
    servico.cadastrarVeiculo("TST1A38", "Proprietario 38", "Modelo L");
    servico.cadastrarVeiculo("TST1A39", "Proprietario 39", "Modelo M");
    servico.cadastrarVeiculo("TST1A40", "Proprietario 40", "Modelo N");
    servico.cadastrarVeiculo("TST1A41", "Proprietario 41", "Modelo O");
    servico.cadastrarVeiculo("TST1A42", "Proprietario 42", "Modelo P");
    servico.cadastrarVeiculo("TST1A43", "Proprietario 43", "Modelo Q");
    servico.cadastrarVeiculo("TST1A44", "Proprietario 44", "Modelo R");
    servico.cadastrarVeiculo("TST1A45", "Proprietario 45", "Modelo S");
    servico.cadastrarVeiculo("TST1A46", "Proprietario 46", "Modelo T");
    servico.cadastrarVeiculo("TST1A47", "Proprietario 47", "Modelo U");
    servico.cadastrarVeiculo("TST1A48", "Proprietario 48", "Modelo V");
    servico.cadastrarVeiculo("TST1A49", "Proprietario 49", "Modelo W");
    servico.cadastrarVeiculo("TST1A50", "Proprietario 50", "Modelo X");
    servico.cadastrarVeiculo("TST1B51", "Proprietario 51", "Modelo Y");
    servico.cadastrarVeiculo("TST1B52", "Proprietario 52", "Modelo Z");
    servico.cadastrarVeiculo("TST1B53", "Proprietario 53", "Modelo A");
    servico.cadastrarVeiculo("TST1B54", "Proprietario 54", "Modelo B");
    servico.cadastrarVeiculo("TST1B55", "Proprietario 55", "Modelo C");
    servico.cadastrarVeiculo("TST1B56", "Proprietario 56", "Modelo D");
    servico.cadastrarVeiculo("TST1B57", "Proprietario 57", "Modelo E");
    servico.cadastrarVeiculo("TST1B58", "Proprietario 58", "Modelo F");
    servico.cadastrarVeiculo("TST1B59", "Proprietario 59", "Modelo G");
    servico.cadastrarVeiculo("TST1B60", "Proprietario 60", "Modelo H");
    servico.cadastrarVeiculo("TST1B61", "Proprietario 61", "Modelo I");
    servico.cadastrarVeiculo("TST1B62", "Proprietario 62", "Modelo J");
    servico.cadastrarVeiculo("TST1B63", "Proprietario 63", "Modelo K");
    servico.cadastrarVeiculo("TST1B64", "Proprietario 64", "Modelo L");
    servico.cadastrarVeiculo("TST1B65", "Proprietario 65", "Modelo M");
    servico.cadastrarVeiculo("TST1B66", "Proprietario 66", "Modelo N");
    servico.cadastrarVeiculo("TST1B67", "Proprietario 67", "Modelo O");
    servico.cadastrarVeiculo("TST1B68", "Proprietario 68", "Modelo P");
    servico.cadastrarVeiculo("TST1B69", "Proprietario 69", "Modelo Q");
    servico.cadastrarVeiculo("TST1B70", "Proprietario 70", "Modelo R");
    servico.cadastrarVeiculo("TST1B71", "Proprietario 71", "Modelo S");
    servico.cadastrarVeiculo("TST1B72", "Proprietario 72", "Modelo T");
    servico.cadastrarVeiculo("TST1B73", "Proprietario 73", "Modelo U");
    servico.cadastrarVeiculo("TST1B74", "Proprietario 74", "Modelo V");
    servico.cadastrarVeiculo("TST1B75", "Proprietario 75", "Modelo W");
    servico.cadastrarVeiculo("TST1B76", "Proprietario 76", "Modelo X");
    servico.cadastrarVeiculo("TST1B77", "Proprietario 77", "Modelo Y");
    servico.cadastrarVeiculo("TST1B78", "Proprietario 78", "Modelo Z");
    servico.cadastrarVeiculo("TST1B79", "Proprietario 79", "Modelo A");
    servico.cadastrarVeiculo("TST1B80", "Proprietario 80", "Modelo B");
    servico.cadastrarVeiculo("TST1B81", "Proprietario 81", "Modelo C");
    servico.cadastrarVeiculo("TST1B82", "Proprietario 82", "Modelo D");
    servico.cadastrarVeiculo("TST1B83", "Proprietario 83", "Modelo E");
    servico.cadastrarVeiculo("TST1B84", "Proprietario 84", "Modelo F");
    servico.cadastrarVeiculo("TST1B85", "Proprietario 85", "Modelo G");
    servico.cadastrarVeiculo("TST1B86", "Proprietario 86", "Modelo H");
    servico.cadastrarVeiculo("TST1B87", "Proprietario 87", "Modelo I");
    servico.cadastrarVeiculo("TST1B88", "Proprietario 88", "Modelo J");
    servico.cadastrarVeiculo("TST1B89", "Proprietario 89", "Modelo K");
    servico.cadastrarVeiculo("TST1B90", "Proprietario 90", "Modelo L");
    servico.cadastrarVeiculo("TST1B91", "Proprietario 91", "Modelo M");
    servico.cadastrarVeiculo("TST1B92", "Proprietario 92", "Modelo N");
    servico.cadastrarVeiculo("TST1B93", "Proprietario 93", "Modelo O");
    servico.cadastrarVeiculo("TST1B94", "Proprietario 94", "Modelo P");
    servico.cadastrarVeiculo("TST1B95", "Proprietario 95", "Modelo Q");
    servico.cadastrarVeiculo("TST1B96", "Proprietario 96", "Modelo R");
    servico.cadastrarVeiculo("TST1B97", "Proprietario 97", "Modelo S");
    servico.cadastrarVeiculo("TST1B98", "Proprietario 98", "Modelo T");
    servico.cadastrarVeiculo("TST1B99", "Proprietario 99", "Modelo U");
    servico.cadastrarVeiculo("TST1C00", "Proprietario 100", "Modelo V");
    

    console.log("Inserção em massa concluída com sucesso.");
} catch (e) {
    console.error("Erro na inserção em massa:", e.message);
}

// Verificação simples final
const check = tabela.obter("TST1C00");
console.log(`\nVerificação Final (TST1C00): ${check ? "OK" : "FALHA"}`);