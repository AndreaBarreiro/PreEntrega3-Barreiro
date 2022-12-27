//...........Registracion.........//

let arrPacientes = [];

class Paciente {
    constructor(nombreyApellido, dni, edad, obraSocial, telefono, email, password) {

        this.nombreyApellido = nombreyApellido;
        this.dni = dni;
        this.edad = edad;
        this.obraSocial = obraSocial;
        this.telefono = telefono;
        this.email = email;
        this.password = password;
    }
}

let formReg = document.getElementById("formReg");


function registrarse() {

    let nombreyApellido = document.getElementById("nombreyApellido").value;
    let dni = document.getElementById("dni").value;
    let edad = document.getElementById("edad").value;
    let obraSocial = document.getElementById("obraSocial").value;
    let telefono = document.getElementById("telefono").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;



    if ((nombreyApellido !== "") && (dni !== "") && (edad !== "") && (obraSocial !== "") && (telefono !== "") && (email !== "") && (password !== "")) {
        alert("su registro se realizo correctamente. Acceda desde el portal de Pacientes a su cuenta");
    } else {
        alert("Ingrese todos los datos");
    }

    arrPacientes.push(new Paciente(nombreyApellido, dni, edad, obraSocial, telefono, email, password));
    localStorage.setItem("PacientesTotales", JSON.stringify(arrPacientes));
    console.log(arrPacientes);
};



formReg.addEventListener("submit", (e) => {
    e.preventDefault()
    registrarse()
    formReg.reset()
})

//.......Portal Pacientes.........//



//........Turnos................//
let encabezado = document.createElement("h3");
encabezado.innerHTML = "<p>Los dias de atencion son Lunes, Miercoles y Viernes</p>";
document.body.append(encabezado);







