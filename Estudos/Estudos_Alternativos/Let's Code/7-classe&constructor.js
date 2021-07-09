class Pessoa {
    constructor(nome,idade,nacionalidade){
        this.nome           = nome;
        this.idade          = idade;
        this.nacionalidade  = nacionalidade;
    }
}

const pessoa1 = new Pessoa('João', 20, 'Brasileiro')
const pessoa2 = new Pessoa('Pedro', 15, 'Brasileiro')

class Quadrado {
    constructor(base,altura){
        if(isNaN(base) || isNaN(altura)) throw "Informacão não numérica"
        this.base = base;
        this.altura = altura;
        this.area = base*altura;        
    }
}
const quadrado = new Quadrado(11, 10)
console.log(quadrado)