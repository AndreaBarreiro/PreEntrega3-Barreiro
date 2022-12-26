
//.....Alertas Head......//

let btnDireccion = document.getElementById("showDireccion");
btnDireccion.addEventListener("click", () => {
    Swal.fire({
        title: 'Pediatra',
        text: 'Almafuerte 5543, Castelar',
        imageUrl: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?output=thumbnail&cb_client=lu.gallery.gps&panoid=awqCqCumv4m8oUnVhHxQAg&w=141&h=101&thumb=2&yaw=342.15317&pitch=0',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Foto Consultorio Castelar',
    })
});


//...........Pedir Turno............//

let diaSemana = {
    1: "Lunes",
    2: "Miercoles",
    3: "Viernes",
};

let horario = {
    1: "14 hs",
    2: "15 hs",
    3: "16 hs",
    4: "17 hs",
    5: "18 hs",
}

let limite = 3;

for (let index = 1; index <= limite; index++) {
    console.log("El dia de la semana es" + diaSemana[index]);
}

let limiteHor = 5;

for (let index = 1; index <= limiteHor; index++) {
    console.log("El hoario es " + horario[index]);

}


//.............Ingreso de Familiares................. //


class Familiar {
    constructor(nombre, apellido, dni, obraSocial, edad, parentezco) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.obraSocial = obraSocial;
        this.edad = edad;
        this.parentezco = parentezco;
    }
    toString() {
        return this.nombre + this.apellido + this.dni + this.obraSocial + this.edad + this.parentezco;
    }
}


let familiar1 = new Familiar(prompt("Nombre"), prompt("Apellido"), prompt("DNI"),
    prompt("Obra Social"), prompt("Edad"), prompt("Parentezco"));

console.log(familiar1);



const familiarCero = {
    //datos del formulario promero//

};

const grupoFamiliar = familiarCero.concat(familiar1);
console.log(grupoFamiliar);


