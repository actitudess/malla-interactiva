const materias = [
  // --- PRIMER SEMESTRE ---
  { id: "rlogmat", nombre: "Razonamiento Lógico Matemático", semestre: 1, reqs: [] },
  { id: "intro_nutri", nombre: "Introducción a la Nutrición y Dietética", semestre: 1, reqs: [] },
  { id: "bases_quimica", nombre: "Bases de la Química", semestre: 1, reqs: [] },
  { id: "psic_salud", nombre: "Psicología de la Salud", semestre: 1, reqs: [] },
  { id: "taller_cien", nombre: "Taller Integrado en Ciencias", semestre: 1, reqs: [] },
  { id: "taller_com", nombre: "Taller de Competencias Comunicativas", semestre: 1, reqs: [] },

  // --- SEGUNDO SEMESTRE ---
  { id: "ciencias_alim", nombre: "Ciencias de los Alimentos", semestre: 2, reqs: [] },
  { id: "bio_celular", nombre: "Biología Celular", semestre: 2, reqs: ["intro_nutri", "bases_quimica"] },
  { id: "quim_biomol", nombre: "Química de las biomoléculas", semestre: 2, reqs: ["intro_nutri", "bases_quimica"] },
  { id: "urgencia", nombre: "Atención Básica de Urgencia", semestre: 2, reqs: [] },
  { id: "ingles1", nombre: "Inglés Básico I", semestre: 2, reqs: [] },
  { id: "electivo1", nombre: "Electivo Formación General I", semestre: 2, reqs: ["taller_com"] },

  // --- TERCER SEMESTRE ---
  { id: "micro_paras", nombre: "Microbiología y Parasitología Alimentaria", semestre: 3, reqs: ["ciencias_alim"] },
  { id: "anato", nombre: "Anatomofisiología General", semestre: 3, reqs: ["bio_celular", "quim_biomol"] },
  { id: "bioq1", nombre: "Bioquímica Nutricional I", semestre: 3, reqs: ["bio_celular", "quim_biomol"] },
  { id: "salud_soc", nombre: "Salud y Sociedad", semestre: 3, reqs: [] },
  { id: "ingles2", nombre: "Inglés Básico II", semestre: 3, reqs: ["ingles1"] },
  { id: "electivo2", nombre: "Electivo Formación General II", semestre: 3, reqs: ["electivo1"] },

  // --- CUARTO SEMESTRE ---
  { id: "epid", nombre: "Epidemiología y Estadística", semestre: 4, reqs: ["rlogmat"] },
  { id: "higiene", nombre: "Higiene e Inocuidad Alimentaria", semestre: 4, reqs: ["micro_paras"] },
  { id: "bioq2", nombre: "Bioquímica Nutricional II", semestre: 4, reqs: ["bioq1"] },
  { id: "fisio_nut", nombre: "Fisiología Nutricional y del Comportamiento Alimentario", semestre: 4, reqs: ["anato"] },
  { id: "antro_alim", nombre: "Antropología Alimentaria", semestre: 4, reqs: [] },
  { id: "electivo3", nombre: "Electivo Formación General III", semestre: 4, reqs: ["electivo2"] },

  // --- QUINTO SEMESTRE ---
  { id: "bioetica", nombre: "Bioética", semestre: 5, reqs: ["epid"] },
  { id: "bromatologia", nombre: "Bioquímica de los Alimentos y Bromatología", semestre: 5, reqs: ["higiene"] },
  { id: "tecnicas", nombre: "Técnicas Dietéticas y Planificación Alimentaria", semestre: 5, reqs: ["higiene"] },
  { id: "evalnut1", nombre: "Evaluación Nutricional I", semestre: 5, reqs: ["bioq2", "fisio_nut"] },
  { id: "educ_salud", nombre: "Educación para Salud", semestre: 5, reqs: ["antro_alim"] },
  { id: "persona_sentido", nombre: "Persona y Sentido", semestre: 5, reqs: ["electivo3"] },

  // --- SEXTO SEMESTRE ---
  { id: "met_invest", nombre: "Metodología de la investigación", semestre: 6, reqs: ["bioetica"] },
  { id: "gestion1", nombre: "Gestión de Unidades de Producción Alimentaria I", semestre: 6, reqs: ["bromatologia", "tecnicas"] },
  { id: "fisiopato1", nombre: "Fisiopatología y Dietoterapia I", semestre: 6, reqs: ["evalnut1"] },
  { id: "evalnut2", nombre: "Evaluación Nutricional II", semestre: 6, reqs: ["evalnut1"] },
  { id: "alimentacion_curso_vida", nombre: "Alimentación Normal en el Curso de la Vida", semestre: 6, reqs: ["educ_salud"] },
  { id: "electivo4", nombre: "Electivo I", semestre: 6, reqs: ["persona_sentido"] },

  // --- SEPTIMO SEMESTRE ---
  { id: "sem_invest1", nombre: "Seminario de Investigación I", semestre: 7, reqs: ["met_invest"] },
  { id: "gestion2", nombre: "Gestión de Unidades de Producción Alimentaria II", semestre: 7, reqs: ["gestion1"] },
  { id: "fisiopato2", nombre: "Fisiopatología y Dietoterapia II", semestre: 7, reqs: ["fisiopato1"] },
  { id: "diseno_intervencion", nombre: "Diseño de Proyectos de Intervención en Salud", semestre: 7, reqs: ["alimentacion_curso_vida"] },
  { id: "politicas", nombre: "Políticas y Programas de Salud", semestre: 7, reqs: ["alimentacion_curso_vida"] },
  { id: "electivo5", nombre: "Electivo II", semestre: 7, reqs: ["electivo4"] },

  // --- OCTAVO SEMESTRE ---
  { id: "sem_invest2", nombre: "Seminario de Investigación II", semestre: 8, reqs: ["sem_invest1"] },
  { id: "practica_gestion", nombre: "Práctica de Gestión de Unidades de Producción Alimentaria", semestre: 8, reqs: ["gestion2"] },
  { id: "fisiopato3", nombre: "Fisiopatología y Dietoterapia III", semestre: 8, reqs: ["fisiopato2"] },
  { id: "intervencion", nombre: "Intervención Alimentaria Nutricional", semestre: 8, reqs: ["diseno_intervencion", "politicas"] },
  { id: "electivo6", nombre: "Electivo III", semestre: 8, reqs: ["electivo5"] },

  // --- NOVENO SEMESTRE ---
  { id: "internado_clinico", nombre: "Internado Profesional Nutrición Clínica", semestre: 9, reqs: ["fisiopato3"] },
  { id: "internado_comunitario_i", nombre: "Internado Profesional Nutrición Comunitaria Interescolar", semestre: 9, reqs: ["intervencion"] },

  // --- DECIMO SEMESTRE ---
  { id: "internado_gestion", nombre: "Internado Profesional Gestión de Unidades de Producción Alimentaria", semestre: 10, reqs: ["practica_gestion"] },
  { id: "internado_comunitario", nombre: "Internado Profesional Nutrición Comunitaria", semestre: 10, reqs: ["internado_comunitario_i"] }
];

