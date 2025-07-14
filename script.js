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

  // Cargar estado guardado o iniciar vacío
  const savedState = JSON.parse(localStorage.getItem("materiasEstado")) || {};
  const materiasEstado = { ...savedState };

  // Verifica que todas las materias prerequisito estén aprobadas
  function puedeDesbloquear(materia) {
    return materias[materia].every(req => materiasEstado[req]);
  }

  function actualizarEstado() {
    Object.keys(materiasEstado).forEach(materia => {
      const contenedor = document.querySelector(`[data-materia="${materia}"]`);
      if (!contenedor) return;
      const boton = contenedor.querySelector("button");
      if (!boton) return;

      if (materiasEstado[materia]) {
        boton.classList.add("aprobada");
        boton.textContent = "Materia aprobada ✓";
        boton.disabled = false;
        contenedor.classList
