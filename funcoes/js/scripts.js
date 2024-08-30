function somar (){
    const n1 = document.querySelector(".n1").value
    const n2 = document.querySelector(".n2").value

    const resultado = parseFloat(n1) + parseFloat(n2)
    document.querySelector(".resultado").innerHTML = resultado
}

function limpar (){
    document.querySelector(".resultado").innerHTML  = " "
}