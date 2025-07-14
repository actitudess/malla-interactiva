// Datos de materias con requisitos
const materias = [
  // PRIMER SEMESTRE
  { id: 'rlogmat', nombre: 'Razonamiento Lógico Matemático', semestre: 1, requisitos: [] },
  { id: 'intro_nutri', nombre: 'Introducción a la Nutrición y Dietética', semestre: 1, requisitos: [] },
  { id: 'bases_quim', nombre: 'Bases de la Química', semestre: 1, requisitos: [] },
  { id: 'psic_salud', nombre: 'Psicología de la Salud', semestre: 1, requisitos: [] },
  { id: 'taller_cien', nombre: 'Taller Integrado en Ciencias', semestre: 1, requisitos: [] },
  { id: 'taller_com', nombre: 'Taller de Competencias Comunicativas', semestre: 1, requisitos: [] },

  // SEGUNDO SEMESTRE
  { id: 'cien_alim', nombre: 'Ciencias de los Alimentos', semestre: 2, requisitos: [] },
  { id: 'bio_cel', nombre: 'Biología Celular', semestre: 2, requisitos: ['intro_nutri', 'bases_quim'] },
  { id: 'quim_biom', nombre: 'Química de las biomoléculas', semestre: 2, requisitos: ['intro_nutri', 'bases_quim'] },
  { id: 'atencion_urg', nombre: 'Atención Básica de Urgencia', semestre: 2, requisitos: [] },
  { id: 'ingles_1', nombre: 'Inglés Básico I', semestre: 2, requisitos: [] },
  { id: 'electivo_fg1', nombre: 'Electivo Formación General I', semestre: 2, requisitos: ['taller_com'] },

  // TERCER SEMESTRE
  { id: 'micro_paras', nombre: 'Microbiología y Parasitología Alimentaria', semestre: 3, requisitos: ['cien_alim'] },
  { id: 'anat_gen', nombre: 'Anatomofisiologia General', semestre: 3, requisitos: ['bio_cel', 'quim_biom'] },
  { id: 'bioq_nutri1', nombre: 'Bioquímica Nutricional I', semestre: 3, requisitos: ['bio_cel', 'quim_biom'] },
  { id: 'salud_soc', nombre: 'Salud y Sociedad', semestre: 3, requisitos: [] },
  { id: 'ingles_2', nombre: 'Inglés Básico II', semestre: 3, requisitos: ['ingles_1'] },
  { id: 'electivo_fg2', nombre: 'Electivo Formación General II', semestre: 3, requisitos: ['electivo_fg1'] },

  // CUARTO SEMESTRE
  { id: 'epi_estad', nombre: 'Epidemiología y Estadística', semestre: 4, requisitos: ['rlogmat'] },
  { id: 'higiene_inocu', nombre: 'Higiene e Inocuidad Alimentaria', semestre: 4, requisitos: ['micro_paras'] },
  { id: 'bioq_nutri2', nombre: 'Bioquímica Nutricional II', semestre: 4, requisitos: ['bioq_nutri1'] },
  { id: 'fisio_nutri', nombre: 'Fisiología Nutricional y del Comportamiento Alimentario', semestre: 4, requisitos: ['anat_gen'] },
  { id: 'antrop_alim', nombre: 'Antropología Alimentaria', semestre: 4, requisitos: [] },
  { id: 'electivo_fg3', nombre: 'Electivo Formación General III', semestre: 4, requisitos: ['electivo_fg2'] },

  // QUINTO SEMESTRE
  { id: 'bioetica', nombre: 'Bioética', semestre: 5, requisitos: ['epi_estad'] },
  { id: 'bioq_alim_broma', nombre: 'Bioquímica de los Alimentos y Bromatología', semestre: 5, requisitos: ['higiene_inocu'] },
  { id: 'tecn_dietetica', nombre: 'Técnicas Dietéticas y Planificación Alimentaría', semestre: 5, requisitos: ['higiene_inocu'] },
  { id: 'eval_nutri1', nombre: 'Evaluación Nutricional I', semestre: 5, requisitos: ['bioq_nutri2', 'fisio_nutri'] },
  { id: 'edu_salud', nombre: 'Educación para Salud', semestre: 5, requisitos: ['antrop_alim'] },
  { id: 'persona_sentido', nombre: 'Persona y Sentido', semestre: 5, requisitos: ['electivo_fg3'] },

  // SEXTO SEMESTRE
  { id: 'metod_inves', nombre: 'Metodología de la investigación', semestre: 6, requisitos: ['bioetica'] },
  { id: 'gestion_uni_alim1', nombre: 'Gestión de Unidades de Producción Alimentaria I', semestre: 6, requisitos: ['bioq_alim_broma', 'tecn_dietetica'] },
  { id: 'fisio_diet1', nombre: 'Fisiopatología y Dietoterapia I', semestre: 6, requisitos: ['eval_nutri1'] },
  { id: 'eval_nutri2', nombre: 'Evaluación Nutricional II', semestre: 6, requisitos: ['eval_nutri1'] },
  { id: 'alim_normal', nombre: 'Alimentación Normal en el Curso de la Vida', semestre: 6, requisitos: ['edu_salud'] },
  { id: 'electivo_1', nombre: 'Electivo I', semestre: 6, requisitos: ['persona_sentido'] },

  // SEPTIMO SEMESTRE
  { id: 'semin_inves_1', nombre: 'Seminario de Investigación I', semestre: 7, requisitos: ['metod_inves'] },
  { id: 'gestion_uni_alim2', nombre: 'Gestión de Unidades de Producción Alimentaría II', semestre: 7, requisitos: ['gestion_uni_alim1'] },
  { id: 'fisio_diet2', nombre: 'Fisiopatología y Dietoterapia II', semestre: 7, requisitos: ['fisio_diet1'] },
  { id: 'disen_proy_salud', nombre: 'Diseño de Proyectos de Intervención en Salud', semestre: 7, requisitos: ['alim_normal'] },
  { id: 'pol_prog_salud', nombre: 'Políticas y Programas de Salud', semestre: 7, requisitos: ['alim_normal'] },
  { id: 'electivo_2', nombre: 'Electivo II', semestre: 7, requisitos: ['electivo_1'] },

  // OCTAVO SEMESTRE
  { id: 'semin_inves_2', nombre: 'Seminario de Investigación II', semestre: 8, requisitos: ['semin_inves_1'] },
  { id: 'pract_gestion_uni_alim', nombre: 'Practica de Gestión de Unidades de Producción Alimentaria', semestre: 8, requisitos: ['gestion_uni_alim2'] },
  { id: 'fisio_diet3', nombre: 'Fisiopatología y Dietoterapia III', semestre: 8, requisitos: ['fisio_diet2'] },
  { id: 'interv_alim_nutri', nombre: 'Intervención Alimentaría Nutricional', semestre: 8, requisitos: ['disen_proy_salud', 'pol_prog_salud'] },
  { id: 'electivo_3', nombre: 'Electivo III', semestre: 8, requisitos: ['electivo_2'] },

  // NOVENO SEMESTRE
  { id: 'internado_nutric_clin', nombre: 'Internado Profesional Nutrición Clínica', semestre: 9, requisitos: ['fisio_diet3'] },
  { id: 'internado_nutric_com', nombre: 'Internado Profesional Nutrición Comunitaria Interescolar', semestre: 9, requisitos: ['interv_alim_nutri'] },

  // DECIMO SEMESTRE
  { id: 'internado_gestion_uni', nombre: 'Internado Profesional Gestión de Unidades de Producción Alimentaría', semestre: 10, requisitos: ['pract_gestion_uni_alim'] },
  { id: 'internado_nutric_com2', nombre: 'Internado Profesional Nutricion Comunitaria', semestre: 10, requisitos: ['internado_nutric_com'] }
];

