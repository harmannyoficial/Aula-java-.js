
const button = document.querySelector(".button")
button.addEventListener("click", function () {
    const min = Math.ceil(document.querySelector(".input").value)
    const max = Math.floor (document.querySelector(".input2").value)
    const result = Math.floor(Math.random() * (max - min + 1)) + min; 
    
    if (min >= max)
        alert('digite um numero menor que 20')
    else 
    alert(result)
})

       