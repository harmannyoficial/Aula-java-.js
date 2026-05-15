/* para  modificar um objeto dentro do array criar um map 
para retornar um novo array com os objetos modificados 
aciona as informacoes que voce quer em uma nova array 


*/
const list = [
    { nome: 'joao', vip: true },
    { nome: 'maria', vip: false },
    { nome: 'pedro', vip: true },
    { nome: 'ana', vip: false }
]
const newList = list.map(user => {
    const newuser = {
        nome: user.nome,
        pulseira: user.vip ? 'black' : 'green'
    }
    return newuser
})
console.log(newList)

/* poderia criar com o if e else */

const newlist2 = list.map(user => {
    let pulseira
    if (pulseira === 'true') {
        pulseira = 'black'
    } else {
        pulseira = 'green'
    }
    const newuser = {
        nome: user.nome,
        pulseira: pulseira
    }

    return newuser

})

console.log(newlist2)


/* RESUMIDO E SIMPLIFICADO ECONOMIZANDO CODIGOS */
const newlist3 = list.map(user => {
    return {
        nome: user.nome,
        pulseira: user.vip ? 'black' : 'green'
    }
})
console.log(newlist3)



const studant = [
    { nome: 'joao', nota: 8 },
    { nome: 'maria', nota: 5 },
    { nome: 'pedro', nota: 9 }, 
    { nome: 'ana', nota: 6 },
    { nome: 'lucas', nota: 4 }
]
const newstudant =studant.map(alunos=>{
    return{
        nome: alunos.nome,
        status:alunos.nota  >5 ? 'aprovado' : 'reprovado'
    }
})  
console.log(newstudant)