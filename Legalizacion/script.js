document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('book-form');
    const booksTable = document.getElementById('books-table').getElementsByTagName('tbody')[0];
    const totalIngresados = document.getElementById('total-ingresados');
    const totalAbiertos = document.getElementById('total-abiertos');
    const totalCerrados = document.getElementById('total-cerrados');

    let books = [];

    function updateTotals() {
        totalIngresados.textContent = books.length;
        totalAbiertos.textContent = books.filter(book => book['status'] === 'abierto').length;
        totalCerrados.textContent = books.filter(book => book['status'] === 'cerrado').length;
    }

    function renderTable() {
        booksTable.innerHTML = '';
        books.forEach((book, index) => {
            const row = booksTable.insertRow();
            Object.values(book).forEach(text => {
                const cell = row.insertCell();
                cell.textContent = text;
            });
            const actionsCell = row.insertCell();
            actionsCell.innerHTML = `
                <div class="actions">
                    <button type="button" onclick="editBook(${index})">Editar</button>
                    <button type="button" onclick="deleteBook(${index})">Eliminar</button>
                </div>
            `;
        });
        updateTotals();
    }

    window.editBook = (index) => {
        const book = books[index];
        for (const key in book) {
            if (book.hasOwnProperty(key)) {
                document.getElementById(key).value = book[key];
            }
        }
        books.splice(index, 1);
        renderTable();
    };

    window.deleteBook = (index) => {
        books.splice(index, 1);
        renderTable();
    };

    bookForm.addEventListener('submit', event => {
        event.preventDefault();
        const newBook = {
            'book-id': document.getElementById('book-id').value,
            'region': document.getElementById('region').value,
            'office-name': document.getElementById('office-name').value,
            'legalization': document.getElementById('legalization').value,
            'book-type': document.getElementById('book-type').value,
            'volume': document.getElementById('volume').value,
            'entry': document.getElementById('entry').value,
            'request': document.getElementById('request').value,
            'request-date': document.getElementById('request-date').value,
            'status': document.getElementById('status').value,
            'delivery-date': document.getElementById('delivery-date').value,
            'notes': document.getElementById('notes').value,
        };
        books.push(newBook);
        renderTable();
        bookForm.reset();
    });
});







// script.js

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');
    const tablaLibros = document.getElementById('tablaLibros');
    const btnDescargarReporte = document.getElementById('btnDescargarReporte');
    const formatoDescarga = document.getElementById('formatoDescarga');
    
    let libros = [];

    // Evento para generar y descargar el reporte
    btnDescargarReporte.addEventListener('click', function() {
        // Obtener el formato seleccionado
        const formato = formatoDescarga.value;

        if (formato === 'pdf') {
            generarPDF();
        } else {
            generarYDescargarArchivo(formato);
        }
    });

    // Función para generar y descargar PDF
    function generarPDF() {
        const doc = new jsPDF();
        const tableRows = [];
        
        // Encabezados de la tabla
        const headers = [
            { title: 'ID', dataKey: 'id' },
            // Agregar más encabezados según las propiedades del libro
            { title: 'Región', dataKey: 'region' },
            { title: 'Nombre de la Oficina', dataKey: 'nombre' }
        ];
        
        // Preparar filas de datos
        libros.forEach(function(libro) {
            const row = {};
            headers.forEach(function(header) {
                row[header.dataKey] = libro[header.dataKey];
            });
            tableRows.push(row);
        });
        
        // Configurar PDF
        doc.autoTable({
            head: [headers.map(h => h.title)],
            body: tableRows.map(row => headers.map(h => row[h.dataKey])),
        });
        
        // Descargar PDF
        doc.save('reporte.pdf');
    }

    // Función para generar contenido CSV o Excel (XLSX)
    function generarYDescargarArchivo(formato) {
        let contenidoArchivo;
        if (formato === 'csv') {
            contenidoArchivo = generarContenidoCSV();
            descargarArchivo(contenidoArchivo, 'reporte.csv', 'text/csv');
        } else if (formato === 'xlsx') {
            contenidoArchivo = generarContenidoExcel();
            descargarArchivo(contenidoArchivo, 'reporte.xlsx', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        }
    }

    // Función para generar contenido CSV
    function generarContenidoCSV() {
        let contenido = 'ID,Región,Nombre de la Oficina\n';
        libros.forEach(function(libro) {
            contenido += `${libro.id},${libro.region},${libro.nombre}\n`;
            // Agregar más campos según las propiedades del libro
        });
        return contenido;
    }

    // Función para generar contenido Excel (XLSX)
    function generarContenidoExcel() {
        // Implementar la generación de contenido Excel aquí
        // Puedes usar bibliotecas como SheetJS (https://sheetjs.com/) para facilitar esto
        alert('Funcionalidad de Excel no implementada en este ejemplo.');
        return '';
    }

    // Función para descargar el archivo
    function descargarArchivo(contenido, nombreArchivo, tipo) {
        const blob = new Blob([contenido], { type: tipo });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = nombreArchivo;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    }

    // El resto del código para agregar, eliminar libros y actualizar la tabla sigue igual
    // ...
});