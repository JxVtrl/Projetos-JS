const vetor1 = [1,2,3,4,5,6,7,8,9,10]

// Reduce, entrei com os parametros somatorio que irá acumular os valores dos elementos e o elemento atual

const soma = vetor1.reduce((somatorio, elemento) => somatorio+elemento, 0 /* o 0 é o segundo argumento da function reduce que irá inicializar a variavel somatorio com valor escrito */)
console.log(soma)

const prod = vetor1.reduce((somatorio, elemento) => somatorio*elemento)
console.log(prod)

let vetor = [
    { nome : 'nome1', nota1: 5, nota2: 8},
    { nome : 'nome2', nota1: 4, nota2: 5},
    { nome : 'nome3', nota1: 8, nota2: 4},
    { nome : 'nome4', nota1: 3, nota2: 1},
    { nome : 'nome5', nota1: 9, nota2: 4},
]

const estadoInicial = {
    somaNota1 : 0,
    somaNota2 : 0,
    qtdNota : 0,
}

const somaNota = vetor.reduce((estado, valor) => {
    return {
        somaNota1 : estado.somaNota1 + valor.nota1,
        somaNota2 : estado.somaNota2 + valor.nota2,
        qtdNota : estado.qtdNota + 1
    }
}, estadoInicial)

console.log(somaNota)

