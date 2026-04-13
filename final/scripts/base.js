// ===============================
// HAMBURGER MENU
// ===============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburger.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});

// ===============================
// FEATURE SLIDER
// ===============================
const track = document.querySelector(".feature-track");
const slides = document.querySelectorAll(".feature-card");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function getSlidesPerView() {
    return window.innerWidth >= 768 ? 2 : 1;
}

function updateSlider() {
    const slidesPerView = getSlidesPerView();
    const slideWidth = 100 / slidesPerView;

    track.style.transform = `translateX(-${index * slideWidth}%)`;
}

function nextSlide() {
    const slidesPerView = getSlidesPerView();
    const maxIndex = slides.length - slidesPerView;

    index = index >= maxIndex ? 0 : index + 1;
    updateSlider();
}

function prevSlide() {
    const slidesPerView = getSlidesPerView();
    const maxIndex = slides.length - slidesPerView;

    index = index <= 0 ? maxIndex : index - 1;
    updateSlider();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

/* Auto slide */
setInterval(nextSlide, 4000);

/* Fix on resize */
window.addEventListener("resize", () => {
    index = 0;
    updateSlider();
});

// ===============================
// FOOTER DATES
// ===============================
const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.textContent = `Last Updated: ${document.lastModified}`;