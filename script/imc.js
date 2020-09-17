
const calcular = document.querySelector('#calcular')


function imc(){
    const nome = document.querySelector('#nome').value
    const altura = document.querySelector('#altura').value
    const peso = document.querySelector('#peso').value
    const resultado = document.querySelector('#resultado')

    if(nome !== "" && altura !== "" && peso !== '') {
        
        const valorIMC = (peso /(altura * altura)).toFixed(2)

        let classificacao = ""

        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso'
        }else if( valorIMC < 25) {
            classificacao = 'com peso ideal. parabéns!!'
        }else if( valorIMC < 30) {
            classificacao = 'levemente acima do peso'
        }else if( valorIMC < 35) {
            classificacao = 'com obesidade grau I'
        }else if( valorIMC < 40) {
            classificacao = ' com obesidade grau II'
        }else{
            classificacao = 'com obesidade grau III. cuidado!!!'
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}`

    }else{
        resultado.textContent = 'preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc)
