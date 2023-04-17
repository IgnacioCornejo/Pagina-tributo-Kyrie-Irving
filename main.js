const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    navbar.classList.add("shadow");
  } else {
    navbar.classList.remove("shadow");
  }
});
