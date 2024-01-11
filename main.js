function mostrarOpciones() {
    let opciones1 = "\n1. Ingresa tus datos personales\n2. Contame un poco de vos\n3. Salir";
    let elegir = prompt(opciones1);

    switch (elegir) {
        case "1":
            formularioIngreso();
            break;
        case "2":
            formularioIngreso2();
            break;
        case "3":
            alert("Saliendo del simulador de datos.");
            break;
        default:
            alert("Opcion invalida, por favor intenta denuevo");
            mostrarOpciones();
    }
}

mostrarOpciones();
function formularioIngreso() {
    let nombre = prompt("Como te llamas?:");
    let edad = prompt("Cuantas vueltas al sol tenes?:");
    let email = prompt("Por favor dejame un email:");

    console.log(nombre, edad, email);
    if ((nombre !== "" && nombre !== Number) && (edad !== "" && edad !== String) && (email !== "")) {
        alert("Aqui estan tus datos =) :\nNombre: " + nombre + "\nEdad: " + edad + "\nEmail: " + email);
        mostrarOpciones();
    }
    else {
        alert("Error, por favor ingresa alguno de los datos que te faltan");
        formularioIngreso();
    }
}

function formularioIngreso2() {
    let entretenimiento = prompt("De estas opciones, a cual le dedicas mas horas de ocio: \nCine \nSeries \nAnime \nGaming \nMusica");
    if (
        entretenimiento !== "" && 
        entretenimiento === "cine" || 
        entretenimiento === "musica" || 
        entretenimiento === "series" || 
        entretenimiento === "anime" || 
        entretenimiento === "gaming")
    {
        let deporte = prompt("Cual es tu deporte favorito?:");
        if(deporte=="futbol"){
            alert("Ahhhh Futbolero saliste ehhh")
        }
        let estudioTrabajo = prompt("Estas estudiando o trabajando actualmente, puede ser nada tambien:");
            if(
                estudioTrabajo!=="estudio"&&
                estudioTrabajo!=="trabajando"&&
                estudioTrabajo!=="trabajo"&& 
                estudioTrabajo!=="estudiando"){
                alert("Es hora de pensar en hacer algo con ese cuerpo")
            }
        alert("Por lo que me contaste, estos son tus gustos :\nLo que mas horas metes cuando estas libre: " + entretenimiento + "\nTe gusta mucho el: " + deporte + "\nActualmente estas ocupado en: " + estudioTrabajo);
        console.log(entretenimiento, deporte, estudioTrabajo)
    }
    else{
        alert("Tu hobby no es el correcto, debes ingresar una de las opciones dadas.");
        formularioIngreso2();
    }
    
    
}



