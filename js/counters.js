/**
 * REACH AFRICA - Counter Animation for Hero Stats
 */

class CounterAnimation {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number[data-target]');
        this.animated = false;
        this.init();
    }

    init() {
        if (!this.counters.length) return;

        const checkAndAnimate = () => {
            if (this.animated) return;
            const heroStats = document.querySelector('.hero-stats');
            if (!heroStats) return;

            const rect = heroStats.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                this.animateCounters();
                this.animated = true;
            }
        };

        window.addEventListener('scroll', checkAndAnimate);
        checkAndAnimate();
    }

    animateCounters() {
        this.counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'), 10);
            if (isNaN(target)) return;

            const duration = 2000;
            const startTime = performance.now();

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const current = Math.floor(easeOut * target);
                counter.textContent = current;

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    counter.textContent = target;
                }
            };

            requestAnimationFrame(update);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CounterAnimation();
});
