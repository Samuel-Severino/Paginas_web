document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".value");
  const sections = document.querySelectorAll(".page-section");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.getAttribute("data-target");

      // 1. Alternar clase active en los botones del nav
      navButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // 2. Ocultar todas las secciones y mostrar la elegida
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === targetId) {
          section.classList.add("active");
        }
      });
    });
  });
});