// Agrupa materias por semestre
function agruparPorSemestre(materias) {
  const grupos = {};
  materias.forEach(m => {
    if (!grupos[m.semestre]) grupos[m.semestre] = [];
    grupos[m.semestre].push(m);
  });
  return grupos;
}

let aprobadas = {};

function guardarEstado() {
  localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
}

function cargarEstado() {
  const data = localStorage.getItem("aprobadas");
  if (data) aprobadas = JSON.parse(data);
}

function requisitosAprobados(materia) {
  return materia.reqs.every(req => aprobadas[req]);
}

function renderizarMalla() {
  const contenedor = document.getElementById("malla-container");
  contenedor.innerHTML = "";

  const grupos = agruparPorSemestre(materias);
  Object.keys(grupos).sort((a, b) => a - b).forEach(semestre => {
    const grupoDiv = document.createElement("div");
    grupoDiv.classList.add("semestre-section");

    const titulo = document.createElement("div");
    titulo.classList.add("semestre-title");
    titulo.textContent = `Semestre ${semestre}`;
    grupoDiv.appendChild(titulo);

    const grid = document.createElement("div");
    grid.classList.add("semestre-grid");

    grupos[semestre].forEach(m => {
      const div = document.createElement("div");
      div.classList.add("materia");
      if (!requisitosAprobados(m)) div.classList.add("locked");
      if (aprobadas[m.id]) div.classList.add("aprobada");

      const nombre = document.createElement("div");
      nombre.classList.add("titulo");
      nombre.textContent = m.nombre;

      const boton = document.createElement("button");
      boton.classList.add("aprobar-btn");
      boton.textContent = aprobadas[m.id] ? "Desmarcar" : "Aprobar";
      boton.disabled = !requisitosAprobados(m);

      boton.addEventListener("click", e => {
        e.stopPropagation();
        aprobadas[m.id] = !aprobadas[m.id];
        guardarEstado();
        renderizarMalla();
      });

      div.appendChild(nombre);
      div.appendChild(boton);
      grid.appendChild(div);
    });

    grupoDiv.appendChild(grid);
    contenedor.appendChild(grupoDiv);
  });
}

// Inicializa
cargarEstado();
renderizarMalla();
