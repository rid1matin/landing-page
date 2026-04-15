const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const panels = document.querySelectorAll(".panel");
const themeToggle = document.querySelector(".theme-toggle");
const themeOptions = document.querySelector(".theme-options");
const themeSwatches = document.querySelectorAll("[data-theme-value]");
const savedTheme = window.localStorage.getItem("site-theme") || "blue";

const applyTheme = (theme) => {
  document.body.dataset.theme = theme;
  if (themeToggle) {
    themeToggle.style.background = `var(--accent)`;
  }
  themeSwatches.forEach((swatch) => {
    swatch.classList.toggle("is-active", swatch.dataset.themeValue === theme);
  });
};

applyTheme(savedTheme);

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggleButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (themeToggle && themeOptions) {
  themeToggle.addEventListener("click", () => {
    const isOpen = themeOptions.classList.toggle("is-open");
    themeToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

themeSwatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    const theme = swatch.dataset.themeValue;
    applyTheme(theme);
    window.localStorage.setItem("site-theme", theme);

    if (themeOptions && themeToggle) {
      themeOptions.classList.remove("is-open");
      themeToggle.setAttribute("aria-expanded", "false");
    }
  });
});

document.addEventListener("click", (event) => {
  if (!themeToggle || !themeOptions) {
    return;
  }

  const clickedToggle = themeToggle.contains(event.target);
  const clickedOptions = themeOptions.contains(event.target);

  if (!clickedToggle && !clickedOptions) {
    themeOptions.classList.remove("is-open");
    themeToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && themeOptions && themeToggle) {
    themeOptions.classList.remove("is-open");
    themeToggle.setAttribute("aria-expanded", "false");
  }
});

panels.forEach((panel, index) => {
  panel.classList.add("panel-enter");

  window.setTimeout(() => {
    panel.classList.add("panel-visible");
  }, 80 + index * 70);
});
