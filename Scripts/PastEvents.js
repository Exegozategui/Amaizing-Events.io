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
// imprimir card pasadas.
      const eventosAnteriores = eventos.filter(evento => evento.date < fechaEventos);
      imprimirCards(eventosAnteriores)


// CODIGO PARA GERENAR LOS CHECKBOCS DINAMICOS

//Generar checkbox dinamicos.


const categoriasSet = new Set(eventos.map(evento => evento.category));
const categoriasArray = Array.from(categoriasSet);

const categoriasDiv = document.getElementById('navbarSupportedContent');

checkHTML= ""

categoriasArray.forEach(categoria => {
 

   checkHTML += `<div class="form-check form-check-inline" > 
                
  <input class="form-check-input" type="checkbox" name="categoria" id="checkbox" value="${categoria}">
  <label class="form-check-label" for="inlineCheckbox1">${categoria}</label>
</div> ` })


categoriasDiv.innerHTML= checkHTML

// FILTRAR POR INPUT///////////////
const mensaje = document.getElementById('mensaje');


buscador.addEventListener("input", filtrarEventos)



// Codigo para filtrar por checkbox

//funcion que agrega un listener a cada check
const checkboxes = document.querySelectorAll('[name="categoria"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filtrarEventos);
});

function filtrarEventos() {
  const busqueda = buscador.value.toLowerCase();
  const categoriasSeleccionadas = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
  const eventosFiltrados =eventos.filter(evento => (categoriasSeleccionadas.includes(evento.category)||categoriasSeleccionadas.length == 0) && evento.name.toLowerCase().includes(busqueda)  );
      console.log(eventosFiltrados)

  if (eventosFiltrados.length === 0) {
 containerCards.style.display = 'none';
   mensaje.style.display = 'block';
 } else{
  
 }


  cardLimpias();

  imprimirCards(eventosFiltrados)

}
  



  


})
.catch(error => console.log(error.message))
}

traerDatos()
  
// url params
function seeDetail(_id) {
  window.location.href = `./Details.html?_id=${_id}`
}

const containerCards = document.querySelector('#contenedor')

cardsHTML = ""


function imprimirCards(arrayevents){



  containerCards.innerHTML= ""

arrayevents.forEach(event =>
  
 
  cardsHTML += `<div class="card-group">
   <div class="card  text-center border-danger mb-3 " style= "width: 18rem;" >
    <img src=${event.image} class="card-img-top" " alt="...">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <div class="card-footer">
      <a class="card-text text-danger ">$ ${event.price}</a>
      <a href="./Details.html?_id=${event._id}" class="btn btn-danger">ver mas</a>
      </div>
    </div>
  </div>
  </div>` )
  containerCards.innerHTML = cardsHTML
   
}

  
// funcion que limpia cards
function cardLimpias(){
  cardsHTML=""
}


