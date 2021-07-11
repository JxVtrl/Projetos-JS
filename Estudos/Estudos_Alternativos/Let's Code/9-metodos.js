class Quadrado{
    constructor(base, altura){
        if(isNaN(base) || isNaN(altura)) throw "tipo de entrada nao suportada"
        
        this.base = base
        this.altura = altura
        this.cor = undefined
    }
    calculaArea(){
        return this.base*this.altura
    }

    duplicaBase(){
        this.base = 2* this.base
    }

    duplicaAltura(){
        this.altura = 2* this.altura
    }

    imprimir(){ //se tivesse html linkado
        return `
<div style = '
    width:              ${this.base}px;
    height:             ${this.altura}px;
    background-color:   ${this.cor}'>
</div>`
    }
}

const quadrado = new Quadrado(3, 4)
console.log(quadrado)

console.log(quadrado.calculaArea())

quadrado.duplicaAltura()
console.log(quadrado)

quadrado.duplicaBase()
console.log(quadrado)

console.log(quadrado.imprimir())

