document.addEventListener("DOMContentLoaded", () => {
  const materias = {
    "Razonamiento Lógico Matemático": [],
    "Introducción a la Nutrición y Dietética": [],
    "Bases de la Química": [],
    "Psicología de la Salud": [],
    "Taller Integrado en Ciencias": [],
    "Taller de Competencias Comunicativas": [],

    "Ciencias de los Alimentos": [],
    "Biología Celular": ["Introducción a la Nutrición y Dietética", "Bases de la Química"],
    "Química de las biomoléculas": ["Introducción a la Nutrición y Dietética", "Bases de la Química"],
    "Atención Básica de Urgencia": [],
    "Ingles Básico I": [],
    "Electivo Formación General I": ["Taller de Competencias Comunicativas"],

    "Microbiología y Parasitología Alimentaria": ["Ciencias de los Alimentos"],
    "Anatomofisiologia General": ["Biología Celular", "Química de las biomoléculas"],
    "Bioquímica Nutricional I": ["Biología Celular", "Química de las biomoléculas"],
    "Salud y Sociedad": [],
    "Ingles Básico II": ["Ingles Básico I"],
    "Electivo Formación General II": ["Electivo Formación General I"],

    "Epidemiología y Estadística": ["Razonamiento Lógico Matemático"],
    "Higiene e Inocuidad Alimentaria": ["Microbiología y Parasitología Alimentaria"],
    "Bioquímica Nutricional II": ["Bioquímica Nutricional I"],
    "Fisiología Nutricional y del Comportamiento Alimentario": ["Anatomofisiologia General"],
    "Antropología Alimentaria": [],
    "Electivo Formación General III": ["Electivo Formación General II"],

    "Bioética": ["Epidemiología y Estadística"],
    "Bioquímica de los Alimentos y Bromatología": ["Higiene e Inocuidad Alimentaria"],
    "Técnicas Dietéticas y Planificación Alimentaría": ["Higiene e Inocuidad Alimentaria"],
    "Evaluación Nutricional I": ["Bioquímica Nutricional II", "Fisiología Nutricional y del Comportamiento Alimentario"],
    "Educación para Salud": ["Antropología Alimentaria"],
    "Persona y Sentido": ["Electivo Formación General III"],

    "Metodología de la investigación": ["Bioética"],
    "Gestión de Unidades de Producción Alimentaria I": ["Bioquímica de los Alimentos y Bromatología", "Técnicas Dietéticas y Planificación Alimentaría"],
    "Fisiopatología y Dietoterapia I": ["Evaluación Nutricional I"],
    "Evaluación Nutricional II": ["Evaluación Nutricional I"],
    "Alimentación Normal en el Curso de la Vida": ["Educación para Salud"],
    "Electivo I": ["Persona y Sentido"],

    "Seminario de Investigación I": ["Metodología de la investigación"],
    "Gestión de Unidades de Producción Alimentaría II": ["Gestión de Unidades de Producción Alimentaria I"],
    "Fisiopatología y Dietoterapia II": ["Fisiopatología y Dietoterapia I"],
    "Diseño de Proyectos de Intervención en Salud": ["Alimentación Normal en el Curso de la Vida"],
    "Políticas y Programas de Salud": ["Alimentación Normal en el Curso de la Vida"],
    "Electivo II": ["Electivo I"],

    "Seminario de Investigación II": ["Seminario de Investigación I"],
    "Practica de Gestión de Unidades de Producción Alimentaria": ["Gestión de Unidades de Producción Alimentaría II"],
    "Fisiopatología y Dietoterapia III": ["Fisiopatología y Dietoterapia II"],
    "Intervención Alimentaría Nutricional": ["Diseño de Proyectos de Intervención en Salud", "Políticas y Programas de Salud"],
    "Electivo III": ["Electivo II"],

    "Internado Profesional Nutrición Clínica": ["Fisiopatología y Dietoterapia III"],
    "Internado Profesional Nutrición Comunitaria Interescolar": ["Intervención Alimentaría Nutricional"],

    "Internado Profesional Gestión de Unidades de Producción Alimentaría": ["Practica de Gestión de Unidades de Producción Alimentaria"],
    "Internado Profesional Nutricion Comunitaria": ["Internado Profesional Nutrición Comunitaria Interescolar"]
  };

  // Guardar y cargar estado con localStorage
  const savedState = JSON.parse(localStorage.getItem("materiasEstado")) || {};

  const materiasEstado = {...savedState};

  function puedeDesbloquear(materia) {
    return materias[materia].every(req => materiasEstado[req]);
  }

  function actualizarEstado() {
    Object.keys(materiasEstado).forEach(materia => {
      const boton = document.querySelector(`[data-materia="${materia}"] button`);
      if (!boton) return;

      if (materiasEstado[materia]) {
        boton.classList.add("aprobada");
        boton.textContent = "Materia aprobada ✓";
        boton.disabled = false;
      } else {
        // Se bloquea si no cumple requisitos
        if (puedeDesbloquear(materia)) {
          boton.disabled = false;
          boton.classList.remove("aprobada");
          boton.textContent = "Aprobar materia";
        } else {
          boton.disabled = true;
          boton.classList.remove("aprobada");
          boton.textContent = "Bloqueada";
        }
      }
    });
  }

  // Al aprobar o desaprobar, actualizar estado y guardar
  function toggleAprobada(materia) {
    if (materiasEstado[materia]) {
      // Si está aprobada, la desmarcamos
      materiasEstado[materia] = false;

      // Además, desmarcamos las materias que dependen directa o indirectamente de esta materia
      desmarcarDependientes(materia);
    } else {
      // Si no estaba aprobada, la aprobamos solo si puede desbloquear
      if (puedeDesbloquear(materia)) {
        materiasEstado[materia] = true;
      } else {
        return; // No se puede aprobar si no cumple requisitos
      }
    }
    actualizarEstado();
    localStorage.setItem("materiasEstado", JSON.stringify(materiasEstado));
  }

  // Función recursiva para desmarcar dependientes
  function desmarcarDependientes(materia) {
    Object.keys(materias).forEach(m => {
      if (materias[m].includes(materia) && materiasEstado[m]) {
        materiasEstado[m] = false;
        desmarcarDependientes(m);
      }
    });
  }

  // Crear la UI con botones y eventos
  Object.keys(materias).forEach(materia => {
    const contenedor = document.querySelector(`[data-materia="${materia}"]`);
    if (!contenedor) return;

    const boton = document.createElement("button");
    boton.textContent = "Aprobar materia";
    boton.addEventListener("click", () => toggleAprobada(materia));

    contenedor.appendChild(boton);
  });

  actualizarEstado();
});
