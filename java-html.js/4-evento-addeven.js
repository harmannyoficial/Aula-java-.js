
/* eventos*/ 

const input = document.querySelector("#main-input");    
const select = document.querySelector("select");
const button = document.querySelector(".main-button");


/*addeventlistener é quando  a function é chamada o 
adevl consegue detectar que a função foi chamada */

    select.addEventListener("change", function() {
        console.log("você selecionou uma opção");
    });

/*quando voce quer saber as informaçoes 
sobre as funçoes no inspecionar. as informaçoes ficam 
guardadas no function ()
(escrever qualquer coisa dentro do conchetes)*/

function troqueivalor(ola){
    console.log(ola);
}


