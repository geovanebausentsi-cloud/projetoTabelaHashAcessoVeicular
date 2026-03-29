import {TabelaHash} from "../core/TabelaHash.js";
import {ServicoCadastro} from "./core/ServicoCadastro.js";

// Instâncias Globais (ou de Módulo)
const tabela = new TabelaHash();
const servico = new ServicoCadastro(tabela);

/**
 * Função assíncrona de inicialização que garante que os dados
 * sejam carregados antes de configurar os eventos de UI.
 */
async function inicializarAplicacao() {
    console.log("Iniciando o carregamento dos dados iniciais...");
    const resultadoCarga = await servico.carregarDadosIniciais();

    if (resultadoCarga.sucesso) {
        console.info("Aplicação inicializada e pronta para uso.");
    } else {
        console.error("Erro fatal na inicialização: Não foi possível carregar os dados.");
        // Pode-se desabilitar a UI aqui se necessário
    }


    // Exemplo de teste pós-carregamento (para o console)
    // Buscando um veículo que sabemos que existe no JSON:
    const placaTeste = "QJG7F66";
    const veiculoEncontrado = tabela.obter(placaTeste);
    console.log(`Teste de busca (${placaTeste}): ${veiculoEncontrado ? veiculoEncontrado.toString() : 'Não encontrado'}`);

}
// Espera o DOM carregar
document.addEventListener('DOMContentLoaded', () => {
    // Apenas se estamos na página de busca
    if (document.getElementById('btnBuscar')) {
        const inputPlaca = document.getElementById('inputPlacaBusca');
        const resultadoDiv = document.getElementById('resultadoBusca');
        const btnBuscar = document.getElementById('btnBuscar');

        btnBuscar.addEventListener('click', () => {
            const placa = inputPlaca.value.toUpperCase().trim();
            resultadoDiv.innerHTML = ""; // Limpa resultados anteriores

            if (!placa) {
                resultadoDiv.innerHTML = `<p style="color: red;">🚨 Por favor, insira uma placa.</p>`;
                return;
            }

            // Acessa o serviço e a tabela (instâncias globais do módulo)
            const veiculo = servico.tabela.obter(placa);

            if (veiculo) {
                // Usa o método toString() da classe Veiculo
                resultadoDiv.innerHTML = `
                    <p style="color: green;">✅ **Veículo Encontrado:**</p>
                    <p>
                        Placa: **${veiculo.placa}**<br>
                        Proprietário: **${veiculo.proprietario}**<br>
                        Modelo: **${veiculo.modelo}**
                    </p>
                    <p>Representação: ${veiculo.toString()}</p>
                `;
            } else {
                resultadoDiv.innerHTML = `<p style="color: orange;">⚠️ **Veículo não encontrado** para a placa **${placa}**.</p>`;
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Apenas se estamos na página de cadastro
    const formCadastro = document.getElementById('formCadastro');

    if (formCadastro) {
        const saidaDiv = document.getElementById('saidaCadastro');
        const inputPlaca = document.getElementById('placa');
        const inputProprietario = document.getElementById('proprietario');
        const inputModelo = document.getElementById('modelo');

        formCadastro.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Evita o recarregamento da página
            saidaDiv.innerHTML = ""; // Limpa mensagens anteriores

            const placa = inputPlaca.value.toUpperCase().trim();
            const proprietario = inputProprietario.value.trim();
            const modelo = inputModelo.value.trim();

            try {
                // Chama a função de cadastro do serviço
                const resultado = servico.cadastrarVeiculo(placa, proprietario, modelo);

                if (resultado.sucesso) {
                    saidaDiv.innerHTML = `<p style="color: green;">✅ ${resultado.mensagem}</p>`;
                    // Opcional: Limpar o formulário após o sucesso
                    formCadastro.reset();

                    // Teste para ver se o item foi realmente inserido (Console)
                    const veiculoCadastrado = servico.tabela.obter(placa);
                    console.log(`Verificação de Cadastro (Placa ${placa}): ${veiculoCadastrado.toString()}`);

                } else {
                    // (Esta parte é mais teórica, pois `cadastrarVeiculo` usa `throw` para erros)
                    saidaDiv.innerHTML = `<p style="color: red;">🚨 Erro no cadastro.</p>`;
                }

            } catch (erro) {
                // Captura os erros lançados pelas funções de validação
                saidaDiv.innerHTML = `<p style="color: red;">🚨 Erro de Validação: ${erro.message}</p>`;
            }
        });
    }
});


// Inicia a aplicação
inicializarAplicacao();

// Exportar a Tabela e o Serviço para que outras lógicas de UI possam acessá-los, se necessário
export { tabela, servico };

