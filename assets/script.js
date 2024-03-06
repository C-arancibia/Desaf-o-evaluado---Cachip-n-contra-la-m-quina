// Función para obtener la jugada de la máquina
function obtenerJugadaMaquina() {
    var numAleatorio = Math.floor(Math.random() * 3); // Generar un número aleatorio entre 0 y 2

    switch (numAleatorio) {
        case 0:
            return "piedra";
        case 1:
            return "papel";
        case 2:
            return "tijera";
    }
}

// Función principal del juego
function jugarCachipun(veces) {
    var contadorGanadas = 0;
    var contadorPerdidas = 0;
    var contadorEmpates = 0;

    for (var i = 0; i < veces; i++) {
        var jugadaUsuario = prompt("Ingrese su jugada (Piedra, Papel o Tijera):").trim().toLowerCase();

        // Validar la jugada del usuario
        if (jugadaUsuario !== "piedra" && jugadaUsuario !== "papel" && jugadaUsuario !== "tijera") {
            alert("Por favor, ingrese una jugada válida.");
            i--; // Restar una unidad al contador de iteración para repetir el mismo juego
            continue;
        }

        var jugadaMaquina = obtenerJugadaMaquina();
        var resultado;

        if (
            (jugadaUsuario === "piedra" && jugadaMaquina === "tijera") ||
            (jugadaUsuario === "papel" && jugadaMaquina === "piedra") ||
            (jugadaUsuario === "tijera" && jugadaMaquina === "papel")
        ) {
            resultado = "Usuario";
            contadorGanadas++;
        } else if (
            (jugadaUsuario === "piedra" && jugadaMaquina === "papel") ||
            (jugadaUsuario === "papel" && jugadaMaquina === "tijera") ||
            (jugadaUsuario === "tijera" && jugadaMaquina === "piedra")
        ) {
            resultado = "Máquina";
            contadorPerdidas++;
        } else {
            resultado = "Empate";
            contadorEmpates++;
        }

        switch (resultado) {
            case "Usuario":
                alert("¡Felicidades! ¡Has ganado! Tu jugada: " + jugadaUsuario + ". Jugada de la máquina: " + jugadaMaquina + ".");
                break;
            case "Máquina":
                alert("Lo siento, has perdido. Tu jugada: " + jugadaUsuario + ". Jugada de la máquina: " + jugadaMaquina + ".");
                break;
            case "Empate":
                alert("¡Es un empate! Ambos eligieron " + jugadaUsuario + ".");
                break;
        }
    }

    alert("Resumen:\nGanadas: " + contadorGanadas + "\nPerdidas: " + contadorPerdidas + "\nEmpates: " + contadorEmpates);
}

// Solicitar al usuario las veces que desea jugar
var vecesJugar = parseInt(prompt("¿Cuántas veces desea jugar?"));

// Validar la entrada del usuario
if (isNaN(vecesJugar) || vecesJugar <= 0) {
    alert("Por favor, ingrese un número válido mayor que cero.");
} else {
    // Llamar a la función principal del juego
    jugarCachipun(vecesJugar);
}










