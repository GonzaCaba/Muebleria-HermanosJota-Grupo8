document.addEventListener("DOMContentLoaded", () => {
  const grilla = document.getElementById("grilla-productos");

  // verificar si existe la grilla
  if (!grilla) return;

  grilla.innerHTML = `
    <div class="spinner-container" style="text-align: center; padding: 2rem; grid-column: 1 / -1;">
      <p>Cargando catálogo...</p>
    </div>
  `;

  setTimeout(() => {
    grilla.innerHTML = "";

    if (typeof globalThis.productos === "undefined") {
      grilla.innerHTML = `<p>Error: No se pudieron cargar los productos.</p>`;
      return;
    }

    globalThis.productos.forEach((producto) => {
      const article = document.createElement("article");
      article.classList.add("tarjeta-producto");

      const precioFormateado = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
      }).format(producto.precio);

      article.innerHTML = `
        <div class="tarjeta-imagen">
            <!-- Enlace a la página de producto individual -->
            <a href="./producto.html?id=${producto.id}">
                <img src="../${producto.imagen}" alt="${producto.nombre}">
            </a>
            <span class="badge-categoria">${producto.categoria}</span>
        </div>
        <div class="tarjeta-info">
            <h3 class="producto-titulo">
                <a href="./producto.html?id=${producto.id}">${producto.nombre}</a>
            </h3>
            <p class="producto-precio">${precioFormateado}</p>
            <button class="btn btn--primario btn-agregar-carrito" data-id="${producto.id}">
                Añadir al carrito
            </button>
        </div>
      `;

      grilla.appendChild(article);
    });
  }, 1500); // se agrega retardo de 1.5 para simular la red
});