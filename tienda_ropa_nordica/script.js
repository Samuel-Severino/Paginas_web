// Nørdic — view switching + entrance

document.addEventListener("DOMContentLoaded", () => {
  const tabHome = document.getElementById("cc-tab-home");
  const tabShop = document.getElementById("cc-tab-shop");
  const viewHome = document.getElementById("view-home");
  const viewShop = document.getElementById("view-shop");

  function showHome() {
    viewShop.classList.remove("is-active");
    viewShop.setAttribute("hidden", "");
    viewHome.classList.remove("is-hidden");
    viewHome.removeAttribute("hidden");
  }

  function showShop() {
    viewHome.classList.add("is-hidden");
    viewShop.removeAttribute("hidden");
    // force reflow so transition runs
    void viewShop.offsetWidth;
    viewShop.classList.add("is-active");
  }

  tabHome.addEventListener("change", () => {
    if (tabHome.checked) showHome();
  });

  tabShop.addEventListener("change", () => {
    if (tabShop.checked) showShop();
  });

  // —— Brands nav & Filtering ——
  const brandButtons = document.querySelectorAll(".brands-nav__item");
  const productCards = document.querySelectorAll(".product-card");

  brandButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 1. Cambiar estado activo visual de los botones
      brandButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      // 2. Obtener la marca seleccionada
      const selectedBrand = btn.getAttribute("data-brand");
      console.log(`Nørdic → Marca: ${selectedBrand}`);

      // 3. Filtrar los productos
      productCards.forEach((card) => {
        const cardBrand = card.getAttribute("data-brand");

        if (selectedBrand === "all" || cardBrand === selectedBrand) {
          card.style.display = "flex"; // Muestra el producto conservando su estructura flex
        } else {
          card.style.display = "none";  // Oculta el producto que no coincide
        }
      });
    });
  });

  // Soft entrance on load (Home)
  const title = document.querySelector(".hero__title");
  const subtitle = document.querySelector(".hero__subtitle");
  const description = document.querySelector(".hero__description");

  const animateIn = (el, delay = 0, targetOpacity = 1) => {
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = `opacity 900ms ${delay}ms cubic-bezier(0.22, 1, 0.36, 1), transform 900ms ${delay}ms cubic-bezier(0.22, 1, 0.36, 1)`;
    requestAnimationFrame(() => {
      el.style.opacity = String(targetOpacity);
      el.style.transform = "translateY(0)";
    });
  };

  animateIn(title, 0, 1);
  animateIn(subtitle, 160, 0.9);
  animateIn(description, 320, 0.78);
});