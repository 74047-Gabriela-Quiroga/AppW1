import { createCard } from './cards.js';




  function loadAndDisplayCards() {
  fetch('../data/place.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("cards");
      data.forEach(item => {
        container.insertAdjacentHTML("beforeend", createCard(item));
      });
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
}




loadAndDisplayCards();


