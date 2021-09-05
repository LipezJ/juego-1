"use strict"

var move1 = 0
var move2 = 0
var event 
var key
var stilo 

var Maxwi

function move(event){

    key = event.keycode || event.which

    if (key == 39) {
    
        move1 = move1 + maxw 
        stilo = move1.toString() + "px"
        document.getElementById('player').style.marginLeft = stilo
        
    }
    if (key == 37) {
        move1 = move1 - maxw  
        stilo = move1.toString() + "px"
        document.getElementById('player').style.marginLeft = stilo
        }
    if (key == 40) {
        move2 = move2 + maxw  
        stilo = move2.toString() + "px"
        document.getElementById('player').style.marginTop = stilo
        
    }
    if (key == 38) {
        move2 = move2 - maxw  
        stilo = move2.toString() + "px"
        document.getElementById('player').style.marginTop = stilo
    }
}