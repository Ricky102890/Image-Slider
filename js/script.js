// Variables
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
// Functions
function startSlideshow() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("show-slide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index) {
    if(index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("show-slide");
    });
    slides[slideIndex].classList.add("show-slide");
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
// Events
document.addEventListener("DOMContentLoaded", startSlideshow);