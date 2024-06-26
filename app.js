let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `has acertado al numero en ${intentos}, ${intentos === 1 ? "intento" : "intentos"}, ¡Felicidades!`);
        document.getElementById('reiniciar').removeAttribute('disabled')

    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El número es mayor, sigue dandole');
        } else {
            asignarTextoElemento('p', 'El número es menor, sigue dandole');
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {

        //si el numero sorteado esta incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
};

function CondicionesIniciales() {
    asignarTextoElemento('h1', 'Bienvenido al Juego');
    asignarTextoElemento('p', `ingresa un número del 1 al ${numeroMaximo}`)
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

function reiniciarJuego() {
    limpiarCaja();
    CondicionesIniciales();
}


CondicionesIniciales();
