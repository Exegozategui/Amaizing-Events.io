const containerCards = document.querySelector('#contenedor')

cardsHTML = ""
let currentDate= data.currentDate


data.events.forEach(event =>
  {if (currentDate < event.date)
  cardsHTML += `<div class="card-group">
   <div class="card  text-center border-danger mb-3 " style= "width: 18rem;" >
    <img src=${event.image} class="card-img-top" " alt="...">
    <div class="card-body">
    <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <div class="card-footer">
      <a class="card-text text-danger ">${event.price}</a>
      <a href="./Details.html" class="btn btn-danger">ver mas</a>
      </div>
    </div>
  </div>
  </div>`} )


  containerCards.innerHTML = cardsHTML

  // CODIGO PARA GERENAR LOS CHECKBOCS DINAMICOS

// Con el metodo new set, filtra las categorias y me guarda en categoriasunicas el array con las categorias filtradas
const categoriasUnicas = [...new Set(data.events.map((e) => e.category))];


var contenedorCheckboxes = document.getElementById("containerCheck");

// con este for imprimo en mi html los checkbox de cada categoria.

for (var i = 0; i < categoriasUnicas.length; i++) {
  var categoria = categoriasUnicas[i];

  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "categoria-" + categoria;
  checkbox.name = "categoria";
  checkbox.value = categoria;

  var label = document.createElement("label");
  label.for = "categoria-" + categoria;
  label.textContent = categoria;

  contenedorCheckboxes.appendChild(checkbox);
  contenedorCheckboxes.appendChild(label);
}
