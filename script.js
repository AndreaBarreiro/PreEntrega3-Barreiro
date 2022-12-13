//...........Registracion.........//


let nombre, apellido, dni, obraSocial, celular, email


function registrarse() {
    nombre = prompt("Ingresar Nombre");
    apellido = prompt("Ingresar Apellido")
    dni = prompt("Ingresar numero de DNI");
    obraSocial = prompt("Ingrese obra social o aclare si se atendera de manera particular");
    celular = prompt("Ingrese su numero de telefono");
    email = prompt("Ingrese su mail");
    alert("los datos ingresados son" + ":" + nombre + "/" + apellido + "/" + dni + "/" + obraSocial + "/" + celular + "/" + email + ":" + " " + "Si es correcto siga con el siguiente paso");
    console.log("Datos del paciente1" + nombre + "/" + apellido + "/" + dni + "/" + obraSocial + "/" + celular + "/" + email);
}

registrarse()


if ((obraSocial != "") && (celular != "")) {
    alert("haga click para reservar un turno");
} else if (obraSocial.toLowerCase() === "particular") {
    alert("El valor de la consulta es de $ 2000")
} else {
    alert("Ingrese los datos nuevamente");
    registrarse()
}


//...........Funciones de orden superior............//

function sinObrasocial(x) {
    return (n) => n === x
}


let particular
let consulta = sinObrasocial(particular)

console.log(consulta(particular));





