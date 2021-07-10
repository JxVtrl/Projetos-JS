// Esta declaracao irá carregar as funcoes dentro dela apos o load completo da pagina
window.onload = () => {
    let botao = document.getElementById("botao")

    botao.addEventListener("click", () => {
        const countDiv = document.getElementById("timer")
        let minutosInput = Number(document.getElementById("minutos").value)
        let segundosInput = Number(document.getElementById("segundos").value)
        let esconde = document.getElementsByClassName("esconde")
        let aparece = document.getElementById("input2")
        
        esconde[0].style.display = "none"
        esconde[1].style.display = "none"
        esconde[2].style.display = "none"
        aparece.style.display = "none"

        // Tempo em segundos
        let segTotais = minutosInput*60 + segundosInput
        console.log(segTotais)

        // Funcao que ira decrescer os segundos e fazer as verificacoes necessarias
        const tempoPassa = () => {
            // Irá calcular quantos minutos faltam com base na variavel sec com floor que deixara numeros quebrados ao ultimo inteiro
            let minutosRestantes = Math.floor(segTotais/60)

            // Calculara o restante dos segundos
            let segundosRestantes = segTotais % 60

            // Validacao da formatacao
            
            if(segundosRestantes < 10){
                segundosRestantes = "0" +segundosRestantes
            }
            if(minutosRestantes < 10){
                minutosRestantes = "0" +minutosRestantes
            } 

            // Gerar o formato e imprimir na tela
            countDiv.innerHTML = minutosRestantes + ":" + segundosRestantes

            // Irá decrescer uma unidade
            if(segTotais > 0){
                segTotais = segTotais -1
            }
            else if(segTotais == 0){
                countDiv.innerHTML = "Acabou o Tempo!"
            }
            
        }

        const countDown = setInterval(() => tempoPassa(), 1000)    
    
    })
}
