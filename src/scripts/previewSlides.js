let prevpath;
const images = document.querySelectorAll(".project button");
images.forEach(img => img.addEventListener("mouseover", changeImage));
images.forEach(img => img.addEventListener("mouseout", normalImage));
function changeImage() {
  prevpath = this.children[0].src;
  this.children[0].src = `img/projects/${this.dataset.project.slice(-2) +
    ".gif"}`;
}
function normalImage() {
  this.children[0].src = prevpath;
}
