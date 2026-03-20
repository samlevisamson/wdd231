// select HTML elements in the document

const captionDesc = document.querySelector('figcaption');
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');


// const myTown = document.querySelector('#town');
// const myDesc = document.querySelector('#description');
// const myTemp = document.querySelector('#temperature');
// const myGraphic = document.querySelector('#graphic');


const url = '//api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=33d174f4628428cd79f42961334a57ca'

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data); // Uncomment when ready
        } else {
            throw Error(await response.text())
        }
    } catch (error) {
        console.log(error);
    } 
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
}

// function displayResults(data) {
//     console.log('hello')
//     myTown.innerHTML = data.name
//     myDesc.innerHTML = data.weather[0].description
//     myTemp.innerHTML = `${data.main.temp}&deg;F`
//     const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//     myGraphic.setAttribute('src', iconsrc)
//     myGraphic.setAttribute('alt', data.weather[0].description)
// }

apiFetch();



