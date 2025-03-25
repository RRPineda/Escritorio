let tiendaTecnologia = [];

window.onload = cargarDesdeLocalStorage;

function cargarArreglo() {
    let nombre = document.getElementById('nombre').value.trim();
    let codigo = document.getElementById('codigo').value.trim();
    let marca = document.getElementById('marca').value.trim();
    let precio = document.getElementById('precio').value.trim();
    let fecha = document.getElementById('fecha').value.trim();

    if (nombre === "" || codigo === "" || marca === "" || precio === "" || fecha === "") {
        alert("Debe llenar todos los campos");
        return;
    }

    tiendaTecnologia.push([nombre, codigo, marca, precio, fecha]);
    GuardarEnLocalStorage();
    limpiarCampos();
    mostrartiendaTecnologia();
}

function mostrartiendaTecnologia() {
    let tabla = document.getElementById('tiendaTecnologia');
    tabla.innerHTML = `
        <tr>
            <th>Producto</th>
            <th>Código</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Fecha</th>
        </tr>`;

    tiendaTecnologia.forEach(producto => {
        let fila = `
            <tr>
                <td>${producto[0]}</td>
                <td>${producto[1]}</td>
                <td>${producto[2]}</td>
                <td>${producto[3]}</td>
                <td>${producto[4]}</td>
            </tr>`;
        tabla.innerHTML += fila;
    });
}

function actualizartiendaTecnologia() {
    let nombreN = document.getElementById('nombre').value.trim();
    let codigoN = document.getElementById('codigo').value.trim();
    let marcaN = document.getElementById('marca').value.trim();
    let precioN = document.getElementById('precio').value.trim();
    let fechaN = document.getElementById('fecha').value.trim();

    if (nombreN === "" || codigoN === "" || marcaN === "" || precioN === "" || fechaN === "") {
        alert("Debe llenar todos los campos");
        return;
    }

    let indice = tiendaTecnologia.findIndex(prod => prod[1] === codigoN);
    if (indice !== -1) {
        tiendaTecnologia[indice] = [nombreN, codigoN, marcaN, precioN, fechaN];
        GuardarEnLocalStorage();
        limpiarCampos();
        mostrartiendaTecnologia();
        alert("El Producto ha sido actualizado correctamente");
    } else {
        alert("Producto no encontrado");
    }
}

function eliminarproducto() {
    let codigo = document.getElementById('codigo').value.trim();

    if (codigo === "") {
        alert("Debe ingresar el número de código");
        return;
    }

    let indice = tiendaTecnologia.findIndex(prod => prod[1] === codigo);
    if (indice !== -1) {
        tiendaTecnologia.splice(indice, 1);
        GuardarEnLocalStorage();
        limpiarCampos();
        mostrartiendaTecnologia();
        alert("El Producto ha sido eliminado correctamente");
    } else {
        alert("Producto no encontrado");
    }
}

function buscarproducto() {
    let codigo = document.getElementById('codigo').value.trim();
    if (codigo === "") {
        alert("Debe ingresar un código para buscar");
        return;
    }

    let productoEncontrado = tiendaTecnologia.find(prod => prod[1] === codigo);

    if (productoEncontrado) {
        // Llenar los campos con los datos del producto encontrado
        document.getElementById('nombre').value = productoEncontrado[0];
        document.getElementById('marca').value = productoEncontrado[2];
        document.getElementById('precio').value = productoEncontrado[3];
        document.getElementById('fecha').value = productoEncontrado[4];
    } else {
        alert("Producto no encontrado");
    }
}

function GuardarEnLocalStorage() {
    localStorage.setItem("tiendaTecnologia", JSON.stringify(tiendaTecnologia));
}

function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("tiendaTecnologia");
    tiendaTecnologia = datosGuardados ? JSON.parse(datosGuardados) : [];
    mostrartiendaTecnologia();
}

function limpiarCampos() {
    document.getElementById('nombre').value = "";
    document.getElementById('codigo').value = "";
    document.getElementById('marca').value = "";
    document.getElementById('precio').value = "";
    document.getElementById('fecha').value = "";
}
