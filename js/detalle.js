document.addEventListener("DOMContentLoaded", () => {
  const estado = document.getElementById("detalle-estado");
  const info = document.getElementById("detalle-info");
  const error = document.getElementById("detalle-error");
  const articulo = document.querySelector("article.detalle-producto");
  const imagen = document.getElementById("detalle-imagen");
  const leyenda = document.getElementById("detalle-imagen-leyenda");
  const categoria = document.getElementById("detalle-categoria");
  const nombre = document.getElementById("detalle-nombre");
  const precio = document.getElementById("detalle-precio");
  const descripcion = document.getElementById("detalle-descripcion");
  const medidas = document.getElementById("detalle-medidas");
  const materiales = document.getElementById("detalle-materiales");
  const botonAgregar = document.getElementById("btn-agregar");

  if (!estado || !info || !error || !articulo) return;

  // Contrato de estados: estado visible mientras se resuelve la ficha.
  estado.hidden = false;
  estado.textContent = "Cargando…";
  info.setAttribute("aria-busy", "true");

  const mostrarError = () => {
    estado.hidden = true;
    info.setAttribute("aria-busy", "false");
    error.hidden = false;
    articulo.hidden = true;
  };

  const renderizar = (producto) => {
    if (producto.imagen && imagen) {
      // productos.js guarda "assets/img/..." relativo a raíz; desde pages/ se antepone "../".
      imagen.src = `../${producto.imagen}`;
    }
    if (producto.nombre && imagen) {
      imagen.alt = `Vista principal de ${producto.nombre}`;
    }
    if (producto.nombre && leyenda) {
      leyenda.textContent = `Fotografía de estudio: ${producto.nombre}`;
    }
    if (producto.categoria && categoria) {
      categoria.textContent = producto.categoria;
    }
    if (producto.nombre && nombre) {
      nombre.textContent = producto.nombre;
    }
    if (typeof producto.precio !== "undefined" && precio) {
      const precioFormateado = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
      }).format(producto.precio);
      precio.textContent = precioFormateado;
      precio.dataset.precio = String(producto.precio);
    }
    if (producto.descripcion && descripcion) {
      descripcion.textContent = producto.descripcion;
    }
    if (producto.medidas && medidas) {
      medidas.textContent = producto.medidas;
    }
    if (producto.materiales && materiales) {
      materiales.textContent = producto.materiales;
    }
    if (botonAgregar) {
      botonAgregar.dataset.id = String(producto.id);
      botonAgregar.dataset.precio = String(producto.precio);
    }

    estado.hidden = true;
    info.setAttribute("aria-busy", "false");
    articulo.hidden = false;
  };

  const catalogo = globalThis.productos;

  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    mostrarError();
    return;
  }

  const idParam = new URLSearchParams(window.location.search).get("id");
  const id = Number(idParam);

  if (!idParam || Number.isNaN(id)) {
    mostrarError();
    return;
  }

  const producto = catalogo.find((item) => item.id === id);

  if (!producto) {
    mostrarError();
    return;
  }

  renderizar(producto);
});
