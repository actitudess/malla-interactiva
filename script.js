// Estructura de cursos con requisitos
const courses = [
  {
    name: "Razonamiento Lógico Matemático",
    id: "razonamiento",
    semester: 1,
    unlocks: ["epidemiologia"]
  },
  {
    name: "Introducción a la Nutrición y Dietética",
    id: "intro",
    semester: 1
  },
  {
    name: "Bases de la Química",
    id: "quimica",
    semester: 1,
    unlocks: ["biologia", "quimicaBiomoleculas"]
  },
  {
    name: "Psicología de la Salud",
    id: "psicologia",
    semester: 1
  },
  {
    name: "Taller Integrado en Ciencias",
    id: "tallerCiencias",
    semester: 1
  },
  {
    name: "Taller de Competencias Comunicativas",
    id: "competencias",
    semester: 1
  },
  {
    name: "Biología Celular",
    id: "biologia",
    semester: 2,
    unlocks: ["anatomofisiologia"],
    requires: ["quimica"]
  },
  {
    name: "Química de las Biomoléculas",
    id: "quimicaBiomoleculas",
    semester: 2,
    unlocks: ["anatomofisiologia"],
    requires: ["quimica"]
  },
  {
    name: "Anatomofisiología General",
    id: "anatomofisiologia",
    semester: 3,
    requires: ["biologia", "quimicaBiomoleculas"]
  },
  {
    name: "Epidemiología y Estadística",
    id: "epidemiologia",
    semester: 4,
    requires: ["razonamiento"],
    unlocks: ["bioetica"]
  },
  {
    name: "Bioética",
    id: "bioetica",
    semester: 5,
    requires: ["epidemiologia"],
    unlocks: ["metodologia"]
  },
  {
    name: "Metodología de Investigación",
    id: "metodologia",
    semester: 6,
    requires: ["bioetica"],
    unlocks: ["seminario1"]
  },
  {
    name: "Seminario de Investigación I",
    id: "seminario1",
    semester: 7,
    requires: ["metodologia"],
    unlocks: ["seminario2"]
  },
  {
    name: "Seminario de Investigación II",
    id: "seminario2",
    semester: 8,
    requires: ["seminario1"]
  }
  // Puedes seguir agregando aquí los demás cursos siguiendo esta estructura
];

// Estado del curso (guardado en memoria)
let courseState = {};

// Inicializar los estados y crear la grilla
function createGrid() {
  const grid = document.getElementById("grid");
  courses.forEach(course => {
    courseState[course.id] = {
      completed: false,
      unlocked: !course.requires // si no tiene requisitos, se desbloquea
    };

    const div = document.createElement("div");
    div.className = "course locked";
    div.id = course.id;
    div.innerText = `${course.name}\n(S${course.semester})`;
    div.addEventListener("click", () => toggleCourse(course.id));
    grid.appendChild(div);
  });

  updateGrid();
}

function updateGrid() {
  courses.forEach(course => {
    const div = document.getElementById(course.id);
    const state = courseState[course.id];

    div.classList.remove("completed", "locked");

    if (state.completed) {
      div.classList.add("completed");
    } else if (!state.unlocked) {
      div.classList.add("locked");
    }
  });
}

function toggleCourse(id) {
  const course = courses.find(c => c.id === id);
  const state = courseState[id];

  if (!state.unlocked) return;

  state.completed = !state.completed;

  // Si fue aprobado, desbloquea otros
  if (state.completed) {
    if (course.unlocks) {
      course.unlocks.forEach(unlockId => {
        if (checkRequirements(unlockId)) {
          courseState[unlockId].unlocked = true;
        }
      });
    }
  } else {
    // Si desmarcas un curso, se bloquean los dependientes
    courses.forEach(c => {
      if (c.requires && c.requires.includes(id)) {
        courseState[c.id].unlocked = false;
        courseState[c.id].completed = false;
      }
    });
  }

  updateGrid();
}

function checkRequirements(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course.requires) return true;
  return course.requires.every(req => courseState[req]?.completed);
}

createGrid();
