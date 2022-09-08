const input = document.getElementById("mudaCor")
const botao = document.getElementById("botao")
const body = document.body

const geraCor = function() {
    body.style.background = `#${input.value}`
}

botao.addEventListener("click", geraCor)
