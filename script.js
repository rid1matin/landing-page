const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}
