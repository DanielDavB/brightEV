/**
 * Bright EV — scroll animation layer
 *
 * Técnica: APIs nativas para evitar dependencias y mantener el bundle ligero.
 * - IntersectionObserver: fade/slide de elementos al entrar en viewport.
 * - requestAnimationFrame: parallax suave sincronizado con scroll.
 * - CSS custom properties: se actualizan sin forzar layout.
 *
 * Todos los efectos respetan prefers-reduced-motion.
 */

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function initRevealAnimations() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!revealItems.length) return () => {};

  if (prefersReducedMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  revealItems.forEach((item) => observer.observe(item));
  return () => observer.disconnect();
}

function initParallax() {
  if (prefersReducedMotion.matches) return () => {};

  const strengths = { hero: 0.075, section: 0.035, story: 0.045, card: 0.02 };
  const parallaxItems = [...document.querySelectorAll("[data-parallax]")].map((element) => ({
    element,
    strength: strengths[element.getAttribute("data-parallax")] || 0.03,
  }));

  if (!parallaxItems.length) return () => {};

  let ticking = false;

  const updateParallax = () => {
    const viewportCenter = window.innerHeight / 2;

    parallaxItems.forEach(({ element, strength }) => {
      const rect = element.getBoundingClientRect();
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const offset = Math.max(-18, Math.min(18, distanceFromCenter * -strength));
      element.style.setProperty("--scroll-parallax", `${offset.toFixed(2)}px`);
    });

    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  requestUpdate();
  return () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
  };
}

function initStoryScrollytelling() {
  const stage = document.querySelector(".story-stage");
  const chapters = [...document.querySelectorAll(".story-chapter")];
  if (!stage || !chapters.length || prefersReducedMotion.matches) return () => {};

  let activeChapter = 0;
  const chapterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const nextChapter = Number(entry.target.getAttribute("data-story"));
        if (Number.isNaN(nextChapter) || nextChapter === activeChapter) return;
        activeChapter = nextChapter;
        stage.setAttribute("data-active", String(activeChapter));
        chapters.forEach((chapter, index) => chapter.classList.toggle("is-active", index === activeChapter));
      });
    },
    { threshold: 0.55, rootMargin: "-8% 0px -8% 0px" },
  );

  chapters.forEach((chapter) => chapterObserver.observe(chapter));
  return () => chapterObserver.disconnect();
}

function initScrollProgress() {
  const progress = document.querySelector(".scroll-progress-bar span");
  if (!progress || prefersReducedMotion.matches) return () => {};
  let ticking = false;
  const update = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
    progress.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
    ticking = false;
  };
  const requestUpdate = () => {
    if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
  };
  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  requestUpdate();
  return () => {
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
  };
}

export function initScrollAnimations() {
  const cleanupReveal = initRevealAnimations();
  const cleanupParallax = initParallax();
  const cleanupStory = initStoryScrollytelling();
  const cleanupProgress = initScrollProgress();
  return () => {
    cleanupReveal();
    cleanupParallax();
    cleanupStory();
    cleanupProgress();
  };
}
