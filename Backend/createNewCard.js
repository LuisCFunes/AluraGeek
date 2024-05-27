import { conectionAPI } from "./app.js";

const form = document.querySelector("[data-form]");
const reset = document.querySelector("[data-reset]");

async function createNewCard(e) {
  e.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const imagen = document.querySelector("[data-imagen]").value;
  let precio = document.querySelector("[data-precio]").value;
  precio = parseFloat(precio).toFixed(2);
  if (nombre != "" && imagen != "" && precio != "") {
    await conectionAPI.createProduct(imagen, nombre, precio);
  }
}

form.addEventListener("submit", (e) => createNewCard(e));
reset.addEventListener("click", () => {
  document.querySelector("[data-nombre]").value = "";
  document.querySelector("[data-imagen]").value = "";
  document.querySelector("[data-precio]").value = "";
});
