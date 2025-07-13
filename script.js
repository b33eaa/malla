const ramos = [
  // Primer Año - 1er Semestre
  {id:"matematicas",nombre:"Matemáticas",anio:1,semestre:1,prerrequisitos:[]},
  {id:"introquimica",nombre:"Introducción a la Química y Farmacia",anio:1,semestre:1,prerrequisitos:[]},
  {id:"biocel",nombre:"Biología Celular",anio:1,semestre:1,prerrequisitos:[]},
  {id:"anatomia",nombre:"Anatomía",anio:1,semestre:1,prerrequisitos:[]},
  {id:"quimgeneral1",nombre:"Química General I",anio:1,semestre:1,prerrequisitos:[]},
  {id:"lengua",nombre:"Taller de Lengua Materna",anio:1,semestre:1,prerrequisitos:[]},
  {id:"introlab",nombre:"Introducción al Laboratorio",anio:1,semestre:1,prerrequisitos:[]},

  // Primer Año - 2do Semestre
  {id:"quimgeneral2",nombre:"Química General II",anio:1,semestre:2,prerrequisitos:["quimgeneral1","introlab"]},
  {id:"calculo",nombre:"Cálculo",anio:1,semestre:2,prerrequisitos:["matematicas"]},
  {id:"fisiologia1",nombre:"Fisiología I",anio:1,semestre:2,prerrequisitos:["anatomia","biocel"]},
  {id:"organica1",nombre:"Química Orgánica I",anio:1,semestre:2,prerrequisitos:["quimgeneral1","introlab"]},
  {id:"estadistica",nombre:"Introducción a la Estadística",anio:1,semestre:2,prerrequisitos:["matematicas"]},
  {id:"ingles",nombre:"Taller de Nivelación de Inglés",anio:1,semestre:2,prerrequisitos:[]},

  // Segundo Año - 3er Semestre
  {id:"organica2",nombre:"Química Orgánica II",anio:2,semestre:1,prerrequisitos:["quimgeneral2","organica1"]},
  {id:"analitica",nombre:"Química Analítica",anio:2,semestre:1,prerrequisitos:["quimgeneral2","calculo"]},
  {id:"fisiologia2",nombre:"Fisiología II",anio:2,semestre:1,prerrequisitos:["fisiologia1"]},
  {id:"adminorg",nombre:"Administración de Organizaciones",anio:2,semestre:1,prerrequisitos:["matematicas","lengua"]},
  {id:"bioquimica",nombre:"Bioquímica",anio:2,semestre:1,prerrequisitos:["biocel","organica1"]},
  {id:"etica",nombre:"Ética",anio:2,semestre:1,prerrequisitos:["lengua","matematicas","introquimica","biocel","anatomia","quimgeneral1","introlab","quimgeneral2","calculo","fisiologia1","organica1","estadistica","ingles"]},

  // Segundo Año - 4to Semestre
  {id:"botanica",nombre:"Botánica",anio:2,semestre:2,prerrequisitos:["biocel","organica1"]},
  {id:"instrumental",nombre:"Análisis Instrumental",anio:2,semestre:2,prerrequisitos:["analitica"]},
  {id:"fisiopato",nombre:"Fisiopatología",anio:2,semestre:2,prerrequisitos:["fisiologia2"]},
  {id:"fisicoquimica",nombre:"Fisicoquímica",anio:2,semestre:2,prerrequisitos:["quimgeneral2","calculo"]},
  {id:"adminrrhh",nombre:"Administración de Recursos Humanos",anio:2,semestre:2,prerrequisitos:["adminorg","etica"]},
  {id:"introquimfarm",nombre:"Introducción a la Química Farmacéutica",anio:2,semestre:2,prerrequisitos:["organica2"]},

  // Tercer Año - 5to Semestre
  {id:"farmacognosia",nombre:"Farmacognosia",anio:3,semestre:1,prerrequisitos:["organica2","botanica"]},
  {id:"biomolecular",nombre:"Biología Molecular",anio:3,semestre:1,prerrequisitos:["bioquimica"]},
  {id:"operaciones",nombre:"Operaciones Unitarias",anio:3,semestre:1,prerrequisitos:["fisicoquimica"]},
  {id:"quimfarm1",nombre:"Química Farmacéutica I",anio:3,semestre:1,prerrequisitos:["fisiologia1","introquimfarm"]},
  {id:"electiva1",nombre:"Electiva Profesional I",anio:3,semestre:1,prerrequisitos:["etica"]},
  {id:"microbiologia",nombre:"Microbiología",anio:3,semestre:1,prerrequisitos:["bioquimica"]},
  {id:"legislacion",nombre:"Legislación Farmacéutica",anio:3,semestre:1,prerrequisitos:["adminorg"]},

  // Tercer Año - 6to Semestre
  {id:"biofarmacia",nombre:"Biofarmacia",anio:3,semestre:2,prerrequisitos:["fisiologia2","instrumental"]},
  {id:"farmacologia1",nombre:"Farmacología I",anio:3,semestre:2,prerrequisitos:["fisiopato","quimfarm1"]},
  {id:"inmunologia",nombre:"Inmunología",anio:3,semestre:2,prerrequisitos:["fisiopato","biomolecular"]},
  {id:"quimfarm2",nombre:"Química Farmacéutica II",anio:3,semestre:2,prerrequisitos:["quimfarm1","microbiologia"]},
  {id:"practica1",nombre:"Práctica Profesional I",anio:3,semestre:2,prerrequisitos:["etica","adminrrhh","legislacion"]},
  {id:"bioestadistica",nombre:"Bioestadística",anio:3,semestre:2,prerrequisitos:["matematicas","etica"]},

  // Cuarto Año - 7mo Semestre
  {id:"tecfarm1",nombre:"Tecnología Farmacéutica I",anio:4,semestre:1,prerrequisitos:["operaciones","biofarmacia"]},
  {id:"farmacologia2",nombre:"Farmacología II",anio:4,semestre:1,prerrequisitos:["farmacologia1","quimfarm2"]},
  {id:"quimfisiopato",nombre:"Química Fisiológica y Patológica",anio:4,semestre:1,prerrequisitos:["instrumental","inmunologia"]},
  {id:"saludpublica",nombre:"Salud Pública y Epidemiología",anio:4,semestre:1,prerrequisitos:["etica","bioestadistica"]},
  {id:"alim",nombre:"Química de Alimentos",anio:4,semestre:1,prerrequisitos:["instrumental"]},
  {id:"metodoinv",nombre:"Metodología de la Investigación",anio:4,semestre:1,prerrequisitos:["bioquimica","bioestadistica"]},
  {id:"perfil1",nombre:"Taller Integración Perfil de Egreso I",anio:4,semestre:1,prerrequisitos:["practica1"]},

  // Cuarto Año - 8vo Semestre
  {id:"tecfarm2",nombre:"Tecnología Farmacéutica II",anio:4,semestre:2,prerrequisitos:["tecfarm1"]},
  {id:"farmasist",nombre:"Farmacia Asistencial",anio:4,semestre:2,prerrequisitos:["adminrrhh","saludpublica"]},
  {id:"nutricion",nombre:"Nutrición",anio:4,semestre:2,prerrequisitos:["quimfisiopato","alim"]},
  {id:"gestioncalidad",nombre:"Gestión de Calidad",anio:4,semestre:2,prerrequisitos:["legislacion","tecfarm1"]},
  {id:"bioquimcl",nombre:"Bioquímica Clínica",anio:4,semestre:2,prerrequisitos:["quimfisiopato"]},
  {id:"seminario",nombre:"Seminario de Licenciatura",anio:4,semestre:2,prerrequisitos:["tecfarm1","farmacologia2","quimfisiopato","saludpublica","alim","metodoinv","perfil1"]},
  {id:"perfil2",nombre:"Taller Integración Perfil de Egreso II",anio:4,semestre:2,prerrequisitos:["perfil1"]},

  // Quinto Año - 9no Semestre
  {id:"farmaclinica1",nombre:"Farmacia Clínica I",anio:5,semestre:1,prerrequisitos:["tecfarm2","farmasist","nutricion","gestioncalidad","bioquimcl","seminario","perfil2"]},
  {id:"cosmetica",nombre:"Cosmética",anio:5,semestre:1,prerrequisitos:["tecfarm1"]},
  {id:"toxicologia",nombre:"Toxicología",anio:5,semestre:1,prerrequisitos:["farmacologia2"]},
  {id:"gestioncomercial",nombre:"Gestión Comercial",anio:5,semestre:1,prerrequisitos:["adminrrhh","gestioncalidad"]},
  {id:"medcomplementarios",nombre:"Medicamentos Complementarios",anio:5,semestre:1,prerrequisitos:["farmacologia2","nutricion"]},
  {id:"practica2",nombre:"Práctica Profesional II",anio:5,semestre:1,prerrequisitos:["practica1","farmacologia2"]},
  {id:"perfil3",nombre:"Taller Integración Perfil de Egreso III",anio:5,semestre:1,prerrequisitos:["perfil2"]},

  // Quinto Año - 10mo Semestre
  {id:"electiva2",nombre:"Electiva Profesional II",anio:5,semestre:2,prerrequisitos:["etica"]},
  {id:"farmaclinica2",nombre:"Farmacia Clínica II",anio:5,semestre:2,prerrequisitos:["farmaclinica1"]},
  {id:"unidad1",nombre:"Unidad de Investigación I / Internado I",anio:5,semestre:2,prerrequisitos:["seminario"]},
  {id:"practica3",nombre:"Práctica Profesional III",anio:5,semestre:2,prerrequisitos:["instrumental","saludpublica","tecfarm2","farmasist","bioquimcl","toxicologia"]},

  // Sexto Año - 11avo Semestre
  {id:"unidad2",nombre:"Unidad de Investigación II / Internado II",anio:6,semestre:1,prerrequisitos:["unidad1"]}
];

