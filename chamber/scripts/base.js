

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");

});

const captionDesc = document.querySelector('figcaption');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const tempHigh = document.querySelector('#temp-high');
const tempLow = document.querySelector('#temp-low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');
const forecast = document.querySelector('#forecast');

const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=11.01&lon=76.96&units=metric&appid=33d174f4628428cd79f42961334a57ca'

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=11.01&lon=76.96&units=metric&appid=33d174f4628428cd79f42961334a57ca'

async function apiFetch() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); 
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    } 
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data); 
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    } 

}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    tempHigh.innerHTML = `${data.main.temp_max}&deg;C`;
    tempLow.innerHTML = `${data.main.temp_min}&deg;C`;
    humidity.innerHTML = `${data.main.humidity}%`;

    const sunriseTime = new Date(data.sys.sunrise * 1000);
    const sunsetTime = new Date(data.sys.sunset * 1000);

    sunrise.innerHTML = sunriseTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
    });

    sunset.innerHTML = sunsetTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit"
    });

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

function displayForecast(data) {

    forecast.innerHTML = "";

    let count = 0;

    for (let i = 0; i < data.list.length; i++) {

        let item = data.list[i];

        if (item.dt_txt.includes("12:00:00") && count < 3) {

            let date = new Date(item.dt_txt);
            let dayName = date.toLocaleDateString("en-IN", {
                weekday: "short"
            });

            let temp = item.main.temp;
            let desc = item.weather[0].description;

            let icon = `https://openweathermap.org/img/w/${item.weather[0].icon}.png`;

            // Create container
            let row = document.createElement("div");
            row.classList.add("forecast-row");

            row.innerHTML = `
                <span class="day">${dayName}</span>
                <span class="desc">${desc}</span>
                <img src="${icon}" alt="${desc}">
                <span class="temp">${temp}°C</span>
            `;

            forecast.appendChild(row);

            count++;
        }
    }
}

apiFetch();

const url = `https://samlevisamson.github.io/wdd231/chamber/data/members.json`;
const spotlightContainer = document.querySelector("#spotlight-container");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();

    displaySpotlights(data.companies);
}

getMembers();

function displaySpotlights(companies) {

    // Filter only Gold (3) and Silver (2)
    const eligible = companies.filter(company => 
        company.membership === 2 || company.membership === 3
    );

    // Shuffle randomly
    const shuffled = eligible.sort(() => 0.5 - Math.random());

    // Always pick 3
    const selected = shuffled.slice(0, 3);

    // Display cards
    selected.forEach(company => {

        const card = document.createElement("section");

        // Company Name
        const name = document.createElement("h3");
        name.textContent = company.name;

        // Membership label (TOP - below name)
        const memberLabel = document.createElement("p");
        memberLabel.classList.add("member-label");

        memberLabel.textContent =
            company.membership === 3
                ? "Gold Member"
                : company.membership === 2
                ? "Silver Member"
                : "Member";

        // Divider
        const divider = document.createElement("hr");

        // Layout container
        const content = document.createElement("div");
        content.classList.add("spotlight-content");

        // Logo
        const logo = document.createElement("img");
        logo.setAttribute("src", `images/${company.image}`);
        logo.setAttribute("alt", `${company.name} logo`);
        logo.setAttribute("loading", "lazy");

        // Details container
        const details = document.createElement("div");

        // Phone
        const phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone:</strong> ${company.phone}`;

        // Address
        const address = document.createElement("p");
        address.innerHTML = `<strong>Address:</strong> ${company.address}`;

        // Website
        const website = document.createElement("p");
        website.innerHTML = `<strong>Website:</strong> 
        <a href="${company.website}" target="_blank">${company.website}</a>`;

        // Membership LEVEL (number)
        const level = document.createElement("p");
        level.innerHTML = `<strong>Membership Level:</strong> ${company.membership}`;

        // Append details
        details.append(phone, address, website, level);

        // Combine layout
        content.append(logo, details);

        // Final card
        card.append(name, memberLabel, divider, content);

        spotlightContainer.appendChild(card);
    });
}

// FOOTER FIXED
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;