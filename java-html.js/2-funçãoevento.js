//FUNÇÃO É O VENTO DE QUANDO ALGO SERA CLICAODO OU QUANDO O MOUSE PASSAR POR CIMA DE UM ELEMENTO//

//criar um evento de clique em um botão -  colar no onclick html "cliqueinobotao()"//

function cliqueinobotao() {
    alert("você clicou no botão"); // alerta()- mostra uma mensagem na tela quando o botão for clicado//
}


// onkeypress- é quando o input é digitado - colar no input do html onkeypress= "digiteinoinput()"//

function digiteinoinput() {
    console.log("você digitou no input"); // alerta()- mostra uma mensagem na tela quando o botão for clicado//
}

// PARA SABER QUEM É QUE VAI RECEBER ESSES EVENTOS É NECESSARIO CRIAR UMA VARIAVEL //

//mostra no console o que foi digitado no input 
const input = document.querySelector("#main-input"); //variavel para o input do html
function digiteinoinput() {    // colar no input do html onkeypress= "digiteinoinput()"//
    console.log(input.value); // input.value- mostra o valor do que foi digitado no input//
}

//cliquei no botao,mostra o que foi digitado no input 
const button = document.getElementsByClassName(".bot1"); //variavel para o button do html
function cliqueinobotao() { 
    console.log(input.value); // button[0].textContent- mostra o valor do que foi escrito no botão//
}



const button2 = document.getElementsByClassName(".botao2"); //variavel para o button do html
function botao2() {
    alert("você clicou no botao2"); // alerta()- mostra uma mensagem na tela quando o botão for clicado//
}
