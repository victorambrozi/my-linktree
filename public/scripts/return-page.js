const buttonSetup = document.querySelector("#button-setup");
const buttonContact = document.querySelector("#button-contact");
const buttonReturn = document.getElementsByClassName("return");
const contactInfo = document.querySelector(".contact-content__info");
const hideInfo = document.querySelector(".hide-information");
const form = document.querySelector(".form");
const submitForm = document.querySelector(".form button")

buttonContact.addEventListener("click", () => {
    contactInfo.classList.remove("hide")
    contactInfo.classList.add("show")
});

buttonReturn[1].addEventListener("click", () =>{
    contactInfo.classList.remove("show")
    contactInfo.classList.add("hide")
})

buttonSetup.addEventListener("click", showContent)

buttonReturn[0].addEventListener("click", hideContent)

function showContent() {
    hideInfo.classList.remove("hide")
    hideInfo.classList.add("show")
}

function hideContent() {
    hideInfo.classList.remove("show")
    hideInfo.classList.add("hide")
}

submitForm.addEventListener("click", event => {
    event.preventDefault()
})
