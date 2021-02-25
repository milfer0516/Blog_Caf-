/* console.log("Hola mundo "); */

const formulario = document.querySelector(".formulario");
const inputNombre = document.querySelector("#nombre");
const inputEmail = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

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
        mostrarError("Todos los campos son obligatorios");
        return;
    } else {
        mensajeEnviado("Datos enviados exitosamente");
    }

    /* Enviar formulario */

    /* console.log("Enviando formulario"); */
});

/* Capturando los datos del formulario */

inputNombre.addEventListener("input", capturaDatos);
inputEmail.addEventListener("input", capturaDatos);
mensaje.addEventListener("input", capturaDatos);

// Esta funcion es donde se captura los datos que se escriben en el
// en el formulario
function capturaDatos(event) {
    /* event.preventDefault(); */
    /* console.log(event.target.value); */
    datos[event.target.id] = event.target.value;
    /* console.log(datos); */
}
// Funcion que muestra el error del formulario
function mostrarError(mensaje) {
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");

    formulario.appendChild(error);

    setTimeout(() => {
        error.remove();
    }, 4000);

    console.log(error);
}

//Funcion que envia los datos del formulario

function mensajeEnviado(mensaje) {
    const envioDatos = document.createElement("P");
    envioDatos.textContent = mensaje;
    envioDatos.classList.add("enviado");

    formulario.appendChild(envioDatos);

    setTimeout(() => {
        envioDatos.remove();
    }, 4000);

    console.log(mensaje);
}
