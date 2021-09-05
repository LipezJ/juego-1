"use strcit"

var screen1 
var screen2 
var cte 
var tre
var ert
var ect
var maxw 
var maxw1
var maxh 
var maxh1

/* Obtencion de datos de la pantalla */

screen1 = window.screen.availHeight
screen2 = window.screen.availWidth
console.log(screen1, " ", screen2)

/* Conversion de datos para usar en el codigo */

    /* Divisiones de la pantalla */
maxw = screen2 / 7 
maxw1 = maxw.toString() + "px"

    /* Division de cielo y tierra */

if (screen2 >= 500) {
    cte = maxw * 7
    tre = (screen1 - cte) + maxw
    cte = cte - maxw
    console.log("xd")
}

if (screen2 >= 300 && screen2 <= 500) {
    cte = maxw * 8
    tre = (screen1 - cte) 
    cte = cte 
    console.log("xd2")
}

if (screen1 >= 600) {

    cte = maxw * 6
    tre = (screen1 - cte) + maxw
    cte = cte - maxw
    console.log("xd3")

}

if (screen2 >= 500) {

    cte = maxw * 6
    tre = (screen1 - cte) + maxw
    cte = cte - maxw
    console.log("xd4")
}

if (screen2 < 300) {

    cte = maxw * 13
    tre = (screen1 - cte) + maxw
    cte = cte - maxw
    console.log("xd5")

}

if (screen2 >= 360) {

    cte = maxw * 8
    tre = (screen1 - cte) + maxw
    cte = cte - maxw
    console.log("xd6")

}

if (screen1 > 665 && screen2 < 400) {
    cte = maxw * 9
    tre = (screen1 - cte) + maxw
    cte = cte - maxw
    console.log("xd7")
}

if (screen2 > 720 && screen1 > 1000) {

    cte = maxw * 10
    tre = (screen1 - cte) + (maxw * 2)
    cte = cte - (maxw * 2)
    console.log("xd8")

}

if (screen2 > 800) {
    cte = maxw * 9
    tre = (screen1 - cte) + (maxw * 3)
    cte = cte - (maxw * 3)
    console.log("xd9")
}

if (screen2 > 500 && screen1 > 700 && screen1 < 1000) {
    cte = maxw * 7
    tre = (screen1 - cte) + maxw
    cte = cte - maxw
    console.log("xd10")
}

cte = cte.toString() + "px"
tre = tre.toString() + "px"


/* Funcion para cambiar los estilos segun los datos obtenidos */

function sty(){

    document.getElementById('player').style.height = maxw1
    document.getElementById('player').style.width = maxw1

    document.getElementById("cielo").style.height = cte
    document.getElementById("piso").style.height = tre

}

sty()