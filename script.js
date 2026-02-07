// Smooth scroll for navigation links
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

// Scroll animation observer for portfolio items
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

// Observe portfolio items
document.querySelectorAll('.portfolio-item').forEach(item => {
    observer.observe(item);
});

// Header background change on scroll
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(27, 67, 50, 0.98)';
    } else {
        header.style.backgroundColor = 'var(--green-dark)';
    }
    
    lastScroll = currentScroll;
});

// Contact form handling (basic validation)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // In a real implementation, you would send this data to a server
        // For now, we'll just show a success message
        alert(`Thank you, ${name}! We've received your request and will contact you shortly at ${email}.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add hover effect to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    });
}

// Add subtle animation to value numbers on scroll
const valueNumbers = document.querySelectorAll('.value-number');
const valueObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInScale 0.8s ease-out forwards';
        }
    });
}, { threshold: 0.5 });

valueNumbers.forEach(number => {
    valueObserver.observe(number);
});

// Add CSS animation for value numbers
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 0.3;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if you want to add a hamburger menu later)
// This is a placeholder for future mobile menu functionality
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        console.log('Mobile menu would be activated here');
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Log page load
console.log('Caden Mullen Painting - Website Loaded Successfully');
