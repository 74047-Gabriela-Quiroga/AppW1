// js/resumen.js

function mostrarResumen() {
  const resumen = JSON.parse(localStorage.getItem('resumenViaje'));

  if (!resumen) {
    alert('No hay información de viaje.');
    window.location.href = 'index.html';
    return;
  }

  const cont = document.getElementById('resumen-container');
  cont.innerHTML = `
    <h2>Destino: ${resumen.ciudad}</h2>
    <p>Precio base: $${resumen.ciudadPrecio}</p>
    <p>Hotel seleccionado: $${resumen.hotelPrecio} por persona por noche</p>
    <p>Cantidad de personas: ${resumen.personas}</p>
    <p>Cantidad de noches: ${resumen.noches}</p>
    <h3>Total estimado: $${resumen.total}</h3>
  `;
}

document.getElementById('cancelar').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = 'index.html';
});

document.getElementById('form-viajero').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por enviar tu información!');
  localStorage.clear();
  window.location.href = 'index.html';
});

mostrarResumen();
