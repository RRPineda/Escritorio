function enviarDatos() {
    let Nombre = document.getElementById('Nombre').value;
    let Apellidos = document.getElementById('Apellidos').value;
    let Email = document.getElementById('Email').value;
    let Asunto = document.getElementById('Asunto').value;
    let Mensaje = document.getElementById('Mensaje').value;


    let tabla = document.getElementById('tablaPersonas'); // Obtener la tabla
    let nuevaFila = `
    <tr>
        <td>${Nombre}</td>
        <td>${Apellidos}</td>
        <td>${Email}</td>
        <td>${Asunto}</td>
        <td>${Mensaje}</td>
    </tr>`;

    // Agregar la nueva fila sin borrar las anteriores
    tabla.innerHTML += nuevaFila;

    // Limpiar los campos después de enviar
    document.getElementById('Nombre').value = '';
    document.getElementById('Apellidos').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Asunto').value = '';
    document.getElementById('Mensaje').value = '';
}
