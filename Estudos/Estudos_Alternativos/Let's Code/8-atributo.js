class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "tipo de entrada nao suportada"
        
        this.base = base
        this.altura = altura
        
        //atributo opcional
        this.cor = undefined


    }
}

const quadrado = new Quadrado(11, 12)
quadrado.cor = 'blue'
console.log(quadrado)