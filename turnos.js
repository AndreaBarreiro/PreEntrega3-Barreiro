$(function () {
    $("#datepicker").datepicker({
        altField: "#alternate",
        altFormat: "DD, d MM, yy"
    });
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