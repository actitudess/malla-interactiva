const materias = [
  { id: "rlogmat", nombre: "Razonamiento Lógico Matemático", semestre: 1, reqs: [] },
  { id: "intro_nutri", nombre: "Introducción a la Nutrición y Dietética", semestre: 1, reqs: [] },
  { id: "bases_quimica", nombre: "Bases de la Química", semestre: 1, reqs: [] },
  { id: "psic_salud", nombre: "Psicología de la Salud", semestre: 1, reqs: [] },
  { id: "taller_cien", nombre: "Taller Integrado en Ciencias", semestre: 1, reqs: [] },
  { id: "taller_com", nombre: "Taller de Competencias Comunicativas", semestre: 1, reqs: [] },

  { id: "ciencias_alim", nombre: "Ciencias de los Alimentos", semestre: 2, reqs: [] },
  { id: "bio_celular", nombre: "Biología Celular", semestre: 2, reqs: ["intro_nutri", "bases_quimica"] },
  { id: "quim_biomolec", nombre: "Química de las biomoléculas", semestre: 2, reqs: ["intro_nutri", "bases_quimica"] },
  { id: "atencion_urg", nombre: "Atención Básica de Urgencia", semestre: 2, reqs: [] },
  { id: "ingles_i", nombre: "Inglés Básico I", semestre: 2, reqs: [] },
  { id: "electivo_fg_i", nombre: "Electivo Formación General I", semestre: 2, reqs: ["taller_com"] },

  { id: "micro_paras", nombre: "Microbiología y Parasitología Alimentaria", semestre: 3, reqs: ["ciencias_alim"] },
  { id: "anat_general", nombre: "Anatomofisiología General", semestre: 3, reqs: ["bio_celular", "quim_biomolec"] },
  { id: "bioquim_i", nombre: "Bioquímica Nutricional I", semestre: 3, reqs: ["bio_celular", "quim_biomolec"] },
  { id: "salud_sociedad", nombre: "Salud y Sociedad", semestre: 3, reqs: [] },
  { id: "ingles_ii", nombre: "Inglés Básico II", semestre: 3, reqs: ["ingles_i"] },
  { id: "electivo_fg_ii", nombre: "Electivo Formación General II", semestre: 3, reqs: ["electivo_fg_i"] },

  { id: "epid_estad", nombre: "Epidemiología y Estadística", semestre: 4, reqs: ["rlogmat"] },
  { id: "higiene_inocuidad", nombre: "Higiene e Inocuidad Alimentaria", semestre: 4, reqs: ["micro_paras"] },
  { id: "bioquim_ii", nombre: "Bioquímica Nutricional II", semestre: 4, reqs: ["bioquim_i"] },
  { id: "fisiol_nutri", nombre: "Fisiología Nutricional y del Comportamiento Alimentario", semestre: 4, reqs: ["anat_general"] },
  { id: "antrop_alim", nombre: "Antropología Alimentaria", semestre: 4, reqs: [] },
  { id: "electivo_fg_iii", nombre: "Electivo Formación General III", semestre: 4, reqs: ["electivo_fg_ii"] },

  { id: "bioetica", nombre: "Bioética", semestre: 5, reqs: ["epid_estad"] },
  { id: "bioquim_broma", nombre: "Bioquímica de los Alimentos y Bromatología", semestre: 5, reqs: ["higiene_inocuidad"] },
  { id: "tec_dietetica", nombre: "Técnicas Dietéticas y Planificación Alimentaria", semestre: 5, reqs: ["higiene_inocuidad"] },
  { id: "eval_nutri_i", nombre: "Evaluación Nutricional I", semestre: 5, reqs: ["bioquim_ii", "fisiol_nutri"] },
  { id: "edu_salud", nombre: "Educación para Salud", semestre: 5, reqs: ["antrop_alim"] },
  { id: "persona_sentido", nombre: "Persona y Sentido", semestre: 5, reqs: ["electivo_fg_iii"] },

  { id: "metod_inv", nombre: "Metodología de la investigación", semestre: 6, reqs: ["bioetica"] },
  { id: "gest_alim_i", nombre: "Gestión de Unidades de Producción Alimentaria I", semestre: 6, reqs: ["bioquim_broma", "tec_dietetica"] },
  { id: "fisio_diet_i", nombre: "Fisiopatología y Dietoterapia I", semestre: 6, reqs: ["eval_nutri_i"] },
  { id: "eval_nutri_ii", nombre: "Evaluación Nutricional II", semestre: 6, reqs: ["eval_nutri_i"] },
  { id: "alim_norm_vid", nombre: "Alimentación Normal en el Curso de la Vida", semestre: 6, reqs: ["edu_salud"] },
  { id: "electivo_i", nombre: "Electivo I", semestre: 6, reqs: ["persona_sentido"] },

  { id: "semin_inv_i", nombre: "Seminario de Investigación I", semestre: 7, reqs: ["metod_inv"] },
  { id: "gest_alim_ii", nombre: "Gestión de Unidades de Producción Alimentaria II", semestre: 7, reqs: ["gest_alim_i"] },
  { id: "fisio_diet_ii", nombre: "Fisiopatología y Dietoterapia II", semestre: 7, reqs: ["fisio_diet_i"] },
  { id: "dis_proy_salud", nombre: "Diseño de Proyectos de Intervención en Salud", semestre: 7, reqs: ["alim_norm_vid"] },
  { id: "pol_prog_salud", nombre: "Políticas y Programas de Salud", semestre: 7, reqs: ["alim_norm_vid"] },
  { id: "electivo_ii", nombre: "Electivo II", semestre: 7, reqs: ["electivo_i"] },

  { id: "semin_inv_ii", nombre: "Seminario de Investigación II", semestre: 8, reqs: ["semin_inv_i"] },
  { id: "pract_gest_alim", nombre: "Practica de Gestión de Unidades de Producción Alimentaria", semestre: 8, reqs: ["gest_alim_ii"] },
  { id: "fisio_diet_iii", nombre: "Fisiopatología y Dietoterapia III", semestre: 8, reqs: ["fisio_diet_ii"] },
  { id: "interv_alim_nutri", nombre: "Intervención Alimentaria Nutricional", semestre: 8, reqs: ["dis_proy_salud", "pol_prog_salud"] },
  { id: "electivo_iii", nombre: "Electivo III", semestre: 8, reqs: ["electivo_ii"] },

  { id: "intern_nut_clin", nombre: "Internado Profesional Nutrición Clínica", semestre: 9, reqs: ["fisio_diet_iii"] },
  { id: "intern_nut_comu", nombre: "Internado Profesional Nutrición Comunitaria Interescolar", semestre: 9, reqs: ["interv_alim_nutri"] },

  { id: "intern_gest_alim", nombre: "Internado Profesional Gestión de Unidades de Producción Alimentaria", semestre: 10, reqs: ["pract_gest_alim"] },
  { id: "intern_nut_comu2", nombre: "Internado Profesional Nutrición Comunitaria", semestre: 10, reqs: ["intern_nut_comu"] }
];

