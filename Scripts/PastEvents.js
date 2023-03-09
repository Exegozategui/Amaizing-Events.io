const containerCards = document.querySelector('#contenedor')

cardsHTML = ""
let currentDate= data.currentDate


data.events.forEach(event =>
  {if (currentDate > event.date)
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

