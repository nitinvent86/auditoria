    document.addEventListener('DOMContentLoaded', () => {
        const userSpan = document.getElementById('user');
        
        if (userSpan) {
            const storedUsername = sessionStorage.getItem('username');
            
            if (storedUsername) {
                // Mostrar el nombre de usuario
                userSpan.textContent = atob(storedUsername);
            } else {
                // Si no hay usuario en sessionStorage, redirigir al login
                //window.location.href = '../Login/login.html';
            }
        }
    });




      function switchMode() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
      }
    document.addEventListener('DOMContentLoaded', () => {
    const views = document.querySelectorAll('.vista');
    let currentView = 0;

    const updateView = () => {
        views.forEach((view, index) => {
            view.classList.toggle('active', index === currentView);
        });

        document.getElementById('prev').disabled = currentView === 0;
        document.getElementById('next').disabled = currentView === views.length - 1;
    };

    document.getElementById('prev').addEventListener('click', () => {
        if (currentView > 0) {
            currentView--;
            updateView();
        }
    });

    document.getElementById('next').addEventListener('click', () => {
        if (currentView < views.length - 1) {
            currentView++;
            updateView();
        }
    });

    document.getElementById('previewData').addEventListener('click', () => {
        currentView++;
        updateView();

    });

    updateView();
});

