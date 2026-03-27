// buscando o botao no html que vai ser usado 
const convertbutton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

//função para o botao .convert-button
function convertvalues() {
    //todos os elementos que vao funcionar ao clicar no botao 
    const inputcurrencyvalue = document.querySelector(".input-currency").value
    const currencyvaluetoconvert = document.querySelector(".currency-value-to-convert") // valor real valor para converter
    const currencyvalue = document.querySelector(".currency-value") //valor pra convertido 
   

    //variavel para soma valor ao países 
    const dolar = 5.30
    const euro = 7.00

    //variavel traz resultado da soma criada  convertedola ou outro ...
    const convertdolar = inputcurrencyvalue / dolar
    const converteuro = inputcurrencyvalue / euro

    //troca o 1 valor la no html = input
    currencyvaluetoconvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyvalue)



    //troca o 2 valor la no html = convertdola
    if (currencyselect.value == "dolar") {
    currencyvalue.innerHTML = new Intl.NumberFormat("us-US", {
        style: "currency",
        currency: "USD"
    }).format(convertdolar)
    }
    

    //troca do 2 texto la no html = converteuro
    if (currencyselect.value == "euro"){
        currencyvalue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(converteuro)
    }

    //mostra no console  se os elementos estao funcionando
    console.log("currencyselect")
    console.log("change")
    console.log(currencyvalue + "texto input")
    console.log(currencyvaluetoconvert + " texto convertido")
    console.log(convertdolar + " resultado convertido dola")
    console.log(converteuro + " resultado convertido euro")
    console.log(inputcurrencyvalue + " valor digitado no input")
    console.log("click funcionou ")
    
} 
    //troca dos nomes das bandeiras e bandeiras 
    function changecurrency(){
        const currencyname = document.querySelector("#currency-name")
        const currencyimg = document.querySelector(".currency-img")

     
    
        if (currencyselect.value == "euro"){
        currencyname.innerHTML= "Euro"
        currencyimg.src= "./assets.jpeg/europe.png"
        }

        if (currencyselect.value == "dolar"){
        currencyname.innerHTML= "Dolar"
        currencyimg.src= "./assets.jpeg/estados.png"
        }
       
       convertvalues()
}


    // 
    currencyselect.addEventListener("change", changecurrency)
    convertbutton.addEventListener("click", convertvalues)




















/*

const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

    console.log(currencySelect.value);
    const dolarToday = 5.24;
    const euroToday = 6.18;
    const alemao = ;
    const libraToday = 7.15;

    if (currencySelect.value == "dolar") {
        // Se o select estiver selecionado em Dólar, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        // Se o select estiver selecionado em Euro, entre aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }


    

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)

     
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-img");

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano";
        currencyImage.src ="./assets.jpeg/estadosuni_states_flags_flag_17080.png";
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets.jpeg/europe_flags_flag_16997.png";
    }
     



    convertValues()
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
*/