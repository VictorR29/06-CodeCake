// CONSTANTES DE ICONS Y CIRCULOS QUE SE EXPANDEN
const circlePhone = document.querySelector(".circle-phone");
const circlEmail = document.querySelector(".circle-email");
const circleUbication = document.querySelector(".circle-ubication");

const icon = document.querySelector(".fi-rr-phone-call");
const icon2 = document.querySelector(".fi-rr-envelope");
const icon3 = document.querySelector(".fi-rr-marker");
const icons = document.querySelectorAll(".icon");

const iconNav = document.querySelector(".fi-rr-menu-burger");
const navBar = document.querySelector(".navbar__container");

iconNav.addEventListener("click", ()=>{
  navBar.classList.toggle("open");
});

// ADD ANIMATIONS
icon.addEventListener("click", () => {
  addAnimation(circlePhone, 0);
});
icon2.addEventListener("click", () => {
  addAnimation(circlEmail, 1);
});
icon3.addEventListener("click", () => {
  addAnimation(circleUbication, 2)
});

// REMOVE ANIMATIONS
circlePhone.addEventListener("click", () => {
  removeAnimation(circlePhone, 0);
});
circlEmail.addEventListener("click", () => {
  removeAnimation(circlEmail, 1);
});
circleUbication.addEventListener("click", () => {
  removeAnimation(circleUbication, 2)
});

// FUNCTONS ADD AND REMOVE ANIMATIONS
function addAnimation(circle, iconIndex) {
  circle.classList.add("expand");
  circle.children[0].classList.add("animate")
  circle.children[1].classList.add("animate")
  icons[iconIndex].classList.add("animate");
}

function removeAnimation(circle, iconIndex) {
  circle.classList.remove("expand")
  circle.children[0].classList.remove("animate")
  circle.children[1].classList.remove("animate")
  icons[iconIndex].classList.remove("animate");
}
