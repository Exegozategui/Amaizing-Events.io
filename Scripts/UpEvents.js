const containerCards = document.querySelector('#contenedor')

let allCards = newCards(data.events)

containerCards.innerHTML = allCards






function newCards(arrayDatos){
  let cards= ''

  let currentDate= data.currentDate
  for (const event of arrayDatos ) {
  if (currentDate < event.date){


    cards += `<div class="card-group">
    <div class="card text-center " style= "width: 18rem;" >
    <img src=${event.image} class="card-img-top" " alt="...">
    <div class="card-body">
      <h5 class="card-title">${event.name}</h5>
      <p class="card-text">${event.description}</p>
      <a class="card-text">${event.price}</a>
      <a href="./Details.html" class="btn btn-primary">ver mas</a>
    </div>
  </div>
  </div>`
}


  }

  return cards 

}