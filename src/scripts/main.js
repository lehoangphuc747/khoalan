// src/scripts/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    document.querySelectorAll('#mobile-menu a, header nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.closest('#mobile-menu')) {
               mobileMenu.classList.add('hidden');
            }
            const targetId = link.getAttribute('href');
            if(targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                   targetElement.scrollIntoView({
                        behavior: 'smooth'
                   });
                }
            }
        });
    });

    // Sticky Header
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('py-2');
                header.classList.remove('py-3');
            } else {
                header.classList.add('py-3');
                header.classList.remove('py-2');
            }
        });
    }

    // Intersection Observer for animations
    const animatedElements = document.querySelectorAll('.fade-in-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    animatedElements.forEach(el => observer.observe(el));

    // Animated Counters
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = +el.getAttribute('data-counter');
                let current = 0;
                const increment = target > 1000 ? target / 200 : 1;
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        if (current > target) current = target;
                        el.innerText = Math.ceil(current).toLocaleString('vi-VN');
                        requestAnimationFrame(updateCounter);
                    } else {
                        el.innerText = target.toLocaleString('vi-VN');
                    }
                };
                updateCounter();
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.8 });
    document.querySelectorAll('[data-counter]').forEach(counter => {
        counterObserver.observe(counter);
    });
});