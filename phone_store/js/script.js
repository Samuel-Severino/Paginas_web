const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const btnArticulos = document.getElementById('btn-articulos');
const btnHome = document.getElementById('btn-home');
const btnUltimate = document.getElementById('btn-ultimate');
const btnPedido = document.getElementById('btn-pedido');
const titulo = document.querySelector('.hero-title');
const body = document.querySelector('body');
const buscador = document.querySelector('.input-container');
const productSection = document.getElementById('product-section');
const ultimateSection = document.getElementById('ultimate-section');
const pedidoSection = document.getElementById('pedido-section');

// Elementos del pedido
const pedidoImg = document.getElementById('pedido-img');
const pedidoPlaceholder = document.getElementById('pedido-placeholder');
const pedidoTitle = document.getElementById('pedido-title');
const pedidoPrice = document.getElementById('pedido-price');
const pedidoFeatures = document.getElementById('pedido-features');

// Control del menú hamburguesa
menuToggle.addEventListener('change', () => {
    sidebar.classList.toggle('active', menuToggle.checked);
});

// Función auxiliar para cerrar el menú
function cerrarMenu() {
    sidebar.classList.remove('active');
    menuToggle.checked = false;
}

// Función para ocultar todas las secciones
function ocultarTodo() {
    buscador.classList.remove('show');
    if (productSection) productSection.style.display = 'none';
    if (ultimateSection) ultimateSection.style.display = 'none';
    if (pedidoSection) pedidoSection.style.display = 'none';
}

// Función para mostrar placeholder (sin producto)
function mostrarPlaceholder() {
    pedidoImg.style.display = 'none';
    pedidoImg.src = '';
    pedidoPlaceholder.style.display = 'flex';

    pedidoTitle.textContent = 'Selecciona un producto';
    pedidoPrice.textContent = '—';
    pedidoFeatures.innerHTML = `
        <p>Haz clic en el botón <strong>COMPRAR</strong> de cualquier producto en ARTÍCULOS para ver aquí el detalle de tu pedido.</p>
    `;
}

// Función para mostrar producto seleccionado
function mostrarProducto(imgSrc, title, price, features) {
    // Ocultar placeholder y mostrar imagen
    pedidoPlaceholder.style.display = 'none';
    pedidoImg.style.display = 'block';
    pedidoImg.src = imgSrc;
    pedidoImg.alt = title;

    // Rellenar datos
    pedidoTitle.textContent = title;
    pedidoPrice.textContent = price;

    let featuresHTML = '<ul>';
    features.forEach(f => {
        featuresHTML += `<li>${f}</li>`;
    });
    featuresHTML += '</ul>';
    featuresHTML += `<p style="margin-top:18px; opacity:0.8;">Producto de alta gama seleccionado desde AURA. Envío prioritario y garantía oficial incluida.</p>`;

    pedidoFeatures.innerHTML = featuresHTML;
}

// Cambiar a vista ARTICULOS
btnArticulos.addEventListener('click', () => {
    body.classList.remove('bg-ultimate', 'bg-pedido');
    body.classList.add('bg-articulos');
    titulo.textContent = 'ARTICULOS';

    ocultarTodo();
    buscador.classList.add('show');
    if (productSection) productSection.style.display = 'flex';

    cerrarMenu();
});

// Cambiar a vista ULTIMATE
btnUltimate.addEventListener('click', () => {
    body.classList.remove('bg-articulos', 'bg-pedido');
    body.classList.add('bg-ultimate');
    titulo.textContent = 'ULTIMATE';

    ocultarTodo();
    if (ultimateSection) ultimateSection.style.display = 'flex';

    cerrarMenu();
});

// Cambiar a vista HAS TU PEDIDO (desde el menú)
btnPedido.addEventListener('click', () => {
    body.classList.remove('bg-articulos', 'bg-ultimate');
    body.classList.add('bg-pedido');
    titulo.textContent = 'HAS TU PEDIDO';

    ocultarTodo();
    if (pedidoSection) pedidoSection.style.display = 'block';

    // Si no hay imagen cargada, mostrar placeholder
    if (!pedidoImg.src || pedidoImg.getAttribute('src') === '') {
        mostrarPlaceholder();
    }

    cerrarMenu();
});

// Regresar a la vista HOME
btnHome.addEventListener('click', () => {
    body.classList.remove('bg-articulos', 'bg-ultimate', 'bg-pedido');
    titulo.textContent = 'AURA';

    ocultarTodo();
    cerrarMenu();
});

// ============================================
// LÓGICA DE LOS BOTONES COMPRAR
// ============================================
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const productItem = btn.closest('.product-item');
        if (!productItem) return;

        const imgSrc = productItem.querySelector('.product-img').src;
        const title = productItem.querySelector('h2').textContent;
        const price = productItem.querySelector('.price').textContent;
        const features = Array.from(productItem.querySelectorAll('ul li')).map(li => li.textContent);

        // Mostrar el producto seleccionado
        mostrarProducto(imgSrc, title, price, features);

        // Cambiar a la vista HAS TU PEDIDO
        body.classList.remove('bg-articulos', 'bg-ultimate');
        body.classList.add('bg-pedido');
        titulo.textContent = 'HAS TU PEDIDO';

        ocultarTodo();
        if (pedidoSection) pedidoSection.style.display = 'block';

        cerrarMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});