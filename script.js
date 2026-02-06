// Initialize Tilt with simpler settings
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
  max: 3,
  speed: 400,
  glare: true,
  "max-glare": 0.1,
});

// Animations - Removed opacity: 0 start to ensure visibility even if JS fails or lags
// We use 'from' animations that are gentle
gsap.from(".card", {
  y: 30, // Just move up slightly
  opacity: 0, // Fade in
  duration: 0.8,
  stagger: 0.1,
  ease: "power2.out",
  clearProps: "all", // Ensure CSS takes over after animation
});

gsap.from(".section-title", {
  opacity: 0,
  x: -20,
  duration: 1,
  scrollTrigger: ".section-title",
});
