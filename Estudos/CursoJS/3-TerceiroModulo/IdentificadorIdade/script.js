function verificar(){
    var data = new Date()
    var anoagr = data.getFullYear()

    var ano = window.document.getElementById('txtano')

    
    

    var corB = window.document.getElementById('branco')
    var corP = window.document.getElementById('preto')

    if(ano.value.length == 0 || Number(ano.value) > anoagr){
        window.alert('[ERRO] Verifique os dados.')
    }else{
        var sexo = window.document.getElementsByName('radsex')
        var gen = sexo[0].checked?'Homem':'Mulher'

        var cor = window.document.getElementsByName('radcor')
        var raca = cor[0].checked?'Branco':'Preto'

        var idade = anoagr - Number(ano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if(gen == 'Homem'){
            if(raca == 'Branco'){
                if(idade >= 0 && idade <= 4){
                // BEBE
                img.setAttribute('src', 'bebehb.png')
                }
                else if(idade < 14){
                // CRIANCA
                img.setAttribute('src', 'criancahb.png')
                }
                else if(idade <= 21){
                // JOVEM
                img.setAttribute('src', 'jovemhb.png')
                }
                else if(idade <= 64){
                // Adulto
                img.setAttribute('src', 'adultohb.png')
                }
                else{
                // IDOSO
                img.setAttribute('src', 'idosohb.png')
                }
                res.innerHTML = `Detectamos ${gen} Branco de ${idade} anos</p>`
            }
            else if(raca == 'Preto'){
                if(idade >= 0 && idade < 4){
                // BEBE
                img.setAttribute('src', 'bebehp.png')
                }
                else if(idade < 14){
                // CRIANCA
                img.setAttribute('src', 'criancahp.png')
                }
                else if(idade <= 21){
                // JOVEM
                img.setAttribute('src', 'jovemhp.png')
                }
                else if(idade <= 64){
                // Adulto
                img.setAttribute('src', 'adultohp.png') 
                }
                else{
                // IDOSO
                img.setAttribute('src', 'idosohp.png')
                }
                res.innerHTML = `Detectamos ${gen} Preto de ${idade} anos</p>`
            }
            
        }
        else if(gen == 'Mulher'){
            if(raca == 'Branco'){
                if(idade >= 0 && idade < 4){
                // BEBE
                img.setAttribute('src', 'bebemb.png')
                }
                else if(idade < 14){
                // CRIANCA
                img.setAttribute('src', 'criancamb.png')
                }
                else if(idade <= 21){
                // JOVEM
                img.setAttribute('src', 'jovemmb.png')
                }
                else if(idade <= 64){
                // Adulto
                img.setAttribute('src', 'adultamb.png')
                }
                else{
                // IDOSO
                img.setAttribute('src', 'idosamb.png')
                }
                res.innerHTML = `Detectamos ${gen} Branca de ${idade} anos</p>`
            }
            else if(raca == 'Preto'){
                if(idade >= 0 && idade < 4){
                // BEBE
                img.setAttribute('src', 'bebemp.png')
                }
                else if(idade < 14){
                // CRIANCA
                img.setAttribute('src', 'criancamp.png')
                }
                else if(idade <= 21){
                //JOVEM
                img.setAttribute('src', 'jovemmp.png')
                }
                else if(idade <= 64){
                //Adulto
                img.setAttribute('src', 'adultamp.png')
                }
                else{
                //IDOSO
                img.setAttribute('src', 'idosamp.png')
                }
                res.innerHTML = `Detectamos ${gen} Preta de ${idade} anos</p>`
            }
            
        }

        res.style.textAlign = 'center'
        
        res.appendChild(img)

    }
}