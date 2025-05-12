// Fecha actual y última modificación
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Lista de cursos
const courses = [
  { code: "WDD130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
  { code: "WDD231", name: "Front-End Web Development", credits: 3, completed: false },
  { code: "CIT111", name: "Intro to IT", credits: 2, completed: true },
  { code: "CIT160", name: "Programming Fundamentals", credits: 3, completed: false }
];

// Mostrar cursos con filtro
function displayCourses(filter = "") {
  const container = document.getElementById("courseList");
  container.innerHTML = "";
  let totalCredits = 0;

  const filteredCourses = courses.filter(course => course.code.includes(filter));
  
  filteredCourses.forEach(course => {
    const div = document.createElement("div");
    div.className = "course";
    if (course.completed) div.classList.add("completed");

    div.textContent = `${course.code}: ${course.name} (${course.credits} credits)`;
    container.appendChild(div);
    totalCredits += course.credits;
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<strong>Total Credits: ${totalCredits}</strong>`;
  container.appendChild(totalDiv);
}

displayCourses();
