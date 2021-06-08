var res = document.getElementById("result")
var ac = document.getElementById("ac")
var w = document.documentElement.clientWidth;
var deitado = 26
var emPe = 8
var baseElev = false
var expo = false

function inserir(num){
    if(res.innerHTML === '0'){
        res.innerHTML = ''
        res.innerHTML += num
        ac.innerHTML = 'C'
    }
    else{
        ac.innerHTML = 'C'
        if(w <= 850){
            if(Number(res.innerHTML.length) < emPe){
                res.innerHTML += num
            } 
        }
        else{
            if(Number(res.innerHTML.length) < deitado){
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
function log10(){
    var x = res.innerHTML
    res.innerHTML = Math.log10(x)
}
function elevado(){
    baseElev = res.innerHTML
    res.innerHTML = ''
}

function exponencial(){
    expo = res.innerHTML
    res.innerHTML = ''
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