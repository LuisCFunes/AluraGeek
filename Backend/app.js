const endpoint = "http://localhost:5500/productos";

async function getProducts() {
  try {
    let conection = await fetch(endpoint);
    if (!conection.ok) {
      throw new Error(`HTTP error! status: ${conection.status}`);
    }
    let productsData = await conection.json();
    return productsData;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createProduct(imagen, nombre, precio) {
  let conection = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      imagen: imagen,
      nombre: nombre,
      precio: precio,
    }),
  });

  const conectionDone = await conection.json(); 
  return conectionDone;
}

async function deleteProduct(id) {
  const deleteEndpoint = `${endpoint}/${id}`;
  try {
    let connection = await fetch(deleteEndpoint, {
      method: "DELETE",
    });
    if (!connection.ok) {
      throw new Error(`HTTP error! status: ${connection.status}`);
    }
    return connection.json(); // Optionally return response or status
  } catch (error) {
    console.error("Error:", error);
  }
}

export const conectionAPI = {
  getProducts,
  createProduct,
  deleteProduct
};
