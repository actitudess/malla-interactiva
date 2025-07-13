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

// Lista de cursos
const courses = [
  // PRIMER SEMESTRE
  { id: "razonamiento", name: "Razonamiento Lógico Matemático", semester: 1, unlocks: ["epidemiologia"] },
  { id: "intro", name: "Introducción a la Nutrición y Dietética", semester: 1 },
  { id: "quimica", name: "Bases de la Química", semester: 1, unlocks: ["biologia", "quimicaBiomoleculas"] },
  { id: "psicologia", name: "Psicología de la Salud", semester: 1 },
  { id: "tallerCiencias", name: "Taller Integrado en Ciencias", semester: 1 },
  { id: "competencias", name: "Taller de Competencias Comunicativas", semester: 1 },

  // SEGUNDO SEMESTRE
  { id: "alimentos", name: "Ciencias de los Alimentos", semester: 2, unlocks: ["microbiologia"] },
  { id: "biologia", name: "Biología Celular", semester: 2, unlocks: ["anatomofisiologia"], requires: ["quimica"] },
  { id: "quimicaBiomoleculas", name: "Química de las Biomoléculas", semester: 2, unlocks: ["anatomofisiologia"], requires: ["quimica"] },
  { id: "urgencia", name: "Atención Básica de Urgencia", semester: 2, unlocks: ["saludSociedad"] },
  { id: "ingles1", name: "Inglés Básico I", semester: 2, unlocks: ["ingles2"] },
  { id: "electivo1", name: "Electivo Formación General I", semester: 2, unlocks: ["electivo2"] },

  // TERCER SEMESTRE
  { id: "microbiologia", name: "Microbiología y Parasitología Alimentaria", semester: 3, unlocks: ["higiene"] },
  { id: "anatomofisiologia", name: "Anatomofisiología General", semester: 3, unlocks: ["fisiologia"], requires: ["biologia", "quimicaBiomoleculas"] },
  { id: "bioq1", name: "Bioquímica Nutricional I", semester: 3, unlocks: ["bioq2"] },
  { id: "saludSociedad", name: "Salud y Sociedad", semester: 3 },
  { id: "ingles2", name: "Inglés Básico II", semester: 3 },
  { id: "electivo2", name: "Electivo Formación General II", semester: 3, unlocks: ["electivo3"] },

  // (Y continúa...)
];

// Estado de cada curso
let state = {};

function initGrid() {
  const grid = document.getElementById("grid");
  let currentSemester = 0;

  courses.forEach(course => {
    state[course.id] = { completed: false, unlocked: !course.requires };

    if (course.semester !== currentSemester) {
      currentSemester = course.semester;
      const title = document.createElement("div");
      title.className = "semester-title";
      title.innerText = semesters[currentSemester];
      grid.appendChild(title);
    }

    const div = document.createElement("div");
    div.className = "course locked";
    div.id = course.id;
    div.innerText = course.name;
    div.onclick = () => toggleCourse(course.id);
    grid.appendChild(div);
  });

  updateGrid();
}

function updateGrid() {
  courses.forEach(course => {
    const div = document.getElementById(course.id);
    const c = state[course.id];

    div.classList.remove("locked", "completed");
    if (c.completed) div.classList.add("completed");
    else if (!c.unlocked) div.classList.add("locked");
  });
}

function toggleCourse(id) {
  const course = courses.find(c => c.id === id);
  const c = state[id];
  if (!c.unlocked) return;

  c.completed = !c.completed;

  // Desbloquea cursos dependientes
  courses.forEach(dep => {
    if (!dep.requires) return;
    if (dep.requires.includes(id)) {
      const allMet = dep.requires.every(req => state[req]?.completed);
      if (allMet) state[dep.id].unlocked = true;
      else {
        state[dep.id].unlocked = false;
        state[dep.id].completed = false;
      }
    }
  });

  if (course.unlocks) {
    course.unlocks.forEach(unlockId => {
      const unlockCourse = courses.find(c => c.id === unlockId);
      if (!unlockCourse.requires || unlockCourse.requires.every(r => state[r]?.completed)) {
        state[unlockId].unlocked = true;
      }
    });
  }

  updateGrid();
}

initGrid();