// Estado de materias aprobadas, se carga y guarda en localStorage para persistencia
let aprobadas = JSON.parse(localStorage.getItem('materiasAprobadas') || '{}');

// Referencia al contenedor
const container = document.getElementById('malla-container');

// Crear los elementos en la malla
function renderMaterias() {
  container.innerHTML = '';

  materias.forEach(materia => {
    const div = document.createElement('div');
    div.classList.add('materia');

    // Estado: bloqueada o no
    if (!puedeAprobar(materia)) {
      div.classList.add('locked');
    }
    if (aprobadas[materia.id]) {
      div.classList.add('aprobada');
    }

    div.id = materia.id;

    // Título y semestre
    div.innerHTML = `
      <div class="titulo">${materia.nombre}</div>
      <div class="semestre">Semestre ${materia.semestre}</div>
    `;

    // Botón para aprobar si no está aprobada ni bloqueada
    if (!aprobadas[materia.id] && puedeAprobar(materia)) {
      const btn = document.createElement('button');
      btn.textContent = 'Aprobar materia';
      btn.className = 'aprobar-btn';
      btn.addEventListener('click', () => {
        aprobarMateria(materia.id);
      });
      div.appendChild(btn);
    }

    container.appendChild(div);
  });
}

// Verifica si puede aprobar la materia (tiene todos sus requisitos aprobados)
function puedeAprobar(materia) {
  return materia.requisitos.every(req => aprobadas[req]);
}

// Función para aprobar materia y actualizar estado
function aprobarMateria(id) {
  aprobadas[id] = true;
  localStorage.setItem('materiasAprobadas', JSON.stringify(aprobadas));
  renderMaterias();
}

// Inicializar renderizado
renderMaterias();
