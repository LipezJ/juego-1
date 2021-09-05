"use strict"

var move1 = 0
var move2 = 0
var event 
var key
var stilo 
var Maxwi
var Maxhe

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
    if (key == 40) {

        if (move2 < Maxhe) {

            move2 = move2 + maxw  
            stilo = move2.toString() + "px"
            document.getElementById('player').style.marginTop = stilo
            
        }

    }
    if (key == 38) {

        if (move2 > 1) {

            move2 = move2 - maxw  
            stilo = move2.toString() + "px"
            document.getElementById('player').style.marginTop = stilo

        }else{
            document.getElementById('player').style.marginTop = "0px"
        }

    }
}