const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("nombreAmigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        mostrarMensaje("Por favor, inserte un nombre.", "error");
        return;
    }
    
    amigos.push(nombre);
    input.value = "";
    actualizarLista();
    mostrarMensaje("Nombre agregado correctamente.", "success");
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarMensaje("No hay amigos para sortear.", "error");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    
    document.getElementById("resultado").innerHTML = `🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎊`;
    mostrarAnimacion();
}

function mostrarMensaje(mensaje, tipo) {
    const mensajeDiv = document.getElementById("mensaje");
    mensajeDiv.textContent = mensaje;
    mensajeDiv.className = tipo;
    mensajeDiv.style.display = "block";
    setTimeout(() => { mensajeDiv.style.display = "none"; }, 3000);
}

function mostrarAnimacion() {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.style.animation = "fadeIn 1s";
    setTimeout(() => { resultadoDiv.style.animation = ""; }, 1000);
}

document.getElementById("btnAgregar").addEventListener("click", agregarAmigo);
document.getElementById("btnSortear").addEventListener("click", sortearAmigo);
