const semesters = {
  1: "PRIMER SEMESTRE",
  2: "SEGUNDO SEMESTRE",
  3: "TERCER SEMESTRE",
  4: "CUARTO SEMESTRE",
  5: "QUINTO SEMESTRE",
  6: "SEXTO SEMESTRE",
  7: "SÉPTIMO SEMESTRE",
  8: "OCTAVO SEMESTRE",
  9: "NOVENO SEMESTRE",
  10: "DÉCIMO SEMESTRE"
};

const courses = [
  // 1º
  {id:"razonamiento", name:"Razonamiento Lógico Matemático", semester:1, unlocks:["epidemiologia"]},
  {id:"intro", name:"Introducción a la Nutrición y Dietética", semester:1},
  {id:"quimica", name:"Bases de la Química", semester:1, unlocks:["biologia","quimicaBiomoleculas"]},
  {id:"psicologia", name:"Psicología de la Salud", semester:1},
  {id:"tallerCiencias", name:"Taller Integrado en Ciencias", semester:1},
  {id:"competencias", name:"Taller de Competencias Comunicativas", semester:1},

  // 2º
  {id:"alimentos", name:"Ciencias de los Alimentos", semester:2, unlocks:["microbiologia"]},
  {id:"biologia", name:"Biología Celular", semester:2, requires:["quimica"], unlocks:["anatomofisiologia"]},
  {id:"quimicaBiomoleculas", name:"Química de las Biomoléculas", semester:2, requires:["quimica"], unlocks:["anatomofisiologia"]},
  {id:"urgencia", name:"Atención Básica de Urgencia", semester:2, unlocks:["saludSociedad"]},
  {id:"ingles1", name:"Inglés Básico I", semester:2, unlocks:["ingles2"]},
  {id:"electivo1", name:"Electivo Formación General I", semester:2, unlocks:["electivo2"]},

  // 3º
  {id:"microbiologia", name:"Microbiología y Parasitología Alimentaria", semester:3, unlocks:["higiene"]},
  {id:"anatomofisiologia", name:"Anatomofisiología General", semester:3, requires:["biologia","quimicaBiomoleculas"], unlocks:["fisiologia"]},
  {id:"bioq1", name:"Bioquímica Nutricional I", semester:3, unlocks:["bioq2"]},
  {id:"saludSociedad", name:"Salud y Sociedad", semester:3},
  {id:"ingles2", name:"Inglés Básico II", semester:3},
  {id:"electivo2", name:"Electivo Formación General II", semester:3, unlocks:["electivo3"]},

  // 4º
  {id:"epidemiologia", name:"Epidemiología y Estadística", semester:4, requires:["razonamiento"], unlocks:["bioetica"]},
  {id:"higiene", name:"Higiene e Inocuidad Alimentaria", semester:4, unlocks:["bioq2","tecnicas"]},
  {id:"bioq2", name:"Bioquímica Nutricional II", semester:4, requires:["bioq1"], unlocks:["bioqAlimentos"]},
  {id:"fisiologia", name:"Fisiología Nutricional y del Comportamiento Alimentario", semester:4, unlocks:["evaluacion1"]},
  {id:"antropologia", name:"Antropología Alimentaria", semester:4, unlocks:["educacionSalud"]},
  {id:"electivo3", name:"Electivo Formación General III", semester:4, unlocks:["personaSentido"]},

  // 5º
  {id:"bioetica", name:"Bioética", semester:5, requires:["epidemiologia"], unlocks:["metodologia"]},
  {id:"bioqAlimentos", name:"Bioquímica de los Alimentos y Bromatología", semester:5, unlocks:["gestion1"]},
  {id:"tecnicas", name:"Técnicas Dietéticas y Planificación Alimentaria", semester:5, unlocks:["gestion1"]},
  {id:"evaluacion1", name:"Evaluación Nutricional I", semester:5, unlocks:["evaluacion2","fisiopato1"]},
  {id:"educacionSalud", name:"Educación para Salud", semester:5, unlocks:["alimentacionVida"]},
  {id:"personaSentido", name:"Persona y Sentido", semester:5, unlocks:["electivoI"]},

  // 6º
  {id:"metodologia", name:"Metodología de la Investigación", semester:6, requires:["bioetica"], unlocks:["seminario1"]},
  {id:"gestion1", name:"Gestión de Unidades de Producción Alimentaria I", semester:6, requires:["bioqAlimentos","tecnicas"], unlocks:["gestion2"]},
  {id:"fisiopato1", name:"Fisiopatología y Dietoterapia I", semester:6, unlocks:["fisiopato2"]},
  {id:"evaluacion2", name:"Evaluación Nutricional II", semester:6},
  {id:"alimentacionVida", name:"Alimentación Normal en el Curso de la Vida", semester:6, unlocks:["intervencionAlimentaria","politicas"]},
  {id:"electivoI", name:"Electivo I", semester:6, unlocks:["electivoII"]},

  // 7º
  {id:"seminario1", name:"Seminario de Investigación I", semester:7, requires:["metodologia"], unlocks:["seminario2"]},
  {id:"gestion2", name:"Gestión de Unidades de Producción Alimentaria II", semester:7, requires:["gestion1"], unlocks:["practicaGestion"]},
  {id:"fisiopato2", name:"Fisiopatología y Dietoterapia II", semester:7, requires:["fisiopato1"], unlocks:["fisiopato3"]},
  {id:"intervencionSalud", name:"Diseño de Productos de Intervención en Salud", semester:7, unlocks:["intervencionAlimentaria"]},
  {id:"politicas", name:"Políticas y Programas de Salud", semester:7, unlocks:["intervencionAlimentaria"]},
  {id:"electivoII", name:"Electivo II", semester:7, unlocks:["electivoIII"]},

  // 8º
  {id:"seminario2", name:"Seminario de Investigación II", semester:8, requires:["seminario1"]},
  {id:"practicaGestion", name:"Práctica de Gestión de Unidades de Producción Alimentaria", semester:8, requires:["gestion2"], unlocks:["internadoGestion"]},
  {id:"fisiopato3", name:"Fisiopatología y Dietoterapia III", semester:8, requires:["fisiopato2"], unlocks:["internadoClinica"]},
  {id:"intervencionAlimentaria", name:"Intervención Alimentaria Nutricional", semester:8, requires:["intervencionSalud","politicas"], unlocks:["internadoComunitaria"]},
  {id:"electivoIII", name:"Electivo III", semester:8},

  // 9º
  {id:"internadoClinica", name:"Internado Profesional Nutrición Clínica", semester:9, requires:["fisiopato3"]},
  {id:"internadoComunitaria", name:"Internado Profesional Nutrición Comunitaria Intraescolar", semester:9, requires:["intervencionAlimentaria"], unlocks:["internadoComunitaria2"]},

  // 10º
  {id:"internadoGestion", name:"Internado Profesional Gestión de Unidades de Producción Alimentaria", semester:10, requires:["practicaGestion"]},
  {id:"internadoComunitaria2", name:"Internado Profesional Nutrición Comunitaria", semester:10, requires:["internadoComunitaria"]}
];

