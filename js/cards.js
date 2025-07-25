
export const createCard = ({id, city, price, desc, img, hotels}) => {
    const data = { id, city, price, desc, img, hotels };
    return `
    <div class="col-12 col-md-4">
        <div class="card mt-5" style="width:auto;">
        <img src=${img} className="card-img-top" alt="Imagen Ciudad" />
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="card-title">${city}</h4>
                <h6 class="card-subtitle mb-2 text-body-secondary text-end">Desde $${price}</h6>
            </div>
            <p class="card-text">${desc}</p>
            <button class="btn btn-info" onclick='goToDetail(${JSON.stringify(data)})'>Ver mas</button>
        </div>
        </div>
    </div>
    `;
};
