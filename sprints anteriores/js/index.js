document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("destacados-grid");

  // La grilla solo existe en index.html; salir en silencio en otras páginas.
  if (!grid) return;

  function finishLoading() {
    grid.setAttribute("aria-busy", "false");
  }

  function showMessage(text) {
    grid.innerHTML = `<p class="body-md destacados__vacio">${text}</p>`;
    finishLoading();
  }

  if (!Array.isArray(globalThis.productos)) {
    showMessage("No pudimos cargar las piezas destacadas. Explorá el catálogo completo.");
    return;
  }

  const destacados = globalThis.productos
    .filter((producto) => producto.destacado)
    .slice(0, 3);

  if (destacados.length === 0) {
    showMessage("Muy pronto vas a ver acá las piezas destacadas del taller.");
    return;
  }

  const formatoPrecio = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  });

  grid.innerHTML = "";
  destacados.forEach((producto) => {
    const article = document.createElement("article");
    article.classList.add("tarjeta-producto");

    article.innerHTML = `
      <div class="tarjeta-imagen">
        <a href="./pages/producto.html?id=${producto.id}">
          <img src="./${producto.imagen}" alt="${producto.nombre}">
        </a>
        <span class="badge-categoria">${producto.categoria}</span>
      </div>
      <div class="tarjeta-info">
        <h3 class="producto-titulo">
          <a href="./pages/producto.html?id=${producto.id}">${producto.nombre}</a>
        </h3>
        <p class="producto-precio">${formatoPrecio.format(producto.precio)}</p>
        <button class="btn btn--primario btn-agregar-carrito" type="button" data-id="${producto.id}">
          Añadir al carrito
        </button>
      </div>
    `;

    grid.appendChild(article);
  });
  finishLoading();
});
