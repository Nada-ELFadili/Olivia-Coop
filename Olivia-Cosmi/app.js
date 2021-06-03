const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.6}s`;
      }
    });
  });
};

navSlide();

window.onload = function() {
  myFunction2();
};

var navbar = document.getElementById("navbar");

function myFunction2(e) {
  if (window.pageYOffset >= 290) {
    navbar.classList.add("sticky");
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("hidden");
  }
}

window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("navbar");

function myFunction(e) {
  if (window.pageYOffset >= 300) {
    navbar.classList.add("sticky");
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("hidden");
  }
}
