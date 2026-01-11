export class Veiculo {
    // Campos privados (totalmente inacessíveis de fora)
    #placa;
    #proprietario;
    #modelo;
    constructor(placa, proprietario, modelo) {
        this.#placa = placa;
        this.#proprietario = proprietario;
        this.#modelo = modelo;

        // Objeto verdadeiramente imutável
        Object.freeze(this);
    }
    
    // --------- GETTERS (somente leitura) ---------

    get placa() {
        return this.#placa;
    }

    get proprietario() {
        return this.#proprietario;
    }

    get modelo() {
        return this.#modelo;
    }

    // --------- Representação amigável ---------

    toString() {
        return `[${this.#placa}] ${this.#proprietario} — ${this.#modelo}`;
    }
}

//const v1 = new Veiculo("ABC-1234", "João da Silva", "Onix");