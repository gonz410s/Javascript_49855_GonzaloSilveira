function mostrarOpciones() {
    let opciones1 = "\n1. Ingresa tus datos personales\n2. Contame un poco de vos\n3. Jugamos una adivinanza?\n4. Salir";
    let elegir = prompt(opciones1);

    switch (elegir) {
        case "1":
            formularioIngreso();
            break;
        case "2":
            formularioIngreso2();
            break;
        case "3":
            juegoAdivinanza();
            break;
        case "4":
            alert("Saliendo del simulador de datos.");
            break;
        default:
            alert("Opcion invalida, por favor intenta denuevo");
            mostrarOpciones();
    }
}

mostrarOpciones();

function formularioIngreso() {
    let nombre = prompt("Como te llamas?:").toLowerCase().toLowerCase();
    if(!isNaN(nombre)){
        alert("Los nombres no llevan numeros enteros")
        formularioIngreso()
    }
    let edad = prompt("Cuantas vueltas al sol tenes?:").toLowerCase();
    if (edad >= 40){
        alert("Tas arriba de los 40, peinando canas ya")
    }
    else if (edad <=39){
        alert("Aprovecha esos 30 y algo que se te viene la noche")
    }
    else if (edad <=20){
        alert("Como estas pende, portate bien en mi simulador ehhhh!")
    }
    let email = prompt("Por favor dejame un email:").toLowerCase();
    let tarjeta = prompt("Poneme el numero de tu tarjeta de credito y el CVC:").toLowerCase();
    if(!isNaN(tarjeta)){
        alert("Estas mal, no sabes lo que es el Phising?, cuidate abuela y no hagas estas cosas")}
        else {
            alert("Muy bien, esos datos no se ponen en cualquier lado");
        }
    alert("Aqui estan tus datos =) :\nNombre: " + nombre + "\nEdad: " + edad + "\nEmail: " + email);

    console.log(nombre, edad, email);
    mostrarOpciones();
        }


function formularioIngreso2() {
    let entretenimiento = prompt("De estas opciones, a cual le dedicas mas horas de ocio: \nCine \nSeries \nAnime \nGaming \nMusica").toLowerCase();
    if (
        entretenimiento !== "" && 
        entretenimiento === "cine" || 
        entretenimiento === "musica" || 
        entretenimiento === "series" || 
        entretenimiento === "anime" || 
        entretenimiento === "gaming")
    {}
    else{
        alert("Tu hobby no es el correcto, debes ingresar una de las opciones dadas.");
        formularioIngreso2();
    }
    
        let deporte = prompt("Cual es tu deporte favorito?:").toLowerCase();
        if(deporte=="futbol"){
            alert("Ahhhh Futbolero saliste ehhh")
        }
        let estudioTrabajo = prompt("Estas estudiando o trabajando actualmente, puede ser nada tambien:").toLowerCase();
            if(
                estudioTrabajo!=="estudio"&&
                estudioTrabajo!=="trabajando"&&
                estudioTrabajo!=="trabajo"&& 
                estudioTrabajo!=="estudiando"){
                alert("Es hora de pensar en hacer algo con ese cuerpo")
            }
        alert("Por lo que me contaste, estos son tus gustos :\nLo que mas horas metes cuando estas libre: " + entretenimiento + "\nTe gusta mucho el: " + deporte + "\nActualmente estas ocupad@ en: " + estudioTrabajo);
        
        console.log(entretenimiento, deporte, estudioTrabajo)
        mostrarOpciones();
    
}

function juegoAdivinanza(){
    let numeroRandom = Math.floor(Math.random()*10);
    let intentos;
    for (intentos=1; ;intentos++){
        let adivinanza = parseInt(prompt("Adivina el numero entre 0 y 10:"))
        if (isNaN(adivinanza)) {
            alert("La adivinanza es con numeros, no con letras.");
        }
        else {
            if (adivinanza === numeroRandom){
                alert("Le pegaste, sos un mentalista!!!!");
                break;
            }
            else {
                alert("No es ese el numero, tenes un par de intentos mas")
            }
        }
    }
}