
/*

while é igual o for 
é necessario construir uma formula para  contar o array */


const input = document.querySelector('input');
console.log('input');

const button = document.querySelector('.button');
console.log("button");

const p = document.querySelector('p');
console.log("P");


const user = [{ nome: 'kleber', idade: 30 }, { nome: 'sara', idade: 22 }, { nome: 'le', idade: 2 }];
let i = 0; // contagem do zero 

button.addEventListener("click", function () {

    while (i < user.length) { // mostra o tamanho na array length
        if (input.value === user[i].nome) {
            p.innerHTML = `O nome é ${user[i].nome} e a idade é ${user[i].idade} anos.`;
            break; // Encerra o loop se encontrar o nome
        } else {
            p.innerHTML = "Nome não encontrado.";
        }
        i++;
    }
})
