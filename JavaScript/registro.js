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
    Swal.fire({
      title: "Datos ingresados correctamente",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
    //alert("su registro se realizo correctamente. Acceda desde el portal de Pacientes a su cuenta");
  } else {
    Swal.fire({
      icon: "error",
      title: "error",
      text: "Debe ingresar todos los campos!",
      footer: "<complete todos los datos</a>",
    });
    //alert("Ingrese todos los datos");
  }

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
  console.log(arrPacientes);
}

const formReg = document.getElementById("formReg");
const inputs = document.querySelectorAll("#formReg input");

const expresiones = {
  password: /^.{6,10}$/ //6 a 10 digitos
};

const campos = {
  password: false,
};

const ValidarFormulario = (e) => {
  switch (e.target.name) {
    case "password":
      if (expresiones.password.test(e.target.value)) {
        document
          .querySelector("grupo__password .formulario__mensaje-password")
          .classList.remove("formulario__mensaje-password-activo");
        campos["password"] = true;
      } else {
        document
          .querySelector("#grupo__password .formulario__mensaje-password")
          .classList.add("formulario__mensaje-password-activo");
        campos["password"] = false;
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", ValidarFormulario);
  input.addEventListener("blur", ValidarFormulario);
});

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
    }, 4000);
  }
});

//.......Portal Pacientes.........//

//........Turnos................//
let encabezado = document.createElement("h3");
encabezado.innerHTML =
  "<p>Los dias de atencion son Lunes, Miercoles y Viernes</p>";
document.body.append(encabezado);
