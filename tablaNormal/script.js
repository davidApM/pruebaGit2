// Obtener referencia al botón "Agregar"
var agregarBtn = document.getElementById('agregarBtn');

// Agregar un evento de clic al botón "Agregar"
agregarBtn.addEventListener('click', function() {
    // Mostrar una ventana de confirmación
    var confirmacion = confirm('¿Estás seguro de que quieres agregar un elemento?');
    
    // Verificar si el usuario confirmó
    if (confirmacion) {
        // Aquí puedes agregar la lógica para agregar un elemento a la tabla
        alert('Elemento agregado correctamente.');
    } else {
        alert('No se ha agregado ningún elemento.');
    }
});

var eliminarBtn = document.getElementById('eliminarBtn'); 

eliminarBtn.addEventListener('click', function(){
    // Mostrar una ventana de confirmación
     var confirmacion = confirm('¿Estás seguro de que quieres eliminar un elemento?');
    
     // Verificar si el usuario confirmó
     if (confirmacion) {
         // Aquí puedes agregar la lógica para agregar un elemento a la tabla
         alert('Elemento eliminado correctamente.');
     } else {
         alert('No se ha eliminado ningún elemento.');
     }

})
