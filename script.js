<<<<<<< HEAD
// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contactForm');
const navbar = document.querySelector('.navbar');

// Theme colors array
const themeColors = [
    { 
        name: 'default', 
        primary: '#4F46E5', 
        secondary: '#10B981', 
        accent: '#F59E0B',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    },
    { 
        name: 'black', 
        primary: '#1A1A1A', 
        secondary: '#0077B5', 
        accent: '#00D4AA',
        textPrimary: '#FFFFFF',
        textSecondary: '#E5E7EB',
        bgPrimary: '#0A0A0A',
        bgSecondary: '#1A1A1A',
        bgTertiary: '#2A2A2A',
        borderColor: '#333333'
    },
    { 
        name: 'purple', 
        primary: '#8B5CF6', 
        secondary: '#EC4899', 
        accent: '#F97316',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    },
    { 
        name: 'blue', 
        primary: '#3B82F6', 
        secondary: '#06B6D4', 
        accent: '#10B981',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    },
    { 
        name: 'green', 
        primary: '#059669', 
        secondary: '#10B981', 
        accent: '#F59E0B',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    }
];

let currentThemeIndex = 0;

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Function to update gradients based on theme
function updateGradients(theme) {
    const gradientPrimary = `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`;
    const gradientSecondary = `linear-gradient(135deg, ${theme.accent} 0%, ${theme.primary} 100%)`;
    const gradientAccent = `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)`;
    
    document.documentElement.style.setProperty('--gradient-primary', gradientPrimary);
    document.documentElement.style.setProperty('--gradient-secondary', gradientSecondary);
    document.documentElement.style.setProperty('--gradient-accent', gradientAccent);
}

// Theme Toggle with Color Cycling
themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themeColors.length;
    const theme = themeColors[currentThemeIndex];
    
    // Update CSS custom properties for entire website
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--text-primary', theme.textPrimary);
    document.documentElement.style.setProperty('--text-secondary', theme.textSecondary);
    document.documentElement.style.setProperty('--bg-primary', theme.bgPrimary);
    document.documentElement.style.setProperty('--bg-secondary', theme.bgSecondary);
    document.documentElement.style.setProperty('--bg-tertiary', theme.bgTertiary);
    document.documentElement.style.setProperty('--border-color', theme.borderColor);
    
    // Update gradients
    updateGradients(theme);
    
    // Update theme toggle icon color
    themeToggle.style.color = theme.primary;
    
    // Add animation effect
    themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg) scale(1)';
    }, 300);
    
    // Show theme notification
    showNotification(`Theme changed to ${theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}`, 'info');
    
    // Save theme preference
    localStorage.setItem('themeIndex', currentThemeIndex);
});

// Load saved theme
const savedThemeIndex = localStorage.getItem('themeIndex');
if (savedThemeIndex !== null) {
    currentThemeIndex = parseInt(savedThemeIndex);
    const theme = themeColors[currentThemeIndex];
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--text-primary', theme.textPrimary);
    document.documentElement.style.setProperty('--text-secondary', theme.textSecondary);
    document.documentElement.style.setProperty('--bg-primary', theme.bgPrimary);
    document.documentElement.style.setProperty('--bg-secondary', theme.bgSecondary);
    document.documentElement.style.setProperty('--bg-tertiary', theme.bgTertiary);
    document.documentElement.style.setProperty('--border-color', theme.borderColor);
    updateGradients(theme);
    themeToggle.style.color = theme.primary;
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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

// Particles.js Configuration
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        this.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'var(--secondary-color)';
            break;
        case 'error':
            notification.style.background = '#EF4444';
            break;
        default:
            notification.style.background = 'var(--primary-color)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'var(--shadow-light)';
    });
});

// Enhanced hover effects for skill icons
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'var(--shadow-light)';
    });
});

// Enhanced hover effects for social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .name');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
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
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Resume download functionality
document.querySelector('a[href="resume.pdf"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Saiyad_Suleman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Resume download started!', 'success');
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
=======
// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const contactForm = document.getElementById('contactForm');
const navbar = document.querySelector('.navbar');

