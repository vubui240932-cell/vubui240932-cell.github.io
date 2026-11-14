import ScrollReveal from "scrollreveal";

export default function initializeScrollReveal() {
  const reveal = ScrollReveal();
  const bannerOrigin = window.matchMedia("(min-width: 1024px)").matches
    ? "left"
    : "bottom";

  reveal.reveal(".banner-text", { delay: 700, origin: bannerOrigin });
  reveal.reveal(".banner-cta", { delay: 1000, origin: bannerOrigin });
  reveal.reveal(".section-title", {
    delay: 300,
    distance: "0px",
    origin: "bottom",
    reset: false,
  });
  reveal.reveal(".section-content", {
    delay: 500,
    distance: "0px",
    origin: "bottom",
    reset: false,
  });
}
