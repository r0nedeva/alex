
// Horizontal Panel Scroll

let panelTrack = document.querySelector(".panel-track");
let panels = document.querySelectorAll(".panel");
let contactPanel = document.querySelector(".panel.contact");

let currentX = 0;
let scrollSpeed = 0.7;


// Smooth movement

let moveTrack = gsap.quickTo(panelTrack, "x", {
    duration: 0.3,
    ease: "power2.out"
});


// Calculate max scroll

function calculateMaxScroll() {

    let contactOffset = contactPanel.offsetLeft;

    let heroWidth = window.innerWidth * 0.70;
    let peekWidth = window.innerWidth * 0.30;

    return contactOffset + heroWidth - peekWidth;

}

let maxScroll = calculateMaxScroll();

window.addEventListener("resize", function () {

    maxScroll = calculateMaxScroll();

});

window.addEventListener("wheel", function (event) {

    event.preventDefault();

    currentX -= event.deltaY * scrollSpeed;

    if (currentX > 0) {
        currentX = 0;
    }

    if (currentX < -maxScroll) {
        currentX = -maxScroll;
    }

    moveTrack(currentX);

}, { passive: false });