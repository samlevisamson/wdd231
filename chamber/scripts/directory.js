const url = `https://samlevisamson.github.io/wdd231/chamber/data/members.json`;
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const members = document.querySelector("#members");

gridButton.addEventListener("click", () => {
    members.classList.add("grid");
    members.classList.remove("list");

    gridButton.classList.add("active");
    listButton.classList.remove("active");
});

listButton.addEventListener("click", () => {
    members.classList.add("list");
    members.classList.remove("grid");

    listButton.classList.add("active");
    gridButton.classList.remove("active");
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");

});


const displayMembers = (companies) => {
    companies.forEach((company) => {

        let card = document.createElement("section");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let industry = document.createElement("p");
        let image = document.createElement("img");

        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        industry.textContent = `Industry: ${company.industry}`;

        website.textContent = company.website;
        website.href = company.website;
        website.target = "_blank";

        image.setAttribute("src", `images/${company.image}`);
        image.setAttribute("alt", `${company.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");
        image.setAttribute("height", "200");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(industry);

        card.appendChild(website);

        members.appendChild(card);
    });
};

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.companies);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

getMembers();