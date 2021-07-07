console.log(":)");

// Detail text toggle
Array.from(document.getElementsByTagName("details")).forEach(element => {
    const defaultText = element.firstElementChild.textContent;
    element.addEventListener("toggle", function () {
        const isOpen = this.hasAttribute("open");
        this.firstElementChild.textContent = isOpen ? "› Collapse" : defaultText;
    });
});