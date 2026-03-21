/**
 * REACH AFRICA - Main JavaScript
 * Mobile menu, sticky nav, active nav, pillar expand
 */

// Mobile Menu Toggle
class MobileMenu {
    constructor() {
        this.menuToggle = document.querySelector('.mobile-menu-toggle');
        this.navMenu = document.querySelector('.nav-menu');
        this.moreToggle = document.querySelector('.more-toggle');
        this.moreWrap = document.querySelector('.nav-more');
        this.init();
    }

    init() {
        if (!this.menuToggle || !this.navMenu) return;

        this.menuToggle.addEventListener('click', () => {
            this.menuToggle.classList.toggle('active');
            this.navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            this.menuToggle.setAttribute('aria-expanded', this.navMenu.classList.contains('active'));
        });

        document.querySelectorAll('.nav-link, .nav-menu .btn').forEach(link => {
            link.addEventListener('click', () => {
                if (link.classList.contains('more-toggle')) {
                    return;
                }
                this.menuToggle.classList.remove('active');
                this.navMenu.classList.remove('active');
                document.body.classList.remove('menu-open');
                this.menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        if (this.moreToggle && this.moreWrap) {
            this.moreToggle.addEventListener('click', (e) => {
                e.preventDefault();
                const isOpen = this.moreWrap.classList.toggle('open');
                this.moreToggle.setAttribute('aria-expanded', String(isOpen));
            });

            document.addEventListener('click', (e) => {
                if (!this.moreWrap.contains(e.target)) {
                    this.moreWrap.classList.remove('open');
                    this.moreToggle.setAttribute('aria-expanded', 'false');
                }
            });
        }
    }
}

// Sticky Navigation
class StickyNav {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        if (!this.header) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.header.classList.add('sticky');
            } else {
                this.header.classList.remove('sticky');
            }
        });
    }
}

// Active Navigation Highlight
class ActiveNav {
    constructor() {
        this.currentPage = window.location.pathname.split('/').pop() || 'index.html';
        this.init();
    }

    init() {
        document.querySelectorAll('.nav-link[href]').forEach(link => {
            const href = link.getAttribute('href');
            if (href === this.currentPage || (this.currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
            if (href === '/' && (this.currentPage === '' || this.currentPage === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
}

// Hero parallax effect (home page)
class HeroParallax {
    constructor() {
        this.hero = document.querySelector('.hero');
        this.heroBg = document.querySelector('.hero-background img');
        this.enabled = !!this.hero && !!this.heroBg;
        this.currentY = 0;
        this.targetY = 0;
        this.rafId = null;
        if (this.enabled) {
            this.onScroll = this.onScroll.bind(this);
            this.animate = this.animate.bind(this);
            window.addEventListener('scroll', this.onScroll, { passive: true });
            window.addEventListener('resize', this.onScroll);
            this.onScroll();
        }
    }

    onScroll() {
        const rect = this.hero.getBoundingClientRect();
        const inView = rect.bottom > 0 && rect.top < window.innerHeight;
        if (!inView) return;

        // Move image slower than foreground for parallax depth.
        this.targetY = rect.top * -0.2;

        if (!this.rafId) {
            this.rafId = requestAnimationFrame(this.animate);
        }
    }

    animate() {
        this.currentY += (this.targetY - this.currentY) * 0.12;
        this.heroBg.style.transform = `translate3d(0, ${this.currentY}px, 0) scale(1.08)`;

        if (Math.abs(this.targetY - this.currentY) > 0.1) {
            this.rafId = requestAnimationFrame(this.animate);
        } else {
            this.rafId = null;
        }
    }
}

// Program Pillars Expand/Collapse
class ProgramPillars {
    constructor() {
        this.pillars = document.querySelectorAll('.pillar-card');
        this.init();
    }

    init() {
        this.pillars.forEach(pillar => {
            const expandBtn = pillar.querySelector('.pillar-expand');
            const details = pillar.querySelector('.pillar-details');

            if (!expandBtn || !details) return;

            expandBtn.addEventListener('click', () => {
                const isExpanded = expandBtn.textContent.trim().toLowerCase() === 'show less';

                this.pillars.forEach(p => {
                    const btn = p.querySelector('.pillar-expand');
                    const det = p.querySelector('.pillar-details');
                    if (det && det !== details) {
                        det.classList.add('hidden');
                        if (btn) btn.textContent = 'Show more';
                    }
                });

                details.classList.toggle('hidden');
                expandBtn.textContent = isExpanded ? 'Show more' : 'Show less';

                if (!isExpanded) {
                    pillar.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            });
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    new MobileMenu();
    new StickyNav();
    new ActiveNav();
    new HeroParallax();
    if (document.querySelector('.pillar-card')) {
        new ProgramPillars();
    }
});
