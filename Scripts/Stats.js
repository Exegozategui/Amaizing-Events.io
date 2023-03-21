//CODIGO PARA TRAER DATOS DE API
let fechaEventos =  ""
let eventos = []

function traerDatos(){
  /* fetch('./Data.json') */
  fetch('https://mindhub-xj03.onrender.com/api/amazing')
  .then(response => response.json())
  .then(datosApi =>{
      console.log(datosApi)
      eventos= datosApi.events
      fechaEventos= datosApi.currentDate
      console.log(eventos)

//Codigo que calcula el porcentaje de asistencia para cada evento y agregarlo al objeto de cada evento y filtrar por esta propiead
eventos.forEach(evento => {
  evento.porcentajeAsistencia = (evento.assistance||evento.estimate ) / evento.capacity * 100;
});

// Ordenar el array por porcentaje de asistencia (mayor a menor)
eventos.sort((a, b) => b.porcentajeAsistencia - a.porcentajeAsistencia);

    
  // Codigo para mostrar el evento con mayor porcentaje de asistencia.
const eventoMayorAsistencia = document.getElementById('MayorAsistencia');

for (let i = 0; i < 1 && i < eventos.length; i++) {
  const evento = eventos[i];
  const fila = `<tr><td>${evento.name}</td></tr>`;
  eventoMayorAsistencia.innerHTML += fila;


// Ordeno el array por % de asistencia (menor a mayor) 

eventos.sort((a, b) => a.porcentajeAsistencia - b.porcentajeAsistencia);

// Mostrar los eventos con menor  %  de asistencia 
const eventoMenorAsistencia = document.getElementById('MenorAsistencia');

for (let i = 0; i < 1 && i < eventos.length; i++) {
  const evento = eventos[i];
  const fila = `<tr><td>${evento.name}</td></tr>`;
  eventoMenorAsistencia.innerHTML += fila;
}

//Ordeno el array con los eventos de mayor capacidad 

eventos.sort((a, b) => b.capacity - a.capacity);


//Mostra evento de mayor capacidad 

const eventoMayorCapacidad = document.getElementById('MayorCapacidad');
for (let i = 0; i < 1 && i < eventos.length; i++) {
  const evento = eventos[i];
  const fila = `<tr><td>${evento.name}</td></tr>`;
  eventoMayorCapacidad.innerHTML += fila;
}

//-----------------------------------------------------------------////

// filtra array eventos con los eventos pasados.

const eventosAnteriores = eventos.filter(evento => evento.date < fechaEventos);

//filtra array eventos con los eventos futuros.

const eventosPosteriores = eventos.filter(evento => evento.date > fechaEventos);

//llamo a la funciones para imprimir estadisticas de tabla


printTable(pastUpStatics(eventosPosteriores), "upcoming")

printTable(pastUpStatics(eventosAnteriores), "past")


}
})


}
traerDatos()


//Funcion que completa la tabla con categorias, revenues, porcentaje de asistencia, tanto de eventos futuros como pasados.

function pastUpStatics(arr) {
  let categories = Array.from(new Set(arr.map(a => a.category)));
  let eventCategories = categories.map(cat => arr.filter(event => event.category == cat))
  let result = eventCategories.map(eventCat => {
    let calculate = eventCat.reduce((acc, event) => {
      console.log(event)
      acc.category = event.category;
      acc.revenues += event.price * (event.assistance || event.estimate);
      acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
      return acc
    }, {
      category: "",
      revenues: 0,
      attendance: 0
    })
    calculate.attendance = calculate.attendance / eventCat.length
    return calculate
  })
  return result;
}

// funcion para imprimir las tablas de estadisticas

function printTable(arr, idTag) {
  const upcomingTable = document.getElementById(idTag)
  let html = arr.map(events => {
    return `
      <tr>
              <td>${events.category}</td>
              <td>$${events.revenues}</td>
              <td>${events.attendance.toFixed(2)}%</td>
          </tr>
      `
  })
  upcomingTable.innerHTML = html.join("")
}
