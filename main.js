

document.getElementById("formularioContacto").addEventListener("submit", guardarFormulario);

function guardarFormulario() {
    let nombre = document.getElementById("nombre").value.toLowerCase();
    let email = document.getElementById("email").value.toLowerCase();
    let telefono = document.getElementById("telefono").value.toLowerCase();
    let direccion = document.getElementById("direccion").value.toLowerCase();
    let mensaje = document.getElementById("mensaje").value.toLowerCase();

    // Crear la función constructora para el contacto
    function Contacto(nombre, email, telefono, direccion, mensaje, fecha) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.mensaje = mensaje;
        this.fecha = new Date(fecha);
    }

    let contacto = new Contacto(nombre, email, telefono, direccion, mensaje, new Date());

    let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];

    contactosGuardados.push(contacto);

    localStorage.setItem("contactos", JSON.stringify(contactosGuardados));

    document.getElementById('formularioContacto').reset();
}

document.getElementById('recuperarContactoForm').addEventListener('submit', recuperar);

function recuperar(event) {
    event.preventDefault();

    let nombreBuscar = document.getElementById("nombreBuscar").value.toLowerCase();

    let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];

    let contactoEncontrado = contactosGuardados.find(contacto => contacto.nombre.toLowerCase() === nombreBuscar);

    if (contactoEncontrado) {
        document.getElementById('resultadoContacto').value =
            `
        Nombre: ${contactoEncontrado.nombre}
        Email: ${contactoEncontrado.email}
        Teléfono: ${contactoEncontrado.telefono}
        Dirección: ${contactoEncontrado.direccion}
        Mensaje: ${contactoEncontrado.mensaje}
        Fecha: ${contactoEncontrado.fecha}
    `;
    } else {
        document.getElementById('resultadoContacto').value = "No se encontró ningún contacto con ese nombre.";
    }
}

document.getElementById("mostrarContactos").addEventListener("click", mostrarTodosContactos);

function mostrarTodosContactos() {
    let contactosGuardados = JSON.parse(localStorage.getItem("contactos")) || [];

    let listaContactos = document.getElementById("listaContactos");
    listaContactos.value = "";

    contactosGuardados.forEach(contacto => {
        listaContactos.value += `
            Nombre: ${contacto.nombre}
            Email: ${contacto.email}
            Teléfono: ${contacto.telefono}
            Dirección: ${contacto.direccion}
            Mensaje: ${contacto.mensaje}
            Fecha: ${contacto.fecha}
            
        `;
    });
}