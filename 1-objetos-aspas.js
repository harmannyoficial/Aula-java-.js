
/* {} quando contem esse conchetes significa que é uma objeto 
OBJETO - É QUANDO VOCE PODE CONTER AS INFORMAÇÕES DE CONTATO EM VARIAVEIS DIFERENTE */

//variavel simple//
let nome = "kleber "
console.log(nome)

//objeto //

let  /*objeto -->*/ noms = { /* {} CRIA UM OBJETO */
/*variaveis -->*/           nome: "kleber",
                            sobrenome: "rodrigues",
                            idade: 30,
 
/*objeto -->*/       end:{ 
/*variaveis -->*/           rua:"franciscode assis",
                            numero: 123,
                            bairro: "centro",
                        }
}
 //  o ponto é para navegar o valor da variavel dentro do objeto//


/*CONST PODE SER MUDADO MAS... PARA CRIAR UMA AUTERAÇÃO NO CONST É USANDO .NOME DO OBJETO.NOME DA VARIAVEL = NOVO VALOR*/


const  /*objeto -->*/ nomes = { /* {} CRIA UM OBJETO */
/*variaveis -->*/           nome: "kleber",
                            sobrenome: "rodrigues",
                            idade: 30,
 
/*objeto -->*/       ends:{ 
/*variaveis -->*/           rua:"franciscode assis",
                            numero: 123,
                            bairro: "centro",
                        }
}

nomes.ends.rua = "monteiro"           /* numeros nao precisa de aspas 
aqui eu estou mudando o valor da variavel do const  */

console.log(nomes)  

