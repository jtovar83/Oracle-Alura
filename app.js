let numeroSecreto = 0;
let intentos = 0;
let listaNumeroIntentado = [];
let numeroMaximo = 10;

function asignaTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
    console.log(numeroUsuario);
    
        if(numeroUsuario === numeroSecreto){
            asignaTextoElemento('p', `¡¡Felicitaciones, luego de ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}, lograste acertar!!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if (numeroUsuario < numeroSecreto){
                asignaTextoElemento('p', '¡El número Secreto es Mayor!');
            }else{
                asignaTextoElemento('p', '¡El número secreto es Menor!');
            }
            intentos++;
            limpiarInput();
        }
    return;
}

function limpiarInput() {
    document.querySelector('#numeroUsuario').value = '';
}


function generarNumeroAleatorio(){
   let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

   console.log(numeroGenerado);
   console.log(listaNumeroIntentado);
   //Si ya fueron sorteados todos los numeros aleatorios
   if (listaNumeroIntentado.length == numeroMaximo){
    asignaTextoElemento('p', '¡¡Lo sentimos, ya fueron sorteados la cantidad máxima de números!! ');
   } else {
        //Si el número generado está en la lista
        if (listaNumeroIntentado.includes(numeroGenerado)){
         //Genera uno nuevo
         return generarNumeroAleatorio();

        }else{
            //Si no está se agrega en la lista
         listaNumeroIntentado.push(numeroGenerado);
         return numeroGenerado;
        }

}
}

function condicionesIniciales() {
    asignaTextoElemento('h1', 'Hora del desafío');
    asignaTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;

}

function reiniciarJuego() {
    //Se limpia la caja
    limpiarInput();
    //Se inicializan valores
    condicionesIniciales();
    //deshabilitar botón de ingreso número
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
