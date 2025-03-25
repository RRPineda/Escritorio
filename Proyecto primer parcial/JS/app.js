let producto = [];
let ventas = [];
let compras = [];

window.onload = function () {
    cargarDesdeLocalStorage();
};

function agregarproducto() {
    
    let codigo = document.getElementById('Codigo').value;
    let articulo = document.getElementById('articulo').value;
    let cantidad = document.getElementById('Cantidad').value;
    let precio = document.getElementById('Precio').value;

    if (codigo === '' || articulo === '' || cantidad === '' || precio === '') {
        alert("Debe llenar todos los campos del producto.");
        return;
    }

    cantidad = Number(cantidad);
    precio = Number(precio);
    let total = cantidad * precio;

    // Agregar al inventario
    producto.push({ codigo, articulo, cantidad, precio, total });

    // Agregar a compras
    compras.push({ codigo, articulo, cantidad, precio, total, fecha: new Date().toLocaleString() });

    guardarEnLocalStorage();
    limpiarFormulario();
    actualizarTablas();
}

function venderProducto(index) {
    if (producto[index].cantidad > 0) {
        producto[index].cantidad--;
        producto[index].total = producto[index].cantidad * producto[index].precio;

        ventas.push({
            codigo: producto[index].codigo,
            articulo: producto[index].articulo,
            cantidad: 1,
            precio: producto[index].precio,
            total: producto[index].precio,
            fecha: new Date().toLocaleString()
        });

        guardarEnLocalStorage();
        actualizarTablas();
    } else {
        alert("¡No hay suficiente stock para vender!");
    }
}

function eliminarProducto(index, tipo) {
    if (tipo === 'producto') {
        producto.splice(index, 1);
    } else if (tipo === 'venta') {
        ventas.splice(index, 1);
    } else if (tipo === 'compra') {
        compras.splice(index, 1);
    }
    guardarEnLocalStorage();
    actualizarTablas();
}

function guardarEnLocalStorage() {
    localStorage.setItem('productos', JSON.stringify(producto));
    localStorage.setItem('ventas', JSON.stringify(ventas));
    localStorage.setItem('compras', JSON.stringify(compras));
}

function cargarDesdeLocalStorage() {
    let datosProductos = localStorage.getItem('productos');
    let datosVentas = localStorage.getItem('ventas');
    let datosCompras = localStorage.getItem('compras');

    if (datosProductos) producto = JSON.parse(datosProductos);
    if (datosVentas) ventas = JSON.parse(datosVentas);
    if (datosCompras) compras = JSON.parse(datosCompras);

    actualizarTablas();
}

function limpiarFormulario() {
    document.getElementById('Codigo').value = '';
    document.getElementById('articulo').value = '';
    document.getElementById('Cantidad').value = '';
    document.getElementById('Precio').value = '';
}

function actualizarTablas() {
    mostrarInventario();
    mostrarVentas();
    mostrarCompras();
}

function mostrarInventario() {
    let lista = document.getElementById('lista-productos');
    lista.innerHTML = '';

    producto.forEach((prod, i) => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${prod.codigo || 'Código no disponible'}</td>
            <td>${prod.articulo || 'Artículo no disponible'}</td>
            <td>${prod.cantidad || 0}</td>
            <td>${prod.precio || 0}</td>
            <td>${prod.total || 0}</td>
            <td><button onclick="venderProducto(${i})">Vender</button></td>
            <td><button onclick="eliminarProducto(${i}, 'producto')">Eliminar</button></td>
        `;
        lista.appendChild(fila);
    });
}

function mostrarVentas() {
    let lista = document.getElementById('lista-ventas');
    lista.innerHTML = '';

    ventas.forEach((venta, i) => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${venta.codigo || 'Código no disponible'}</td>
            <td>${venta.articulo || 'Artículo no disponible'}</td>
            <td>${venta.cantidad || 0}</td>
            <td>${venta.precio || 0}</td>
            <td>${venta.total || 0}</td>
            <td>${venta.fecha || 'Fecha no disponible'}</td>
            <td><button onclick="eliminarProducto(${i}, 'venta')">Eliminar</button></td>
        `;
        lista.appendChild(fila);
    });
}

function mostrarCompras() {
    let lista = document.getElementById('lista-compras');
    lista.innerHTML = '';

    compras.forEach((compra, i) => {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${compra.codigo || 'Código no disponible'}</td>
            <td>${compra.articulo || 'Artículo no disponible'}</td>
            <td>${compra.cantidad || 0}</td>
            <td>${compra.precio || 0}</td>
            <td>${compra.total || 0}</td>
            <td>${compra.fecha || 'Fecha no disponible'}</td>
            <td><button onclick="eliminarProducto(${i}, 'compra')">Eliminar</button></td>
        `;
        lista.appendChild(fila);
    });
}



