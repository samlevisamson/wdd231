// ===============================
// HAMBURGER MENU
// ===============================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    hamburger.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
});


// ===============================
// TRAINER SPOTLIGHT (DYNAMIC)
// ===============================
const container = document.getElementById("trainer-container");

const url = "https://samlevisamson.github.io/wdd231/final/data/trainers.json";

async function loadTrainers() {
  try {
    const response = await fetch(url);
    const trainers = await response.json();

    container.innerHTML = trainers.map(trainer => `
      <div class="trainer-card">
        
        <div class="trainer-image">
          <img src="${trainer.image}" alt="${trainer.first_name}">
        </div>

        <div class="trainer-info">
          <h3>${trainer.first_name} ${trainer.last_name}</h3>
          <p class="title">${trainer.title}</p>
          <p>${trainer.availability}</p>
          <p>${trainer.contact_number}</p>
        </div>

      </div>
    `).join("");

  } catch (error) {
    container.innerHTML = "<p>Failed to load trainers.</p>";
    console.error(error);
  }
}

loadTrainers();

// ===============================
// FOOTER DATES
// ===============================
const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.textContent = `Last Updated: ${document.lastModified}`;