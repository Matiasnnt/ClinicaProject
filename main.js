document.addEventListener('DOMContentLoaded', function() {
    // Array de ejemplo con turnos
    var turnos = [
        { paciente: 'Paciente 1', fecha: '2023-12-15', hora: '10:00' },
        { paciente: 'Paciente 2', fecha: '2023-12-16', hora: '14:30' },
        // Agrega más turnos según sea necesario
    ];

    // Función para mostrar los turnos en una tabla
    function mostrarTurnos() {
        var tablaTurnos = '<table class="table table-striped"><thead><tr><th>Paciente</th><th>Fecha</th><th>Hora</th></tr></thead><tbody>';

        // Itera sobre los turnos y construye las filas de la tabla
        turnos.forEach(function(turno) {
            tablaTurnos += `<tr><td>${turno.paciente}</td><td>${turno.fecha}</td><td>${turno.hora}</td></tr>`;
        });

        tablaTurnos += '</tbody></table>';

        // Muestra la tabla en algún contenedor específico (puedes ajustar esto según tu diseño)
        document.getElementById('contenidoTurnos').innerHTML = tablaTurnos;

        // Muestra la sección de turnos
        document.getElementById('panelTurnos').style.display = 'block';
    }

    
});
