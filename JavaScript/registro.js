//...........Registracion.........//

let arrPacientes = [];

class Paciente {
  constructor(
    nombreyApellido,
    dni,
    edad,
    obraSocial,
    telefono,
    email,
    password
  ) {
    this.nombreyApellido = nombreyApellido;
    this.dni = dni;
    this.edad = edad;
    this.obraSocial = obraSocial;
    this.telefono = telefono;
    this.email = email;
    this.password = password;
  }
}

function registrarse() {
  let nombreyApellido = document.getElementById("grupo__nombreyApellido").value;
  let dni = document.getElementById("grupo__dni").value;
  let edad = document.getElementById("grupo__edad").value;
  let obraSocial = document.getElementById("grupo__obraSocial").value;
  let telefono = document.getElementById("grupo__telefono").value;
  let email = document.getElementById("grupo__email").value;
  let password = document.getElementById("grupo__password").value;

  if (
    nombreyApellido !== "" &&
    dni !== "" &&
    edad !== "" &&
    obraSocial !== "" &&
    telefono !== "" &&
    email !== ""
  ) {
    arrPacientes.push(
      new Paciente(
        nombreyApellido,
        dni,
        edad,
        obraSocial,
        telefono,
        email,
        password
      )
    );
    localStorage.setItem("PacientesTotales", JSON.stringify(arrPacientes));

    Swal.fire({
      title: "<strong>Datos ingresados correctamente.</strong>",
      icon: "info",
      html: "Revise que su <b>CONTRASEÑA</b>, " + "cumple con los requisitos",
      showCloseButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Genial!',
      confirmButtonAriaLabel: "Thumbs up, great!",
    });
    //ingreso correcto
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: "Debe ingresar todos los campos!",
      footer: "<complete todos los datos</a>",
    });
    //error al ingresar los datos
  }
}
const formReg = document.getElementById("formReg");
const inputs = document.querySelectorAll("#formReg input");

const expresiones = {
  password: /^.{6,10}$/, //6 a 10 digitos
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "password":
      if (expresiones.password.test(e.target.value)) {
        document
          .querySelector("#grupo__password")
          .classList.remove("formulario__mensaje-password-activo");
        campos["password"] = true;
      } else {
        document
          .querySelector("#grupo__password")
          .classList.add("formulario__mensaje-password-activo");
        campos["password"] = false;
      }
      break;
  }
};

const campos = {
  password: false,
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

if (formReg)
  formReg.addEventListener("submit", (e) => {
    e.preventDefault();
    registrarse();

    if (campos.password) {
      formReg.reset();
      document
        .getElementById("formulario__mensaje-exito")
        .classList.add("formulario__mensaje-exito-activo");
      setTimeout(() => {
        document
          .getElementById("formulario__mensaje-exito")
          .classList.remove("formulario__mensaje-exito-activo");
      }, 5000);
    }
  });

//........Turnos Nota................//
let encabezado = document.createElement("h3");
encabezado.innerHTML =
  "<p>Los campos Nombre y Apellido, DNI, edad y Obra Social deben ser del paciente menor de edad.- 🧸</p>";
document.body.append(encabezado);

//.........Login.............//

let usuario = document.getElementById("emailLog");
let contraseña = document.getElementById("passLog");
const login = document.getElementById("btn-ingresar");
let invalido = ""; // clase de CSS

login.addEventListener("click", () => {
  mostrarPacientesTotales();
});

function mostrarPacientesTotales() {
  const usuarios = JSON.parse(localStorage.getItem("PacientesTotales"));
  

  const paciente = usuarios.find((u) => u.email === usuario.value);
  

  if (
    usuario.value === paciente.email &&
    contraseña.value === paciente.password
  ) {
    window.location.href = "../turnos.html";
  } else {
    invalido += "el Usuario no existe <br>";
  }
}

//.....llamado API.........//

fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        body: JSON.stringify({
            title: 'usuarios',
            body: 'Post de prueba',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].title)
      console.log(data[0].body)
    });
