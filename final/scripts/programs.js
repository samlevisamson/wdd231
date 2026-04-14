

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
// PROGRAMS DATA (ENHANCED)
// ===============================
const programs = [
  {
    name: "Weight Training",
    image: "images/programs/weight-training.webp",
    description: "Build strength and muscle.",
    details: "This program focuses on progressive overload, compound lifts, and muscle hypertrophy.",
    audience: "Best for beginners to advanced looking to gain muscle.",
    timing: "Mon-Sat, 6:00 AM - 10:00 AM",
    trainer: "Rahul Sharma"
  },
  {
    name: "Cardio Fitness",
    image: "images/programs/cardio.webp",
    description: "Improve endurance and heart health.",
    details: "Includes treadmill, cycling, and circuit-based cardio workouts.",
    audience: "Ideal for weight loss and stamina building.",
    timing: "Mon-Sun, 7:00 AM - 11:00 AM",
    trainer: "Omar Ali"
  },
  {
    name: "Personal Training",
    image: "images/programs/personal-training.webp",
    description: "One-on-one coaching.",
    details: "Fully customized workout and diet plans with personal attention.",
    audience: "Anyone needing focused guidance and faster results.",
    timing: "Mon-Fri, 5:00 PM - 9:00 PM",
    trainer: "Hasan Khan"
  },
  {
    name: "HIIT Training",
    image: "images/programs/hiit.webp",
    description: "Burn fat fast.",
    details: "Short bursts of intense exercise followed by rest intervals.",
    audience: "Best for fat loss and busy schedules.",
    timing: "Mon-Sat, 6:00 AM - 9:00 AM",
    trainer: "Omar Ali"
  },
  {
    name: "Yoga & Flexibility",
    image: "images/programs/yoga.webp",
    description: "Improve mobility and relaxation.",
    details: "Focus on breathing, stretching, and mindfulness.",
    audience: "All age groups, especially stress relief.",
    timing: "Daily, 6:00 AM - 8:00 AM",
    trainer: "Lisa Morgan"
  },
  {
    name: "Functional Training",
    image: "images/programs/functional.webp",
    description: "Real-life strength training.",
    details: "Uses kettlebells, ropes, and bodyweight movements.",
    audience: "Athletes and general fitness enthusiasts.",
    timing: "Mon-Sat, 10:00 AM - 2:00 PM",
    trainer: "Neha Sinha"
  }
];


// ===============================
// DISPLAY PROGRAMS
// ===============================
const programContainer = document.getElementById("program-container");

function displayPrograms() {
  programContainer.innerHTML = programs.map((program, index) => `
    <div class="program-card" data-index="${index}">
        <img 
          src="${program.image}" 
          alt="${program.name}"
          width="400" 
          height="250"
          ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
        >
        <h3>${program.name}</h3>
        <p>${program.description}</p>
    </div>
  `).join("");

  // Add click events
  document.querySelectorAll(".program-card").forEach(card => {
    card.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.index;
      openModal(programs[index]);
    });
  });
}

displayPrograms();

const modal = document.getElementById("program-modal");
const closeBtn = document.querySelector(".close-btn");

function openModal(program) {
  document.getElementById("modal-image").src = program.image;
  document.getElementById("modal-title").textContent = program.name;
  document.getElementById("modal-details").textContent = program.details;
  document.getElementById("modal-audience").textContent = program.audience;
  document.getElementById("modal-timing").textContent = program.timing;
  document.getElementById("modal-trainer").textContent = program.trainer;

  modal.classList.add("show");
  document.body.classList.add("blur");
}

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.classList.remove("blur");
});

// Close on outside click
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.classList.remove("blur");
  }
});

// ===============================
// FOOTER DATES
// ===============================
const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

const today = new Date();

year.textContent = today.getFullYear();
lastModified.textContent = `Last Updated: ${document.lastModified}`;