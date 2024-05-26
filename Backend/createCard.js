import {conectionAPI} from "./app.js";

const cardProducts = document.querySelector("[data-products]");

function createCard(imagen, nombre, precio) {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `<img
  class="img-product"
  src="${imagen}"
  alt="img product"
/>
<p class="name-product"> ${nombre}</p>
<div class="info-product">
  <span>$ ${precio}</span>
  <span
    ><img src="./img/trash.svg" alt="btn for delete product"
  /></span>
</div>
</div>`;

  return card;
}

async function listCards() {
    try {
      const listApi = await conectionAPI.getProducts();
      listApi.forEach((card) =>
        cardProducts.appendChild(createCard(card.imagen, card.nombre, card.precio))
      );
    } catch (error) {
      console.error('Error:', error);
    }
}

listCards();
