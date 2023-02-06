var fecha = new Date(); 
var anio = fecha.getFullYear(); 
var mes = fecha.getMonth(); 
var dia = fecha.getDate(); 
var almanaque, selectorDias; 

function inicia() {
var mesSig = Number(mes) + 1; 
var diaFinal = new Date(anio, mesSig, 0).getDate(); 
var semana = new Date(anio, mes, 1).getDay(); 

almanaque = document.getElementById("hoja"); 
selectorDias = document.getElementById("losDias");

almanaque.innerHTML = ""; 
selectorDias.innerHTML = "";

for(tr=0; tr<6; tr++){
  almanaque.insertRow(); 
}

for(r=0; r<6; r++){
  for(c=0; c<7; c++){
    almanaque.rows[r].insertCell(); 
  }
}

for(d=0; d<diaFinal; d++) {
  selectorDias.options[d] = new Option(d+1);
  document.querySelectorAll("#hoja td")[d+semana].innerHTML = d+1; 
}

document.getElementById("losDias").value = dia; 
document.getElementById("losMeses").value = mes; 
document.getElementById("losAnios").value = anio; 
document.querySelectorAll("#hoja td")[(dia-1)+semana].className = "destaca"; 
}

onload = inicia; 

//....Tarjeta de turnos......//

const guardarTurnos = [];
class Turno { 
  constructor (dia) {
    this.dia = dia,
    this.mes = mes
  }}

elFormulario.addEventListener('submit', (e) => {
  e.preventDefault();
  agregarTurno();
  mostrarTurnos();
});

  function agregarTurno() {
    const dia = document.getElementsByClassName('destaca').value;    

    const nuevoTurno = new Turno (dia);
    guardarTurnos.push(nuevoTurno);
    //Agrego al LocalStorage:
    localStorage.setItem('guardarTurnos', JSON.stringify(guardarTurnos));
    //formulario.reset();
  }

const verTurnos = document.getElementById('inputTurnos');

verTurnos.addEventListener('submit', () => {
  mostrarTurnos();
});


function mostrarTurnos() {
  contenedorTurnos.innerHTML = '';
    const div = document.createElement('div');
    div.innerHTML = `
                      <div>
                      <h2>Dia: ${dia} del corriente mes</h2>
                      </div>
                      `;
    contenedorTurnos.appendChild(div);
  ;
}
 //ver porque no funciona!!!!!!!!!!!!!!!!!!!!!!!!!!!

