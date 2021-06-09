const res = document.getElementById("result")
const ac = document.getElementById("ac")
const mr = document.getElementById("mr")
const w = document.documentElement.clientWidth;
var baseElev = false
var expo = false
var memoria = 0

function inserir(num){
    if(res.innerHTML === '0'){
        res.innerHTML = ''
        res.innerHTML += num
        ac.innerHTML = 'C'
    }
    else{
        ac.innerHTML = 'C'
        if(w <= 850){
            if(Number(res.innerHTML.length) < 8){
                res.innerHTML += num
            } 
        }
        else{
            if(Number(res.innerHTML.length) < 26){
                res.innerHTML += num
            } 
        }
    }
}
function reset(){
    res.innerHTML = '0'
    ac.innerHTML = 'AC'
    baseElev = false
    expo = false
}
function inverter(){
    res.innerHTML *= (-1)
}
function inversao(){
    var denom = res.innerHTML
    res.innerHTML = 1/denom
}
function porcem(){
    res.innerHTML /= 100
}
function sqrt(denom){
    res.innerHTML **= 1/denom
}
function potencia(num, baseDez){
    if(num == ''){
        var num = res.innerHTML
        res.innerHTML = Math.pow(baseDez, num)
    }
    else{
        var base = res.innerHTML
        res.innerHTML = Math.pow(base, num)
    }
}
function ConstE(){
    var pot = res.innerHTML
    res.innerHTML = (Math.E ** pot)
}
function ln(){
    var x = res.innerHTML
    res.innerHTML = Math.log(x)
}
function rad(){ 
    res.innerHTML *= Math.PI/180


}
function rand(){
    res.innerHTML = Math.random()
}
function pi(){
    res.innerHTML = Math.PI
}
function log10(){
    var x = res.innerHTML
    res.innerHTML = Math.log10(x)
}
function elevado(){
    baseElev = res.innerHTML
    res.innerHTML = ''
}
function vezesDezElevado(){
    expo = res.innerHTML
    res.innerHTML = ''
}
function memoriaMais(){
    memoria += res.innerHTML
    res.innerHTML = ''
    mr.style.backgroundColor = '#5f5f5f';
}
function memoriaMenos(){
    memoria -= res.innerHTML
    res.innerHTML = ''
    mr.style.backgroundColor = '#5f5f5f';
}
function mostraMemoria(){
    res.innerHTML = memoria
    mr.style.backgroundColor = '#212121'
}
function resetMemoria(){
    memoria = 0
    mr.style.backgroundColor = '#212121'
}
function exponencial(){
    var num = res.innerHTML
    for(var c = (num-1); c > 0;c--){
        num *= c
    }
    res.innerHTML = num
}
function seno(){
    var num = res.innerHTML
    res.innerHTML = Math.sin(num)
}
function sinh(){
    var num = res.innerHTML
    res.innerHTML = Math.sinh(num)
}
function cosseno(){
    var num = res.innerHTML
    res.innerHTML = Math.cos(num)
}
function cosh(){
    var num = res.innerHTML
    res.innerHTML = Math.cosh(num)
}
function tangente(){
    var num = res.innerHTML
    res.innerHTML = Math.tan(num)
}
function tanh(){
    var num = res.innerHTML
    res.innerHTML = Math.tanh(num)
}
function functionE(){
    if(res.innerHTML === '0'){
        res.innerHTML = ''
        res.innerHTML += Math.E
        ac.innerHTML = 'C'
    }
    else{
        res.innerHTML += Math.E
    }
}
function calcular(){
    var resultado = res.innerHTML
    if(expo != false){
        res.innerHTML = eval(expo+'*10**'+resultado)
    }
    else{
        if(baseElev != false){
            res.innerHTML = Math.pow(baseElev, resultado)
        }
        else{
            if(resultado){
                try {
                    res.innerHTML = eval(resultado); 
                } 
                catch (e) {
                    if (e instanceof SyntaxError) {
                        res.innerHTML = 'ERRO';
                    }
                }
            }
        }
    }
}