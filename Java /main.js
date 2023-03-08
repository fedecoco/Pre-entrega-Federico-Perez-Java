
// Escribir simulador Java //

//Piedra, Papel o Tijera //


function aleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function eleccion(jugada){
 let resultado = ""
        if(jugada == 1) {
    resultado = "piedra"
} else if(jugada == 2) {
        resultado = "papel"
}   else if(jugada == 3) {
        resultado = "tijera"
}else {
       resultado = "Mal elegido"
    } 
return resultado
}

// 1 es piedra, 2 es papel , 3 es tijera//
// Obtjeto  + Array//

    const jugadores = { 
        jugador: 0, 
        mac: 0,
        triunfos: 0,
        perdidas: 0 }
    /*let jugador = 0
    let mac = 0
    let triunfos = 0
    let perdidas = 0 */

// cerrar el bucle//

while (jugadores.jugador < 3 && jugadores.perdidas < 3){

    jugadores.mac = aleatorio(1,3)
    jugadores.jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")

// alert("Elegiste " + jugador )

    alert("Tu eliges: " + eleccion(jugadores.jugador))
    alert ("mac elige: " + eleccion(jugadores.mac)) 

// COMBATE//

    if(jugadores.mac == jugadores.jugador){ 
        alert("EMPATE")}

         else if (jugadores.jugador == 1 && jugadores.mac == 3) {
         alert ("GANASTE")

    jugadores.triunfos = jugadores.triunfos + 1 }

         else if (jugadores.jugador == 2 && jugadores.mac == 1 ){
         alert("GANASTE")

    jugadores.triunfos = jugadores.triunfos + 1 }

        else if (jugadores.jugador == 3 && jugadores.mac == 2 ){
        alert("GANASTE")

    jugadores.triunfos = jugadores.triunfos + 1 }       
        else {
         alert("PERDISTE")
    jugadores.perdidas = jugadores.perdidas + 1 }

}
// alert("GANASTE " + jugadores.triunfos + " veces. Perdistes " + jugadores.perdidas + " veces.")

const resultado =["GANASTE " + jugadores.triunfos + " veces. Perdistes " + jugadores.perdidas + " veces."]
alert (resultado.join(""))

