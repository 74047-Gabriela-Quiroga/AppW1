// creando la función para ir al detalle de la ciudad 





//creando funcion detalle

const completeCardDetalle = ({id, city, price, desc, img, hotels}) => {
    const data = { id, city, price, desc, img, hotels };
    return `


    <div class="container-fluid ">
        <div class="row" id="cards">
            <div class="col-12 col-sm-6 col-md-5 col-lg-4 mt-5" >
            <div class="card" style = "style="display: flex;">    
                <div class="card-header" >Calcula tu viaje</div>
            

                <ul class="list-group" list-group-item-info rounded-4 id = "listHotels">
                    <li class="list-group-item">
                        <select class="form-select my-2" aria-label="Default select example">
                            <option selected>Selecciona un hotel</option>
                            ${hotels.map(hotel => `<option value="${hotel.name}"data-price="${hotel.price}">${hotel.name} - $${hotel.price} por noche</option>`).join('')}
                        </select>
                    </li>

                    <li class="list-group-item" >
                        Huespedes:
                        <input type="number" id="personas" min="1" max="10" value="1" />
                    </li>
                    
                    <li class="list-group-item">
                        Días:
                        <input type="number" id="noches" min="1" max="30" value="1" />
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        <p class="mb-0" id = "LblTotal"><strong>Total: $<span id="totaltext">0</span></strong></p>
                        <button class="btn btn-info" id="continuar" onclick='goToDetail(${JSON.stringify(data)})'>Continuar</button>
                    </li>
                </ul>
                    <div class="container mt-5" style="float" >
                         <img src="${img}" alt="Imagen Ciudad" class="img-fluid" style="max-width: 300px" />
                    </div>

                        <div class="container-fluid" style = "float" >
                             <div class="row" id="cards">
                                <div class="col-6 col-12 mt-5">
                                    <div class="card" id="descripcion-card">    
                                        <div class="card-header">${desc}</div>
                                        </div>
                                    </div>
                                 </div>
                            </div>
                        </div>

             </div>

        </div>

    </div> 
    `;    
};




function updateTotal() {
  let total = 0;
  const inputs = document.querySelectorAll('.quantity');

  inputs.forEach(input => {
    const quantity = getElementById("personas") || 0;
    const nights = getElementById("dias") || 0;
    const price = getElementById("listHotels").active.price || 0;
    const priceCity = JSON.parse(localStorage.getItem('selectedCity')).price || 0;
    total += priceCity + quantity * price * nights;
  });

  document.getElementById('totaltext').textContent = total;
}

  function loadCityCard() {

      const container = document.getElementById("cardCity");
      container.innerHTML = completeCardDetalle(JSON.parse(localStorage.getItem('selectedCity')));


}

document.querySelectorAll('.quantity').forEach(input => {
  input.addEventListener('input', updateTotal);
});

loadCityCard();
updateTotal()
