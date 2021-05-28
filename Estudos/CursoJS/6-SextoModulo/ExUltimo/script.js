var num = window.document.getElementById("txtn")
var lista = window.document.getElementById("lista")
var res = window.document.getElementById("res")
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100 ){
        return true
    }
    else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    lista.innerHTML ==''
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        var item = window.document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert(`Valor ${num.value} inválido ou já encontrado na lista`)
    }
    num.value = ''
    num.focus()

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }
    else{
        
        res.innerHTML += `<br/>Ao todo temos ${valores.length} números cadastrados`
        valores.sort()
        res.innerHTML += `<br/>O maior valor informado foi ${valores[valores.length-1]}`
        res.innerHTML += `<br/>O menor valor informado foi ${valores[0]}`
        var resulta = 0
        var media = 0

        for(var c = 0; c < valores.length; c++){
            resulta = resulta + valores[c]
        }
        media = (resulta/(valores.length))
        res.innerHTML += `<br/>Somando todos os valores, temos ${resulta}`
        res.innerHTML += `<br/>A média dos valors digitados é ${media}`
    }

}