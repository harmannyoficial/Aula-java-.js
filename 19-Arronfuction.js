/*
função arron  é economia de codigo  para function nome(a,b)
    
}*/

//NOVO MODO DE USAR QUANDO TEM 2 ELEMENTOS SOM ( a , b ) USAR ESSE MODO 
const som = (a, b) => {
    return a + b
}
console.log(som(1, 2))

// MODO DE USAR QUANDO TEM SOMENTE UM ELEMENTO ( NOME ) NAO PRECISA COLOCA RETURN
const nome = (nome) => nome
console.log(nome('kleber'))

//MODO ANTIGO 
function num(a,b){
    a+b
    return a+b
}
console.log(num(1,2))