const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});

const links = document.querySelectorAll(".nav-link");
const navbarToggler = document.getElementById("navbar-toggler");

links.forEach((link) => {
  link.addEventListener("click", () => {
    navbarToggler.click();
  });
});

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const url = button.getAttribute("data-url");
    window.open(url, "_blank");
  });
});
