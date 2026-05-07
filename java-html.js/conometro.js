
// setTimeout(() => {
    
//}, timeout);






// função de contagem unica a cada clique
let number1 = 0
let crono1                            // variavel vazia para receber uma função
let h1 = document.querySelector("#h1")
let stop1 = document.querySelector("#stop1")

//cada clique conta 1 e para 
function play11() {
    crono1 = setTimeout(function () {  // variavel criada vazia para receber essa função
        number1++
        h1.innerHTML = number1
    }, 1000)
}


// função de contagem regressiva 
let number2 = 0
let crono2                                   // variavel vazia para receber uma função
let h2 = document.querySelector("#h2")
let stop2 = document.querySelector("#stop2")

function play22() {
    crono2 = setInterval(function () {      // variavel criada vazia para receber essa função
        number2++                           // o numero recebe +1 para contagem 
        h2.innerHTML = number2                 // recebe no html o numero de contagem 
    }, 1000) // milisegundos para conta a troca do numero 
}
// para a contagem regressiva 
function stop22(){                  // função de stop da contagem regressiva
    crono2 = clearInterval(crono2)      
    
}
