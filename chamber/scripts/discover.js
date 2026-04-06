import { places } from "../data/places.mjs";

const container = document.getElementById("discover-grid");

// CREATE CARDS
places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${place.name}</h2>
        <figure>
            <img src="${place.image}" alt="${place.name}" loading="lazy">
        </figure>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>
    `;

    container.appendChild(card);
});

// VISIT MESSAGE
const visitMsg = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message;

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const diff = now - Number(lastVisit);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message = "Back so soon! Awesome!";
    } else if (days === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${days} days ago.`;
    }
}

visitMsg.textContent = message;

// Save visit time
localStorage.setItem("lastVisit", now);

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");
});

// FOOTER FIXED
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;