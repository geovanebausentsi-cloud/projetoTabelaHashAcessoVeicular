/*Responsável por:
ler a placa digitada
chamar a tabelaHash para buscar
exibir o resultado na tela*/

export class BuscaController {
    constructor(tabelaHash) {
        this.tabela = tabelaHash;

        // Elementos de entrada
        this.inputPlaca = document.getElementById("inputPlacaBusca");
        this.btnBuscar = document.getElementById("btnBuscar");
        
        // Elementos da área de resultado
        this.containerResultado = document.getElementById("resultadoBusca");
        this.tabelaEl = document.getElementById("tabelaResultado");
        this.tabelaCorpo = document.getElementById("tabelaCorpo");

        this.configurarEventos();
    }

    configurarEventos() {
        this.btnBuscar.addEventListener("click", () => this.buscar());
    }

    buscar() {
        const placa = this.inputPlaca.value.trim();
        
        // Limpa mensagens de erro anteriores (se houver)
        const msgErro = this.containerResultado.querySelector(".mensagem-erro");
        if (msgErro) msgErro.remove();

        const veiculo = this.tabela.obter(placa);

        if (!veiculo) {
            // Esconde a tabela
            this.tabelaEl.style.display = "none";
            
            // Cria e exibe mensagem de erro sem apagar a tabela do HTML
            const erroDiv = document.createElement("p");
            erroDiv.className = "mensagem-erro";
            erroDiv.innerText = "Veículo não encontrado.";
            this.containerResultado.prepend(erroDiv);
            return;
        }

        // Se encontrou: Mostra a tabela
        this.tabelaEl.style.display = "table"; // Ou "block" / "width: 100%" dependendo do CSS
        this.tabelaEl.style.width = "100%"; // Garante que ocupe o espaço

        // Limpa resultados anteriores da tabela
        this.tabelaCorpo.innerHTML = "";

        // Cria a linha da tabela
        const linha = `
            <tr>
                <td>${veiculo.placa}</td>
                <td>${veiculo.proprietario}</td>
                <td>${veiculo.modelo}</td>
            </tr>
        `;

        // Insere a linha no corpo da tabela
        this.tabelaCorpo.innerHTML = linha;
    }
}