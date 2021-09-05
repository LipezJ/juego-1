"use strcit"

var screen1 
var screen2 
var cte 
var tre
var ert
var ect
var maxw 
var maxw1 

screen1 = window.screen.availHeight
screen2 = window.screen.availWidth
console.log(screen1, " ", screen2)

cte = (screen1/100)*60
tre = (screen1/100)*40

cte = cte.toString() + "px"
tre = tre.toString() + "px"

etc = navigator.userAgent
console.log(etc)

maxw = screen2 / 7 
maxw1 = maxw.toString() + "px"

function sty(){

    document.getElementById('player').style.height = maxw1
    document.getElementById('player').style.width = maxw1

    document.getElementById("cielo").style.height = cte
    document.getElementById("piso").style.height = tre

}

sty()