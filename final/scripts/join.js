document.addEventListener("DOMContentLoaded", () => {

    // ===============================
    // HAMBURGER MENU
    // ===============================
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav");
  
    if (hamburger && navMenu) {
      hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        hamburger.textContent = navMenu.classList.contains("open") ? "✕" : "☰";
      });
    }
  
  
    // ===============================
    // PROGRAM DATA
    // ===============================
    const programs = [
      {
        name: "Weight Training",
        timing: "Mon-Sat, 6:00 AM - 10:00 AM",
        trainer: ["Rahul Sharma"]
      },
      {
        name: "Cardio Fitness",
        timing: "Mon-Sun, 7:00 AM - 11:00 AM",
        trainer: ["Omar Ali"]
      },
      {
        name: "Personal Training",
        timing: "Mon-Fri, 5:00 PM - 9:00 PM",
        trainer: ["Hasan Khan", "Priya Menon"]
      },
      {
        name: "HIIT Training",
        timing: "Mon-Sat, 6:00 AM - 9:00 AM",
        trainer: ["Omar Ali"]
      },
      {
        name: "Yoga & Flexibility",
        timing: "Daily, 6:00 AM - 8:00 AM",
        trainer: ["Lisa Morgan"]
      },
      {
        name: "Functional Training",
        timing: "Mon-Sat, 10:00 AM - 2:00 PM",
        trainer: ["Neha Sinha"]
      }
    ];
  
    // ===============================
    // FORM ELEMENTS
    // ===============================
    const programSelect = document.getElementById("program");
    const trainerSelect = document.getElementById("trainer");
    const timingInput = document.getElementById("timing");
  
    if (programSelect && trainerSelect && timingInput) {
  
      // Load Programs
      programs.forEach(program => {
        const option = document.createElement("option");
        option.value = program.name;
        option.textContent = program.name;
        programSelect.appendChild(option);
      });
  
      // Program Change
      programSelect.addEventListener("change", () => {
        const selectedProgram = programs.find(p => p.name === programSelect.value);
  
        trainerSelect.innerHTML = '<option value="">Select Trainer</option>';
  
        if (selectedProgram) {
  
          selectedProgram.trainer.forEach(tr => {
            const option = document.createElement("option");
            option.value = tr;
            option.textContent = tr;
            trainerSelect.appendChild(option);
          });
  
          // Auto select if only one trainer
          if (selectedProgram.trainer.length === 1) {
            trainerSelect.value = selectedProgram.trainer[0];
          }
  
          timingInput.value = selectedProgram.timing;
  
        } else {
          timingInput.value = "";
        }
      });
    }
  
  
    // ===============================
    // TIMESTAMP
    // ===============================
    const timestamp = document.getElementById("timestamp");
    if (timestamp) {
      timestamp.value = new Date().toISOString();
    }
  
  
    // ===============================
    // MODALS
    // ===============================
    document.querySelectorAll("[data-modal]").forEach(button => {
      button.addEventListener("click", () => {
        const modal = document.getElementById(button.dataset.modal);
        if (modal) modal.showModal();
      });
    });
  
    document.querySelectorAll("dialog").forEach(dialog => {
  
      const closeBtn = dialog.querySelector(".close-btn");
  
      if (closeBtn) {
        closeBtn.addEventListener("click", () => dialog.close());
      }
  
      // Click outside to close
      dialog.addEventListener("click", (e) => {
        const rect = dialog.getBoundingClientRect();
        const inside =
          e.clientX >= rect.left &&
          e.clientX <= rect.right &&
          e.clientY >= rect.top &&
          e.clientY <= rect.bottom;
  
        if (!inside) dialog.close();
      });
    });
  
  
    // ===============================
    // FOOTER DATES
    // ===============================
    const year = document.getElementById("currentyear");
    const lastModified = document.getElementById("lastModified");
  
    if (year) year.textContent = new Date().getFullYear();
    if (lastModified) {
      lastModified.textContent = `Last Updated: ${document.lastModified}`;
    }
  
  });