document.addEventListener("DOMContentLoaded", () => {
  const grilla = document.getElementById("grilla-productos");

  // verificar si existe la grilla
  if (!grilla) return;

  if (typeof globalThis.productos === "undefined") {
    grilla.innerHTML = `<p>Error: No se pudieron cargar los productos.</p>`;
    return;
  }

  const searchInput = document.getElementById("searchInput");
  const clearSearch = document.getElementById("clearSearch");
  const sortSelect = document.getElementById("sortSelect");
  const resultsCount = document.getElementById("resultsCount");
  const activeFilterLabel = document.getElementById("activeFilterLabel");
  const categoryButtons = document.querySelectorAll(".category-btn");
  let activeFilter = "all";

  const categoriasPorFiltro = {
    living: ["Sillones", "Sofas"],
    comedor: ["Mesas", "Sillas"],
    estudio: ["Escritorios", "Sillas"],
    guardado: ["Aparadores", "Bibliotecas", "Dormitorio", "Mesas"],
  };

  function renderizarProductos() {
    const query = searchInput?.value.trim().toLowerCase() || "";
    const categorias = categoriasPorFiltro[activeFilter];
    const filtrados = globalThis.productos
      .filter((producto) => {
        const coincideCategoria =
          activeFilter === "all" || categorias.includes(producto.categoria);
        const textoProducto = `${producto.nombre} ${producto.categoria} ${producto.materiales}`.toLowerCase();
        return coincideCategoria && textoProducto.includes(query);
      })
      .sort((a, b) => {
        switch (sortSelect?.value) {
          case "price-asc":
            return a.precio - b.precio;
          case "price-desc":
            return b.precio - a.precio;
          case "alpha":
            return a.nombre.localeCompare(b.nombre, "es");
          default:
            return Number(b.destacado) - Number(a.destacado);
        }
      });

    grilla.innerHTML = "";
    filtrados.forEach((producto) => {
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

    if (filtrados.length === 0) {
      grilla.innerHTML = `<p class="catalogo-vacio">No encontramos piezas con esos criterios.</p>`;
    }

    if (resultsCount) {
      resultsCount.textContent = `Mostrando ${filtrados.length} ${filtrados.length === 1 ? "pieza exclusiva" : "piezas exclusivas"}`;
    }
    if (activeFilterLabel) {
      activeFilterLabel.hidden = activeFilter === "all" && !query;
    }
    if (clearSearch) {
      clearSearch.hidden = !query;
    }
  }

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      categoryButtons.forEach((item) => item.classList.toggle("activo", item === button));
      renderizarProductos();
    });
  });

  searchInput?.addEventListener("input", renderizarProductos);
  sortSelect?.addEventListener("change", renderizarProductos);
  clearSearch?.addEventListener("click", () => {
    searchInput.value = "";
    renderizarProductos();
    searchInput.focus();
  });

  renderizarProductos();
});