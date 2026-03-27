/* ATIVAR O JAVA NO HTML PRA FUNCIONAR */

/*getElementebYId()*/
/*getElementsByClassName()*/
/*getElementsByTagName()*/
/*querySelector()*/
/*querySelectorAll()*/


/**********getElementebYId()*/
 /*busca pelo id */

const input = document.getElementById("main-input");
console.log(input);


/**********getElementsByClassName()*/
 /* busca por classe */

const paragrafo = document.getElementsByClassName("paragrafo");
console.log(paragrafo); 

/**********getElementsByTagName()*/
 /* busca por nome de tag*/ 

const botao = document.getElementsByTagName("button");
console.log(botao);

/**********querySelector()*/
 /*busca pelo  primeiro seletor */

const paragrafo2 = document.querySelector(".paragrafo");
console.log(paragrafo2);        

/**********querySelectorAll()*/
 /* busca por todos os elementos que correspondem  H3 H1 img tudo  */

const paragrafo3 = document.querySelectorAll(".paragrafo");
console.log(paragrafo3);




/**********querySelectorAll()*/
 /* ALTERA SOMENTE O PRIMEIRO ELEMENTO INFORMANDO  () */

const elementos = document.querySelector(".paragrafo");
elementos.textContent= "nosso novo texto ";  
console.log(elementos.textContent)  ;

/**********querySelectorAll()*/
/*PARA ALTERAR SOMENTE 1 COM O QUERYSelectorAll É NECESSARIO INFORMAR QUAL É USANDO [] NO ELEMENTO */  

const elementos = document.querySelectorAll(".paragrafo");
elementos[0].textContent= "nosso novo texto ";  
console.log(elementos[0].textContent)  ;

    /* TROCANDO A COR DO ELEMENTO */
const elementos = document.querySelector("h1");
elementos.style.color = "red";
console.log(elementos)
    
     /* TUDO QUE CONTEM - (HIFEM) É SUBISTITUIDO POR LETRA MAIUSCULA */

const elementos = document.querySelector("h1");
elementos.style.backgroundColor = "red";  // background-color = backgroundColor
console.log(elementos);
