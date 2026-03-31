const results = document.getElementById("results");

const params = new URLSearchParams(window.location.search);

// Extract values
const firstname = params.get("firstname");
const lastname = params.get("lastname");
const email = params.get("email");
const phone = params.get("phone");
const business = params.get("business");
const membership = params.get("membership");
const timestamp = params.get("timestamp");

// Format date
const formattedDate = new Date(timestamp).toLocaleString();

// Display
results.innerHTML = `
  <p><strong>First Name:</strong> ${firstname}</p>
  <p><strong>Last Name:</strong> ${lastname}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p><strong>Business:</strong> ${business}</p>
  <p><strong>Membership:</strong> ${membership}</p>
  <p><strong>Submitted At:</strong> ${formattedDate}</p>
`;