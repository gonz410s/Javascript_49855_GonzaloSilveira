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
        
        if ((nombre !="" && nombre != Number)&&(edad !="" && edad != String)&&(email !="")){
            alert("Aqui estan tus datos =) :\nNombre: " + nombre + "\nEdad: " + edad + "\nEmail: " + email);}
            else{
                alert("Error, por favor ingresa alguno de los datos que te faltan");
            formularioIngreso();
        }
        }

        
    

