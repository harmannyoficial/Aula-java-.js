/*
foreach - funciona somente com [array]
ele nao tem break por isso é melhor usar o for ou while para procurar um valor especifico
*/


const user = [
    { nome: 'kleber', idade: 30 },
    { nome: 'sara', idade: 22 }, 
    { nome: 'le', idade: 2 }
];

//modo antigo de usar 
user.forEach(function (item,index,array) {// intem mostra o que tem na array e index mostra a posição do item na array
    console.log(`${index+1} - O nome é ${item.nome} e a idade é ${item.idade} anos.`);

});


//modo economico para usar  se tiver somente 1 elemento pode tirar os parentes user.foreach( elemento )=>{}
user.forEach( (item, index, arraytotal) =>{
    console.log(`${index} ${item } ${arraytotal}`)
})

/* para contar o valor de uma array
cria uma let  e usa dentro da formula foreach  let = let + array

array= [5,5,5,5]
let total =0

array.forEach(value => {

    total= total+value
});

console.log(total);

*/ 