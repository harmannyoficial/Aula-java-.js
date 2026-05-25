/* const menuopcoes = [
    { name: 'X-Salada', price: 30, vegan: false, src: '../desafios/assets.jpeg/xsalada.png' },
    { name: 'X-Bacon', price: 34, vegan: false, src: '../desafios/assets.jpeg/xbacon.png' },
    { name: 'X-Bacon Egg', price: 39, vegan: false, src: '../desafios/assets.jpeg/bacon-egg.png' },
    { name: 'Monstruoso', price: 50, vegan: false, src: '../desafios/assets.jpeg/monstruoso.png' },
    { name: 'Big Vegano', price: 55, vegan: true, src: '../desafios/assets.jpeg/xvegan.png' },
    { name: 'X-Vegan', price: 45, vegan: true, src: '../desafios/assets.jpeg/monstruoso-vegan.png' },

]
*/
/* botao mostrar tudo 
variavel let newlist  se ficar em cima do addeventlistener, os cardapios se multiplica no site  */

/* const buttonmostratudo = document.querySelector('.mostra-tudo') 
const list = document.querySelector('ul')
buttonmostratudo.addEventListener('click', function buttonmostratudo() {
    let newlist = ''
    menuopcoes.forEach(item => {
        newlist += ` 
        <li>
            <img src= ${item.src} height='188.67px';>
            <p>${item.name}</p>
            <p class="item-price"> ${(item.price).toFixed(2)}</p>
        </li>
    `
    })
    list.innerHTML = newlist
    console.log(newlist);
})

//desconto em todos os produto usando map 

const map = document.querySelector('.map-button')
const lista = document.querySelector('ul')
map.addEventListener('click', function desconto() {
    let nlist = ''
    menuopcoes.map(item => {

        nlist += `
            <li>
            <img src= ${item.src} height='188.67px';>
            <p>${item.name}</p>
            <p class="item-price"> ${(item.price - (item.price / 10)).toFixed(2)}</p> 
        </li>
    ` //SUBTRAÇÃO DENTRO DA STRING PRECISA ESTA DENTRO DE () SE NAO REPETE A SUBTRAÇÃI TODA VEZ QUE CLICAR NO BOTAO 
    })
    lista.innerHTML = nlist
    console.log(nlist);
})


//valor total dos produtos reduce  

const somatudo = document.querySelector('.somatudo')
const listas = document.querySelector('ul')
somatudo.addEventListener('click', function somatudo() {
    const total = menuopcoes.reduce((acumulador, valoratual) => {
        let valor = valoratual.price
        return acumulador + valor

    }, 0)
    listas.innerHTML = `...
        <li>
            <p>  O valor total é de : </p>
            <p class="item-price"> ${(total).toFixed(2)} </p>
        </li>
            `
    console.log(total)

})

//filter 
const buttonfiltrar = document.querySelector('.filtrar')
const listasv = document.querySelector('ul')
buttonfiltrar.addEventListener('click', function filtrar() {
    let vegan = ''
    const filtro = menuopcoes.filter(item => {
        if (item.vegan === true) {
            vegan += `
            <li>
            <img src= ${item.src} height='188.67px';>
            <p>${item.name}</p>
            <p class="item-price"> ${(item.price).toFixed(2)}</p> 
            </li>`
        }
        listasv.innerHTML = vegan

    })
})
*/
/* 
----------------------------------------------------------------
 CORREÇÃO AULA 
 --------------------------------------------------------------- */



const list = document.querySelector('ul')
const mostratudo = document.querySelector('.mostra-tudo')
const mapbutton = document.querySelector('.map-button')
const valortotal = document.querySelector('.somatudo')
const filtrar = document.querySelector('.filtrar')


mostratudo.addEventListener('click', () => mostrartudo(menuopcoes))
mapbutton.addEventListener('click', desconto)
valortotal.addEventListener('click', somatudo)
filtrar.addEventListener('click', filter)
// forach - é pra trocar as informação dentro da array percorrida
//  por isso nao foi criado uma const para o menuopçoes . 
// lenbrete - LET MYLIST tem que esta dentro da função, por que fora da função quando abre o navegador,
//  sempre que for clicado vai dobre os itens, porisso que tem que esta dentro da função  
function valorreal( value) {
    const real = value.toLocaleString( 'pt-BR',
        {
            style: 'currency',
            currency: 'BRL'
        })
    return real
}


function mostrartudo(produtsarray) {
    let mylist = ''
    produtsarray.forEach((produtc) => {
        mylist += `
        <li>
            <img src=${produtc.src} height='188.67px'; alt="hamburger menu" >
            <p>${produtc.name}</p>
            <p class="item-price">R$ ${valorreal(produtc.price)}</p>
        </li>
        `

    })
    list.innerHTML = mylist


}

function desconto() {
    const newlist = menuopcoes.map((produtc) => ({
        ...produtc,
        price: produtc.price * 0.9,
    }))
    mostrartudo(newlist)
}


function somatudo() {
    const total = menuopcoes.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML = `
     <li style="position: relative; left: 230px; font-size: 1.5em; font-weight: bold;">
      <p style="color: white;">O valor total é: </p>
         <p class="item-price">  R$ ${valorreal(total)}</p> 
     </li>`
}

function filter() {
    const veganlist = menuopcoes.filter((product) => product.vegan)
    mostrartudo(veganlist)

}




/* para nao repedir uma função novamente é possivel fazer com que a primeira funtion()
receba as informaçôes de uma nova função , enviando informaçoes para a funçao desejada 

Na funçao 'A' que ira recebera a function "B" voce vai adicionar uma variavel dentro da funçao 
ex funtion(produtcarray) e o nome adicionado dentro dos parenteses().
tem que estar no lugar da array original,trocando isso-->  ex (produtcarray)--> menuopcoao.map para 
produtcarray.map isso na função "A"

Na função "B" nao tera alteração sobre o que voce ja comandou ja existente.

Mas no mostratudo.addEventListener conectado com a function "A"  tera que adicionar uma
arronfucntion( ()=> ) dentro do addEventListener apos o click, ('click', ()=> mostrartudo) ex:
normalmente nao tem os parenteses mais como estafazendo outra fucao receber tem que ficar 
assim  ('click', ()=> mostrartudo(menuopcoes)) dentro dos parenteses adicionar o nome da array
 original para que a função "A" funcione normalmente. 

 se nao fizer isso, nao vai funcionar a função "A" . */



