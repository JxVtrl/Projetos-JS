var res = document.getElementById("resultado")

function inserir(num){
    if(Number(res.innerHTML.length) < 10){
        res.innerHTML += num
    } 
}
function reset(){
    res.innerHTML = null
}
function inverter(){
    res.innerHTML *= (-1)
}
function porcem(){
    res.innerHTML /= 100
}
var op1 = null
var ope = null
function operacao(op){
    op1 = res.innerHTML
    ope = op
    res.innerHTML = ''
}
function calcular(){
    var op2 = res.innerHTML
    var resultado = `${op1}${ope}${op2}`
    if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado)
    }
}