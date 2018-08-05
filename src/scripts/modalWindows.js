const allModalWindows = document.querySelectorAll('.modal');
const allOpenModalBtn = document.querySelectorAll('.project button');
const allCloseModalBtn = document.querySelectorAll('.close');
const allSlideBtn = document.querySelectorAll('.next, .prev');

allOpenModalBtn.forEach(openModalBtn => openModalBtn.addEventListener('click', openModal));
allCloseModalBtn.forEach(closeModalBtn => closeModalBtn.addEventListener('click', closeModalByBtn));
allModalWindows.forEach(modalWindow => modalWindow.addEventListener('click', closeModalByClickout));
allSlideBtn.forEach(nextBtn => nextBtn.addEventListener('click', slideSlides));

let slideNum = 0;

function openModal() {
  const thisModal = document.querySelector(`#modal${this.dataset.project}`);
  thisModal.style.display = "flex";
  const thisSlides = thisModal.querySelectorAll('.project-slides');
  showSlides(slideNum = 0, thisSlides);
}

function closeModalByBtn() {
  allModalWindows.forEach(modalWindow => modalWindow.style.display = 'none');
}

function closeModalByClickout(e) {
  if (e.target.classList == 'modal') {
    this.style.display = 'none';
  }
}

function slideSlides() {
  const thisSlides = this.parentNode.querySelectorAll('.project-slides');
  if (this.className == 'next') {
    slideNum++;
    if (slideNum > (thisSlides.length - 1)) slideNum = 0;
    showSlides(slideNum, thisSlides);
  } else if (this.className == 'prev') {
    slideNum--;
    if (slideNum < 0) slideNum = (thisSlides.length - 1);
    showSlides(slideNum, thisSlides);
  }
}

function showSlides(slideNum, slides) {
  slides.forEach(slide => slide.style.display = 'none');
  slides.item(slideNum).style.display = 'block';
}
