/*  map - busca a array e retorna um novo array com os 
 resultados podendo modificar a função aplicada a cada elemento do array original.
.MAP
- cria uma nova array apartir de uma array percorrida ja existente  (uma nova array)
-busca a informaçoes da array escolhida e pode ser modificado para retornar outra informação .
-podendo modificar a função aplicada a cada elemento do array original.

aceita 3 parametros como :
- Qual é o item do array 
- posição que o item esta 
- array completa
ex: 
 */

// mostra qual é o item dentro da array  e multiplica   */
console.log('peimeira map 1função  ')  // mostra o nome do metodo usado  */
const numeros = [1, 2, 3, 4, 5]  // arrray escolhida para ser percorrida 

const dobro = numeros.map((item) => { // função para modificar a array escolhida e retornar outra informação */
    return item * 2
})
console.log(numeros)  //  mostra a array original  */
console.log(dobro)  // mostra array modicada com a função aplicada a cada elemento do array original. */

console.log('segunda map 2 função ')
// mostra qual é o item e a posição que cada um ele esta  */
const numeros2 = [10, 20, 30, 40, 50]
const dobro2 = numeros2.map((item, index) => {
    console.log(item + "item")
    console.log(index + "index")
    const dobro2 = item // salvar uma variavel pra mostra todos os item se nao ter nao mostra todos 
    return dobro2
})
console.log(numeros2)  //  mostra a array original  */
console.log(dobro2)  // mostra array modicada com a função aplicada a cada elemento do array original. */


console.log('segunda map 3 função ')
// mostra qual é o item e a posição que cada um ele esta  */
const numeros3 = [10, 20, 30, 40, 50]
const dobro3 = numeros3.map((item, index, array) => {
    console.log(item + "item")
    console.log(index + "index")
    console.log(array + "array")
    const dobro3 = item * 2
    return dobro3
})
console.log(numeros3)  //  mostra a array original  */
console.log(dobro3)  // mostra array modicada com a função aplicada a cada elemento do array original. */

// simplificada  arrron  function  para usar o map sem precisar colocar return e nem salvar a variavel  */
const numeros4 = [100, 200, 300, 400, 500]
const dobro4 = numeros4.map((item) => item * 2 )
console.log(dobro4)  