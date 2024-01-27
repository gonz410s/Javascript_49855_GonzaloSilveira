function mostrarOpciones() {
    let opciones1 = "\n1. Ingresa tus datos personales\n2. Contame un poco de vos\n3. Jugamos una adivinanza?\n4. Juego de Colores\n5. Tienda de Remeras\n6. Salir";
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
            juegoColores();
            break;
        case "5":
            tiendaRemeras();
            break;
        case "6":
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
    if (!isNaN(nombre)) {
        alert("Los nombres no llevan numeros enteros")
        formularioIngreso()
    }
    let edad = prompt("Cuantas vueltas al sol tenes?:").toLowerCase();
    if (edad >= 40) {
        alert("Tas arriba de los 40, peinando canas ya")
    }
    else if (edad <= 39) {
        alert("Aprovecha esos 30 y algo que se te viene la noche")
    }
    else if (edad <= 20) {
        alert("Como estas pende, portate bien en mi simulador ehhhh!")
    }
    let email = prompt("Por favor dejame un email:").toLowerCase();
    let tarjeta = prompt("Poneme el numero de tu tarjeta de credito y el CVC:").toLowerCase();
    if (!isNaN(tarjeta)) {
        alert("Estas mal, no sabes lo que es el Phising?, cuidate abuela y no hagas estas cosas")
    }
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
        entretenimiento === "gaming") { }
    else {
        alert("Tu hobby no es el correcto, debes ingresar una de las opciones dadas.");
        formularioIngreso2();
    }

    let deporte = prompt("Cual es tu deporte favorito?:").toLowerCase();
    if (deporte == "futbol") {
        alert("Ahhhh Futbolero saliste ehhh")
    }
    let estudioTrabajo = prompt("Estas estudiando o trabajando actualmente, puede ser nada tambien:").toLowerCase();
    if (
        estudioTrabajo !== "estudio" &&
        estudioTrabajo !== "trabajando" &&
        estudioTrabajo !== "trabajo" &&
        estudioTrabajo !== "estudiando") {
        alert("Es hora de pensar en hacer algo con ese cuerpo")
    }
    alert("Por lo que me contaste, estos son tus gustos :\nLo que mas horas metes cuando estas libre: " + entretenimiento + "\nTe gusta mucho el: " + deporte + "\nActualmente estas ocupad@ en: " + estudioTrabajo);

    console.log(entretenimiento, deporte, estudioTrabajo)
    mostrarOpciones();

}

function juegoAdivinanza() {
    let numeroRandom = Math.floor(Math.random() * 10);
    let intentos;
    for (intentos = 1; ; intentos++) {
        let adivinanza = parseInt(prompt("Adivina el numero entre 0 y 10:"))
        if (isNaN(adivinanza)) {
            alert("La adivinanza es con numeros, no con letras.");
        }
        else {
            if (adivinanza === numeroRandom) {
                alert("Le pegaste, sos un mentalista!!!!");
                break;
                confirm("Salir al menu?");
                mostrarOpciones();
            }
            else {
                alert("No es ese el numero, tenes un par de intentos mas")
            }
        }
    }
}

function juegoColores() {
    const colores = ["negro", "verde", "naranja", "violeta", "rojo", "amarillo", "blanco", "marron", "azul", "celeste", "rosado", "verde"]
    const colorSecreto = colores[Math.floor(Math.random() * colores.length)]
    let intentos = 0;
    let adivinanzaColor = false;

    while (!adivinanzaColor) {
        let intento = prompt("Adivina el color de la cajita(negro, verde, naranja, violeta, rojo, amarillo, blanco, marron, azul, celeste, rosado, verde):").toLowerCase();

        if (!colores.includes(intento)) {
            alert("Por favor, ingresa un color de la lista.");
        } else
            intentos++;

        if (intento === colorSecreto) {
            alert("Felicidades te ganaste una caja de color" + colorSecreto );
            adivinanzaColor = true;
            confirm("Salir al menu?");
            mostrarOpciones();
        } else {
            alert("Ese color no es, intenta denuevo!!!!");
        }
    }
}





function tiendaRemeras() { 

    const Remera = function (identificador,nombre,talle,stock){
        this.identificador = identificador;
        this.nombre = nombre;
        this.talle = talle;
        this.stock = stock;
    }
    let remera1= new Remera(1,"hello kitty", "s", 5)
    let remera2= new Remera(1,"hello kitty", "m", 3)
    let remera3= new Remera(1,"hello kitty", "l", 0)
    let remera4= new Remera(1,"hello kitty", "xl", 10)
    let remera5= new Remera(2,"batman", "s", 9)
    let remera6= new Remera(2,"batman", "m", 3)
    let remera7= new Remera(2,"batman", "l", 6)
    let remera8= new Remera(2,"batman", "xl", 2)
    let remera9= new Remera(3,"zelda", "s", 7)
    let remera10= new Remera(3,"zelda", "m", 1)
    let remera11= new Remera(3,"zelda", "xl", 0)
    let remera12= new Remera(3,"zelda", "l", 8)
    let remera13= new Remera(4,"baywatch", "s", 8)
    let remera14= new Remera(4,"baywatch", "m", 4)
    let remera15= new Remera(4,"baywatch", "l", 3)
    let remera16= new Remera(4,"baywatch", "xl", 0)
    let listaRemeras = [remera1, remera2, remera3,remera4,remera5,remera6, remera7, remera8,remera9,remera10,remera11,remera12,remera13,remera14,remera15,remera16]
    
    function mostrarTalles(){
        let miEleccion = parseInt(elegirRemeras)
        let resultadoItem = listaRemeras.filter((x)=>x.identificador === miEleccion)
        if(resultadoItem.length >0){
            console.table(resultadoItem)
        }
    }
    
    
    alert("A continuacion veras lo que nos esta quedando en nuestra tiendita, elegi el producto para ver las existencias de talle")
    let listadoRemeras = "\n1. Hello Kitty\n2. Batman \n3. Zelda\n4. Baywatch\n5. Salir";
    let elegirRemeras = prompt(listadoRemeras).trim();
    
    switch (elegirRemeras) {
        case "1":
            mostrarTalles();
            break;
        case "2":
            mostrarTalles();
            break;
        case "3":
            mostrarTalles();
            break;
        case "4":
            mostrarTalles();
            break;
        case "5":
            mostrarTalles();
            break;
        case "6":
            alert("Saliendo del simulador de datos.");
            break;
        default:
            alert("Opcion invalida, por favor intenta denuevo");
            tiendaRemeras();
    }   


} 
