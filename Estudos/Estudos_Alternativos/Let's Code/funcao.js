function escrever(frase){
    console.log(frase);
}
escrever('Oi')

function somar(a,b){
    return a+b;
}
escrever(somar(1,3))

//funcao anonima
let media = function(m1,m2,m3){ return ((m1+m2+m3)/3) }
escrever('Sua média é '+media(7,4,8))

//funcao flecha
const data = new Date()
const anoAtual = data.getFullYear()
let idade = nascimento => anoAtual-nascimento;
escrever('Sua idade é '+idade(2000))

function gerador(inicio, fim){
    for(let i = inicio; i<=fim; i++){
        escrever(i)
    }
}
gerador(10,20)

let hello1 = () => 'Hello World!'
escrever(hello1())

let hello2 = (nome) => 'Hello '+nome
escrever(hello2('joao'))

/* Botando a data em variavel */
const ano = data.getFullYear(); const mes = data.getMonth(); const dia = data.getDay(); const hora = data.getHours(); const minuto = data.getMinutes(); const segundo = data.getSeconds()

//UTC METHOD FUNCTION TO STRING
const utc = new Date(Date.UTC(ano, mes, dia, hora, minuto, segundo))
escrever(utc.toUTCString())