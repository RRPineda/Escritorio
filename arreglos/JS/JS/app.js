let estudiantes = [];

window.onload = cargarDesdeLocalStorage;

function cargarArreglo() {
    let nombre = document.getElementById('nombre').value.trim();
    let identidad = document.getElementById('identidad').value.trim();
    let edad = document.getElementById('edad').value.trim();
    let carrera = document.getElementById('carrera').value.trim();

    if (nombre === "" || identidad === "" || edad === "" || carrera === "") {
        alert("Debe llenar todos los campos");
        return;
    }

    estudiantes.push([nombre, identidad, edad, carrera]);
    GuardarEnLocalStorage();
    limpiarCampos();
    mostrarEstudiante();
}

function mostrarEstudiante() {
    let tabla = document.getElementById('estudiantes');
    tabla.innerHTML = `
        <tr>
            <th>Nombre</th>
            <th>Identidad</th>
            <th>Edad</th>
            <th>Carrera</th>
        </tr>`;

    estudiantes.forEach(estudiante => {
        let fila = `
            <tr>
                <td>${estudiante[0]}</td>
                <td>${estudiante[1]}</td>
                <td>${estudiante[2]}</td>
                <td>${estudiante[3]}</td>
            </tr>`;
        tabla.innerHTML += fila;
    });
}

function buscarEstudiante() {
    let busquedaID = document.getElementById('identidad').value.trim();

    if (busquedaID === "") {
        alert("Debe ingresar el número de identidad");
        return;
    }

    let encontrado = estudiantes.find(est => est[1] === busquedaID);
    if (encontrado) {
        document.getElementById('nombre').value = encontrado[0];
        document.getElementById('edad').value = encontrado[2];
        document.getElementById('carrera').value = encontrado[3];
    } else {
        alert("Estudiante no encontrado");
    }
}

function actualizarEstudiante() {
    let nombreN = document.getElementById('nombre').value.trim();
    let identidadN = document.getElementById('identidad').value.trim();
    let edadN = document.getElementById('edad').value.trim();
    let carreraN = document.getElementById('carrera').value.trim();

    if (nombreN === "" || identidadN === "" || edadN === "" || carreraN === "") {
        alert("Debe llenar todos los campos");
        return;
    }

    let indice = estudiantes.findIndex(est => est[1] === identidadN);
    if (indice !== -1) {
        estudiantes[indice] = [nombreN, identidadN, edadN, carreraN];
        GuardarEnLocalStorage();
        limpiarCampos();
        mostrarEstudiante();
        alert("El estudiante ha sido actualizado correctamente");
    } else {
        alert("Estudiante no encontrado");
    }
}

function eliminarEstudiante() {
    let identidad = document.getElementById('identidad').value.trim();

    if (identidad === "") {
        alert("Debe ingresar el número de identidad");
        return;
    }

    let indice = estudiantes.findIndex(est => est[1] === identidad);
    if (indice !== -1) {
        estudiantes.splice(indice, 1);
        GuardarEnLocalStorage();
        limpiarCampos();
        mostrarEstudiante();
        alert("El estudiante ha sido eliminado correctamente");
    } else {
        alert("Estudiante no encontrado");
    }
}

function GuardarEnLocalStorage() {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function cargarDesdeLocalStorage() {
    let datosGuardados = localStorage.getItem("estudiantes");
    estudiantes = datosGuardados ? JSON.parse(datosGuardados) : [];
    mostrarEstudiante();
}

function limpiarCampos() {
    document.getElementById('nombre').value = "";
    document.getElementById('identidad').value = "";
    document.getElementById('edad').value = "";
    document.getElementById('carrera').value = "";
}
