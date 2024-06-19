function calcularRA() {
    const probabilidad = parseInt(document.getElementById('probabilidad').value);
    const consecuencia = parseInt(document.getElementById('consecuencia').value);
    const ra = probabilidad * consecuencia;

    document.getElementById('ra').value = ra;

    const severidad = document.getElementById('severidad');

    // Reset severidad styles
    severidad.className = 'severidad';

    // Validar y asignar el color de fondo y el texto a severidad
    if (probabilidad === 1 && consecuencia === 1) {
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>4%';

    } else if (probabilidad === 1 && consecuencia === 2){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>8%';

    } else if (probabilidad === 1 && consecuencia === 3){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>16%';

    } else if (probabilidad === 1 && consecuencia === 4){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>28%';

    } else if (probabilidad === 1 && consecuencia === 5){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>44%';

	//cambio de mapa de calor
    } else if (probabilidad === 2 && consecuencia === 1){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>12%';

    } else if (probabilidad === 2 && consecuencia === 2){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'B<br>20%';

    } else if (probabilidad === 2 && consecuencia === 3){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>32%';

    } else if (probabilidad === 2 && consecuencia === 4){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>48%';

    } else if (probabilidad === 2 && consecuencia === 5){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'A<br>64%';

	//cambio de mapa de calor
    } else if (probabilidad === 3 && consecuencia === 1){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>24%';

    } else if (probabilidad === 3 && consecuencia === 2){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>36%';

    } else if (probabilidad === 3 && consecuencia === 3){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>52%';

    } else if (probabilidad === 3 && consecuencia === 4){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>68%';

    } else if (probabilidad === 3 && consecuencia === 5){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>80%';

	//cambio de mapa de calor
    } else if (probabilidad === 4 && consecuencia === 1){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>40%';

    } else if (probabilidad === 4 && consecuencia === 2){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>56%';

    } else if (probabilidad === 4 && consecuencia === 3){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>72%';

    } else if (probabilidad === 4 && consecuencia === 4){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>84%';

    } else if (probabilidad === 4 && consecuencia === 5){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>92%';

	//cambio de mapa de calor
    } else if (probabilidad === 5 && consecuencia === 1){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>60%';

    } else if (probabilidad === 5 && consecuencia === 2){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>76%';

    } else if (probabilidad === 5 && consecuencia === 3){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>88%';

    } else if (probabilidad === 5 && consecuencia === 4){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>96%';

    } else if (probabilidad === 5 && consecuencia === 5){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>100%';

    } 
        // Actualizar el gráfico
    actualizarGrafico(probabilidad, consecuencia, ra);
}

     // Agregar otras validaciones y colores según sea necesario
      //     severidad.innerHTML = '';

function cambiarInterpretacion() {
    const valorControl = document.getElementById('valorControl').value;
    const interpretacion = document.getElementById('interpretacion');

    switch(valorControl) {
        case '0':
            interpretacion.value = 'No hay controles';
            break;
        case '1':
            interpretacion.value = 'Control bajo';
            break;
        case '2':
            interpretacion.value = 'Control medio';
            break;
        case '3':
            interpretacion.value = 'Control alto';
            break;
        case '4':
            interpretacion.value = 'Control muy alto';
            break;
        default:
            interpretacion.value = '';
    }
}

function validarX(input) {
    if (input.value !== 'x') {
        input.value = '';
    }
}


function calcularRC() {
    const probabilidad = parseInt(document.getElementById('probabilidadcontrol').value);
    const consecuencia = parseInt(document.getElementById('consecuenciacontrol').value);
    const rc = probabilidad * consecuencia;

    document.getElementById('rc').value = rc;

    const severidad = document.getElementById('severidadcontrol');

    // Reset severidad styles
    severidad.className = 'severidad';

    // Validar y asignar el color de fondo y el texto a severidad
    if (probabilidad === 1 && consecuencia === 1) {
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>4%';

    } else if (probabilidad === 1 && consecuencia === 2){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>8%';

    } else if (probabilidad === 1 && consecuencia === 3){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>16%';

    } else if (probabilidad === 1 && consecuencia === 4){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>28%';

    } else if (probabilidad === 1 && consecuencia === 5){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>44%';

    //cambio de mapa de calor
    } else if (probabilidad === 2 && consecuencia === 1){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>12%';

    } else if (probabilidad === 2 && consecuencia === 2){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>20%';

    } else if (probabilidad === 2 && consecuencia === 3){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>32%';

    } else if (probabilidad === 2 && consecuencia === 4){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>48%';

    } else if (probabilidad === 2 && consecuencia === 5){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'A<br>64%';

    //cambio de mapa de calor
    } else if (probabilidad === 3 && consecuencia === 1){
        severidad.classList.add('verde');
        severidad.innerHTML = 'B<br>24%';

    } else if (probabilidad === 3 && consecuencia === 2){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>36%';

    } else if (probabilidad === 3 && consecuencia === 3){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>52%';

    } else if (probabilidad === 3 && consecuencia === 4){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>68%';

    } else if (probabilidad === 3 && consecuencia === 5){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>80%';

    //cambio de mapa de calor
    } else if (probabilidad === 4 && consecuencia === 1){
        severidad.classList.add('amarrillo');
        severidad.innerHTML = 'M<br>40%';

    } else if (probabilidad === 4 && consecuencia === 2){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>56%';

    } else if (probabilidad === 4 && consecuencia === 3){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>72%';

    } else if (probabilidad === 4 && consecuencia === 4){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>84%';

    } else if (probabilidad === 4 && consecuencia === 5){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>92%';

    //cambio de mapa de calor
    } else if (probabilidad === 5 && consecuencia === 1){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>60%';

    } else if (probabilidad === 5 && consecuencia === 2){
        severidad.classList.add('anaranjado');
        severidad.innerHTML = 'A<br>76%';

    } else if (probabilidad === 5 && consecuencia === 3){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>88%';

    } else if (probabilidad === 5 && consecuencia === 4){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>96%';

    } else if (probabilidad === 5 && consecuencia === 5){
        severidad.classList.add('rojo');
        severidad.innerHTML = 'E<br>100%';

    }
        // Actualizar el gráfico
    actualizarGrafico(probabilidad, consecuencia, rc); 
}



let chart;





function actualizarGrafico(probabilidad, consecuencia, ra, rc) {
    const ctx = document.getElementById('riskChart').getContext('2d');

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Probabilidad', 'Consecuencia', 'R.A', 'R.C'],
            datasets: [{
                label: 'Valores',
                data: [probabilidad, consecuencia, ra, rc],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 206, 186, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 206, 186, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Inicializar el gráfico vacío
document.addEventListener('DOMContentLoaded', () => {
    actualizarGrafico(0, 0, 0);
});