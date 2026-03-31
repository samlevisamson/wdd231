// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");

});

document.addEventListener("DOMContentLoaded", () => {

  // ===== Timestamp =====
  const timestamp = document.getElementById("timestamp");
  if (timestamp) {
    timestamp.value = new Date().toISOString();
  }

  // ===== Modal Open =====
  document.querySelectorAll("[data-modal]").forEach(button => {
    button.addEventListener("click", function () {
      const modalId = this.dataset.modal;
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.showModal();
      } else {
        console.error("Modal not found:", modalId);
      }
    });
  });

  // ===== Modal Close (NEW ✅) =====
  document.querySelectorAll("[data-close]").forEach(button => {
    button.addEventListener("click", function () {
      const modalId = this.dataset.close;
      const modal = document.getElementById(modalId);

      if (modal) {
        modal.close();
      }
    });
  });

});

const membershipData = {
  np: {
    title: "NP Membership",
    cost: "Free",
    benefits: [
      "Community networking events",
      "Basic directory listing",
      "Non-profit visibility support"
    ]
  },
  bronze: {
    title: "Bronze Membership",
    cost: "₹1,000 / year",
    benefits: [
      "Directory listing",
      "Networking events",
      "Newsletter inclusion"
    ]
  },
  silver: {
    title: "Silver Membership",
    cost: "₹3,000 / year",
    benefits: [
      "All Bronze benefits",
      "Training workshops",
      "Event discounts",
      "Featured listing"
    ]
  },
  gold: {
    title: "Gold Membership",
    cost: "₹7,000 / year",
    benefits: [
      "All Silver benefits",
      "Homepage spotlight",
      "Priority event access",
      "Premium promotion"
    ]
  }
};



// ===== Modal Close =====
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.close();
}