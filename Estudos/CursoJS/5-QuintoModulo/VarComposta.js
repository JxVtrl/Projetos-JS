let nomes = ['joao','pedro','ana','paula']

console.log(`os nomes são ${nomes}`)

nomes[5] = 'jorge' //Coloca em qualquer lugar que voce quer

console.log(`os nomes são ${nomes}`)

nomes.push('amanda') //Cria mais um elemento para o array e poe no ultimo

console.log(`os nomes são ${nomes}`)

nomes[4] = 'rafael'

var idades = [20,14,18,19,21]

console.log(`As idades são ${idades}`)


console.log(`O vetor idades tem ${idades.length} posições`)


idades.sort() // Vai organizar por ordem crescente

console.log(`As idades são ${idades}`)

//for(var c = 0;c <= idades.length; c++){
//console.log(`${nomes[c]} tem ${idades[c]}`)}

//ou

for(var c in idades){ //OLHA A SIMPLICIDADE
    console.log(`${nomes[c]} tem ${idades[c]}`)
}

//PARA BUSCAR UM VALOR DENTRO DO VETOR

console.log(nomes.indexOf('paula'))



