
const compra = [10,244,99,2,20,33,250]
let valortotaldes = 0
let totaldedesconto = 0
let array = 0


// PRECIFICA O DESCONTO PARA OS VALORES DIGITADOS NO DESCONT( DENTRO )
function descont(preco, desconto) {
    const result = (preco * desconto) / 100
    return result
}//descont(preco 2, desconto 4)

//CONTA A TODOS OS VALORES DENTRO DA ARRAY 
compra.forEach(value => {
    array += value;
});

compra.forEach(value => {
    if (value > 30) {
        const desconto = descont(value, 10) //CHAMA A FUNÇÃO CRIADA PARA DAR DESCONTO ( value array , valor desconto)
        valortotaldes += value - desconto  // valor total da compra com desonto 
        totaldedesconto += desconto  // soma os descontos 
        
    } else {
        valortotaldes += value
    }
});

console.log(`Valor total da compra ${array.toFixed(2)}`)

console.log(`Valor de 10% de desconto ${totaldedesconto.toFixed(2)}`)

console.log(`Valor total final da compra ${valortotaldes.toFixed(2)}`)
