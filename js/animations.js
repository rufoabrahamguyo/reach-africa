/**
 * REACH AFRICA - Scroll-triggered animations
 */

class ScrollAnimation {
    constructor() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                        this.observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: '50px' }
        );
        this.init();
    }

    init() {
        const targets = document.querySelectorAll(
            '.value-card, .pillar-card, .flow-stage, .timeline-item, .office-card'
        );
        targets.forEach((el) => {
            el.classList.add('fade-out');
            this.observer.observe(el);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimation();
});
