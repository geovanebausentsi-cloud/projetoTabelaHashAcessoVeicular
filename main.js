import { TabelaHash } from "./core/TabelaHash.js";
import { ServicoCadastro } from "./core/ServicoCadastro.js";

// Instâncias globais (camada de dados/serviço)
const tabela = new TabelaHash();
const servico = new ServicoCadastro(tabela);

/**
 * InterfaceController: Responsável APENAS por manipular o DOM.
 * Isso isola a lógica de visualização da lógica de negócios.
 */
const InterfaceController = {
    
    // Utilitário para exibir mensagens coloridas
    exibirMensagem(elemento, texto, tipo = 'neutro') {
        elemento.innerHTML = "";
        const p = document.createElement('p');
        p.textContent = texto;
        
        if (tipo === 'sucesso') p.className = 'mensagem-sucesso';
        if (tipo === 'erro') p.className = 'mensagem-erro';
        
        elemento.appendChild(p);
    },

    // Configura a página de Busca
    configurarPaginaBusca() {
        const btnBuscar = document.getElementById('btnBuscar');
        if (!btnBuscar) return; // Não estamos na página de busca

        const inputPlaca = document.getElementById('inputPlacaBusca');
        const resultadoDiv = document.getElementById('resultadoBusca');

        btnBuscar.addEventListener('click', () => {
            const placa = inputPlaca.value.toUpperCase().trim();
            
            if (!placa) {
                this.exibirMensagem(resultadoDiv, "🚨 Por favor, insira uma placa.", "erro");
                return;
            }

            const veiculo = servico.tabela.obter(placa);

            if (veiculo) {
                // Template String limpa para exibição
                resultadoDiv.innerHTML = `
                    <div style="text-align: left; margin-top: 1rem; border: 1px solid #444; padding: 1rem; border-radius: 8px;">
                        <h3 style="color: var(--secondary-color)">✅ Veículo Encontrado</h3>
                        <p><strong>Placa:</strong> ${veiculo.placa}</p>
                        <p><strong>Proprietário:</strong> ${veiculo.proprietario}</p>
                        <p><strong>Modelo:</strong> ${veiculo.modelo}</p>
                    </div>
                `;
            } else {
                this.exibirMensagem(resultadoDiv, `⚠️ Veículo não encontrado para a placa ${placa}.`, "erro");
            }
        });
    },

    // Configura a página de Cadastro
    configurarPaginaCadastro() {
        const formCadastro = document.getElementById('formCadastro');
        if (!formCadastro) return; // Não estamos na página de cadastro

        const saidaDiv = document.getElementById('saidaCadastro');

        formCadastro.addEventListener('submit', (evento) => {
            evento.preventDefault();
            
            // Coleta dados
            const placa = document.getElementById('placa').value.toUpperCase().trim();
            const proprietario = document.getElementById('proprietario').value.trim();
            const modelo = document.getElementById('modelo').value.trim();

            try {
                const resultado = servico.cadastrarVeiculo(placa, proprietario, modelo);
                
                if (resultado.sucesso) {
                    this.exibirMensagem(saidaDiv, resultado.mensagem, "sucesso");
                    formCadastro.reset();
                }
            } catch (erro) {
                this.exibirMensagem(saidaDiv, `Erro: ${erro.message}`, "erro");
            }
        });
    }
};

/**
 * Função Principal (Entry Point)
 * Orquestra a inicialização da aplicação
 */
async function main() {
    console.log("⚙️ Inicializando sistema...");
    
    // 1. Carregar dados (Backend/Serviço)
    const carga = await servico.carregarDadosIniciais();
    if (!carga.sucesso) {
        console.error("Falha crítica ao carregar dados.");
    }

    // 2. Configurar Interface (Frontend)
    // O DOMContentLoaded já aconteceu se o script for 'defer' ou 'module', 
    // mas por segurança mantemos a verificação ou chamada direta.
    InterfaceController.configurarPaginaBusca();
    InterfaceController.configurarPaginaCadastro();
    
    console.log("🚀 Sistema pronto.");
}

// Inicia
main();