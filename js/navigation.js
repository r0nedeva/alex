// Navigation Menu

const menuButton = document.getElementById("menuToggle");
const closeButton = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


// Open / Close Menu

function closeMenu() {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
}

menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    overlay.classList.toggle("show");
});

closeButton.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeMenu();
    }
});


// Prepare SVG Outline Animation

document.querySelectorAll(".outline-svg path").forEach(path => {

    const length = path.getTotalLength();

    path.style.setProperty("--path-length", length);

});