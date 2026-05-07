
// site de emoji 
// https://www.quackit.com/html/html_editors/scratchpad/?app=charset_ref&hexadecimal=270B&decimal=9995&unicodeName=RAISED_HAND



const result = document.querySelector('#resultado')
const pointhuman = document.querySelector('#meuponto')
const pointmachine = document.querySelector('#pcponto')
const img = document.querySelector('#img')

let mypoint = 0
let machinepoint = 0

const playhuman = (humanchoice) => {
    playthegame(humanchoice, playmachine());

}
const playmachine = (machinechoice) => {

    const choice = ['papel', 'pedra', 'tesoura']
    const randomchoice = Math.floor(Math.random() * 3)
    return choice[randomchoice];
    
}
const playthegame = (human, machine) => {
    console.log('humano: ' + human, 'maquina: ' + machine);
    if (human === machine) {
        result.innerHTML = "você empatou!"
        console.log('voce empatou ')
    }

    else if ((
        human === 'papel' && machine === 'pedra' ||
        human === 'pedra' && machine === 'tesoura' ||
        human === 'tesoura' && machine === 'papel')
    ) {
        mypoint++
        result.innerHTML = "você ganhou!"
        pointhuman.innerHTML = mypoint

        console.log('você ganhou')
    }

    else {
        machinepoint++
        result.innerHTML = "você perdeu!"
        pointmachine.innerHTML = machinepoint
        console.log('voce perdeu')

    }

}
