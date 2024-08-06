document.addEventListener("DOMContentLoaded", function() {
    // Ejecutar funciones específicas basadas en la página actual
    if (document.getElementById('productos-container')) {
        mostrarProductos();
    }

    if (document.getElementById('carrito-body')) {
        actualizarCarrito();
    }

    // Actualizar el carrito en otras páginas si el carrito está en la barra de navegación
    actualizarCarrito();
});

// Arreglo para almacenar los productos del carrito
let carrito = [];

// Función para mostrar los productos en la página
function mostrarProductos() {
    const productosContainer = document.getElementById('productos-container');
    const vinosArray = Object.values(vinos);

    if (!productosContainer) {
        console.error('No se encontró el contenedor de productos');
        return;
    }

    if (vinosArray.length === 0) {
        console.error('No se encontraron vinos en el array');
        return;
    }

    productosContainer.innerHTML = '';

    vinosArray.forEach(vino => {
        let divCol = crearColumnaProducto(vino);
        productosContainer.appendChild(divCol);
    });
}

// Función para crear la columna de un producto
function crearColumnaProducto(vino) {
    let divCol = document.createElement('div');
    divCol.classList.add('col-md-4', 'mb-4');

    let divCard = document.createElement('div');
    divCard.classList.add('card');

    let img = crearImagenProducto(vino);
    let divCardBody = crearCardBodyProducto(vino);

    divCard.appendChild(img);
    divCard.appendChild(divCardBody);

    divCol.appendChild(divCard);
    return divCol;
}

// Función para crear la imagen del producto
function crearImagenProducto(vino) {
    let img = document.createElement('img');
    img.src = vino.imagen;
    img.classList.add('card-img-top');
    img.alt = vino.nombre;
    img.setAttribute('data-bs-toggle', 'modal');
    img.setAttribute('data-bs-target', '#productModal');
    img.onclick = function() {
        mostrarDetalles(vino.nombre, vino.imagen, vino.descripcionExtendida, vino.precio.toFixed(2));
    };
    return img;
}

// Función para crear el cuerpo de la tarjeta del producto
function crearCardBodyProducto(vino) {
    let divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');

    let h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = vino.nombre;

    let p1 = document.createElement('p');
    p1.classList.add('card-text');
    p1.textContent = vino.descripcion;

    let p2 = document.createElement('p');
    p2.classList.add('card-text');
    p2.textContent = `$${vino.precio.toFixed(2)}`;

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Agregar al Carrito';
    button.onclick = function() {
        agregarAlCarrito(vino.id);
    };

    divCardBody.appendChild(h5);
    divCardBody.appendChild(p1);
    divCardBody.appendChild(p2);
    divCardBody.appendChild(button);

    return divCardBody;
}

// Función para filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    const productosContainer = document.getElementById('productos-container');
    const vinosArray = Object.values(vinos);

    if (!productosContainer) {
        console.error('No se encontró el contenedor de productos');
        return;
    }

    productosContainer.innerHTML = '';

    vinosArray
        .filter(vino => categoria === 'Todos' || vino.categoria === categoria)
        .forEach(vino => {
            let divCol = crearColumnaProducto(vino);
            productosContainer.appendChild(divCol);
        });

    // Mostrar la oferta especial cuando se cambia de categoría
    mostrarOfertaEspecial(categoria);
}

// Función para mostrar todos los productos
function mostrarTodos() {
    filtrarPorCategoria('Todos');
}

// Función para mostrar los detalles de un producto en el modal
function mostrarDetalles(titulo, imagen, descripcionExtendida, precio) {
    document.getElementById('modalLabel').textContent = titulo;
    document.getElementById('modal-image').src = imagen;
    document.getElementById('modal-details').innerHTML = `
        <p>${descripcionExtendida}</p>
        <h5>Precio: $${precio}</h5>
    `;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = vinos[id];  // Asumimos que vinos[id] nos da el producto
    const existente = carrito.find(item => item.id === id);

    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();  // Actualizar el modal del carrito
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    const carritoBody = document.getElementById('carrito-body');
    const totalProductosNav = document.getElementById('total-productos-nav');
    const totalMontoNav = document.getElementById('total-monto-nav');

    if (!carritoBody) {
        console.error('No se encontró el cuerpo del carrito');
        return;
    }

    carritoBody.innerHTML = '';

    if (carrito.length === 0) {
        carritoBody.innerHTML = '<p>El carrito está vacío.</p>';
        totalProductosNav.textContent = '0';
        totalMontoNav.textContent = '0.00';
        return;
    }

    let total = 0;
    let cantidadTotal = 0;

    carrito.forEach(item => {
        let divRow = crearFilaCarrito(item);
        carritoBody.appendChild(divRow);

        total += item.precio * item.cantidad;
        cantidadTotal += item.cantidad;
    });

    // Mostrar la cantidad total y el total en el carrito y en la barra de navegación
    totalProductosNav.textContent = cantidadTotal;
    totalMontoNav.textContent = total.toFixed(2);
}

