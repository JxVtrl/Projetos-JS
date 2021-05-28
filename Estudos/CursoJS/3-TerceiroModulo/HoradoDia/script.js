
function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('ft')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 18
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12){
        titulo.innerHTML = 'Bom Dia!'
       img.src = 'manha.png'
       document.body.style.background = '#f89d5f'
    }
    else if(hora >= 12 && hora <= 18){
        titulo.innerHTML = 'Boa Tarde!'
        img.src = 'tarde.png'
        document.body.style.background = '#9b5558'
    }
    else{
        titulo.innerHTML = 'Boa Noite!'
        img.src = 'noite.png'
        document.body.style.background = '#001619'
    }
}