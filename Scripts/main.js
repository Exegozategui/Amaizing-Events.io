// CODIGO PARA GENERAR LAS CARDS DINAMICAS

const containerCards = document.querySelector('#contenedor')

let buscador = document.getElementById("buscador")   



cardsHTML = ""

//CODIGO PARA GENERAR CARDS, Y FILTRAR POR INPUT Y CHECKBOX

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
      <a class="card-text text-danger ">${event.price}</a>
      <input type="button" onclick="seeDetail('${event.id}')class="btn btn-danger" " value="ver mas" id="button">
      </div>
    </div>
  </div>
  </div>` )
  containerCards.innerHTML = cardsHTML
  
  
}

imprimirCards(data.events)


// FILTRAR POR INPUT
buscador.addEventListener("input", () => {
  const busqueda = buscador.value.toLowerCase();

  const eventosEncontrados = data.events.filter((evento) => {
    const nombre = evento.name.toLowerCase();
    const descripcion = evento.description.toLowerCase();

    return nombre.includes(busqueda) || descripcion.includes(busqueda);
  });

   cardLimpias();

  imprimirCards(eventosEncontrados);
});

// funcion que limpia cards
function cardLimpias(){
  cardsHTML=""
}

//filtrar por categoria

const checkboxes = document.querySelectorAll('[name="categoria"]');
checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', filtrarEventos);
  function filtrarEventos() {
    const categoriasSeleccionadas = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
    const eventosFiltrados = categoriasSeleccionadas.length > 0 ? data.events.filter(evento => categoriasSeleccionadas.includes(evento.category)) : data.events;
    cardLimpias();
    imprimirCards(eventosFiltrados);
  }
});





