import { conectionAPI } from "./app.js";

const form = document.querySelector("[data-form]");

async function createNewCard(e){
    e.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
    let precio = document.querySelector("[data-precio]").value; // Changed const to let
    precio = parseFloat(precio).toFixed(2);
    await conectionAPI.createProduct(imagen, nombre, precio); // Assuming createProduct is correctly exported from app.js
}

form.addEventListener("submit", e => createNewCard(e));
