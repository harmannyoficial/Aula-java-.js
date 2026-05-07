
const number = 0 // ou pode fazer uma variavel padrão 
function som(a = 0 , b = 0){ // valor padrão ()  ou colocar a variavel number 
    console.log(a + b)
}
som(1,3) //chamando a função com os valores 1 e 3, o resultado é 4


function meunome (nome='kleber') { // nome=  porem quando for chamado recebe o que for escrito 
    console.log(nome) // variavel nome(dentro da função)
}
meunome('leandro' ) //chamando a função troca o nome dentro da função, chamando o nome que escrevi 



const input= 'vanessa'// input do site  onde o cliente escreve o nome

function nome (nome= 'kleber') {
    console.log(nome)
}
nome(input) //busca o input e monstra na tela 





