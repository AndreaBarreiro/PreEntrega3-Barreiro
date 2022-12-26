//...........Registracion.........//

let arrPacientes = [];

class Paciente {
    constructor(nombreyApellido, dni, edad, obraSocial, telefono, email) {

        this.nombreyApellido = nombreyApellido;
        this.dni = dni;
        this.edad = edad;
        this.obraSocial = obraSocial;
        this.telefono = telefono;
        this.email = email;
    }
}

function registrarse() {

    let nombreyApellido = document.getElementById("nombreyApellido").value; //no me muestra nada, con o sin value
    let dni = document.getElementById("dni");
    let obraSocial = document.getElementById("obraSocial");
    let telefono = document.getElementById("telefono");
    let email = document.getElementById("email");

    if ((nombreyApellido !== "") && (dni !== "") && (edad !== "") && (obraSocial !== "")(telefono !== "") && (email !== "")) {
        alert("su registro se realizo correctamente");
    } else {
        alert("Ingrese todos los datos");
    }

    arrPacientes.push(new Paciente(nombreyApellido, dni, obraSocial, telefono, email));
};


let botonRegistrarme = document.getElementById("btnRegistrarme").addEventListener("click", registrarse);

localStorage.setItem("Paciente1", arrPacientes);



console.log(arrPacientes); //me muestra el array vacio aunque ingrese datos a mi formulario




