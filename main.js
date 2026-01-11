/*Responsável por:
criar instâncias compartilhadas entre telas
carregar os dados iniciais
decidir qual controller ativar

Orquestra quem entra em ação.
Descobre “onde estou?” e inicializa apenas o controller correto.

*/

// main.js
import { TabelaHash } from "./core/TabelaHash.js";
import { CadastroController } from "./controllers/CadastroController.js";
import { BuscaController } from "./controllers/BuscaController.js";
import { ServicoCadastro } from "./core/ServicoCadastro.js";

// Instância única da tabela
const tabela = new TabelaHash();

// Serviço temporário só para carregar os dados iniciais
const servicoTemp = new ServicoCadastro(tabela);
await servicoTemp.carregarDadosIniciais();

// Detecta página
const pagina = window.location.pathname;

if (pagina.includes("cadastro.html")) {
    new CadastroController(tabela);
}

if (pagina.includes("index.html")) {
    new BuscaController(tabela);
}