let aprobados = {};

function dibujarMalla() {
  const contenedor = document.getElementById('malla');
  contenedor.innerHTML = '';

  for (let anio = 1; anio <= 6; anio++) {
    const columna = document.createElement('div');
    columna.classList.add('anio');
    const titulo = document.createElement('h2');
    titulo.textContent = `Año ${anio}`;
    columna.appendChild(titulo);

    const semestres = (anio === 6) ? [1] : [1,2];

    semestres.forEach(semestre => {
      const semestreDiv = document.createElement('div');
      semestreDiv.classList.add('semestre');
      const subtitulo = document.createElement('h3');
      subtitulo.textContent = `Semestre ${semestre}`;
      semestreDiv.appendChild(subtitulo);

      const ramosEnSemestre = ramos.filter(r => r.anio === anio && r.semestre === semestre);

      ramosEnSemestre.forEach(ramo => {
        const div = document.createElement('div');
        div.classList.add('ramo');
        div.textContent = ramo.nombre;
        div.dataset.id = ramo.id;

       if (aprobados[ramo.id]) {
  div.classList.add('aprobado');
} else if (
  ramo.prerrequisitos.length > 0 && // solo ramos con prerrequisitos
  cumplePrerequisitos(ramo) && 
  Object.keys(aprobados).length > 0
) {
   div.classList.add('desbloqueado');
} else if (esParcialmenteDesbloqueado(ramo)) {
  div.classList.add('parcial');
} else {
  div.classList.add('desactivado');
}

        div.onclick = () => seleccionarRamo(ramo.id);
        semestreDiv.appendChild(div);
      });

      columna.appendChild(semestreDiv);
    });

    contenedor.appendChild(columna);
  }
}