let contador = 1;

      function agregarDato(dato, datoList, eliminar, e) {
        e.preventDefault();
        const nombreDato = document.getElementById(dato).value;

        if (nombreDato.trim() !== "") {
          const contenedorDatos = document.getElementById(datoList);
          const divDato = document.createElement("div");
          divDato.setAttribute("id", "div" + datoList + contador);
          divDato.className = "expert";
          divDato.style.width = "98%";

          var newInput = document.createElement('label');
          //agrego la clase deseada
          newInput.setAttribute("id", "label" + datoList + contador);

          if (datoList == "client-list") {
            //  
            newInput.className += "info";

          } else if (datoList == "expert-list") {
            //  
            newInput.className += "experto";

          } else if (datoList == "legalidad-list") {
            //  
            newInput.className += "legalidad";
            
          } else if (datoList == "sistemas-list") {
            //  
            newInput.className += "sistemas";

          } else if (datoList == "eficacia-list") {
            //  
            newInput.className += "eficacia";

          } else if (datoList == "patrimonio-list") {
            //  
            newInput.className += "patrimonio";

          } else if (datoList == "estrategico-list") {
            //  
            newInput.className += "estrategico";

          } else if (datoList == "social-list") {
            //  
            newInput.className += "social";
          }

          //agregando el label
          newInput.innerHTML = nombreDato;
          
          // Botón de eliminar
          const btnEliminar = document.createElement("button");
          btnEliminar.textContent = "Eliminar";
          btnEliminar.className = "btn-delete";
          btnEliminar.onclick = function() {
              contenedorDatos.removeChild(divDato);
              contador = contador - 1;
          };
          divDato.appendChild(newInput);
          divDato.appendChild(btnEliminar);
          
          contenedorDatos.appendChild(divDato);
          
          document.getElementById(eliminar).value = "";

          contador = contador + 1;

          } else {
            alert("Por favor, ingresa un nombre de experto válido.");
          }
        }
        
        
        var elements = document.getElementsByClassName("column");
          const inputLegalidad = document.getElementsByClassName("expert");
          // Declare a loop variable
          var i;

          // List View
          function listView(e) {
              e.preventDefault(); // Evita que el formulario se envíe de nuevo
              for (i = 0; i < elements.length; i++) {
                  elements[i].style.width = "100%";

              }
              for (d = 0; d < inputLegalidad.length; d++) {
                  inputLegalidad[d].style.width = "99%";

              }
          }

          // Grid View
          function gridView(e) {
              e.preventDefault(); // Evita que el formulario se envíe de nuevo
              for (i = 0; i < elements.length; i++) {
                  elements[i].style.width = "48%";

              }
              for (d = 0; d < inputLegalidad.length; d++) {
                  inputLegalidad[d].style.width = "98%";

              }
          }
          
          
    function limpiar() {   
     document.getElementById("listaDatosEstudio").innerHTML = ""; 
     document.getElementById("valoracionriesgo").innerHTML = "";   
    } 
   
    function vistaPrevia(e, nombre, general, divLista) {
      limpiar();
      e.preventDefault(); // Evita que el formulario se envíe de nuevo
      
      // Obtener los datos del formulario
      const nombreEstudio = document.getElementById(nombre).value;
      const generalEstudio = document.getElementById(general).value;

      const inputObjetivos = document.getElementsByClassName("info");
      const inputExpertos = document.getElementsByClassName("experto");

      
      const arrayObjetivos = [];
      const arrayExpertos = [];


      const tableContainer = document.getElementById(divLista);

      const table = document.createElement('table');
      

      table.setAttribute('class', 'table-encabezado-riesgo');

      //const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
      
      //const bodyRow = document.createElement('tr'); 
      const row = document.createElement('tr');


      const rowTitulo = document.createElement('tr');
      const thTitulo = document.createElement('th');
      thTitulo.textContent = "Evaluación de Riesgo";
      //thTitulo.colSpan = 2;
      rowTitulo.appendChild(thTitulo);


      const rowEstudio = document.createElement('tr');
      const thEstudio = document.createElement('th');
      thEstudio.textContent = "Nombre del Proyecto";
      const rownameCell = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = nombreEstudio;
      //thEstudio.appendChild(nameCell);
      
      rowEstudio.appendChild(thEstudio);
      rownameCell.appendChild(nameCell);
      

      const rowGeneral = document.createElement('tr');
      const thGeneral = document.createElement('th');
      thGeneral.textContent = "Objetivo General";
      const rowgeneralObjectiveCell = document.createElement('tr');
      const generalObjectiveCell = document.createElement('td');
      generalObjectiveCell.textContent = generalEstudio;

      rowGeneral.appendChild(thGeneral);
      rowgeneralObjectiveCell.appendChild(generalObjectiveCell);

      row.appendChild(rowTitulo);
      row.appendChild(rowEstudio);
      row.appendChild(rownameCell);
      row.appendChild(rowGeneral);
      row.appendChild(rowgeneralObjectiveCell);


      const rowEspecificos = document.createElement('tr');
      const thEspecificos = document.createElement('th');
      thEspecificos.textContent = "Objetivos Específicos";
      rowEspecificos.appendChild(thEspecificos);

      const rowspecificObjectivesCell = document.createElement('tr');
      const specificObjectivesCell = document.createElement('td');
      const ol = document.createElement('ol');

      //const rowObjectives = document.createElement('tr');
      //const columnsObjectives = document.createElement('td');

      //columnsObjectives.style.backgroundColor = "red"; 

      

      for(i=0;i<inputObjetivos.length;i++) {
        arrayObjetivos.push(inputObjetivos[i].innerHTML);
        
        const li = document.createElement('li');
        li.innerText  = arrayObjetivos[i];
        ol.appendChild(li);
        //columnsObjectives.appendChild(ol);
        //rowObjectives.appendChild(columnsObjectives);
        specificObjectivesCell.appendChild(ol);
        //specificObjectivesCell.appendChild(rowObjectives);
        rowspecificObjectivesCell.appendChild(specificObjectivesCell);
      }
      row.appendChild(rowEspecificos); 
      row.appendChild(rowspecificObjectivesCell); 

      const rowExpertos = document.createElement('tr');
      const thExpertos = document.createElement('th');
      thExpertos.textContent = "Expertos ";
      rowExpertos.appendChild(thExpertos);

      const rowsExpertsCell = document.createElement('tr');
      const expertsCell = document.createElement('td');
      const olexpert = document.createElement('ol');

      //const rowObjectives = document.createElement('tr');
      //const columnsObjectives = document.createElement('td');

      //columnsObjectives.style.backgroundColor = "red"; 

      

      for(i=0;i<inputExpertos.length;i++) {
        arrayExpertos.push(inputExpertos[i].innerHTML);
        
        const liexpert = document.createElement('li');
        liexpert.innerText  = arrayExpertos[i];
        olexpert.appendChild(liexpert);
        //columnsObjectives.appendChild(ol);
        //rowObjectives.appendChild(columnsObjectives);
        expertsCell.appendChild(olexpert);
        //specificObjectivesCell.appendChild(rowObjectives);
        rowsExpertsCell.appendChild(expertsCell);
      }
      row.appendChild(rowExpertos); 
      row.appendChild(rowsExpertsCell); 

      tbody.appendChild(row);
      table.appendChild(tbody);
      tableContainer.appendChild(table);
    }

    // Limpiar el formulario
    //document.getElementById('projectForm').reset();
    //const tbody = document.getElementById('projectsTable').querySelector('tbody');


    function vistaPreviaPreguntas(e, divLista) {
    
      e.preventDefault(); // Evita que el formulario se envíe de nuevo

      const inputLegalidad = document.getElementsByClassName("legalidad");
      const inputSistemas = document.getElementsByClassName("sistemas");
      const inputEficacia = document.getElementsByClassName("eficacia");
      const inputPatrimonio = document.getElementsByClassName("patrimonio");
      const inputEstrategico = document.getElementsByClassName("estrategico");
      const inputSocial = document.getElementsByClassName("social");

      const arrayLegalidad = [];
      const arraySistemas = [];
      const arrayEficacia = [];
      const arrayPatrimonio = [];
      const arrayEstrategico = [];
      const arraySocial = [];

      const tableContainerPreguntas = document.getElementById(divLista);

      const tablePreguntas = document.createElement('table');
      tablePreguntas.setAttribute('class', 'table-analisis-riesgo');

      //const thead = document.createElement('thead');
      const tbodyPreguntas = document.createElement('tbody');
      
      //const bodyRow = document.createElement('tr'); 
      const rowValoracionRiesgo = document.createElement('tr');

      const rowTituloValoracion = document.createElement('tr');
      const thTituloValoracion = document.createElement('th');
      thTituloValoracion.textContent = "Análisis de Riesgo";
      thTituloValoracion.colSpan = "16";
      thTituloValoracion.rowspan="1";
      rowTituloValoracion.appendChild(thTituloValoracion);

      //Titulos de la valoración de riesgos (Riesgos, Valoración del Riesgo, Analisis de Controles, Controles)
      const rowTituloRiesgos = document.createElement('tr');

      //Titulo de la tabla <td> / txt = Riesgos / CSS = (col-10)
      const riesgosCell = document.createElement('td');
      riesgosCell.textContent = "Riesgos";
      riesgosCell.colSpan="2";
      riesgosCell.setAttribute('class', 'th-riesgos');
      
      //Titulo de la tabla <td> / txt = Valoración del Riesgo / CSS = (col-15)
      const valoracionriesgoCell = document.createElement('td');
      valoracionriesgoCell.textContent = "Valoración del Riesgo";
      valoracionriesgoCell.colSpan="4";
      valoracionriesgoCell.setAttribute('class', 'th-riesgos');

      //Titulo de la tabla <td> / txt = Valoración del Riesgo / CSS = (col-20)
      const whiteCell = document.createElement('td');
      whiteCell.textContent = "";
      whiteCell.colSpan="1";


      //Titulo de la tabla <td> / txt = Analisis de Controles / CSS = (col-25)
      const analisiscontrolesCell = document.createElement('td');
      analisiscontrolesCell.textContent = "Analisis de Controles";
      analisiscontrolesCell.colSpan="5";
      analisiscontrolesCell.setAttribute('class', 'th-riesgos');


      //Titulo de la tabla <td> / txt = Analisis de Controles / CSS = (col-30)
      const controlesCell = document.createElement('td');
      controlesCell.textContent = "Controles";
      controlesCell.colSpan="4";
      controlesCell.setAttribute('class', 'th-riesgos');

      rowTituloRiesgos.appendChild(riesgosCell);
      rowTituloRiesgos.appendChild(valoracionriesgoCell);
      rowTituloRiesgos.appendChild(whiteCell);
      rowTituloRiesgos.appendChild(analisiscontrolesCell);
      rowTituloRiesgos.appendChild(controlesCell);

      rowValoracionRiesgo.appendChild(rowTituloValoracion);
      rowValoracionRiesgo.appendChild(rowTituloRiesgos);

      //Aqui comienza el primer if de Legalidad---------------------------------------------------------------------
      if (inputLegalidad.length > 0) {
        //Titulo de la tabla <tr> criterios/ CSS = (col-35 a col-105)
        const rowCriterioTitulos = document.createElement('tr');

        //Celda del criterio a evaluar Legalidad / CSS = (col-35) 
        const criterioCellLegalidad = document.createElement('td');
        criterioCellLegalidad.textContent = "LEGALIDAD: En esta categoría se incluyen todos aquellos riesgos que pueden afectar el cumplimiento de las leyes y normas que le sean aplicables. Son todos los factores internos y externos que afectan el cumplimiento de la normativa legal y técnica aplicable a la Institución.";
        criterioCellLegalidad.colSpan="2";
        criterioCellLegalidad.setAttribute('class', 'td-criterios');

        //Titulo de la tabla <td> / txt = Probabilidad / CSS = (col-40)
        const probabilidadCell = document.createElement('td');
        probabilidadCell.textContent = "Probabilidad";
        probabilidadCell.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = Consecuencia / CSS = (col-45)
        const consecuenciaCell = document.createElement('td');
        consecuenciaCell.textContent = "Consecuencia";
        consecuenciaCell.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = R.A / CSS = (col-50)
        const raCell = document.createElement('td');
        raCell.textContent = "R.A";
        raCell.setAttribute('class', 'td-ra');

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-55)
        const severidadCell = document.createElement('td');
        severidadCell.textContent = "Severidad";
        severidadCell.setAttribute('class', 'td-severidad');

        //Titulo de la tabla <td> / txt =  / CSS = (col-60)
        const whitecriterioCell = document.createElement('td');
        whitecriterioCell.textContent = "";

        //Titulo de la tabla <td> / txt = Descripción del Control / CSS = (col-65)
        const descripcionCell = document.createElement('td');
        descripcionCell.textContent = "Descripción del Control";
        descripcionCell.setAttribute('class', 'td-criterios'); 

        //Titulo de la tabla <td> / txt = Valor del Control / CSS = (col-70)
        const valorCell = document.createElement('td');
        valorCell.textContent = "Valor del Control";
        valorCell.setAttribute('class', 'td-criterios');

        //Titulo de la tabla <td> / txt = Interpretación / CSS = (col-75)
        const interpretaciónCell = document.createElement('td');
        interpretaciónCell.textContent = "Interpretación";
        interpretaciónCell.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Miti P / CSS = (col-80)
        const mitiPCell = document.createElement('td');
        mitiPCell.textContent = "Miti P";
        mitiPCell.setAttribute('class', 'td-criterios');   

        //Titulo de la tabla <td> / txt = Miti C / CSS = (col-85)
        const mitiCCell = document.createElement('td');
        mitiCCell.textContent = "Miti C";
        mitiCCell.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = P / CSS = (col-90)
        const controlPCell = document.createElement('td');
        controlPCell.textContent = "P";
        controlPCell.setAttribute('class', 'td-criterios');       

        //Titulo de la tabla <td> / txt = P / CSS = (col-95)
        const controlCCell = document.createElement('td');
        controlCCell.textContent = "C";
        controlCCell.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-100)
        const controlRiesgoCell = document.createElement('td');
        controlRiesgoCell.textContent = "Riesgo Controlado";
        controlRiesgoCell.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-105)
        const controlSeveridadCCell = document.createElement('td');
        controlSeveridadCCell.textContent = "Severidad";
        controlSeveridadCCell.setAttribute('class', 'td-criterios');    
   
        //Agregar todos los <td> a este <tr>
        rowCriterioTitulos.appendChild(criterioCellLegalidad);
        rowCriterioTitulos.appendChild(probabilidadCell);
        rowCriterioTitulos.appendChild(consecuenciaCell);
        rowCriterioTitulos.appendChild(raCell);
        rowCriterioTitulos.appendChild(severidadCell);
        rowCriterioTitulos.appendChild(whitecriterioCell);
        rowCriterioTitulos.appendChild(descripcionCell);
        rowCriterioTitulos.appendChild(valorCell);
        rowCriterioTitulos.appendChild(interpretaciónCell);
        rowCriterioTitulos.appendChild(mitiPCell);
        rowCriterioTitulos.appendChild(mitiCCell);
        rowCriterioTitulos.appendChild(controlPCell);
        rowCriterioTitulos.appendChild(controlCCell);
        rowCriterioTitulos.appendChild(controlRiesgoCell);
        rowCriterioTitulos.appendChild(controlSeveridadCCell);        

        rowValoracionRiesgo.appendChild(rowCriterioTitulos);

        for(i=0;i<inputLegalidad.length;i++) {
          //Titulo de la tabla <tr> criterios/ CSS = (col-110 a col-190)
          const rowCriterioPreguntas = document.createElement('tr');        

          arrayLegalidad.push(inputLegalidad[i].innerHTML);
          
          //Titulo de la tabla <td> / txt = P / CSS = (col-110)
          const contadorCell = document.createElement('td');
          contadorCell.textContent = i + 1;
          contadorCell.style.width = "1px";
 
          //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-115)
          const criteriopreguntaCell = document.createElement('td');
          criteriopreguntaCell.textContent = arrayLegalidad[i];

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell1 = document.createElement('td');
          whitefillCell1.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell2 = document.createElement('td');
          whitefillCell2.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell3 = document.createElement('td');
          whitefillCell3.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell4 = document.createElement('td');
          whitefillCell4.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell5 = document.createElement('td');
          whitefillCell5.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell6 = document.createElement('td');
          whitefillCell6.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell7 = document.createElement('td');
          whitefillCell7.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell8 = document.createElement('td');
          whitefillCell8.textContent = "";            

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell9 = document.createElement('td');
          whitefillCell9.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell10 = document.createElement('td');
          whitefillCell10.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell11 = document.createElement('td');
          whitefillCell11.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell12 = document.createElement('td');
          whitefillCell12.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell13 = document.createElement('td');
          whitefillCell13.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell14 = document.createElement('td');
          whitefillCell14.textContent = "";            

          rowCriterioPreguntas.appendChild(contadorCell);
          rowCriterioPreguntas.appendChild(criteriopreguntaCell);
          rowCriterioPreguntas.appendChild(whitefillCell1);
          rowCriterioPreguntas.appendChild(whitefillCell2);
          rowCriterioPreguntas.appendChild(whitefillCell3);
          rowCriterioPreguntas.appendChild(whitefillCell4);
          rowCriterioPreguntas.appendChild(whitefillCell5);
          rowCriterioPreguntas.appendChild(whitefillCell6);
          rowCriterioPreguntas.appendChild(whitefillCell7);
          rowCriterioPreguntas.appendChild(whitefillCell8);
          rowCriterioPreguntas.appendChild(whitefillCell9);
          rowCriterioPreguntas.appendChild(whitefillCell10);
          rowCriterioPreguntas.appendChild(whitefillCell11);
          rowCriterioPreguntas.appendChild(whitefillCell12);
          rowCriterioPreguntas.appendChild(whitefillCell13);
          rowCriterioPreguntas.appendChild(whitefillCell14);  

          rowValoracionRiesgo.appendChild(rowCriterioPreguntas);                                  
        }

      }//Aqui finaliza el primer if de Legalidad--------------------------------------------------------------------

      //Aqui comienza el if de Sistemas-----------------------------------------------------------------------------
      if (inputSistemas.length > 0) {

        //Titulo de la tabla <tr> criterios/ CSS = (col-35 a col-105)
        const rowCriterioTitulosSistemas = document.createElement('tr');

        //Celda del criterio a evaluar Legalidad / CSS = (col-35) 
        const criterioCellSistemas = document.createElement('td');
        criterioCellSistemas.textContent = "SISTEMAS Y CALIDAD DE LA INFORMACION: Es el riesgo de que la tecnología utilizada no cubra las necesidades de la Institución o no funcione como se espera y que la información no satisfaga los requerimientos para el alcance de los objetivos institucionales.";
        criterioCellSistemas.colSpan="2";
        criterioCellSistemas.setAttribute('class', 'td-criterios');
        

        //Titulo de la tabla <td> / txt = Probabilidad / CSS = (col-40)
        const probabilidadCellSistemas = document.createElement('td');
        probabilidadCellSistemas.textContent = "Probabilidad";
        probabilidadCellSistemas.setAttribute('class', 'td-probabilidad-consecuencia');


        //Titulo de la tabla <td> / txt = Consecuencia / CSS = (col-45)
        const consecuenciaCellSistemas = document.createElement('td');
        consecuenciaCellSistemas.textContent = "Consecuencia";
        consecuenciaCellSistemas.setAttribute('class', 'td-probabilidad-consecuencia');


        //Titulo de la tabla <td> / txt = R.A / CSS = (col-50)
        const raCellSistemas = document.createElement('td');
        raCellSistemas.textContent = "R.A";
        raCellSistemas.setAttribute('class', 'td-ra');


        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-55)
        const severidadCellSistemas = document.createElement('td');
        severidadCellSistemas.textContent = "Severidad";
        severidadCellSistemas.setAttribute('class', 'td-severidad');


        //Titulo de la tabla <td> / txt =  / CSS = (col-60)
        const whitecriterioCellSistemas = document.createElement('td');
        whitecriterioCellSistemas.textContent = "";


        //Titulo de la tabla <td> / txt = Descripción del Control / CSS = (col-65)
        const descripcionCellSistemas = document.createElement('td');
        descripcionCellSistemas.textContent = "Descripción del Control";
        descripcionCellSistemas.setAttribute('class', 'td-criterios'); 

        //Titulo de la tabla <td> / txt = Valor del Control / CSS = (col-70)
        const valorCellSistemas = document.createElement('td');
        valorCellSistemas.textContent = "Valor del Control";
        valorCellSistemas.setAttribute('class', 'td-criterios');


        //Titulo de la tabla <td> / txt = Interpretación / CSS = (col-75)
        const interpretaciónCellSistemas = document.createElement('td');
        interpretaciónCellSistemas.textContent = "Interpretación";
        interpretaciónCellSistemas.setAttribute('class', 'td-criterios');  


        //Titulo de la tabla <td> / txt = Miti P / CSS = (col-80)
        const mitiPCellSistemas = document.createElement('td');
        mitiPCellSistemas.textContent = "Miti P";
        mitiPCellSistemas.setAttribute('class', 'td-criterios');   


        //Titulo de la tabla <td> / txt = Miti C / CSS = (col-85)
        const mitiCCellSistemas = document.createElement('td');
        mitiCCellSistemas.textContent = "Miti C";
        mitiCCellSistemas.setAttribute('class', 'td-criterios');  


        //Titulo de la tabla <td> / txt = P / CSS = (col-90)
        const controlPCellSistemas = document.createElement('td');
        controlPCellSistemas.textContent = "P";
        controlPCellSistemas.setAttribute('class', 'td-criterios');       


        //Titulo de la tabla <td> / txt = P / CSS = (col-95)
        const controlCCellSistemas = document.createElement('td');
        controlCCellSistemas.textContent = "C";
        controlCCellSistemas.setAttribute('class', 'td-criterios');  


        //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-100)
        const controlRiesgoCellSistemas = document.createElement('td');
        controlRiesgoCellSistemas.textContent = "Riesgo Controlado";
        controlRiesgoCellSistemas.setAttribute('class', 'td-criterios');  


        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-105)
        const controlSeveridadCCellSistemas = document.createElement('td');
        controlSeveridadCCellSistemas.textContent = "Severidad";
        controlSeveridadCCellSistemas.setAttribute('class', 'td-criterios');    
                
        //Agregar todos los <td> a este <tr>
        rowCriterioTitulosSistemas.appendChild(criterioCellSistemas);
        rowCriterioTitulosSistemas.appendChild(probabilidadCellSistemas);
        rowCriterioTitulosSistemas.appendChild(consecuenciaCellSistemas);
        rowCriterioTitulosSistemas.appendChild(raCellSistemas);
        rowCriterioTitulosSistemas.appendChild(severidadCellSistemas);
        rowCriterioTitulosSistemas.appendChild(whitecriterioCellSistemas);
        rowCriterioTitulosSistemas.appendChild(descripcionCellSistemas);
        rowCriterioTitulosSistemas.appendChild(valorCellSistemas);
        rowCriterioTitulosSistemas.appendChild(interpretaciónCellSistemas);
        rowCriterioTitulosSistemas.appendChild(mitiPCellSistemas);
        rowCriterioTitulosSistemas.appendChild(mitiCCellSistemas);
        rowCriterioTitulosSistemas.appendChild(controlPCellSistemas);
        rowCriterioTitulosSistemas.appendChild(controlCCellSistemas);
        rowCriterioTitulosSistemas.appendChild(controlRiesgoCellSistemas);
        rowCriterioTitulosSistemas.appendChild(controlSeveridadCCellSistemas);        

        rowValoracionRiesgo.appendChild(rowCriterioTitulosSistemas);

        for(a=0;a<inputSistemas.length;a++) {

          //Titulo de la tabla <tr> criterios/ CSS = (col-110 a col-190)
          const rowCriterioPreguntasSistemas = document.createElement('tr');            

          arraySistemas.push(inputSistemas[a].innerHTML);
            
          //Titulo de la tabla <td> / txt = P / CSS = (col-110)
          const contadorCellSistemas = document.createElement('td');
          contadorCellSistemas.textContent = a + 1;
          contadorCellSistemas.style.width = "1px";
 
          //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-115)
          const criteriopreguntaCellSistemas = document.createElement('td');
          criteriopreguntaCellSistemas.textContent = arraySistemas[a];

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell1Sistemas = document.createElement('td');
          whitefillCell1Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell2Sistemas = document.createElement('td');
          whitefillCell2Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell3Sistemas = document.createElement('td');
          whitefillCell3Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell4Sistemas = document.createElement('td');
          whitefillCell4Sistemas.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell5Sistemas = document.createElement('td');
          whitefillCell5Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell6Sistemas = document.createElement('td');
          whitefillCell6Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell7Sistemas = document.createElement('td');
          whitefillCell7Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell8Sistemas = document.createElement('td');
          whitefillCell8Sistemas.textContent = "";            

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell9Sistemas = document.createElement('td');
          whitefillCell9Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell10Sistemas = document.createElement('td');
          whitefillCell10Sistemas.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell11Sistemas = document.createElement('td');
          whitefillCell11Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell12Sistemas = document.createElement('td');
          whitefillCell12Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell13Sistemas = document.createElement('td');
          whitefillCell13Sistemas.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell14Sistemas = document.createElement('td');
          whitefillCell14Sistemas.textContent = "";            

          rowCriterioPreguntasSistemas.appendChild(contadorCellSistemas);
          rowCriterioPreguntasSistemas.appendChild(criteriopreguntaCellSistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell1Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell2Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell3Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell4Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell5Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell6Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell7Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell8Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell9Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell10Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell11Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell12Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell13Sistemas);
          rowCriterioPreguntasSistemas.appendChild(whitefillCell14Sistemas);  

            rowValoracionRiesgo.appendChild(rowCriterioPreguntasSistemas);                                  
        }
      
      }//Aqui finaliza el if de Sistemas----------------------------------------------------------------------------

      //Aqui comienza el if de Eficacia-----------------------------------------------------------------------------
      if (inputEficacia.length > 0) {

        //Titulo de la tabla <tr> criterios/ CSS = (col-35 a col-105)
        const rowCriterioTitulosEficacia = document.createElement('tr');

        //Celda del criterio a evaluar Legalidad / CSS = (col-35) 
        const criterioCellEficacia = document.createElement('td');
        criterioCellEficacia.textContent = "EFICACIA Y EFICIENCIA Esta categoría está conformada por aquellos factores que pueden afectar el logro de objetivos relacionados con la consecución de la razón de ser de la institución y que incluye objetivos implícitos dirigidos a la mejora de la eficacia y eficiencia en las operaciones en el camino hacia la consecución del objetivo principal. Estos factores pueden afectar la utilización eficaz y eficiente de los recursos de la entidad, en la ejecución de las diferentes operaciones que esta realiza.";
        criterioCellEficacia.colSpan="2";
        criterioCellEficacia.setAttribute('class', 'td-criterios');
        

        //Titulo de la tabla <td> / txt = Probabilidad / CSS = (col-40)
        const probabilidadCellEficacia = document.createElement('td');
        probabilidadCellEficacia.textContent = "Probabilidad";
        probabilidadCellEficacia.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = Consecuencia / CSS = (col-45)
        const consecuenciaCellEficacia = document.createElement('td');
        consecuenciaCellEficacia.textContent = "Consecuencia";
        consecuenciaCellEficacia.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = R.A / CSS = (col-50)
        const raCellEficacia = document.createElement('td');
        raCellEficacia.textContent = "R.A";
        raCellEficacia.setAttribute('class', 'td-ra');

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-55)
        const severidadCellEficacia = document.createElement('td');
        severidadCellEficacia.textContent = "Severidad";
        severidadCellEficacia.setAttribute('class', 'td-severidad');

        //Titulo de la tabla <td> / txt =  / CSS = (col-60)
        const whitecriterioCellEficacia = document.createElement('td');
        whitecriterioCellEficacia.textContent = "";

        //Titulo de la tabla <td> / txt = Descripción del Control / CSS = (col-65)
        const descripcionCellEficacia = document.createElement('td');
        descripcionCellEficacia.textContent = "Descripción del Control";
        descripcionCellEficacia.setAttribute('class', 'td-criterios'); 

        //Titulo de la tabla <td> / txt = Valor del Control / CSS = (col-70)
        const valorCellEficacia = document.createElement('td');
        valorCellEficacia.textContent = "Valor del Control";
        valorCellEficacia.setAttribute('class', 'td-criterios');

        //Titulo de la tabla <td> / txt = Interpretación / CSS = (col-75)
        const interpretaciónCellEficacia = document.createElement('td');
        interpretaciónCellEficacia.textContent = "Interpretación";
        interpretaciónCellEficacia.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Miti P / CSS = (col-80)
        const mitiPCellEficacia = document.createElement('td');
        mitiPCellEficacia.textContent = "Miti P";
        mitiPCellEficacia.setAttribute('class', 'td-criterios');   

        //Titulo de la tabla <td> / txt = Miti C / CSS = (col-85)
        const mitiCCellEficacia = document.createElement('td');
        mitiCCellEficacia.textContent = "Miti C";
        mitiCCellEficacia.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = P / CSS = (col-90)
        const controlPCellEficacia = document.createElement('td');
        controlPCellEficacia.textContent = "P";
        controlPCellEficacia.setAttribute('class', 'td-criterios');       

        //Titulo de la tabla <td> / txt = P / CSS = (col-95)
        const controlCCellEficacia = document.createElement('td');
        controlCCellEficacia.textContent = "C";
        controlCCellEficacia.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-100)
        const controlRiesgoCellEficacia = document.createElement('td');
        controlRiesgoCellEficacia.textContent = "Riesgo Controlado";
        controlRiesgoCellEficacia.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-105)
        const controlSeveridadCCellEficacia = document.createElement('td');
        controlSeveridadCCellEficacia.textContent = "Severidad";
        controlSeveridadCCellEficacia.setAttribute('class', 'td-criterios');    
                
        //Agregar todos los <td> a este <tr>
        rowCriterioTitulosEficacia.appendChild(criterioCellEficacia);
        rowCriterioTitulosEficacia.appendChild(probabilidadCellEficacia);
        rowCriterioTitulosEficacia.appendChild(consecuenciaCellEficacia);
        rowCriterioTitulosEficacia.appendChild(raCellEficacia);
        rowCriterioTitulosEficacia.appendChild(severidadCellEficacia);
        rowCriterioTitulosEficacia.appendChild(whitecriterioCellEficacia);
        rowCriterioTitulosEficacia.appendChild(descripcionCellEficacia);
        rowCriterioTitulosEficacia.appendChild(valorCellEficacia);
        rowCriterioTitulosEficacia.appendChild(interpretaciónCellEficacia);
        rowCriterioTitulosEficacia.appendChild(mitiPCellEficacia);
        rowCriterioTitulosEficacia.appendChild(mitiCCellEficacia);
        rowCriterioTitulosEficacia.appendChild(controlPCellEficacia);
        rowCriterioTitulosEficacia.appendChild(controlCCellEficacia);
        rowCriterioTitulosEficacia.appendChild(controlRiesgoCellEficacia);
        rowCriterioTitulosEficacia.appendChild(controlSeveridadCCellEficacia);        

        rowValoracionRiesgo.appendChild(rowCriterioTitulosEficacia);

        for(a=0;a<inputEficacia.length;a++) {

          //Titulo de la tabla <tr> criterios/ CSS = (col-110 a col-190)
          const rowCriterioPreguntasEficacia = document.createElement('tr');          

          arrayEficacia.push(inputEficacia[a].innerHTML);
          
          //Titulo de la tabla <td> / txt = P / CSS = (col-110)
          const contadorCellEficacia = document.createElement('td');
          contadorCellEficacia.textContent = a + 1;
          contadorCellEficacia.style.width = "1px";

          //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-115)
          const criteriopreguntaCellEficacia = document.createElement('td');
          criteriopreguntaCellEficacia.textContent = arrayEficacia[a];

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell1Eficacia = document.createElement('td');
          whitefillCell1Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell2Eficacia = document.createElement('td');
          whitefillCell2Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell3Eficacia = document.createElement('td');
          whitefillCell3Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell4Eficacia = document.createElement('td');
          whitefillCell4Eficacia.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell5Eficacia = document.createElement('td');
          whitefillCell5Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell6Eficacia = document.createElement('td');
          whitefillCell6Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell7Eficacia = document.createElement('td');
          whitefillCell7Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell8Eficacia = document.createElement('td');
          whitefillCell8Eficacia.textContent = "";            

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell9Eficacia = document.createElement('td');
          whitefillCell9Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell10Eficacia = document.createElement('td');
          whitefillCell10Eficacia.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell11Eficacia = document.createElement('td');
          whitefillCell11Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell12Eficacia = document.createElement('td');
          whitefillCell12Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell13Eficacia = document.createElement('td');
          whitefillCell13Eficacia.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell14Eficacia = document.createElement('td');
          whitefillCell14Eficacia.textContent = "";            

          rowCriterioPreguntasEficacia.appendChild(contadorCellEficacia);
          rowCriterioPreguntasEficacia.appendChild(criteriopreguntaCellEficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell1Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell2Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell3Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell4Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell5Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell6Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell7Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell8Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell9Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell10Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell11Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell12Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell13Eficacia);
          rowCriterioPreguntasEficacia.appendChild(whitefillCell14Eficacia);  

          rowValoracionRiesgo.appendChild(rowCriterioPreguntasEficacia);                                  
        }

      }//Aqui finaliza el if de Eficacia----------------------------------------------------------------------------

      //Aqui comienza el if de Patrimonio---------------------------------------------------------------------------
      if (inputPatrimonio.length > 0) {

        //Titulo de la tabla <tr> criterios/ CSS = (col-35 a col-105)
        const rowCriterioTitulosPatrimonio = document.createElement('tr');

        //Celda del criterio a evaluar Legalidad / CSS = (col-35) 
        const criterioCellPatrimonio = document.createElement('td');
        criterioCellPatrimonio.textContent = "PATRIMONIO: Es el riesgo de que el patrimonio público no sea adquirido considerando las necesidades institucionales, sufra cualquier pérdida por ociosidad, despilfarro, uso indebido, irregularidad o acto ilegal.";
        criterioCellPatrimonio.colSpan="2";
        criterioCellPatrimonio.setAttribute('class', 'td-criterios');
        
        //Titulo de la tabla <td> / txt = Probabilidad / CSS = (col-40)
        const probabilidadCellPatrimonio = document.createElement('td');
        probabilidadCellPatrimonio.textContent = "Probabilidad";
        probabilidadCellPatrimonio.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = Consecuencia / CSS = (col-45)
        const consecuenciaCellPatrimonio = document.createElement('td');
        consecuenciaCellPatrimonio.textContent = "Consecuencia";
        consecuenciaCellPatrimonio.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = R.A / CSS = (col-50)
        const raCellPatrimonio = document.createElement('td');
        raCellPatrimonio.textContent = "R.A";
        raCellPatrimonio.setAttribute('class', 'td-ra');

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-55)
        const severidadCellPatrimonio = document.createElement('td');
        severidadCellPatrimonio.textContent = "Severidad";
        severidadCellPatrimonio.setAttribute('class', 'td-severidad');

        //Titulo de la tabla <td> / txt =  / CSS = (col-60)
        const whitecriterioCellPatrimonio = document.createElement('td');
        whitecriterioCellPatrimonio.textContent = "";

        //Titulo de la tabla <td> / txt = Descripción del Control / CSS = (col-65)
        const descripcionCellPatrimonio = document.createElement('td');
        descripcionCellPatrimonio.textContent = "Descripción del Control";
        descripcionCellPatrimonio.setAttribute('class', 'td-criterios'); 

        //Titulo de la tabla <td> / txt = Valor del Control / CSS = (col-70)
        const valorCellPatrimonio = document.createElement('td');
        valorCellPatrimonio.textContent = "Valor del Control";
        valorCellPatrimonio.setAttribute('class', 'td-criterios');

        //Titulo de la tabla <td> / txt = Interpretación / CSS = (col-75)
        const interpretaciónCellPatrimonio = document.createElement('td');
        interpretaciónCellPatrimonio.textContent = "Interpretación";
        interpretaciónCellPatrimonio.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Miti P / CSS = (col-80)
        const mitiPCellPatrimonio = document.createElement('td');
        mitiPCellPatrimonio.textContent = "Miti P";
        mitiPCellPatrimonio.setAttribute('class', 'td-criterios');   

        //Titulo de la tabla <td> / txt = Miti C / CSS = (col-85)
        const mitiCCellPatrimonio = document.createElement('td');
        mitiCCellPatrimonio.textContent = "Miti C";
        mitiCCellPatrimonio.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = P / CSS = (col-90)
        const controlPCellPatrimonio = document.createElement('td');
        controlPCellPatrimonio.textContent = "P";
        controlPCellPatrimonio.setAttribute('class', 'td-criterios');       

        //Titulo de la tabla <td> / txt = P / CSS = (col-95)
        const controlCCellPatrimonio = document.createElement('td');
        controlCCellPatrimonio.textContent = "C";
        controlCCellPatrimonio.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-100)
        const controlRiesgoCellPatrimonio = document.createElement('td');
        controlRiesgoCellPatrimonio.textContent = "Riesgo Controlado";
        controlRiesgoCellPatrimonio.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-105)
        const controlSeveridadCCellPatrimonio = document.createElement('td');
        controlSeveridadCCellPatrimonio.textContent = "Severidad";
        controlSeveridadCCellPatrimonio.setAttribute('class', 'td-criterios');                    

        //Agregar todos los <td> a este <tr>
        rowCriterioTitulosPatrimonio.appendChild(criterioCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(probabilidadCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(consecuenciaCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(raCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(severidadCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(whitecriterioCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(descripcionCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(valorCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(interpretaciónCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(mitiPCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(mitiCCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(controlPCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(controlCCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(controlRiesgoCellPatrimonio);
        rowCriterioTitulosPatrimonio.appendChild(controlSeveridadCCellPatrimonio);        

        rowValoracionRiesgo.appendChild(rowCriterioTitulosPatrimonio);

        for(a=0;a<inputPatrimonio.length;a++) {

          //Titulo de la tabla <tr> criterios/ CSS = (col-110 a col-190)
          const rowCriterioPreguntasPatrimonio = document.createElement('tr');            

          arrayPatrimonio.push(inputPatrimonio[a].innerHTML);
            
          //Titulo de la tabla <td> / txt = P / CSS = (col-110)
          const contadorCellPatrimonio= document.createElement('td');
          contadorCellPatrimonio.textContent = a + 1;
          contadorCellPatrimonio.style.width = "1px";
 
          //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-115)
          const criteriopreguntaCellPatrimonio = document.createElement('td');
          criteriopreguntaCellPatrimonio.textContent = arrayPatrimonio[a];

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell1Patrimonio = document.createElement('td');
          whitefillCell1Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell2Patrimonio = document.createElement('td');
          whitefillCell2Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell3Patrimonio = document.createElement('td');
          whitefillCell3Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell4Patrimonio = document.createElement('td');
          whitefillCell4Patrimonio.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell5Patrimonio = document.createElement('td');
          whitefillCell5Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell6Patrimonio = document.createElement('td');
          whitefillCell6Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell7Patrimonio = document.createElement('td');
          whitefillCell7Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell8Patrimonio = document.createElement('td');
          whitefillCell8Patrimonio.textContent = "";            

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell9Patrimonio = document.createElement('td');
          whitefillCell9Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell10Patrimonio = document.createElement('td');
          whitefillCell10Patrimonio.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell11Patrimonio = document.createElement('td');
          whitefillCell11Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell12Patrimonio = document.createElement('td');
          whitefillCell12Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell13Patrimonio = document.createElement('td');
          whitefillCell13Patrimonio.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell14Patrimonio = document.createElement('td');
          whitefillCell14Patrimonio.textContent = "";            

          rowCriterioPreguntasPatrimonio.appendChild(contadorCellPatrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(criteriopreguntaCellPatrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell1Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell2Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell3Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell4Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell5Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell6Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell7Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell8Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell9Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell10Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell11Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell12Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell13Patrimonio);
          rowCriterioPreguntasPatrimonio.appendChild(whitefillCell14Patrimonio);  

          rowValoracionRiesgo.appendChild(rowCriterioPreguntasPatrimonio);                                  
        }

      }//Aqui finaliza el if de Patrimonio--------------------------------------------------------------------------  

      //Aqui comienza el if de Estratégico---------------------------------------------------------------------------
      if (inputEstrategico.length > 0) {

        //Titulo de la tabla <tr> criterios/ CSS = (col-35 a col-105)
        const rowCriterioTitulosEstrategico = document.createElement('tr');

        //Celda del criterio a evaluar Legalidad / CSS = (col-35) 
        const criterioCellEstrategico = document.createElement('td');
        criterioCellEstrategico.textContent = "ESTRATEGICO: Esta categoría la conforman todos aquellos factores de riesgo (internos o externos) que pueden afectar el logro de los objetivos estratégicos de la institución.";
        criterioCellEstrategico.colSpan="2";
        criterioCellEstrategico.setAttribute('class', 'td-criterios');
        
        //Titulo de la tabla <td> / txt = Probabilidad / CSS = (col-40)
        const probabilidadCellEstrategico = document.createElement('td');
        probabilidadCellEstrategico.textContent = "Probabilidad";
        probabilidadCellEstrategico.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = Consecuencia / CSS = (col-45)
        const consecuenciaCellEstrategico = document.createElement('td');
        consecuenciaCellEstrategico.textContent = "Consecuencia";
        consecuenciaCellEstrategico.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = R.A / CSS = (col-50)
        const raCellEstrategico = document.createElement('td');
        raCellEstrategico.textContent = "R.A";
        raCellEstrategico.setAttribute('class', 'td-ra');

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-55)
        const severidadCellEstrategico = document.createElement('td');
        severidadCellEstrategico.textContent = "Severidad";
        severidadCellEstrategico.setAttribute('class', 'td-severidad');

        //Titulo de la tabla <td> / txt =  / CSS = (col-60)
        const whitecriterioCellEstrategico = document.createElement('td');
        whitecriterioCellEstrategico.textContent = "";

        //Titulo de la tabla <td> / txt = Descripción del Control / CSS = (col-65)
        const descripcionCellEstrategico = document.createElement('td');
        descripcionCellEstrategico.textContent = "Descripción del Control";
        descripcionCellEstrategico.setAttribute('class', 'td-criterios'); 

        //Titulo de la tabla <td> / txt = Valor del Control / CSS = (col-70)
        const valorCellEstrategico = document.createElement('td');
        valorCellEstrategico.textContent = "Valor del Control";
        valorCellEstrategico.setAttribute('class', 'td-criterios');

        //Titulo de la tabla <td> / txt = Interpretación / CSS = (col-75)
        const interpretaciónCellEstrategico = document.createElement('td');
        interpretaciónCellEstrategico.textContent = "Interpretación";
        interpretaciónCellEstrategico.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Miti P / CSS = (col-80)
        const mitiPCellEstrategico = document.createElement('td');
        mitiPCellEstrategico.textContent = "Miti P";
        mitiPCellEstrategico.setAttribute('class', 'td-criterios');   

        //Titulo de la tabla <td> / txt = Miti C / CSS = (col-85)
        const mitiCCellEstrategico = document.createElement('td');
        mitiCCellEstrategico.textContent = "Miti C";
        mitiCCellEstrategico.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = P / CSS = (col-90)
        const controlPCellEstrategico = document.createElement('td');
        controlPCellEstrategico.textContent = "P";
        controlPCellEstrategico.setAttribute('class', 'td-criterios');       

        //Titulo de la tabla <td> / txt = P / CSS = (col-95)
        const controlCCellEstrategico = document.createElement('td');
        controlCCellEstrategico.textContent = "C";
        controlCCellEstrategico.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-100)
        const controlRiesgoCellEstrategico = document.createElement('td');
        controlRiesgoCellEstrategico.textContent = "Riesgo Controlado";
        controlRiesgoCellEstrategico.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-105)
        const controlSeveridadCCellEstrategico = document.createElement('td');
        controlSeveridadCCellEstrategico.textContent = "Severidad";
        controlSeveridadCCellEstrategico.setAttribute('class', 'td-criterios');                    

        //Agregar todos los <td> a este <tr>
        rowCriterioTitulosEstrategico.appendChild(criterioCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(probabilidadCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(consecuenciaCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(raCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(severidadCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(whitecriterioCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(descripcionCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(valorCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(interpretaciónCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(mitiPCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(mitiCCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(controlPCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(controlCCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(controlRiesgoCellEstrategico);
        rowCriterioTitulosEstrategico.appendChild(controlSeveridadCCellEstrategico);        

        rowValoracionRiesgo.appendChild(rowCriterioTitulosEstrategico);

        for(a=0;a<inputEstrategico.length;a++) {

          //Titulo de la tabla <tr> criterios/ CSS = (col-110 a col-190)
          const rowCriterioPreguntasEstrategico = document.createElement('tr');            

          arrayEstrategico.push(inputEstrategico[a].innerHTML);
            
          //Titulo de la tabla <td> / txt = P / CSS = (col-110)
          const contadorCellEstrategico= document.createElement('td');
          contadorCellEstrategico.textContent = a + 1;
          contadorCellEstrategico.style.width = "1px";
 
          //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-115)
          const criteriopreguntaCellEstrategico = document.createElement('td');
          criteriopreguntaCellEstrategico.textContent = arrayEstrategico[a];

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell1Estrategico = document.createElement('td');
          whitefillCell1Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell2Estrategico = document.createElement('td');
          whitefillCell2Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell3Estrategico = document.createElement('td');
          whitefillCell3Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell4Estrategico = document.createElement('td');
          whitefillCell4Estrategico.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell5Estrategico = document.createElement('td');
          whitefillCell5Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell6Estrategico = document.createElement('td');
          whitefillCell6Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell7Estrategico = document.createElement('td');
          whitefillCell7Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell8Estrategico = document.createElement('td');
          whitefillCell8Estrategico.textContent = "";            

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell9Estrategico = document.createElement('td');
          whitefillCell9Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell10Estrategico = document.createElement('td');
          whitefillCell10Estrategico.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell11Estrategico = document.createElement('td');
          whitefillCell11Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell12Estrategico = document.createElement('td');
          whitefillCell12Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell13Estrategico = document.createElement('td');
          whitefillCell13Estrategico.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell14Estrategico = document.createElement('td');
          whitefillCell14Estrategico.textContent = "";            

          rowCriterioPreguntasEstrategico.appendChild(contadorCellEstrategico);
          rowCriterioPreguntasEstrategico.appendChild(criteriopreguntaCellEstrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell1Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell2Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell3Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell4Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell5Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell6Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell7Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell8Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell9Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell10Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell11Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell12Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell13Estrategico);
          rowCriterioPreguntasEstrategico.appendChild(whitefillCell14Estrategico);  

          rowValoracionRiesgo.appendChild(rowCriterioPreguntasEstrategico);                                  
        }

      }//Aqui finaliza el if de Estratégico--------------------------------------------------------------------------        

      //Aqui comienza el if de Social--------------------------------------------------------------------------------
      if (inputSocial.length > 0) {

        //Titulo de la tabla <tr> criterios/ CSS = (col-35 a col-105)
        const rowCriterioTitulosSocial = document.createElement('tr');

        //Celda del criterio a evaluar Legalidad / CSS = (col-35) 
        const criterioCellSocial = document.createElement('td');
        criterioCellSocial.textContent = "SOCIAL: Esta categoría la conforman todos aquellos factores de riesgo (internos o externos) que pueden afectar el logro de los objetivos estratégicos de la institución.";
        criterioCellSocial.colSpan="2";
        criterioCellSocial.setAttribute('class', 'td-criterios');
        
        //Titulo de la tabla <td> / txt = Probabilidad / CSS = (col-40)
        const probabilidadCellSocial = document.createElement('td');
        probabilidadCellSocial.textContent = "Probabilidad";
        probabilidadCellSocial.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = Consecuencia / CSS = (col-45)
        const consecuenciaCellSocial = document.createElement('td');
        consecuenciaCellSocial.textContent = "Consecuencia";
        consecuenciaCellSocial.setAttribute('class', 'td-probabilidad-consecuencia');

        //Titulo de la tabla <td> / txt = R.A / CSS = (col-50)
        const raCellSocial = document.createElement('td');
        raCellSocial.textContent = "R.A";
        raCellSocial.setAttribute('class', 'td-ra');

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-55)
        const severidadCellSocial = document.createElement('td');
        severidadCellSocial.textContent = "Severidad";
        severidadCellSocial.setAttribute('class', 'td-severidad');

        //Titulo de la tabla <td> / txt =  / CSS = (col-60)
        const whitecriterioCellSocial = document.createElement('td');
        whitecriterioCellSocial.textContent = "";

        //Titulo de la tabla <td> / txt = Descripción del Control / CSS = (col-65)
        const descripcionCellSocial = document.createElement('td');
        descripcionCellSocial.textContent = "Descripción del Control";
        descripcionCellSocial.setAttribute('class', 'td-criterios'); 

        //Titulo de la tabla <td> / txt = Valor del Control / CSS = (col-70)
        const valorCellSocial = document.createElement('td');
        valorCellSocial.textContent = "Valor del Control";
        valorCellSocial.setAttribute('class', 'td-criterios');

        //Titulo de la tabla <td> / txt = Interpretación / CSS = (col-75)
        const interpretaciónCellSocial = document.createElement('td');
        interpretaciónCellSocial.textContent = "Interpretación";
        interpretaciónCellSocial.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Miti P / CSS = (col-80)
        const mitiPCellSocial = document.createElement('td');
        mitiPCellSocial.textContent = "Miti P";
        mitiPCellSocial.setAttribute('class', 'td-criterios');   

        //Titulo de la tabla <td> / txt = Miti C / CSS = (col-85)
        const mitiCCellSocial = document.createElement('td');
        mitiCCellSocial.textContent = "Miti C";
        mitiCCellSocial.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = P / CSS = (col-90)
        const controlPCellSocial = document.createElement('td');
        controlPCellSocial.textContent = "P";
        controlPCellSocial.setAttribute('class', 'td-criterios');       

        //Titulo de la tabla <td> / txt = P / CSS = (col-95)
        const controlCCellSocial = document.createElement('td');
        controlCCellSocial.textContent = "C";
        controlCCellSocial.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-100)
        const controlRiesgoCellSocial = document.createElement('td');
        controlRiesgoCellSocial.textContent = "Riesgo Controlado";
        controlRiesgoCellSocial.setAttribute('class', 'td-criterios');  

        //Titulo de la tabla <td> / txt = Severidad / CSS = (col-105)
        const controlSeveridadCCellSocial = document.createElement('td');
        controlSeveridadCCellSocial.textContent = "Severidad";
        controlSeveridadCCellSocial.setAttribute('class', 'td-criterios');                    

        //Agregar todos los <td> a este <tr>
        rowCriterioTitulosSocial.appendChild(criterioCellSocial);
        rowCriterioTitulosSocial.appendChild(probabilidadCellSocial);
        rowCriterioTitulosSocial.appendChild(consecuenciaCellSocial);
        rowCriterioTitulosSocial.appendChild(raCellSocial);
        rowCriterioTitulosSocial.appendChild(severidadCellSocial);
        rowCriterioTitulosSocial.appendChild(whitecriterioCellSocial);
        rowCriterioTitulosSocial.appendChild(descripcionCellSocial);
        rowCriterioTitulosSocial.appendChild(valorCellSocial);
        rowCriterioTitulosSocial.appendChild(interpretaciónCellSocial);
        rowCriterioTitulosSocial.appendChild(mitiPCellSocial);
        rowCriterioTitulosSocial.appendChild(mitiCCellSocial);
        rowCriterioTitulosSocial.appendChild(controlPCellSocial);
        rowCriterioTitulosSocial.appendChild(controlCCellSocial);
        rowCriterioTitulosSocial.appendChild(controlRiesgoCellSocial);
        rowCriterioTitulosSocial.appendChild(controlSeveridadCCellSocial);        

        rowValoracionRiesgo.appendChild(rowCriterioTitulosSocial);

        for(a=0;a<inputSocial.length;a++) {

          //Titulo de la tabla <tr> criterios/ CSS = (col-110 a col-190)
          const rowCriterioPreguntasSocial = document.createElement('tr');            

          arraySocial.push(inputSocial[a].innerHTML);
            
          //Titulo de la tabla <td> / txt = P / CSS = (col-110)
          const contadorCellSocial= document.createElement('td');
          contadorCellSocial.textContent = a + 1;
          contadorCellSocial.style.width = "1px";
 
          //Titulo de la tabla <td> / txt = Riesgo Controlado / CSS = (col-115)
          const criteriopreguntaCellSocial = document.createElement('td');
          criteriopreguntaCellSocial.textContent = arraySocial[a];

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell1Social = document.createElement('td');
          whitefillCell1Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell2Social = document.createElement('td');
          whitefillCell2Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell3Social = document.createElement('td');
          whitefillCell3Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell4Social = document.createElement('td');
          whitefillCell4Social.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell5Social = document.createElement('td');
          whitefillCell5Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell6Social = document.createElement('td');
          whitefillCell6Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell7Social = document.createElement('td');
          whitefillCell7Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell8Social = document.createElement('td');
          whitefillCell8Social.textContent = "";            

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell9Social = document.createElement('td');
          whitefillCell9Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell10Social = document.createElement('td');
          whitefillCell10Social.textContent = "";        

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell11Social = document.createElement('td');
          whitefillCell11Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell12Social = document.createElement('td');
          whitefillCell12Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell13Social = document.createElement('td');
          whitefillCell13Social.textContent = "";

          //Titulo de la tabla <td> / txt =  / CSS = (col-60)
          const whitefillCell14Social = document.createElement('td');
          whitefillCell14Social.textContent = "";            

          rowCriterioPreguntasSocial.appendChild(contadorCellSocial);
          rowCriterioPreguntasSocial.appendChild(criteriopreguntaCellSocial);
          rowCriterioPreguntasSocial.appendChild(whitefillCell1Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell2Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell3Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell4Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell5Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell6Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell7Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell8Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell9Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell10Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell11Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell12Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell13Social);
          rowCriterioPreguntasSocial.appendChild(whitefillCell14Social);  

          rowValoracionRiesgo.appendChild(rowCriterioPreguntasSocial);                                  
        }

      }//Aqui finaliza el if de Social--------------------------------------------------------------------------   

      tbodyPreguntas.appendChild(rowValoracionRiesgo);
      tablePreguntas.appendChild(tbodyPreguntas);
      tableContainerPreguntas.appendChild(tablePreguntas);
    }
          
          
          
          
          
          
          
          
          
          
          
          