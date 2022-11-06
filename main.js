const toggleNavBtn = document.getElementById("nav-display-btn");
const navLinks = document.querySelectorAll(".nav-link");

function ToggleNav() {
  navLinks.forEach((item) => {
    if (item.style.display === "none") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function SendEmail() {
  document.getElementById("email-form").action = "";

  if (!document.getElementById("name").value.length > 0) {
    return;
  }

  if (!document.getElementById("msg").value.length > 0) {
    return;
  } else {
    window.location.href =
      "mailto:amersinger21@gmail.com?subject=New%20Contact%20From%20" +
      document.getElementById("name").value +
      "&body=" +
      document.getElementById("msg").value;

    window.location.reload();
  }
}

toggleNavBtn.addEventListener("click", ToggleNav);
