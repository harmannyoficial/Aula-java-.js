/*

+   adicão 
-   subtração
/   divisão
*   multiplicação
%   resto é o resultado do que sobre  geralmente usado para o que tem no estoque 
++  adiciona 1 numero a mais no valor , usado com variavel LET    (const nao deixa trocar)
--  subtrai 1 numero a menos no valor ,  usado com variavel LET 
**  esponencial 

*/


//RESTO
const result = 7 % 3    // % mostra a sobra dessa equação 
console.log (result,'resto')


//INCREMENTO 
let resulta= 2+2   // (somente usando LET , CONST NAO FUNCIONA )
resulta++ // essa formula acrecenta 1 numero a mais no valor  
console.log(resulta, 'com variavel mais 1 ')  
//  OU // (Somente ++ antes da variavel no console )
console.log(++resulta,' ++ somente no console antes da variavel')  



//DECREMENTO 
let resul= 2+2   // (somente usando LET , CONST NAO FUNCIONA )
resul--
console.log(resul,'variavel mais 1 variavel ')
// ou 
console.log(--resul,'-- somente no console antes da variavel')


//exponencial

const variavel = 20 ** 3  // ** formula 2² , 2³ 
console.log(variavel, '**  quadrado ou ao cubo ')

    