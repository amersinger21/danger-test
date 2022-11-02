const ToggleNavBtn = document.querySelector("#nav-display-btn");
const NavLinks = document.querySelectorAll(".nav-link");

function ToggleNav() {
  NavLinks.forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

ToggleNavBtn.addEventListener("click", ToggleNav);
