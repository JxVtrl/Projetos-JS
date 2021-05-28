var vel = console.log.prompt(`Qual o valor da velocidade?`)
var velmin = parseFloat((vel / 3.6).toFixed(2))


console.log(`A velocidade do seu carro é ${vel} Km/h ou ${velmin} m/s`)

if(vel > 80){
    console.log(`Você está ACIMA do limite de velocidade. MULTADO.`)
}

console.log(`Dirija sempre com segurança!`)

