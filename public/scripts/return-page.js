const buttonSetup = document.querySelector("#button-setup");
const secondaryContent = document.querySelector(".secondary-content__info");
const returnSetup = document.querySelector(".return");

buttonSetup.addEventListener("click", showContent)

returnSetup.addEventListener("click", hideContent)

function showContent() {
    secondaryContent.classList.remove("hide")
    secondaryContent.classList.add("show")
}

function hideContent() {
    secondaryContent.classList.remove("show")
    secondaryContent.classList.add("hide")
}