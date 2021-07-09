console.log(":)");

// Detail text toggle
Array.from(document.getElementsByTagName("details")).forEach(element => {
    const defaultText = element.firstElementChild.textContent;
    element.addEventListener("toggle", function () {
        const isOpen = this.hasAttribute("open");
        this.firstElementChild.textContent = isOpen ? "› Collapse" : defaultText;
    });
});

// Collapsable sections
Array.from(document.getElementsByTagName("h2")).forEach(element => {
    let content = element.nextElementSibling;
    let text = element.textContent;

    // Show the section if the h2 contains the show class
    if (element.className.includes("show")) {
        content.style.maxHeight = content.scrollHeight + "px";
        element.textContent = "[+] " + text;
    } else {
        element.textContent = "[–] " + text;
    }

    // Toggle collapsible
    element.addEventListener("click", function () {
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.textContent = "[–] " + text;
        } else {
            content.style.maxHeight = "initial";
            this.textContent = "[+] " + text;
        }
    });
});

// Pages
let projects = document.getElementById("projects");
let work = document.getElementById("work");
let projectsPage = document.getElementById("projects-page");
let workPage = document.getElementById("work-page");

let showProject = () => {
    projects.style.fontWeight = "bold";
    projectsPage.style.display = "block";
    work.style.fontWeight = "normal";
    workPage.style.display = "none";
};
let showWork = () => {
    work.style.fontWeight = "bold";
    workPage.style.display = "block";
    projects.style.fontWeight = "normal";
    projectsPage.style.display = "none";
}

showProject();
projects.addEventListener("click", showProject);
work.addEventListener("click", showWork);