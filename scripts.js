document.addEventListener("DOMContentLoaded", function() {
    // Verifica qué elementos están presentes en la página y ejecuta las funciones correspondientes
    if (document.getElementById('productos-container')) {
        mostrarProductos(); // Solo en productos.html
    } else if (document.getElementById('carrito-body')) {
        actualizarCarrito(); // Solo en carrito.html
    }
    
    // Actualiza el carrito en otras páginas si el carrito está en la barra de navegación
    actualizarCarrito(); 
});

// Mostrar todos los productos en productos.html
function mostrarTodos() {
    mostrarProductos();
}

// Mostrar todos los productos en productos.html
function mostrarProductos() {
    const productosContainer = document.getElementById('productos-container');
    if (!productosContainer) {
        console.error('No se encontró el contenedor de productos');
        return;
    }
    
    const vinosArray = Object.values(vinos);
    if (vinosArray.length === 0) {
        console.error('No se encontraron vinos en el array');
        return;
    }
    
    let innerHTML = '';
    for (let vino of vinosArray) {
        innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${vino.imagen}" class="card-img-top" alt="${vino.nombre}" data-bs-toggle="modal" data-bs-target="#productModal" onclick="mostrarDetalles('${vino.nombre}', '${vino.imagen}', '${vino.descripcionExtendida}', '${vino.precio.toFixed(2)}')">
                    <div class="card-body">
                        <h5 class="card-title">${vino.nombre}</h5>
                        <p class="card-text">${vino.descripcion}</p>
                        <p class="card-text">$${vino.precio.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${vino.id})">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        `;
    }
    productosContainer.innerHTML = innerHTML;
}

// Filtrar productos por categoría
function filtrarPorCategoria(categoria) {
    const productosContainer = document.getElementById('productos-container');
    if (!productosContainer) {
        console.error('No se encontró el contenedor de productos');
        return;
    }
    
    const vinosArray = Object.values(vinos).filter(vino => vino.categoria === categoria);
    if (vinosArray.length === 0) {
        console.error(`No se encontraron vinos en la categoría: ${categoria}`);
        return;
    }
    
    let innerHTML = '';
    for (let vino of vinosArray) {
        innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${vino.imagen}" class="card-img-top" alt="${vino.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${vino.nombre}</h5>
                        <p class="card-text">${vino.descripcion}</p>
                        <p class="card-text">$${vino.precio.toFixed(2)}</p>
                        <button class="btn btn-primary" onclick="agregarAlCarrito(${vino.id})">Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        `;
    }
    productosContainer.innerHTML = innerHTML;
}


// Agregar un producto al carrito
function agregarAlCarrito(id) {
    console.log(`Agregar al carrito: ${id}`);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    if (carrito[id]) {
        carrito[id].cantidad += 1;
    } else {
        carrito[id] = {
            id: id,
            ...vinos[id],
            cantidad: 1
        };
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Actualizar el carrito en productos.html también
    actualizarCarrito(); // Actualiza en productos.html para verificar
}

function actualizarCarrito() {
    console.log('Actualizar carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || {};
    const carritoContainer = document.getElementById('carrito-body');
    const carritoVacio = document.getElementById('carrito-vacio');
    const carritoTable = document.querySelector('.table-responsive');
    const totalProductosNav = document.getElementById('total-productos-nav');
    const totalPrecioNav = document.getElementById('total-monto-nav');
    const totalProductos = document.getElementById('carrito-total');
    const totalPrecio = document.getElementById('carrito-total');

    let innerHTML = '';
    let total = 0;
    let cantidad = 0;

    for (let id in carrito) {
        const vino = carrito[id];
        total += vino.precio * vino.cantidad;
        cantidad += vino.cantidad;
        innerHTML += `
            <tr>
                <td>${vino.nombre}</td>
                <td>$${vino.precio.toFixed(2)}</td>
                <td>${vino.cantidad}</td>
                <td>$${(vino.precio * vino.cantidad).toFixed(2)}</td>
                <td><button class="btn btn-danger" onclick="eliminarDelCarrito(${vino.id})">Eliminar</button></td>
            </tr>
        `;
    }

    if (carritoContainer) {
        carritoContainer.innerHTML = innerHTML;
    }

    if (totalProductosNav) {
        totalProductosNav.textContent = cantidad;
    }

    if (totalPrecioNav) {
        totalPrecioNav.textContent = total.toFixed(2);
    }

    if (totalProductos) {
        totalProductos.textContent = cantidad;
    }

    if (totalPrecio) {
        totalPrecio.textContent = total.toFixed(2);
    }

    // Mostrar/Ocultar elementos según el contenido del carrito
    if (Object.keys(carrito).length === 0) {
        carritoVacio.classList.remove('d-none');
        carritoTable.classList.add('d-none');
    } else {
        carritoVacio.classList.add('d-none');
        carritoTable.classList.remove('d-none');
    }
}


// Eliminar producto del carrito
// Eliminar un producto del carrito
function eliminarDelCarrito(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || {};

    if (carrito[id]) {
        // Reducir la cantidad del producto
        carrito[id].cantidad -= 1;

        // Si la cantidad llega a 0, eliminar el producto del carrito
        if (carrito[id].cantidad <= 0) {
            delete carrito[id];
        }

        // Actualizar el carrito en localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito(); // Actualizar el carrito después de eliminar un producto
    }
}


// Finalizar compra
function finalizarCompra() {
    window.location.href = 'checkout.html';
}


// Procesar checkout
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
}

// Función para cancelar el checkout y redirigir al carrito
function cancelarCheckout() {
    window.location.href = 'carrito.html';
}

// Función para mostrar detalles del producto en el modal
function mostrarDetalles(titulo, imagen, descripcionExtendida, precio) {
    // Actualiza el título del modal
    document.getElementById('modalLabel').textContent = titulo;
    
    // Actualiza la imagen del modal
    document.getElementById('modal-image').src = imagen;
    
    // Actualiza los detalles del producto
    document.getElementById('modal-details').innerHTML = `
        <p>${descripcionExtendida}</p>
        <h5>Precio: $${precio}</h5>
    `;
}

// Función para abrir el modal con la información del producto
function mostrarDetallesModal(productId) {
    const vino = vinos[productId]; // Obtener el vino con el ID proporcionado
    mostrarDetalles(vino.nombre, vino.imagen, vino.descripcionExtendida, vino.precio.toFixed(2));
    
    // Mostrar el modal
    const myModal = new bootstrap.Modal(document.getElementById('productModal'));
    myModal.show();
}


