/*Responsável por:
ler a placa digitada
chamar a tabelaHash para buscar
exibir o resultado na tela*/

// controllers/BuscaController.js
export class BuscaController {
    constructor(tabelaHash) {
        this.tabela = tabelaHash;

        this.inputPlaca = document.getElementById("inputPlacaBusca");
        this.btnBuscar = document.getElementById("btnBuscar");
        this.resultado = document.getElementById("resultadoBusca");

        this.configurarEventos();
    }

    configurarEventos() {
        this.btnBuscar.addEventListener("click", () => this.buscar());
    }

    buscar() {
        const placa = this.inputPlaca.value.trim();

        const veiculo = this.tabela.obter(placa);

        if (!veiculo) {
            this.resultado.innerHTML = `<p class="mensagem-erro">Veículo não encontrado.</p>`;
            return;
        }

        this.resultado.innerHTML = `
            <div class="mensagem-sucesso">
                <p><strong>Placa:</strong> ${veiculo.placa}</p>
                <p><strong>Proprietário:</strong> ${veiculo.proprietario}</p>
                <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
            </div>
        `;
    }
}