// Función para crear una fila en el carrito
function crearFilaCarrito(item) {
    let divRow = document.createElement('div');
    divRow.classList.add('row', 'mb-2', 'align-items-center');

    let divColLeft = document.createElement('div');
    divColLeft.classList.add('col-md-8');

    let p = document.createElement('p');
    p.textContent = `${item.nombre} - Cantidad: ${item.cantidad}`;
    divColLeft.appendChild(p);

    let divColRight = document.createElement('div');
    divColRight.classList.add('col-md-3', 'text-end');

    let pPrice = document.createElement('p');
    pPrice.textContent = `$${(item.precio * item.cantidad).toFixed(2)}`;
    divColRight.appendChild(pPrice);

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-danger', 'btn-sm');
    button.textContent = 'Eliminar';
    button.onclick = function() {
        eliminarDelCarrito(item.id);
    };

    // Columna para el botón de eliminar
    let divColButton = document.createElement('div');
    divColButton.classList.add('col-md-1', 'text-end');
    divColButton.appendChild(button);

    divRow.appendChild(divColLeft);
    divRow.appendChild(divColRight);
    divRow.appendChild(divColButton);

    return divRow;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(id) {
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        if (producto.cantidad > 1) {
            producto.cantidad -= 1;
        } else {
            carrito = carrito.filter(item => item.id !== id);
        }
        actualizarCarrito();
    }
}

// HTML para el modal de checkout
const modalHTML = `
<div class="modal fade" id="checkoutModal" tabindex="-1" aria-labelledby="checkoutModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="checkoutModalLabel">Detalles de Compra</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="checkout-form">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" required>
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">Teléfono</label>
                        <input type="tel" class="form-control" id="telefono" required>
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" required>
                    </div>
                    <div class="mb-3">
                        <label for="direccion" class="form-label">Dirección</label>
                        <input type="text" class="form-control" id="direccion" required>
                    </div>
                    <div class="mb-3">
                        <label for="fecha-entrega" class="form-label">Fecha de Entrega</label>
                        <input type="date" class="form-control" id="fecha-entrega" required>
                    </div>
                    <div class="mb-3">
                        <label for="metodo-pago" class="form-label">Método de Pago</label>
                        <select class="form-control" id="metodo-pago" required>
                            <option value="tarjeta">Tarjeta de Crédito</option>
                            <option value="efectivo">Efectivo</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="cuotas" class="form-label">Cuotas (si aplica)</label>
                        <input type="number" class="form-control" id="cuotas">
                    </div>
                    <button type="button" class="btn btn-primary" onclick="procesarCheckout()">Procesar Compra</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                </form>
            </div>
        </div>
    </div>
</div>
`;

// Función para mostrar el modal de checkout
function showCheckoutModal() {
    // Crear el contenedor del modal
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;

    // Añadir el modal al body
    document.body.appendChild(modalContainer);

    // Inicializar el modal con Bootstrap
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();

    // Limpiar el modal después de que se haya cerrado
    document.getElementById('checkoutModal').addEventListener('hidden.bs.modal', function () {
        document.body.removeChild(modalContainer);
    });
}

// Asignar el evento al botón de finalizar compra
document.getElementById('finalizarCompraBtn').addEventListener('click', showCheckoutModal);

// Función para procesar la compra
function procesarCheckout() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const fechaEntrega = document.getElementById('fecha-entrega').value;
    const metodoPago = document.getElementById('metodo-pago').value;
    const cuotas = document.getElementById('cuotas').value;

    if (!nombre || !telefono || !email || !direccion || !fechaEntrega || !metodoPago) {
        alert('Por favor complete todos los campos obligatorios.');
        return;
    }

    console.log(`Nombre: ${nombre}, Teléfono: ${telefono}, Email: ${email}, Dirección: ${direccion}, Fecha de Entrega: ${fechaEntrega}, Método de Pago: ${metodoPago}, Cuotas: ${cuotas}`);

    alert('Compra realizada con éxito!');

    // Limpiar el carrito después del proceso de compra (opcional)
    localStorage.removeItem('carrito');
    actualizarCarrito(); // Actualizar la visualización del carrito en la página actual

    // Cerrar el modal de checkout
    const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    checkoutModal.hide();
}

// Función para mostrar el banner flotante con la oferta especial
function mostrarOfertaEspecial(categoria) {
    const offerBanner = document.getElementById('offer-banner');
    const offerText = document.getElementById('offer-text');

    // Definir el mensaje de la oferta especial basado en la categoría
    let mensajeOferta = `🎉 ¡OFERTA EXCLUSIVA! Obtén un 10% de descuento en efectivo o paga en 3 cuotas sin interés. ¡Aprovecha ahora en nuestra sección de ${categoria}! 🛒`;

    // Actualizar el texto del banner
    offerText.innerHTML = mensajeOferta;
    offerBanner.classList.remove('d-none'); // Mostrar el banner

    // Ocultar el banner después de 10 segundos
    setTimeout(() => {
        offerBanner.classList.add('d-none'); // Ocultar el banner
    }, 10000); // 10000 ms = 10 segundos
}
