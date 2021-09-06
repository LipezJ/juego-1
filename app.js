"use strict"

var move1 = 0
var move2 = 0
var event 
var key
var stilo 
var Maxwi
var Maxhe
var salto
var salto11
var salto22
var salto33
var salto15
var salto25
var salto35
var caida1
var caida15
var caida2
var caida25
var caida3
var caida35
var Csalto

/* Funcion de movimientos */

function move(event){

    /* Obtencion de datos de la pantalla */

    key = event.keycode || event.which

        /* Maximo de pantalla: width */
    Maxwi = maxw * 5.5
    Maxwi = Maxwi.toFixed(4)
    Maxwi = parseFloat(Maxwi)

    Maxhe = document.getElementById("cielo").style.height
    Maxhe = parseFloat(Maxhe) - maxw

        /* Maximo de pantalla: Heigth */
    

    /* Moviientos por teclas */

    if (key == 39) {
    
        if (move1 < Maxwi) {

            move1 = move1 + maxw
            stilo = move1.toString() + "px"
            document.getElementById('player').style.marginLeft = stilo

        } 

    }
    if (key == 37) {

        if (move1 > 1) {

            move1 = move1 - maxw 
            stilo = move1.toString() + "px"
            document.getElementById('player').style.marginLeft = stilo

        } else {
            document.getElementById('player').style.marginLeft = "0px"
        }

    }

    /* Salto */

    Csalto = 7

    function salto1() {

        salto11 = screen2 / Csalto
        salto11 = salto11 / 3
        salto15 = maxw * 5
        salto15 = salto15 + salto11
        //console.log("1", salto15)
        salto15 = salto15.toString() + "px"
        document.getElementById('player').style.marginTop = salto15

    }

    function salto2() {
    
        salto22 = screen2 / Csalto
        salto22 = salto22 / 3
        salto22 = salto22 * 3
        salto25 = maxw * 5
        salto25 = salto25 + salto22
        //console.log("2", salto25)
        salto25 = salto25.toString() + "px"
        document.getElementById('player').style.marginTop = salto25

    }
    function salto3() {

        salto33 = screen2 / Csalto
        salto33 = salto33 / 2.5
        salto33 = salto33 * 5
        salto35 = maxw * 5
        salto35 = salto35 + salto33
        //console.log("3", salto35)
        salto35 = salto35.toString() + "px"
        document.getElementById('player').style.marginTop = salto35

    }

    /* Caida */

    function caidao() {
        
        caida1 = screen2 / Csalto
        caida1 = caida1 / 1.5
        caida15 = maxw * 5
        caida15 = caida15 + caida1
        //console.log("1c", caida15)
        caida15 = caida15.toString() + "px"
        document.getElementById('player').style.marginTop = caida15
        
    }

    function caidai() {

        caida2 = caida1 * 2
        caida25 = maxw * 5
        caida25 = caida25 + caida2
        //console.log("2c", caida25)
        caida25 = caida25.toString() + "px"
        document.getElementById('player').style.marginTop = caida25
        
    }
    function caidau() {
        
        caida3 = caida1 * 3
        caida35 = maxw * 5
        caida35 = caida35 + caida3
        //console.log("3c", caida35)
        caida35 = caida35.toString() + "px"
        document.getElementById('player').style.marginTop = caida35

    }
    
    move2 = document.getElementById('player').style.marginTop

    /* Invocacion */

    if (key == 38) {
     
        setTimeout(salto3, 50)
        setTimeout(salto2, 100)
        setTimeout(salto1, 150)

        setTimeout(caidao, 300)
        setTimeout(caidai, 350)
        setTimeout(caidau, 400)
    }
    
    if (key == 38) {
        
    }
}