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