// Estado de materias aprobadas (por id)
let aprobadas = {};

function guardarEstado() {
  localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
}

function cargarEstado() {
  const data = localStorage.getItem("aprobadas");
  if (data) {
    aprobadas = JSON.parse(data);
  }
}

function puedeAprobar(materia) {
  // Verifica que todas las materias requeridas estén aprobadas
  return materia.reqs.every(req => aprobadas[req]);
}

function actualizarUI() {
  materias.forEach(materia => {
    const elem = document.getElementById(materia.id);
    const btn = elem.querySelector("button");
    if (aprobadas[materia.id]) {
      elem.classList.add("aprobada");
      elem.classList.remove("locked");
      btn.textContent = "Desmarcar";
      btn.disabled = false;
    } else {
      elem.classList.remove("aprobada");
      if (puedeAprobar(materia)) {
        elem.classList.remove("locked");
        btn.disabled = false;
        btn.textContent = "Aprobar";
      } else {
        elem.classList.add("locked");
        btn.disabled = true;
        btn.textContent = "Aprobar";
      }
    }
  });
}

function toggleAprobar(id) {
  if (aprobadas[id]) {
    // Desmarcar aprobada
    aprobadas[id] = false;
    delete aprobadas[id];
  } else {
    // Solo permitir aprobar si se puede
    const materia = materias.find(m => m.id === id);
    if (puedeAprobar(materia)) {
      aprobadas[id] = true;
    } else {
      return;
    }
  }
  guardarEstado();
  actualizarUI();
}

function crearMateriaElem(materia) {
  const div = document.createElement("div");
  div.classList.add("materia");
  div.id = materia.id;

  const titulo = document.createElement("div");
  titulo.classList.add("titulo");
  titulo.title = materia.nombre;
  titulo.textContent = materia.nombre;
  div.appendChild(titulo);

  const semestre = document.createElement("div");
  semestre.classList.add("semestre");
  semestre.textContent = `Semestre ${materia.semestre}`;
  div.appendChild(semestre);

  const btn = document.createElement("button");
  btn.classList.add("aprobar-btn");
  btn.addEventListener("click", () => toggleAprobar(materia.id));
  div.appendChild(btn);

  return div;
}

function init() {
  cargarEstado();
  const container = document.getElementById("malla-container");
  materias.forEach(materia => {
    const elem = crearMateriaElem(materia);
    container.appendChild(elem);
  });
  actualizarUI();
}

window.onload = init;
