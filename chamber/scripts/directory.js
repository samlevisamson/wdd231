const url = "data/members.json";
const members = document.querySelector("#members");

// const gridButton = document.querySelector("#grid");
// const listButton = document.querySelector("#list");


// gridButton.addEventListener("click", () => {
//     membersContainer.classList.add("grid");
//     membersContainer.classList.remove("list");

//     gridButton.classList.add("active");
//     listButton.classList.remove("active");
// });

// listButton.addEventListener("click", () => {
//     membersContainer.classList.add("list");
//     membersContainer.classList.remove("grid");

//     listButton.classList.add("active");
//     gridButton.classList.remove("active");
// });



const displayMembers = (companies) => {
    companies.forEach((company) => {

        const card = document.createElement("section");

        const name = document.createElement("h2");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const website = document.createElement("a");
        const image = document.createElement("img");

        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;

        website.textContent = "Visit Website";
        website.href = company.website;
        website.target = "_blank";

        image.setAttribute("src", `images/${company.image}`);
        image.setAttribute("alt", `${company.name} logo`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "200");

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        membersContainer.appendChild(card);
    });
};

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}

getMembers();