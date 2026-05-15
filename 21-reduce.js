

/* reduce é um método de array que executa uma função de redução em cada 
elemento do array, resultando em um único valor.
Ele é frequentemente usado para somar valores, calcular médias, 
ou realizar outras operações de agregação. 

reduz todo o valor do array a um único valor, que pode ser de qualquer tipo (número, string, objeto, etc.).
*/
const cart = [
    {produto: 'banana', preco: 4.99, kilo: 1.9},
    {produto: 'maça', preco: 3.99, kilo: 2.5},
    {produto: 'pera', preco: 5.99, kilo: 1.2},
    {produto: 'uva', preco: 6.99, kilo: 0.8},
    
]

const total = cart.reduce((acumulador, valoratual) => {
    const valor = valoratual.preco * valoratual.kilo
    return acumulador + valor
},0)

console.log(total)

 