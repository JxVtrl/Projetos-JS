class Quadrado{
    constructor(lado, altura){
        let cor = 'blue'
        this.lado = lado
        this.altura = altura
        this.getCor = () => { return cor }
        this.setCor = (c) => {cor = c} 
    }
}

const quadrado = new Quadrado(3,4)
//usuario devera saber desse metodo de atribuicao
//quadrado.setCor('red')
console.log(quadrado.getCor())

// o metodo certo...?
class Quadrado1{
    constructor(lado,altura){
        // variavel menos acessivel com o _
        this._cor = 'blue'
        this.lado = lado
        this.altura = altura
    }

    get cor() { return this._cor}
    set cor(cor) { this._cor = cor}
}

const quadrado1 = new Quadrado1(3,4)
quadrado1.cor = 'green'
console.log(quadrado1.cor)