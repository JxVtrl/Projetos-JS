let vetor = ['10', '20', '30']
console.log(vetor)
let toInt = (x) => parseInt(x)
//Funcao map para percorrer o vetor sem necessitar de um loop
let vetor2 = vetor.map(toInt)
console.log(vetor2)

// Exemplo 2

let numeros = [1,2,3,4,5]
console.log(numeros)
let toDouble = (x) => (x*x)
let numeros2 = numeros.map(toDouble)
console.log(numeros2)