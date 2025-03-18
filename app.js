let amigos = [];

// Agrega un nuevo amigo si el campo no está vacío
// Crea una Alerta si el campo está vacio
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombreAmigo = input.value.trim();

  if (!nombreAmigo) {
    alert("Por favor, escriba un nombre");
    return;
  }

  amigos.push(nombreAmigo);
  input.value = "";
  mostrarListaAmigos();
}

// Muestra la lista de amigos a sortear en el DOM
function mostrarListaAmigos() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

// Sortea un amigo de la lista y lo muestra en el DOM con un mensaje adicional
// Crea una Alerta si sortea antes de generar una lista de amigos
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor, escriba un nombre antes de sortear");
    return;
  }

  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.querySelector("#resultado").textContent = 
    `El amigo secreto sorteado es: ${amigoSorteado}`;
}

// Evento para agregar amigo con la tecla Enter
document.getElementById("amigo").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});
