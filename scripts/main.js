// Get current year for footer
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();


// Get last modified date
const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;


// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamburger.classList.toggle("open");

});

const container = document.querySelector("#course-container");

const allBtn = document.querySelector("#all");
const cseBtn = document.querySelector("#cse");
const wddBtn = document.querySelector("#wdd");

const buttons = document.querySelectorAll(".buttons button");

function setActive(button) {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
}

// List Array
const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

function displayCourses(courseList) {

    container.innerHTML = "";
    
    courseList.forEach(course => {
    
        const card = document.createElement("div");
        card.textContent = `${course.subject} ${course.number}`;
    
        if (course.completed) {
            card.classList.add("completed");
        }
    
        container.appendChild(card);
    
    });
    
    calculateCredits(courseList);
    }

function calculateCredits(courseList) {

    // Total credits for all displayed courses
    const total = courseList.reduce((sum, course) => sum + course.credits, 0);

    document.querySelector("#totalCredits").textContent =
    `Total credits for the courses above: ${total}`;


    // Total credits for completed courses
    const completedTotal = courseList
        .filter(course => course.completed)
        .reduce((sum, course) => sum + course.credits, 0);

    document.querySelector("#completedCredits").textContent =
    `Total credits completed: ${completedTotal}`;
    }

allBtn.addEventListener("click", () => {
    displayCourses(courses);
    setActive(allBtn);
});

cseBtn.addEventListener("click", () => {
    const filtered = courses.filter(course => course.subject === "CSE");
    displayCourses(filtered);
    setActive(cseBtn);
});

wddBtn.addEventListener("click", () => {
    const filtered = courses.filter(course => course.subject === "WDD");
    displayCourses(filtered);
    setActive(wddBtn);
});

// modals
const modal = document.querySelector("#courseModal");
const closeModal = document.querySelector("#closeModal");

const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalCredits = document.querySelector("#modalCredits");
const modalTech = document.querySelector("#modalTech");

function openModal(course) {
    modalTitle.textContent = `${course.subject} ${course.number}: ${course.title}`;
    modalDescription.textContent = course.description;
    modalCredits.textContent = course.credits;
    modalTech.textContent = course.technology.join(", ");

    modal.showModal();
}

// Close button
closeModal.addEventListener("click", () => {
    modal.close();
});

// Optional: close when clicking outside
modal.addEventListener("click", (e) => {
    const rect = modal.getBoundingClientRect();
    if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
    ) {
        modal.close();
    }
});

function displayCourses(courseList) {

    container.innerHTML = "";
    
    courseList.forEach(course => {
    
        const card = document.createElement("div");
        card.textContent = `${course.subject} ${course.number}`;
    
        if (course.completed) {
            card.classList.add("completed");
        }

        // 👉 ADD CLICK EVENT HERE
        card.addEventListener("click", () => {
            openModal(course);
        });
    
        container.appendChild(card);
    
    });
    
    calculateCredits(courseList);
}


displayCourses(courses);
setActive(allBtn);