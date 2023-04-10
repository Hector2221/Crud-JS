// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

// Fetch API
const listaClientes = () => {
  return fetch("http://localhost:3000/perfil").then((respuesta) =>
    respuesta.json()
  );
};

// crear usuarios
const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id: uuid.v4() }),
  });
};

// elimina clientes
const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, { method: "DELETE" });
};

// detalles clientes
const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((res) => res.json());
};

// actualizar clientes
const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, email, id }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente,
};
