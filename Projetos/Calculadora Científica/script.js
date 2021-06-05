var res = document.getElementById("result")

function inserir(num){
    if(res.innerHTML === '0'){
        res.innerHTML = ''
        res.innerHTML += num
    }
    else{
        if(Number(res.innerHTML.length) < 26){
            res.innerHTML += num
        } 
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

function calcular(){
    var resultado = res.innerHTML
    if(resultado){
        res.innerHTML = eval(resultado)
    }
    else{
        res.innerHTML = 'ERRO'
    }
}