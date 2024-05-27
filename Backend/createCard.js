import { conectionAPI } from "./app.js";

const cardProducts = document.querySelector("[data-products]");

function createCard(imagen, nombre, precio, id) {
  const card = document.createElement("div");
  card.className = "product";
  card.innerHTML = `
    <img class="img-product" src="${imagen}" alt="img product" />
    <p class="name-product"> ${nombre}</p>
    <div class="info-product">
      <span>$ ${precio}</span>
      <button data-id="${id}" class="btn-delete">
        <img src="./img/trash.svg" alt="btn for delete product" />
      </button>
    </div>
  `;

  const deleteButton = card.querySelector(".btn-delete"); 
  deleteButton.addEventListener("click", async () => {
    await conectionAPI.deleteProduct(id);
  });

  return card;
}

async function listCards() {
  try {
    const listApi = await conectionAPI.getProducts();
    cardProducts.innerHTML = ""; 
    listApi.forEach((card) =>
      cardProducts.appendChild(
        createCard(card.imagen, card.nombre, card.precio, card.id)
      )
    );
  } catch (error) {
    console.error("Error:", error);
  }
}

listCards();
