// Datos de materias y requisitos
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
  { id: "alim_normal_vida", nombre: "Alimentación Normal en el Curso de la Vida", semestre: 6, reqs: ["edu_salud"] },
  { id: "electivo_i", nombre: "Electivo I", semestre: 6, reqs: ["persona_sentido"] },

  { id: "semin_inv_i", nombre: "Seminario de Investigación I", semestre: 7, reqs: ["metod_inv"] },
  { id: "gest_alim_ii", nombre: "Gestión de Unidades de Producción Alimentaria II", semestre: 7, reqs: ["gest_alim_i"] },
  { id: "fisio_diet_ii", nombre: "Fisiopatología y Dietoterapia II", semestre: 7, reqs: ["fisio_diet_i"] },
  { id: "disen_proy_salud", nombre: "Diseño de Proyectos de Intervención en Salud", semestre: 7, reqs: ["alim_normal_vida"] },
  { id: "polit_prog_salud", nombre: "Políticas y Programas de Salud", semestre: 7, reqs: ["alim_normal_vida"] },
  { id: "electivo_ii", nombre: "Electivo II", semestre: 7, reqs: ["electivo_i"] },

  { id: "semin_inv_ii", nombre: "Seminario de Investigación II", semestre: 8, reqs: ["semin_inv_i"] },
  { id: "pract_gest_alim", nombre: "Práctica de Gestión de Unidades de Producción Alimentaria", semestre: 8, reqs: ["gest_alim_ii"] },
  { id: "fisio_diet_iii", nombre: "Fisiopatología y Dietoterapia III", semestre: 8, reqs: ["fisio_diet_ii"] },
  { id: "interv_alim_nutri", nombre: "Intervención Alimentaria Nutricional", semestre: 8, reqs: ["disen_proy_salud", "polit_prog_salud"] },
  { id: "electivo_iii", nombre: "Electivo III", semestre: 8, reqs: ["electivo_ii"] },

  { id: "internado_clinica", nombre: "Internado Profesional Nutrición Clínica", semestre: 9, reqs: ["fisio_diet_iii"] },
  { id: "internado_comunitaria", nombre: "Internado Profesional Nutrición Comunitaria Interescolar", semestre: 9, reqs: ["interv_alim_nutri"] },

  { id: "internado_gestion", nombre: "Internado Profesional Gestión de Unidades de Producción Alimentaria", semestre: 10, reqs: ["pract_gest_alim"] },
  { id: "internado_nutri_com", nombre: "Internado Profesional Nutrición Comunitaria", semestre: 10, reqs: ["internado_comunitaria"] },
];

// Estado de materias aprobadas guardado en localStorage (para mantener estado al recargar)
let aprobadas = JSON.parse(localStorage.getItem("aprobadas") || "{}");

// Contenedor
const mallaContainer = document.getElementById("malla-container");

function puedeDesbloquear(materia) {
  // Retorna true si todas las materias requisito están aprobadas
  return materia.reqs.every(reqId => aprobadas[reqId]);
}

function actualizarMalla() {
  mallaContainer.innerHTML = "";

  materias.forEach(materia => {
    // Crear div materia
    const divMateria = document.createElement("div");
    divMateria.classList.add("materia");
    divMateria.id = materia.id;

    // Ver si está aprobada
    if (aprobadas[materia.id]) {
      divMateria.classList.add("aprobada");
    }

    // Ver si está bloqueada (no cumple requisitos)
    if (!puedeDesbloquear(materia) && !aprobadas[materia.id]) {
      divMateria.classList.add("locked");
    }

    // Contenido
    const titulo = document.createElement("div");
    titulo.classList.add("titulo");
    titulo.title = materia.nombre;
    titulo.textContent = materia.nombre;

    const semestre = document.createElement("div");
    semestre.classList.add("semestre");
    semestre.textContent = `Semestre ${materia.semestre}`;

    // Botón aprobar / desmarcar
    const btn = document.createElement("button");
    btn.classList.add("aprobar-btn");

    if (aprobadas[materia.id]) {
      btn.textContent = "Desmarcar";
      btn.disabled = false;
    } else if (divMateria.classList.contains("locked")) {
      btn.textContent = "Bloqueado";
      btn.disabled = true;
    } else {
      btn.textContent = "Aprobar";
      btn.disabled = false;
    }

    btn.addEventListener("click", () => {
      if (aprobadas[materia.id]) {
        // Desmarcar
        delete aprobadas[materia.id];
      } else {
        // Aprobar
        aprobadas[materia.id] = true;
      }
      localStorage.setItem("aprobadas", JSON.stringify(aprobadas));
      actualizarMalla();
    });

    divMateria.appendChild(titulo);
    divMateria.appendChild(semestre);
    divMateria.appendChild(btn);

    mallaContainer.appendChild(divMateria);
  });
}

actualizarMalla();