let state = {};

function initGrid() {
  const grid = document.getElementById("grid");
  let curr = 0;
  courses.forEach(c => {
    state[c.id] = { completed: false, unlocked: !c.requires };
    if (c.semester !== curr) {
      curr = c.semester;
      const t = document.createElement("div");
      t.className = "semester-title";
      t.innerText = semesters[curr];
      grid.appendChild(t);
    }
    const d = document.createElement("div");
    d.className = "course locked";
    d.id = c.id;
    d.innerText = c.name;
    d.onclick = () => toggleCourse(c.id);
    grid.appendChild(d);
  });
  updateGrid();
}

function updateGrid() {
  courses.forEach(c => {
    const d = document.getElementById(c.id);
    const s = state[c.id];
    d.classList.remove("locked", "completed");
    if (s.completed) d.classList.add("completed");
    else if (!s.unlocked) d.classList.add("locked");
  });
}

function toggleCourse(id) {
  const cDef = courses.find(x => x.id === id);
  const s = state[id];
  if (!s.unlocked) return;
  s.completed = !s.completed;

  courses.forEach(d => {
    if (d.requires && d.requires.includes(id)) {
      const met = d.requires.every(r => state[r].completed);
      state[d.id].unlocked = met;
      if (!met) state[d.id].completed = false;
    }
  });

  if (cDef.unlocks) {
    cDef.unlocks.forEach(u => {
      const uDef = courses.find(x => x.id === u);
      const can = !uDef.requires || uDef.requires.every(r => state[r].completed);
      if (can) state[u].unlocked = true;
    });
  }

  updateGrid();
}

initGrid();
