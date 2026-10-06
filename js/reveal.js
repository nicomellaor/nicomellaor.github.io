const revealElements = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (revealElements.length && "IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -8%"
    });

    revealElements.forEach((element) => {
        if (element.getBoundingClientRect().top <= window.innerHeight * 0.92) {
            element.classList.add("is-visible");
            return;
        }

        observer.observe(element);
    });

    document.documentElement.classList.add("motion-ready");
}
