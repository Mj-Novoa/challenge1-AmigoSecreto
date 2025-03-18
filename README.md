
![Captura de pantalla 2025-03-18 031040](https://github.com/user-attachments/assets/9e568c1f-d3d2-45d0-95ec-8a09004d883e)

# Challenge de Alura LATAM ¨Amigo Secreto¨

Este es un proyecto en JavaScript que permite agregar nombres de amigos a una lista y luego sortear aleatoriamente uno de ellos como "amigo secreto".

## 🔅Características
- Permite agregar nombres de amigos a una lista dinámica.
- Muestra automáticamente la lista actualizada en la interfaz de usuario.
- Función de sorteo aleatorio para seleccionar un "amigo secreto".
- Prevención de errores con alertas cuando:
  - Se intenta añadir un amigo con el campo vacío.
  - Se intenta sortear sin haber agregado amigos previamente.
- Admite la entrada de nombres mediante el botón de agregar o la tecla Enter.
- Interfaz sencilla y funcional basada en HTML, CSS y JavaScript.

## 🔅Interacción del Usuario

### **1. Agregar Amigos a la Lista**✅
- En la página web, habrá un campo de entrada donde el usuario podrá escribir los nombres de los amigos.
- Una vez ingresado un nombre, el usuario puede:
  - Presionar el botón **"Agregar"** para incluirlo en la lista.
  - De lo contrario presionar la tecla **Enter** para agregarlo automáticamente.
- Si el usuario intenta agregar un nombre vacío, aparecerá una **alerta** indicando que debe ingresar un nombre válido.


![ezgif-420408901878e4](https://github.com/user-attachments/assets/af91d4c6-a70b-4d0f-b38e-f47c29fea13e)




### **2. Visualizar la Lista de Amigos**📄

- A medida que los nombres se agregan, la lista se actualizará automáticamente en la interfaz, mostrando los nombres ingresados en forma de una lista ordenada.


![ezgif-4f1dd1a197ff32](https://github.com/user-attachments/assets/3c88bdae-f329-4b04-b19b-b7dd7728a9de)



### **3. Realizar el Sorteo del Amigo Secreto**🎲
- Una vez que haya al menos un nombre en la lista, el usuario podrá presionar el botón **"Sortear Amigo Secreto"**.
- El sistema seleccionará aleatoriamente un nombre de la lista y lo mostrará en pantalla con el mensaje:  
  **"El amigo secreto sorteado es: [nombre del amigo]"**.


![ezgif-4f95960dcdb58a](https://github.com/user-attachments/assets/88c480ea-4072-41fd-90b2-b3d54103a078)


  
- Si el usuario intenta realizar el sorteo sin haber agregado nombres, se mostrará una **alerta** pidiéndole que agregue al menos un nombre antes de sortear.

![ezgif-4b25577126c5fc](https://github.com/user-attachments/assets/af338d27-7748-4e83-a3b7-460de148b08c)



### **4. Reintentar el Sorteo**♻️
- El usuario puede seguir agregando más amigos a la lista y repetir el sorteo cuantas veces quiera.
- Si desea comenzar de nuevo, puede simplemente recargar la página para limpiar la lista.

Este flujo de interacción hace que el uso de la plataforma sea **intuitivo y sencillo**, asegurando que el usuario siempre reciba retroalimentación sobre sus acciones mediante mensajes en la pantalla y alertas emergentes. 🚀



## 🔅Código Principal
El código principal de este proyecto está en `script.js` y funciona de la siguiente manera:

```javascript
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
```


---
¡Disfruta el código y diviértete con el sorteo del amigo secreto! 🎉
