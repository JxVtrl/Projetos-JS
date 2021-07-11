function criaQuadrado(base, altura){

    let cor = 'red'

    return{
        base,
        altura,
       getCor: () => cor
    }
}

const quadrado = criaQuadrado(3,4)
quadrado.cor = 'blue'
console.log(quadrado.getCor())

//Em classes...
class Quadrado{
    constructor(lado, altura){
        let cor = 'green'
        this.lado = lado
        this.altura = altura
        this.getColor = () => cor
    }
}

const Quad = new Quadrado(3,4)
console.log(Quad.getColor())