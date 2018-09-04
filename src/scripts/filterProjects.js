const typeOfProjectSelector = document.querySelector("#typeOfProjectSelector");
const projects = document.querySelectorAll(".project");

typeOfProjectSelector.addEventListener("change", filterProjects);

document.addEventListener("DOMContentLoaded", filterProjects);

function filterProjects() {
  const filter = typeOfProjectSelector.value;
  let i = 1;
  // Remove to all the class that matches the regexp "item[1-9][0-9]?"
  projects.forEach(project => {
    project.className = project.className.replace(
      new RegExp("item[1-9][0-9]?"),
      ""
    );
  });
  // To the ones that pass the filter add the corresponding class with the location
  projects.forEach(project => {
    if (filter === "all") {
      project.style.display = "";
      // Add the class with the location
      project.classList.add(`item${i}`);
      i++;
    } else if (project.dataset.projecttype.split(" ").includes(filter)) {
      project.style.display = "";
      // Add the class with the location
      project.classList.add(`item${i}`);
      i++;
    } else {
      project.style.display = "none";
    }
  });
}
