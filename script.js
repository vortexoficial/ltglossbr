document.documentElement.classList.add("js");

const faqItems = [...document.querySelectorAll(".faq__list details")];
const lazyVideos = [...document.querySelectorAll("[data-lazy-video]")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const loadVideo = (video) => {
  video.querySelectorAll("source[data-src]").forEach((source) => {
    source.src = source.dataset.src;
    delete source.dataset.src;
  });
  video.load();
  if (!reduceMotion.matches) {
    video.play().catch(() => {});
  }
};

if ("IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadVideo(entry.target);
          videoObserver.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "400px 0px" },
  );

  lazyVideos.forEach((video) => videoObserver.observe(video));
} else {
  lazyVideos.forEach(loadVideo);
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => {
    element.classList.add("is-visible");
  });
}

const setFaqState = (item, shouldOpen) => {
  if (reduceMotion.matches || !item.animate) {
    item.open = shouldOpen;
    return;
  }

  const summary = item.querySelector("summary");
  const startHeight = item.offsetHeight;

  if (shouldOpen) {
    item.open = true;
  }

  const endHeight = shouldOpen ? item.scrollHeight : summary.offsetHeight;
  item.dataset.animating = "true";

  const animation = item.animate(
    { height: [`${startHeight}px`, `${endHeight}px`] },
    { duration: 280, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
  );

  animation.addEventListener(
    "finish",
    () => {
      item.open = shouldOpen;
      delete item.dataset.animating;
    },
    { once: true },
  );
};

faqItems.forEach((item) => {
  item.querySelector("summary").addEventListener("click", (event) => {
    event.preventDefault();

    if (item.dataset.animating === "true") {
      return;
    }

    const shouldOpen = !item.open;

    faqItems.forEach((otherItem) => {
      if (otherItem !== item && otherItem.open && otherItem.dataset.animating !== "true") {
        setFaqState(otherItem, false);
      }
    });

    setFaqState(item, shouldOpen);
  });
});
