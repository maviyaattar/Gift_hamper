/* ========================================
   Page Loading Animation
   ======================================== */

// Hide loader when page is fully loaded
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 500);
});

/* ========================================
   Floating Hearts Animation
   ======================================== */
function createFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 12000);
    }, 800);
}

/* ========================================
   Rose Petals Animation
   ======================================== */
function createRosePetals() {
    const container = document.getElementById('rosePetals');
    const petalSymbols = ['🌹', '🌺', '🌸', '💐'];
    
    setInterval(() => {
        const petal = document.createElement('div');
        petal.className = 'rose-petal';
        petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 5 + 10) + 's';
        petal.style.fontSize = (Math.random() * 10 + 12) + 'px';
        petal.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(petal);
        
        setTimeout(() => {
            petal.remove();
        }, 15000);
    }, 1200);
}

// Start animations after page load
window.addEventListener('load', () => {
    setTimeout(() => {
        createFloatingHearts();
        createRosePetals();
    }, 1000);
});

/* ========================================
   Image Skeleton Loader
   ======================================== */
function initImageLoading() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(container => {
        const img = container.querySelector('img');
        const skeleton = container.querySelector('.skeleton-loader');
        
        if (!img || !skeleton) return;
        
        if (img.complete && img.naturalHeight !== 0) {
            // Image already loaded
            img.classList.add('loaded');
            skeleton.classList.add('hidden');
            setTimeout(() => {
                skeleton.style.display = 'none';
            }, 300);
        } else {
            // Wait for image to load
            img.addEventListener('load', function() {
                this.classList.add('loaded');
                skeleton.classList.add('hidden');
                setTimeout(() => {
                    skeleton.style.display = 'none';
                }, 300);
            });
            
            img.addEventListener('error', function() {
                skeleton.classList.add('hidden');
                setTimeout(() => {
                    skeleton.style.display = 'none';
                }, 300);
            });
        }
    });
}

// Initialize image loading
document.addEventListener('DOMContentLoaded', initImageLoading);

/* ========================================
   Smooth Scroll for Navigation Links
   ======================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/* ========================================
   Scroll Reveal Animation
   ======================================== */

// Observe elements for scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Add reveal class to elements that should animate on scroll
function initScrollReveal() {
    // Gallery cards
    document.querySelectorAll('.gallery-card').forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Feature cards
    document.querySelectorAll('.feature-card').forEach((card, index) => {
        card.classList.add('reveal');
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
    
    // Offer items
    document.querySelectorAll('.offer-item').forEach((item, index) => {
        item.classList.add('reveal');
        item.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Section titles and subtitles
    document.querySelectorAll('.section-title, .section-subtitle').forEach(element => {
        element.classList.add('reveal');
        observer.observe(element);
    });
}

// Initialize scroll reveal when DOM is ready
document.addEventListener('DOMContentLoaded', initScrollReveal);

/* ========================================
   Parallax Effect for Hero Section
   ======================================== */

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

/* ========================================
   Button Ripple Effect Enhancement
   ======================================== */

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: translate(-50%, -50%) scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
            left: ${x}px;
            top: ${y}px;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: translate(-50%, -50%) scale(20);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/* ========================================
   Gallery Image Modal (Optional Enhancement)
   ======================================== */

document.querySelectorAll('.gallery-card').forEach(card => {
    card.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
            // Add a subtle scale animation on click
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        }
    });
});

/* ========================================
   Scroll Progress Indicator
   ======================================== */

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    
    // Create progress bar if it doesn't exist
    let progressBar = document.getElementById('scroll-progress');
    if (!progressBar) {
        progressBar = document.createElement('div');
        progressBar.id = 'scroll-progress';
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 4px;
            background: linear-gradient(90deg, var(--primary-pink), var(--gold));
            z-index: 9999;
            transition: width 0.2s ease;
        `;
        document.body.appendChild(progressBar);
    }
    
    progressBar.style.width = `${scrollProgress}%`;
}

/* ========================================
   Animated Counter for Price (Optional)
   ======================================== */

function animateCounter() {
    const priceElement = document.querySelector('.hero-price .amount');
    if (!priceElement) return;
    
    const targetValue = 1200;
    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    const stepDuration = duration / steps;
    
    let currentValue = 0;
    const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(counter);
        }
        priceElement.textContent = Math.floor(currentValue);
    }, stepDuration);
}

// Start counter animation when page loads
window.addEventListener('load', () => {
    setTimeout(animateCounter, 1000);
});

/* ========================================
   Add Floating Animation to Scroll Indicator
   ======================================== */

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
}

/* ========================================
   Enhanced Hover Effects for Cards
   ======================================== */

// Add tilt effect on card hover
document.querySelectorAll('.feature-card, .gallery-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        // Apply only the 3D tilt effect; let CSS handle translateY
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

/* ========================================
   Performance Optimization
   ======================================== */

// Debounce scroll events for better performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounced scroll progress from the start
const debouncedScrollProgress = debounce(updateScrollProgress, 10);
window.addEventListener('scroll', debouncedScrollProgress);

/* ========================================
   Console Welcome Message
   ======================================== */

console.log('%c Special Combo Hamper ', 
    'background: linear-gradient(135deg, #ffc0cb, #d4af37); color: white; padding: 10px 20px; font-size: 20px; font-weight: bold; border-radius: 10px;');
console.log('%c Premium Gift Hampers for Your Loved Ones ', 
    'color: #ffc0cb; font-size: 14px; font-weight: bold;');
console.log('%c Website loaded successfully! ', 
    'color: #666; font-size: 12px;');