// Theme colors array
const themeColors = [
    { 
        name: 'default', 
        primary: '#4F46E5', 
        secondary: '#10B981', 
        accent: '#F59E0B',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    },
    { 
        name: 'black', 
        primary: '#1A1A1A', 
        secondary: '#0077B5', 
        accent: '#00D4AA',
        textPrimary: '#FFFFFF',
        textSecondary: '#E5E7EB',
        bgPrimary: '#0A0A0A',
        bgSecondary: '#1A1A1A',
        bgTertiary: '#2A2A2A',
        borderColor: '#333333'
    },
    { 
        name: 'purple', 
        primary: '#8B5CF6', 
        secondary: '#EC4899', 
        accent: '#F97316',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    },
    { 
        name: 'blue', 
        primary: '#3B82F6', 
        secondary: '#06B6D4', 
        accent: '#10B981',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    },
    { 
        name: 'green', 
        primary: '#059669', 
        secondary: '#10B981', 
        accent: '#F59E0B',
        textPrimary: '#1F2937',
        textSecondary: '#6B7280',
        bgPrimary: '#FFFFFF',
        bgSecondary: '#F9FAFB',
        bgTertiary: '#F3F4F6',
        borderColor: '#E5E7EB'
    }
];

let currentThemeIndex = 0;

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Function to update gradients based on theme
function updateGradients(theme) {
    const gradientPrimary = `linear-gradient(135deg, ${theme.primary} 0%, ${theme.secondary} 100%)`;
    const gradientSecondary = `linear-gradient(135deg, ${theme.accent} 0%, ${theme.primary} 100%)`;
    const gradientAccent = `linear-gradient(135deg, ${theme.secondary} 0%, ${theme.accent} 100%)`;
    
    document.documentElement.style.setProperty('--gradient-primary', gradientPrimary);
    document.documentElement.style.setProperty('--gradient-secondary', gradientSecondary);
    document.documentElement.style.setProperty('--gradient-accent', gradientAccent);
}

// Theme Toggle with Color Cycling
themeToggle.addEventListener('click', () => {
    currentThemeIndex = (currentThemeIndex + 1) % themeColors.length;
    const theme = themeColors[currentThemeIndex];
    
    // Update CSS custom properties for entire website
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--text-primary', theme.textPrimary);
    document.documentElement.style.setProperty('--text-secondary', theme.textSecondary);
    document.documentElement.style.setProperty('--bg-primary', theme.bgPrimary);
    document.documentElement.style.setProperty('--bg-secondary', theme.bgSecondary);
    document.documentElement.style.setProperty('--bg-tertiary', theme.bgTertiary);
    document.documentElement.style.setProperty('--border-color', theme.borderColor);
    
    // Update gradients
    updateGradients(theme);
    
    // Update theme toggle icon color
    themeToggle.style.color = theme.primary;
    
    // Add animation effect
    themeToggle.style.transform = 'rotate(360deg) scale(1.2)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg) scale(1)';
    }, 300);
    
    // Show theme notification
    showNotification(`Theme changed to ${theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}`, 'info');
    
    // Save theme preference
    localStorage.setItem('themeIndex', currentThemeIndex);
});

// Load saved theme
const savedThemeIndex = localStorage.getItem('themeIndex');
if (savedThemeIndex !== null) {
    currentThemeIndex = parseInt(savedThemeIndex);
    const theme = themeColors[currentThemeIndex];
    document.documentElement.style.setProperty('--primary-color', theme.primary);
    document.documentElement.style.setProperty('--secondary-color', theme.secondary);
    document.documentElement.style.setProperty('--accent-color', theme.accent);
    document.documentElement.style.setProperty('--text-primary', theme.textPrimary);
    document.documentElement.style.setProperty('--text-secondary', theme.textSecondary);
    document.documentElement.style.setProperty('--bg-primary', theme.bgPrimary);
    document.documentElement.style.setProperty('--bg-secondary', theme.bgSecondary);
    document.documentElement.style.setProperty('--bg-tertiary', theme.bgTertiary);
    document.documentElement.style.setProperty('--border-color', theme.borderColor);
    updateGradients(theme);
    themeToggle.style.color = theme.primary;
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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

// Particles.js Configuration
if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'repulse'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        this.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'success':
            notification.style.background = 'var(--secondary-color)';
            break;
        case 'error':
            notification.style.background = '#EF4444';
            break;
        default:
            notification.style.background = 'var(--primary-color)';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Enhanced hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'var(--shadow-light)';
    });
});

// Enhanced hover effects for skill icons
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.05)';
        this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'var(--shadow-light)';
    });
});

// Enhanced hover effects for social links
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .name');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
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
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-card, .project-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Resume download functionality
document.querySelector('a[href="resume.pdf"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'Saiyad_Suleman_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Resume download started!', 'success');
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
>>>>>>> 74a4a0ad90a32d619134eee0972b2e28e7d7b5c3
