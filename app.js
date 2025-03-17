// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo").value;//captura el valor del input
    if (input !== "") { 
        nombreAmigos.push(input); // guarda el valor en el arreglo
        console.log(nombreAmigos);
        document.getElementById("listaAmigos").textContent = input; //muestra el texto 
        document.getElementById("amigo").value = ""; // Limpiar el input después de capturar
        actualizarLista();
        } else {
            alert("Por favor, inserte un nombre.");
    return;
        }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtener el <ul> de la lista
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < nombreAmigos.length; i++) {
        lista.innerHTML += `<li>${nombreAmigos[i]}</li>`; // Agregar cada amigo como un <li>
    }
    
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado"); // Obtener el elemento donde se mostrará el resultado

    if (nombreAmigos.length === 0) {
        resultado.innerHTML = "No hay amigos en la lista para sortear."; // Validación si no hay nombres
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length); // Generar índice aleatorio
    let amigoSorteado = nombreAmigos[indiceAleatorio]; // Obtener el nombre del amigo sorteado

    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`; // Mostrar resultado en pantalla
}

