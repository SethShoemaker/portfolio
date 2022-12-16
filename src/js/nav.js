const showNavButton = document.querySelector("button#show-nav");
const removeNavButton = document.querySelector("button#remove-nav");
const nav = document.querySelector("nav#sidebar");
const body = document.querySelector("body");

showNavButton.addEventListener("click", () => {
    nav.style.display = "block";
});

removeNavButton.addEventListener("click", () => {
    nav.style.display = "none";
});