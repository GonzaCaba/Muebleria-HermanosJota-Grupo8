document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "hermanosJotaCart";
  const cartButton = document.getElementById("btn-carrito");
  const cartCount = document.getElementById("cart-count");
  const catalog = Array.isArray(globalThis.productos) ? globalThis.productos : [];
  let cart = readCart();

  function readCart() {
    try {
      const storedCart = JSON.parse(localStorage.getItem(storageKey));
      return Array.isArray(storedCart) ? storedCart : [];
    } catch {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(storageKey, JSON.stringify(cart));
    updateCount();
  }

  function getProduct(id) {
    return catalog.find((product) => product.id === Number(id));
  }

  function formatPrice(price) {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 0,
    }).format(price);
  }

  function getImagePath(imagePath) {
    return window.location.pathname.includes("/pages/")
      ? `../${imagePath}`
      : `./${imagePath}`;
  }

  function getItemCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }

  function updateCount() {
    if (cartCount) {
      cartCount.textContent = String(getItemCount());
      cartCount.hidden = getItemCount() === 0;
    }
  }

  function addToCart(id) {
    const product = getProduct(id);
    if (!product) return;

    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        imagen: product.imagen,
        quantity: 1,
      });
    }

    saveCart();
    renderCart();
    openCart();
  }

  function removeFromCart(id) {
    cart = cart.filter((item) => item.id !== Number(id));
    saveCart();
    renderCart();
  }

  function changeQuantity(id, amount) {
    const item = cart.find((cartItem) => cartItem.id === Number(id));
    if (!item) return;

    item.quantity += amount;
    if (item.quantity <= 0) {
      removeFromCart(id);
      return;
    }

    saveCart();
    renderCart();
  }

  function renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    if (!cartItems || !cartTotal) return;

    if (cart.length === 0) {
      cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío.</p>';
      cartTotal.textContent = formatPrice(0);
      return;
    }

    cartItems.innerHTML = cart
      .map(
        (item) => `
          <article class="cart-item">
            <img src="${getImagePath(item.imagen)}" alt="${item.nombre}" />
            <div class="cart-item-info">
              <h3>${item.nombre}</h3>
              <p>${formatPrice(item.precio)}</p>
              <div class="cart-item-actions">
                <button type="button" data-cart-action="decrease" data-id="${item.id}" aria-label="Quitar una unidad">−</button>
                <span>${item.quantity}</span>
                <button type="button" data-cart-action="increase" data-id="${item.id}" aria-label="Agregar una unidad">+</button>
                <button class="cart-remove" type="button" data-cart-action="remove" data-id="${item.id}">Eliminar</button>
              </div>
            </div>
          </article>
        `,
      )
      .join("");

    const total = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);
    cartTotal.textContent = formatPrice(total);
  }

  function openCart() {
    const cartPanel = document.getElementById("cartPanel");
    const cartBackdrop = document.getElementById("cartBackdrop");
    if (!cartPanel || !cartBackdrop) return;

    cartPanel.classList.add("cart-panel-open");
    cartBackdrop.hidden = false;
    cartPanel.setAttribute("aria-hidden", "false");
    document.body.classList.add("cart-is-open");
    cartButton?.setAttribute("aria-expanded", "true");
  }

  function closeCart() {
    const cartPanel = document.getElementById("cartPanel");
    const cartBackdrop = document.getElementById("cartBackdrop");
    if (!cartPanel || !cartBackdrop) return;

    cartPanel.classList.remove("cart-panel-open");
    cartBackdrop.hidden = true;
    cartPanel.setAttribute("aria-hidden", "true");
    document.body.classList.remove("cart-is-open");
    cartButton?.setAttribute("aria-expanded", "false");
  }

  function createCartPanel() {
    document.body.insertAdjacentHTML(
      "beforeend",
      `
        <div class="cart-backdrop" id="cartBackdrop" hidden></div>
        <aside class="cart-panel" id="cartPanel" aria-labelledby="cartTitle" aria-hidden="true">
          <div class="cart-panel-header">
            <h2 id="cartTitle">Tu carrito</h2>
            <button id="closeCart" type="button" aria-label="Cerrar carrito">×</button>
          </div>
          <div class="cart-items" id="cartItems"></div>
          <div class="cart-panel-footer">
            <div class="cart-total-row">
              <span>Total</span>
              <strong id="cartTotal">$0</strong>
            </div>
            <button class="cart-checkout" type="button">Solicitar presupuesto</button>
            <button class="cart-clear" id="clearCart" type="button">Vaciar carrito</button>
          </div>
        </aside>
      `,
    );

    document.getElementById("closeCart")?.addEventListener("click", closeCart);
    document.getElementById("cartBackdrop")?.addEventListener("click", closeCart);
    document.getElementById("clearCart")?.addEventListener("click", () => {
      cart = [];
      saveCart();
      renderCart();
    });
    document.querySelector(".cart-checkout")?.addEventListener("click", () => {
      if (cart.length === 0) return;

      const summary = cart
        .map((item) => `${item.nombre} x${item.quantity} - ${formatPrice(item.precio * item.quantity)}`)
        .join("\n");
      const total = cart.reduce((sum, item) => sum + item.precio * item.quantity, 0);
      const subject = encodeURIComponent("Solicitud de presupuesto - Hermanos Jota");
      const body = encodeURIComponent(
        `Hola, quisiera solicitar un presupuesto para:\n\n${summary}\n\nTotal estimado: ${formatPrice(total)}`,
      );
      window.location.href = `mailto:info@hermanosjota.com.ar?subject=${subject}&body=${body}`;
    });
    document.getElementById("cartItems")?.addEventListener("click", (event) => {
      const actionButton = event.target.closest("[data-cart-action]");
      if (!actionButton) return;

      const { cartAction, id } = actionButton.dataset;
      if (cartAction === "increase") changeQuantity(id, 1);
      if (cartAction === "decrease") changeQuantity(id, -1);
      if (cartAction === "remove") removeFromCart(id);
    });
  }

  createCartPanel();
  updateCount();
  renderCart();

  cartButton?.addEventListener("click", openCart);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCart();
  });
  document.addEventListener("click", (event) => {
    const addButton = event.target.closest(".btn-agregar-carrito, #btn-agregar");
    if (!addButton) return;

    event.preventDefault();
    addToCart(addButton.dataset.id);
  });
});
