// Esta declaracao irá carregar as funcoes dentro dela apos o load completo da pagina
window.onload = () => {
    var botao = document.getElementById("botao")

    botao.addEventListener("click", () => {
        const countDiv = document.getElementById("timer")
        let minutosInput = document.getElementById("minutos")
        let segundosInput = document.getElementById("segundos")

        // Validacao caso dois campos nao estejam preenchidos
        if(minutosInput.value == "" && segundosInput.value == ""){
            countDiv.innerHTML = 'INSIRA ALGUM VALOR AOS CAMPOS ACIMA'
        }
        else{
            // Validacao caso um campo nao esteja preenchido
            if(minutosInput.value == ""){
                minutosInput = 0
            }
            if(segundosInput.value == ""){
                segundosInput = 0
            }

            document.getElementsByClassName("esconde").style.display = "none"

            document.getElementById("input2").style.display = "block"

            // Tempo em segundos
            let sec = (minutosInput*60)+segundosInput

            // Funcao que ira decrescer os segundos e fazer as verificacoes necessarias
            const tempoPassa = () => {
                // Irá calcular quantos minutos faltam com base na variavel sec com floor que deixara numeros quebrados ao ultimo inteiro
                let minutos = Math.floor(sec/60)

                // Calculara o restante dos segundos
                let segundosRestantes = sec % 60

                // Validacao da formatacao
                if(segundosRestantes < 10){
                    segundosRestantes = "0" + segundosRestantes
                }
                if(minutos < 10){
                    minutos = "0" + minutos
                }

                // Gerar o formato e imprimir na tela
                countDiv.innerHTML = minutos + ":" + segundosRestantes

                // Irá decrescer uma unidade
                if(sec > 0){
                    sec = sec -1
                }
                else{
                    countDiv.innerHTML = "Acabou o Tempo!"
                }
            }
            const countDown = setInterval(() => tempoPassa(), 1000)
        }
    })
}
