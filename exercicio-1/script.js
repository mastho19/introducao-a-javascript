 const lampada = document.getElementById("lampada")
 const acende = document.getElementById("acende")
 const apaga = document.getElementById("apaga")

// acende.addEventListener("click", minhaFuncaoAcende)
// apaga.addEventListener("click",minhaFuncaoApaga)

// function minhaFuncaoAcende() {
//     lampada.src = "/imgs/lampOn.jpg"
// }

// function minhaFuncaoApaga() {
//     lampada.src = "/imgs/lampOff.jpg"
// }

if(acende.checked){
    lampada.src = "/imgs/lampOn.jpg"
}
