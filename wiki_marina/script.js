// =========================================
  //  Vida Marina · Wiki
  //  Interacciones mínimas y profesionales
  // =========================================

  (() => {
    "use strict";

    /* ---------- Navbar: sombra al hacer scroll ---------- */
    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      if (window.scrollY > 12) navbar.classList.add("is-scrolled");
      else navbar.classList.remove("is-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Menú móvil ---------- */
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");

    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("is-open");
        navLinks.classList.toggle("is-open");
      });

      navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          navToggle.classList.remove("is-open");
          navLinks.classList.remove("is-open");
        });
      });
    }

    /* ---------- FAQ: solo una abierta a la vez ---------- */
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item) => {
      item.addEventListener("toggle", () => {
        if (item.open) {
          faqItems.forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      });
    });

    /* ---------- Animación de aparición al hacer scroll ---------- */
    const revealSelector =
      ".section-head, .card, .feature, .ecosystem, .tip, .faq-item, .intro-image, .intro-content";
    const revealEls = document.querySelectorAll(revealSelector);

    revealEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );

      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }

    /* ---------- Año automático en el footer ---------- */
    const footerBottom = document.querySelector(".footer-bottom p");
    if (footerBottom) {
      footerBottom.textContent =
        `© ${new Date().getFullYear()} Vida Marina · Hecho con respeto por el océano.`;
    }
  })();