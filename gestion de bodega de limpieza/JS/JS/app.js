function calcular() {
    let productoSeleccionado = document.getElementById("producto").value;
    let cantidad = parseInt(document.getElementById("cantidad").value) || 0;
    let precioUnitario = precios[productoSeleccionado] || 0;
    let total = precioUnitario * cantidad;
    document.getElementById("total").value = total;
}


const precios = {
    "detergente": 40,
    "detergente liquido": 45,
    "escoba": 60,
    "trapeador": 200,
    "cepillo": 42,
    "desinfectante": 100,
    "jabon_mano": 100,
    "jabon": 30,
    "pastillas": 25
};

function limpiarCampos() {
    document.getElementById("encargado").value = "";
    document.getElementById("empleado").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("producto").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("total").value = "";
}

function guardar() {
    let nombre = document.getElementById("encargado").value;
    let empleado = document.getElementById("empleado").value;
    let fecha = document.getElementById("fecha").value;
    let compra = document.getElementById("producto").value;
    let cantidad = document.getElementById("cantidad").value;
    let total = document.getElementById("total").value;

    let tabla = document.getElementById("tablaVenta");
    let nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${nombre}</td>
        <td>${empleado}</td>
        <td>${fecha}</td>
        <td>${compra}</td>
        <td>${cantidad}</td>
        <td>${total}</td>
    `;
    tabla.appendChild(nuevaFila);

    limpiarCampos();
}
