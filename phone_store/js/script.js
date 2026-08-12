const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const btnArticulos = document.getElementById('btn-articulos');
const btnHome = document.getElementById('btn-home');
const btnUltimate = document.getElementById('btn-ultimate');
const titulo = document.querySelector('.hero-title');
const body = document.querySelector('body');
const buscador = document.querySelector('.input-container'); 
const productSection = document.getElementById('product-section');
const ultimateSection = document.getElementById('ultimate-section');

// Control del menú hamburguesa
menuToggle.addEventListener('change', () => {
    sidebar.classList.toggle('active', menuToggle.checked);
});

// Función auxiliar para cerrar el menú
function cerrarMenu() {
    sidebar.classList.remove('active');
    menuToggle.checked = false;
}

// Cambiar a vista ARTICULOS
btnArticulos.addEventListener('click', () => {
    body.classList.remove('bg-ultimate');
    body.classList.add('bg-articulos');
    titulo.textContent = 'ARTICULOS';
    
    // Mostrar buscador y productos / ocultar noticias
    buscador.classList.add('show');
    if (productSection) productSection.style.display = 'flex';
    if (ultimateSection) ultimateSection.style.display = 'none';
    
    cerrarMenu();
});

// Cambiar a vista ULTIMATE
btnUltimate.addEventListener('click', () => {
    body.classList.remove('bg-articulos');
    body.classList.add('bg-ultimate');
    titulo.textContent = 'ULTIMATE';
    
    // Ocultar buscador y productos / mostrar noticias
    buscador.classList.remove('show');
    if (productSection) productSection.style.display = 'none';
    if (ultimateSection) ultimateSection.style.display = 'flex';
    
    cerrarMenu();
});

// Regresar a la vista HOME
btnHome.addEventListener('click', () => {
    body.classList.remove('bg-articulos');
    body.classList.remove('bg-ultimate');
    titulo.textContent = 'AURA';
    
    // Ocultar todo
    buscador.classList.remove('show');
    if (productSection) productSection.style.display = 'none';
    if (ultimateSection) ultimateSection.style.display = 'none';
    
    cerrarMenu();
});