
const input = document.querySelector("input")
const button = document.querySelector(".button")
const p = document.querySelector("p")
const contact = [
    { name: "kleber", number: "959175925" },
    { name: "sara", number: "95394  94945" },
    { name: "lucas", number: "2342345925" },
    { name: "mae", number: "2342344534" }
]

button.addEventListener("click", function () {

    for (let i = 0; i < contact.length; i++) {   // length  mostra o total da array ou objeto
       
        if ( input.value.toLowerCase() === contact[i].name.toLowerCase()){
            p.innerHTML =`contato encontrado nome: ${contact[i].name} tel: ${contact[i].number}`
              
        break

        }else{p.innerHTML='nao encontrado'}
    }
})          