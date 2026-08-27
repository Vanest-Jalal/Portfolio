const menuBtn = document.querySelector("#menuBtn");
const navigation = document.querySelector("#myTopnav");

// Burgermenu
if (menuBtn && navigation) {
  menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("responsive");

    const icon = menuBtn.querySelector("i");

    if (navigation.classList.contains("responsive")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}

// Aktiv side i navigationen
const navLinks = document.querySelectorAll("#myTopnav > a");

const currentPage = window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});

// Scroll animation
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});
