
/*  inicialização - cria uma variavel e coloca um valor para iniciar para ela 
    condição - enquanto for true, o laço continuara interagindo
    expresso final - condiçao final para quando o laço der a volta
    
    i = é uma variaveL  que costuma ser usada por programadores, 
    e é obrigatorio para contar as informação dentro do i

    formula do for 
    for (inicialização, condição , expreção final )

    for (i=0; i<15; i++){
    console.log(i)

    NAO FUNCIONA COM OBJETO  {}
    
}
    */

const users = ["maria", "jaao", "marcio"]

for (let i = 0; i< users.length; i++) { // .lenght mostra o tamanho da array , quantos nomes no total 3 nomes   
    console.log(users[i]) // user mostra o que tem dentro da variavel ,e [i] mostra o que tem dentro da array
    break // quando encontrar o que procura o break para .
}





