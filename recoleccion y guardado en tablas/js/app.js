function agregarDatos(){
    //recolectar informacion 
    let nombre =prompt("Ingresa tu Nombre");
    edad =prompt("Ingresa tu Edad");
    //apuntar a la tabla creada a traves de un ID
    let Tabla = document.getElementById('tablaPersonas');
    //crear una nueva fila (tr)
   // let fila=tabla.insertrow(-1)
    //let celda1=tabla.insertcell(0)
    //let celda2=tabla.insertcell(0)

    let fila=""
    //asignar texto a las tablas 
    fila+=`
    <tr><td>${nombre}</td><td>${edad}</td></td></tr>`
   Tabla.innerHTML+=fila;
    
   
   
}