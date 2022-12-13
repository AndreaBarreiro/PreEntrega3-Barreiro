
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



const familiarCero = ["Paciente registrado en la primer etapa"];

const grupoFamiliar = familiarCero.concat(familiar1);
console.log(grupoFamiliar);