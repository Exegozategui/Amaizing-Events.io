const queryString = location.search

const params = new URLSearchParams(queryString)

const _id = params.get("_id")

const eventos = data.events.find(evento => evento._id == _id)

 const container= document.getElementById("container-detail")
 let html = ""


  html = `<div class="carhorizontal">
 <div class="card justify-content-center">
   <div class="row">
     <div class="col-sm-5">
       <img class="d-block w-100" src="${eventos.image}" alt="">
     </div>
     
     <div class="col-sm-7">
       <div class="card-block">
     <h3 class="card-title">${eventos.name}</h3>
         <p>${eventos.description}</p>
         <p>${eventos.category}</p>
         <p>${eventos.place}</p>
         
       </div>
     </div>

   </div>
 </div>
</div> `

container.innerHTML= html