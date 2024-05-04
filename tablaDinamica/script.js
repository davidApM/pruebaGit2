// Función para agregar un elemento a la tabla
function agregarElemento() {
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;

    // Validar que se ingresen todos los campos
    if (nombre && apellido && telefono && email) {
        // Crear nueva fila
        var table = document.getElementById('miTabla').getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        
        // Insertar celdas en la nueva fila
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4); // Celda para los botones de acción

        // Agregar datos a las celdas
        cell1.innerHTML = nombre;
        cell2.innerHTML = apellido;
        cell3.innerHTML = telefono;
        cell4.innerHTML = email;
        
        // Crear los botones de modificar y eliminar
        var modificarBtn = document.createElement('button');
        modificarBtn.textContent = 'Modificar';
        modificarBtn.onclick = function() { modificarElemento(this); };
        
        var eliminarBtn = document.createElement('button');
        eliminarBtn.textContent = 'Eliminar';
        eliminarBtn.onclick = function() { eliminarElemento(this); };

        // Agregar los botones a la celda de acciones
        cell5.appendChild(modificarBtn);
        cell5.appendChild(eliminarBtn);

        // Limpiar el formulario después de agregar el elemento
        document.getElementById('formulario').reset();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

// Función para modificar los datos de una fila
function modificarElemento(button) {
    var row = button.parentNode.parentNode; // Obtener la fila actual
    var cells = row.getElementsByTagName('td'); // Obtener las celdas de la fila

    // Mostrar los datos actuales en el formulario
    document.getElementById('nombre').value = cells[0].innerHTML;
    document.getElementById('apellido').value = cells[1].innerHTML;
    document.getElementById('telefono').value = cells[2].innerHTML;
    document.getElementById('email').value = cells[3].innerHTML;

    // Eliminar la fila actual
    row.parentNode.removeChild(row);
}

// Función para eliminar un elemento de la tabla
function eliminarElemento(button) {
    if (confirm('¿Estás seguro de que deseas eliminar este elemento?')) {
        var row = button.parentNode.parentNode; // Obtener la fila actual
        row.parentNode.removeChild(row); // Eliminar la fila
    }
}
