/* 
FOR IN     FOR( CONST  IF VARIAVEL ) 
FOR IN - é um laço de repetição que tem a função de iterar 
sobre os itens de um objeto retornando o chave ao envez do valor  ((chave -> nome: kleber <-valor
busca somente objeto { chave  }  {chave [valor]}
*/

const user = {
        name: "kleber",
        age: 30,
        city: "são paulo",

        name: "sara",
        age: 22,
        city: "bahia"
}
for ( const key in user){

        console.log(key + user[key]);
}
