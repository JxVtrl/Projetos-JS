function calcular(){
    var inicio = window.document.getElementById('txti')
    var fim = window.document.getElementById('txtf')
    var passo = window.document.getElementById('txtp')
    var res = window.document.getElementById('res')
    
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = `<break>Faltam Dados</break></p>Impossivel Contar!`
        window.alert('Entradas Inválidas')
    } 
    else {
        res.innerHTML = `Contando: </p>`
        var Ni = Number(inicio.value)
        var Nf = Number(fim.value)
        var Np = Number(passo.value)
        if(Np <= 0){
            window.alert(`Passo inválido! Considerando PASSO 1`)
            Np = 1
        }
        if(Ni < Nf){
            // Contagem crescente

            for(var c = Ni; c < Nf; c+= Np){
                res.innerHTML += `${c} \u{1F449}`  
            }  
        }   
        else{
            // Contagem decrescente

            for(var c = Ni; c > Nf; c-= Np){
                res.innerHTML += `${c} \u{1F449}`  
            } 
        }
    res.innerHTML += `\u{1F3C1}`
    }
}