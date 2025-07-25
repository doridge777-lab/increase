// Tab functionality for news section
const tabBtns = document.querySelectorAll('.tab-btn');
const newsGrid = document.querySelector('.news-grid');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all tabs
        tabBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked tab
        btn.classList.add('active');
        
        // Here you would typically load different content based on the tab
        // For now, we'll just show a console message
        console.log(`Switched to ${btn.dataset.tab} tab`);
    });
});

// Pagination dots functionality
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        // Remove active class from all dots
        dots.forEach(d => d.classList.remove('active'));
        // Add active class to clicked dot
        dot.classList.add('active');
        
        // Here you would typically load different page content
        console.log(`Switched to page ${index + 1}`);
    });
});

// Hero navigation arrows
const navPrev = document.querySelector('.nav-prev');
const navNext = document.querySelector('.nav-next');

if (navPrev && navNext) {
    navPrev.addEventListener('click', () => {
        console.log('Previous slide');
        // Add your carousel logic here
    });
    
    navNext.addEventListener('click', () => {
        console.log('Next slide');
        // Add your carousel logic here
    });
}

// Calculator button functionality
const calculatorBtn = document.querySelector('.calculator-btn');

if (calculatorBtn) {
    calculatorBtn.addEventListener('click', () => {
        alert('구독계산기 기능이 실행됩니다.');
        // Add your calculator logic here
    });
}

// Smooth scrolling for navigation links
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

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#2c3e50';
        header.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.status-card, .news-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Real-time status updates simulation
function updateStatusValues() {
    const networkValue = document.querySelector('.network-status .status-value');
    const storageValue = document.querySelector('.storage-status .status-value');
    const equipmentValue = document.querySelector('.equipment-status .status-value');
    
    if (networkValue) {
        // Simulate network speed changes
        const baseSpeed = 923;
        const variation = Math.floor(Math.random() * 100) - 50;
        const newSpeed = Math.max(800, baseSpeed + variation);
        networkValue.textContent = `${newSpeed} MBps`;
    }
    
    if (storageValue) {
        // Storage value remains relatively stable
        const baseStorage = 10;
        const variation = Math.floor(Math.random() * 2);
        const newStorage = baseStorage + variation * 0.1;
        storageValue.textContent = `${newStorage.toFixed(1)} TB`;
    }
    
    if (equipmentValue) {
        // Equipment count remains stable
        equipmentValue.textContent = '382개';
    }
}

// Update status every 30 seconds
setInterval(updateStatusValues, 30000);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add CSS for additional styles
const style = document.createElement('style');
style.textContent = `
    /* Loading animation */
    .loading {
        opacity: 0;
        animation: fadeIn 0.5s ease-in forwards;
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
    
    /* Smooth transitions for all interactive elements */
    * {
        transition: all 0.3s ease;
    }
    
    /* Hover effects for status cards */
    .status-card:hover .status-icon {
        transform: scale(1.1);
    }
    
    /* Pulse animation for network status */
    .network-status .status-icon {
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7);
        }
        70% {
            box-shadow: 0 0 0 10px rgba(231, 76, 60, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(231, 76, 60, 0);
        }
    }
    
    /* Glow effect for calculator button */
    .calculator-btn {
        position: relative;
        overflow: hidden;
    }
    
    .calculator-btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    .calculator-btn:hover::before {
        left: 100%;
    }
    
    /* News card hover effects */
    .news-card:hover {
        border-left-color: #2ecc71;
    }
    
    /* Tab button ripple effect */
    .tab-btn {
        position: relative;
        overflow: hidden;
    }
    
    .tab-btn::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
    }
    
    .tab-btn:active::after {
        width: 200px;
        height: 200px;
    }
    
    /* Navigation arrow hover effects */
    .nav-arrow:hover {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    }
    
    /* Status value animation */
    .status-value {
        transition: all 0.3s ease;
    }
    
    .status-card:hover .status-value {
        transform: scale(1.05);
        color: #3498db;
    }
`;
document.head.appendChild(style);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        navPrev?.click();
    } else if (e.key === 'ArrowRight') {
        navNext?.click();
    }
});

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next
            navNext?.click();
        } else {
            // Swipe right - previous
            navPrev?.click();
        }
    }
}

// Performance monitoring
const performanceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
            console.log(`Page load time: ${entry.loadEventEnd - entry.loadEventStart}ms`);
        }
    }
});

performanceObserver.observe({ entryTypes: ['navigation'] });

console.log('KTSS 종합안전관리 웹사이트가 성공적으로 로드되었습니다! 🔒'); 