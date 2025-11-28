export class TabelaHash {
    constructor() {
        //tamanhos com numeros primos ajudariam a maximizar a dispersão dos resultados e minimizar a chance de colisões
        this.tamanho = 10;
        this.tabela = new Array(this.tamanho).fill(null);
        //inicializa o array com nulos
    }

    //função de dispersão
    //composição das placas  4 letras e 3 numeros
    hash(key) {
        const primo = 31; //evita colisões 
        let valorHash = 0;

        for (let i = 0; i < key.length; i++) {
            //ABC1D34 -> conversão de caracteres da string ASCII
            const charCode = key.charCodeAt(i);

            valorHash = (valorHash * primo + charCode) % this.tamanho;
        }
        return valorHash; //indice

    }

    //Função de inserção na tabela - inserimos um par chave valor
    inserir(key, valor) {
        let index = this.hash(key);
        if (!this.tabela[index]) {
            this.tabela[index] = [];
        }
        this.tabela[index].push({ key, valor });
    }

    //obeter os valores associados a uma chave
    obter(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.tabela[index].length; i++) {
            if (this.tabela[index][i].key === key) {
                return this.tabela[index][i].valor;
            }
        }
        return undefined;//caso não encontre
    }

    excluir(key) {
        const index = this.hash(key);
        for (let i = 0; i < this.tabela[index].length; i++) {
            if (this.tabela[index][i].key === key) {
                 this.tabela[index].splice(i, 1);
            }
        }
        return false;//se o looping terminar e chave não ser encontrada
    }

}

var tabela = new TabelaHash();

tabela.inserir("ABC1D34", "Astolfo");
tabela.inserir("ABC1D38", "Osteinildo");

console.log(tabela.obter("ABC1D34"));
console.log(tabela.obter("ABC1D38"));