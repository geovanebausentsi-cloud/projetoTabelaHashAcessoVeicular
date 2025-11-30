/*Responsável por:
capturar o submit do formulário
validar campos
chamar ServicoCadastro
mostrar mensagens de sucesso/erro*/

import { ServicoCadastro } from "../core/ServicoCadastro.js";

export class CadastroController {
    constructor(tabelaHash) {
        this.servico = new ServicoCadastro(tabelaHash);

        // Captura elementos do DOM
        this.form = document.getElementById("formCadastro");
        this.saida = document.getElementById("saidaCadastro");
        this.tabela = document.getElementById("tabelaResultado");
        this.tabelaCorpo = document.getElementById("tabelaCorpo");

        // Ativa eventos
        this.configurarEventos();
    }

    configurarEventos() {
        this.form.addEventListener("submit", (evento) => {
            evento.preventDefault();
            this.cadastrar();
        });
    }

    cadastrar() {
        const placa = document.getElementById("placa").value.trim();
        const proprietario = document.getElementById("proprietario").value.trim();
        const modelo = document.getElementById("modelo").value.trim();

        try {
            const resultado = this.servico.cadastrarVeiculo(placa, proprietario, modelo);

            this.saida.innerHTML = `<p class="mensagem-sucesso">${resultado.mensagem}</p>`;
            this.form.reset();

        } catch (erro) {
            this.saida.innerHTML = `<p class="mensagem-erro">${erro.message}</p>`;
        }
    }
}

