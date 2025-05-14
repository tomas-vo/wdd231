// Fecha actual y última modificación
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Lista de cursos
const courses = [
  { code: "WDD130", name: "Programming Fundamentals", credits: 1, completed: true },
  { code: "CSE111", name: "Programming with Functions", credits: 2, completed: true },
  { code: "CSE210", name: "Programming with classes", credits: 3, completed: true },
  { code: "WDD130", name: "Web Fundamentals", credits: 2, completed: true },
  { code: "WDD131", name: "Dynamic Web Fundamentals", credits: 2, completed: false },
  { code: "WDD231", name: "Web Frontend Development", credits: 2, completed: false }
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
