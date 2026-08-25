// ===== Toggle del menú móvil =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // Cerrar menú al hacer clic en un enlace (móvil)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // ===== Smooth scroll con offset para navbar fija =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top +
  window.pageYOffset - 72;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ===== Animación de aparición al hacer scroll =====
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(
    '.section-head, .card, .fleet-card, .dest-card, .tier, .metric,.contact-card, .hero-card').forEach(el => {  el.classList.add('reveal');  observer.observe(el);});

  // ===== Efecto sutil en navbar al hacer scroll =====
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.style.boxShadow = '0 4px 20px rgba(31, 84, 184, 0.08)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  // ===== Actualizar año en el footer (opcional, si lo añades al HTML)
  const footerYear = document.querySelector('.footer p');
  if (footerYear) {
    footerYear.textContent = `© ${new Date().getFullYear()} AeroNova
  Airlines. Todos los derechos reservados.`;
  }