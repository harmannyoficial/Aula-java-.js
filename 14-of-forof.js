/*esturutura de repetição 

FOR OF - BUSCAR PELO VALOR DA VARIAVEL  [ ARRAY ] somente [array]

BUSCANDO O QUE TIVER DENTRO DA VARIAVEL 

*/

const input = document.querySelector("input")
console.log('input');
const button = document.querySelector(".button")
console.log("botao");
const p = document.querySelector("p")
console.log("p")

const user = ['joao', 'kleber', 'maria', 'sara']

button.addEventListener('click', function () {
    for (const nome of user ) {
        if (input.value.trim().toLowerCase() === nome.trim().toLowerCase()) {
            p.innerHTML = nome
            break
        } else (input.value.trim().toLowerCase() != nome.trim().toLowerCase())
        p.innerHTML = 'nao encontrado'
    }

})




