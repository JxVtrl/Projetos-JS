const subtrair = (a,b) => a-b
const aplicaOperacao = (a, b, operacao) => operacao(a,b)

let res = aplicaOperacao(10, 5, subtrair)
console.log(res)

const somar = (x) => (y) => x+y
const somar2 = somar(2)

console.log(somar2(8))