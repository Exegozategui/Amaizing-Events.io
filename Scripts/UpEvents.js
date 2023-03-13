const containerCards = document.querySelector('#contenedor')

let buscador = document.getElementById("buscador")  

cardsHTML = ""
let currentDate= data.currentDate

function imprimirCards(arrayevents){



  containerCards.innerHTML= ""

arrayevents.forEach(event =>
  {if (currentDate < event.date)
 
  cardsHTML += `<div class="card-group">
   <div class="card  text-center border-danger mb-3 " style= "width: 18rem;" >
    <img src=${event.image} class="card-img-top" " alt="...">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <div class="card-footer">
      <a class="card-text text-danger ">${event.price}</a>
      <a href="./Details.html?_id=${event._id}" class="btn btn-danger">ver mas</a>
      </div>
    </div>
  </div>
  </div>`} )
  containerCards.innerHTML = cardsHTML
  
  
}

imprimirCards(data.events)






// FILTRAR POR INPUT
const mensaje = document.getElementById('mensaje');


buscador.addEventListener("input", () => {
  const busqueda = buscador.value.toLowerCase();

  const eventosEncontrados = data.events.filter((evento) => {
    const nombre = evento.name.toLowerCase();
    const descripcion = evento.description.toLowerCase();

    return nombre.includes(busqueda) || descripcion.includes(busqueda);
  });

  if (eventosEncontrados.length === 0) {
    containerCards.style.display = 'none';
    mensaje.style.display = 'block';
  } else {
   
    cardLimpias();
    imprimirCards(eventosEncontrados);;
  }
});

// funcion que limpia cards
function cardLimpias(){
  cardsHTML=""
}


//Generar checkbox dinamicos.


const categoriasSet = new Set(data.events.map(evento => evento.category));
const categoriasArray = Array.from(categoriasSet);

const categoriasDiv = document.getElementById('navbarSupportedContent');

checkHTML= ""

categoriasArray.forEach(categoria => {
 

   checkHTML += `<div class="form-check form-check-inline" > 
                
  <input class="form-check-input" type="checkbox" name="categoria" id="checkbox" value="categoria">
  <label class="form-check-label" for="inlineCheckbox1">${categoria}</label>
</div> ` })


categoriasDiv.innerHTML= checkHTML



// Codigo para filtrar por checkbox

//funcion que agrega un listener a cada check
const checkboxes = document.querySelectorAll('[name="categoria"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filtrarEventos);
});

function filtrarEventos() {
  const categoriasSeleccionadas = Array.from(document.querySelectorAll('[name="categoria"]:checked')).map(checkbox => checkbox.value);

    const eventosFiltrados = data.events.filter(evento => categoriasSeleccionadas.includes(evento.category));
  console.log(eventosFiltrados)

}
