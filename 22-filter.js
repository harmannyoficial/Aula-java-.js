/* Filter 
- cria um novo Array, a partir da aarray percorida (array original)
- cria um novo array  APENAS com os elementos filtrados
-aceita 3 condicoes ( parametros)
- item do array 
-index
-array completa

filtra somente o que voce quer dentro da array original.
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNumbers = numbers.filter((number) => {
    if (number % 2 === 0) {
        return true
    }  else {
        return false
    }
})
console.log(newNumbers)

/* ou economizando código: */
const newNumbers2 = numbers.filter((number) => number % 2 === 0)
console.log(newNumbers2)


const studant = [
    { nome: 'joao', nota: 8 },
    { nome: 'maria', nota: 5 },     
    { nome: 'pedro', nota: 9 },]

const approved = studant.filter((studant) => studant.nota >= 6)
console.log(approved)

/* ou */
const approved2 = studant.filter((studant,index,array) => {
    console.log(index)
    console.log(array)
    return studant.nota >= 6
})
console.log(approved2)