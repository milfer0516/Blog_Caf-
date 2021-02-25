/* console.log("Hola mundo "); */

const formulario = document.querySelector(".formulario");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

inputNombre.addEventListener("input", capturaDatos);
inputEmail.addEventListener("input", capturaDatos);
mensaje.addEventListener("input", capturaDatos);

const datos = {
    nombre: "",
    email: "",
    mensaje: "",
};
/* Evento del boton Submit=(Enviar) */
formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    /* Validar formulario */

    const { nombre, email, mensaje } = datos;
    if (nombre === "" || email === "" || mensaje === "") {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    }
    /* Enviar formulario */
    mostrarAlerta("Datos enviados con exito");
    /* console.log("Enviando formulario"); */
});

/* Capturando los datos del formulario */

// Esta funcion es donde se captura los datos que se escriben en el
// en el formulario
function capturaDatos(event) {
    /* event.preventDefault(); */
    /* console.log(event.target.value); */
    datos[event.target.id] = event.target.value;
    /* console.log(datos); */
}
// Mostrar alerta

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    if (error) {
        alerta.classList.add("error");
    } else {
        alerta.classList.add("enviado");
    }

    formulario.appendChild(alerta);

    // Aca remueve la alerta
    setTimeout(() => {
        alerta.remove();
    }, 4000);
}
// Funcion que muestra el error del formulario
// function mostrarError(mensaje) {
//     formulario.appendChild(error);

//     console.log(error);
// }

// //Funcion que envia los datos del formulario

// function mensajeEnviado(mensaje) {
//     const envioDatos = document.createElement("P");
//     envioDatos.textContent = mensaje;
//     envioDatos.classList.add("enviado");

//     formulario.appendChild(envioDatos);

//     setTimeout(() => {
//         envioDatos.remove();
//     }, 4000);

//     console.log(mensaje);
// }
