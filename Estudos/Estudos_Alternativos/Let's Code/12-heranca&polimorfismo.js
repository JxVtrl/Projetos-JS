class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

class Cidadao extends Pessoa{ // Cidadao que é uma instancia de Pessoa
    constructor(nome, idade, rg, cpf){
        super(nome, idade) // Neste linha ele puxará as variaveis na classe superior
        this.rg = rg
        this.cpf = cpf
    }
}

const cidadao = new Cidadao('Joao', 20, '01029', '17610160750')
console.log(cidadao)
console.log(cidadao instanceof Cidadao) // cidadao é uma instancia de Cidadao? (é filha de Cidadao): true
console.log(cidadao instanceof Pessoa) // cidadao é uma instancia de Pessoa? (é filha de Pessoa): true