function esParcialmenteDesbloqueado(ramo) {
  return (
    ramo.prerrequisitos.length > 0 &&
    ramo.prerrequisitos.some(pr => aprobados[pr]) && // al menos uno aprobado
    !cumplePrerequisitos(ramo) // pero no todos
  );
}

function cumplePrerequisitos(ramo) {
  return ramo.prerrequisitos.every(pr => aprobados[pr]);
}

function seleccionarRamo(id) {
  const ramo = ramos.find(r => r.id === id);
  const nodo = document.querySelector(`[data-id="${id}"]`);

  // Si ya está aprobado, desactiva y desactiva los futuros
  if (aprobados[id]) {
    delete aprobados[id];
    desactivarEnCascada(id);
    limpiarResaltado();
    dibujarMalla();
    return;
  }

  // Si cumple requisitos, apruébalo
  if (cumplePrerequisitos(ramo)) {
    aprobados[id] = true;
    limpiarResaltado();
    dibujarMalla();
    return;
  }

  // Si no cumple requisitos: toggle resaltado
  if (nodo.classList.contains('objetivo')) {
    limpiarResaltado();
  } else {
    limpiarResaltado();
    resaltarRequisitos(id);
    resaltarFuturos(id); // <<-- Aquí agregamos la funcionalidad de futuros
  }
}

function desactivarEnCascada(id) {
  ramos.forEach(ramo => {
    if (ramo.prerrequisitos.includes(id)) {
      if (aprobados[ramo.id]) {
        delete aprobados[ramo.id];
        desactivarEnCascada(ramo.id);
      }
    }
  });
}

function resaltarRequisitos(id) {
  const camino = obtenerCaminoRequisitos(id);

  camino.forEach(r => {
    const nodo = document.querySelector(`[data-id="${r}"]`);
    if (nodo) {
      nodo.classList.add('resaltado');
    }
  });

  const nodoObjetivo = document.querySelector(`[data-id="${id}"]`);
  if (nodoObjetivo) {
    nodoObjetivo.classList.remove('resaltado');
    nodoObjetivo.classList.add('objetivo');
  }
}

function resaltarFuturos(id) {
  const futuros = ramos.filter(r => r.prerrequisitos.includes(id));

  futuros.forEach(f => {
    const nodoFuturo = document.querySelector(`[data-id="${f.id}"]`);
    if (nodoFuturo) {
      nodoFuturo.classList.add('futuro');
    }
  });
}

function obtenerCaminoRequisitos(id) {
  const rama = [];
  const visitado = new Set();

  function dfs(ramoId) {
    if (visitado.has(ramoId)) return;
    visitado.add(ramoId);
    const ramo = ramos.find(r => r.id === ramoId);
    if (ramo) {
      ramo.prerrequisitos.forEach(pr => dfs(pr));
      rama.push(ramoId);
    }
  }

  dfs(id);
  return rama.reverse();
}

function limpiarResaltado() {
  document.querySelectorAll('.ramo').forEach(n => {
    n.classList.remove('resaltado');
    n.classList.remove('objetivo');
    n.classList.remove('futuro'); // Limpia futuros
  });
}

function resetear() {
  aprobados = {}; // Vacía todos los ramos aprobados
  limpiarResaltado(); // Limpia resaltados actuales
  dibujarMalla(); // Redibuja la malla en estado inicial
}

dibujarMalla();
