function tabuada(){
    var num = window.document.getElementById('txtn')
    var tab = window.document.getElementById('seltab')
    var num2 = window.document.getElementById('txtm')

    if(num.value.length == 0 || num2.value.length == 0){
        window.alert('Por favor, digite um numero!')
    }
    else{
        var n = Number(num.value)
        var m = Number(num2.value)
        tab.innerHTML = ''
    }

    for(var c=0;c<=m;c++){
        var item = window.document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        tab.appendChild(item)
    }
}