/* Obtenenos los datos de los parametros de la URL */
let params = new URLSearchParams(document.location.search)
let id = params.get("id")

/* Buscar dato por id */
let profile = data.events.filter(info => info.id == id);

/* Renderizar profile */
const container = document.getElementById("container-detail");

let html = "";

html += `
<div class="carhorizontal">
<div class="card justify-content-center">
  <div class="row">
    <div class="col-sm-5">
      <img class="d-block w-100" src=${profile[0].image} alt="">
    </div>
    <div class="col-sm-7">
      <div class="card-block">
    <h3 class="card-title">${profile[0].name}</h3>
        <p>${profile[0].capacity}</p>
        <p>${profile[0].assistance}</p>
        <p>${profile[0].capacity}</p>
        
      </div>
    </div>

  </div>
</div>
</div>
    `


container.innerHTML = html