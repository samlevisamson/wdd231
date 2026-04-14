document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const results = document.getElementById("results");
  
    if (results) {
  
      // 🔥 Step 3: Add placeholder BEFORE content loads
      results.innerHTML = "<p>Loading your details...</p>";
  
      let output = "";
  
      params.forEach((value, key) => {
  
        // Skip timestamp
        if (key === "timestamp") return;
  
        output += `
          <div class="result-item ${key === "membership" ? "membership" : ""}">
            <span class="label">${formatLabel(key)}</span>
            <span class="value">${value}</span>
          </div>
        `;
      });
  
      // Replace placeholder with actual content
      results.innerHTML = output;
  
      // 🔥 Smooth appearance
      results.classList.add("loaded");
    }
  
    function formatLabel(key) {
      return key
        .replace(/_/g, " ")
        .replace(/^\w/, c => c.toUpperCase());
    }
  
  });