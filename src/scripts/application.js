import "../css/style.css";
import initializeScrollReveal from "./scroll-reveal.js";

initializeScrollReveal();

const menuToggle = document.querySelector("#menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");

if (
  !(menuToggle instanceof HTMLButtonElement) ||
  !(primaryNavigation instanceof HTMLElement)
) {
  throw new Error("Navigation menu elements are missing.");
}

function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  primaryNavigation.classList.add("hidden");
  primaryNavigation.classList.remove("flex");
}

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu",
  );
  primaryNavigation.classList.toggle("hidden", isExpanded);
  primaryNavigation.classList.toggle("flex", !isExpanded);
});

primaryNavigation.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement && window.innerWidth < 1024) {
    closeNavigation();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    closeNavigation();
    menuToggle.focus();
  }
});
