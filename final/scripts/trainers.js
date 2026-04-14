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
// FOOTER DATES
// ===============================
const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.textContent = `Last Updated: ${document.lastModified}`;



// ===============================
// TRAINERS JSON URL (GITHUB)
// ===============================
const TRAINERS_URL = "https://samlevisamson.github.io/wdd231/final/data/trainers.json";

const container = document.getElementById("trainers-container");


// ===============================
// FETCH + DISPLAY (IMAGES ONLY)
// ===============================
async function loadTrainers() {
    try {
        const response = await fetch(TRAINERS_URL);
        const data = await response.json();

        displayTrainers(data);

    } catch (error) {
        console.error("Error loading trainers:", error);
    }
}

function displayTrainers(trainers) {
    container.innerHTML = "";

    trainers.forEach(trainer => {
        const card = document.createElement("div");
        card.classList.add("trainer-card");

        card.innerHTML = `
            <img src="${trainer.image}" alt="${trainer.first_name}">
        `;

        // CLICK → OPEN MODAL
        card.addEventListener("click", () => openModal(trainer));

        container.appendChild(card);
    });
}

loadTrainers();


// ===============================
// MODAL FUNCTIONALITY
// ===============================
const modal = document.getElementById("trainer-modal");
const closeBtn = document.querySelector(".trainer-close-btn");

const modalImg = document.getElementById("trainer-modal-img");
const modalName = document.getElementById("trainer-modal-name");
const modalTitle = document.getElementById("trainer-modal-title");
const modalAvailability = document.getElementById("trainer-modal-availability");
const modalContact = document.getElementById("trainer-modal-contact");

function openModal(trainer) {
    modal.style.display = "flex";

    modalImg.src = trainer.image;
    modalName.textContent = `${trainer.first_name} ${trainer.last_name}`;
    modalTitle.textContent = trainer.title;
    modalAvailability.textContent = `Availability: ${trainer.availability}`;
    modalContact.textContent = `Contact: ${trainer.contact_number}`;
}


// CLOSE MODAL
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// CLOSE WHEN CLICK OUTSIDE
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});