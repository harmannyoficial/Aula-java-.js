/* [] quando contem esse chaves significa que é uma array 
ARRAY - É QUANDO VOCE GUARDA TODAS AS INFORMAÇÕES DE UM OBEJTO  */



/* mostrando  tudo que tem na variavel*/ 
const user = [ 2 , 40, 60,]

console.log(user)

/* trocando o nome de uma variavel*/ 
const nome= [{ nome: "kleber" }, { num: "rodrigues" }, { nome: "rodrigues" }]

nome[1].num= "ana"

console.log(nome)

/*mostrando somente 1 das variaveis de um objeto {} */ 
const nomes = [ { nome: "kleber" }, { num: "rodrigues" }, { nome: "rodrigues" } ]

console.log (nome [1])

/*mostrando somente 1 das variaveis de uma array {} */ 
const filho = [ 'kleber', 'rodrigues', 'ana', 're', 'duh']

console.log (filho [3])