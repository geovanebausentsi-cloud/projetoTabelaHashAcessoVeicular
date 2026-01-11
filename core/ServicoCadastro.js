import { Veiculo } from "./Veiculo.js";

export class ServicoCadastro {
    constructor(tabelaHash) {
        this.tabela = tabelaHash;
    }

    async carregarDadosIniciais() {
        try {
            const resposta = await fetch("../data/dadosIniciais.json");
            const veiculosIniciais = await resposta.json();

            if (!veiculosIniciais || !Array.isArray(veiculosIniciais)) {
                throw new Error("Arquivo JSON inválido ou não carregado.");
            }

            veiculosIniciais.forEach(dados => {
                if (!dados.placa || !dados.proprietario || !dados.modelo) {
                    throw new Error("Registro de veículo inválido no JSON.");
                }

                const veiculo = new Veiculo(
                    dados.placa,
                    dados.proprietario,
                    dados.modelo
                );

                this.tabela.inserir(dados.placa, veiculo);
            });

            console.info("Dados iniciais carregados com sucesso.");
            return { sucesso: true };

        } catch (erro) {
            console.error("Falha ao carregar dados iniciais:", erro.message);
            return { sucesso: false, mensagem: erro.message };
        }
    }


    validarPlaca(placa) {
        if (!placa || placa.trim() === "") {
            throw new Error("Formato de placa inválido.");
        }
        // Detecta qualquer letra minúscula
        if (/[a-z]/.test(placa)) {
            throw new Error("Formato de placa inválido.");
        }

        // Regex do padrão LLLNLNN
        const regexPlaca = /^[A-Z]{3}[0-9][A-Z][0-9]{2}$/;

        if (!regexPlaca.test(placa)) {
            throw new Error("Formato de placa inválido.");
        }

        // Se tudo estiver correto, não retorna nada
    }

    validarCampos(placa, proprietario, modelo) {
        if (!placa || !proprietario || !modelo ||
            placa.trim() === "" || proprietario.trim() === "" || modelo.trim() === "") {

            throw new Error("Todos os campos são obrigatórios.");
        }
    }

    verificarDuplicidade(placa) {
        const existente = this.tabela.obter(placa);
        if (existente) {
            throw new Error("Veículo já existe no sistema.");
        }
    }

    cadastrarVeiculo(placa, proprietario, modelo) {

        // Validar presença dos campos
        this.validarCampos(placa, proprietario, modelo);

        // Validar formato da placa
        this.validarPlaca(placa);

        // Verificar duplicidade
        this.verificarDuplicidade(placa);

        // Criar veículo imutável
        const veiculo = new Veiculo(placa, proprietario, modelo);

        // Inserir na tabela hash
        this.tabela.inserir(placa, veiculo);

        //  Resposta de sucesso
        return {
            sucesso: true,
            mensagem: "Veículo cadastrado com sucesso!"
        };
    }

}


