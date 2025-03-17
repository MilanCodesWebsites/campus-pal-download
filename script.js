// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const content = document.getElementById('content');
const themeToggle = document.getElementById('theme-toggle');
const currentYearElements = document.querySelectorAll('#current-year');

// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
});

// Set current year in footer
currentYearElements.forEach(element => {
  element.textContent = new Date().getFullYear();
});

// Theme Toggle Functionality
function setTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('campuspal-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('campuspal-theme', 'light');
  }
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('campuspal-theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Check if user prefers dark mode
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

// Loading Screen Animation
document.addEventListener('DOMContentLoaded', () => {
  // Simulate loading time (2.5 seconds)
  setTimeout(() => {
    loadingScreen.style.opacity = '0';
    loadingScreen.style.transition = 'opacity 0.5s ease-out';
    
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
      content.classList.remove('hidden');
      
      // Animate content elements
      animateContent();
    }, 500);
  }, 2500);
});

// Animate content elements
function animateContent() {
  // Hero section animations
  const heroElements = [
    document.querySelector('.badge'),
    document.querySelector('.hero-title'),
    document.querySelector('.hero-description'),
    document.querySelector('.hero-buttons')
  ];
  
  heroElements.forEach((element, index) => {
    if (element) {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = `opacity 0.6s ease, transform 0.6s ease`;
      element.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
      
      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }, 100);
    }
  });
  
  // Hero image animation
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'scale(0.9)';
    heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    heroImage.style.transitionDelay = '0.5s';
    
    setTimeout(() => {
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'scale(1)';
    }, 100);
  }
  
  // Animate feature cards on scroll
  const featureCards = document.querySelectorAll('.feature-card');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observe feature cards
  featureCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.transitionDelay = `${0.1 * index}s`;
    observer.observe(card);
  });
  
  // Observe testimonial cards
  testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    card.style.transitionDelay = `${0.1 * index}s`;
    observer.observe(card);
  });
  
  // Animate section headers
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach((header) => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(20px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(header);
  });
  
  // iOS install page animations
  const iosSteps = document.querySelectorAll('.ios-install-step');
  iosSteps.forEach((step, index) => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(20px)';
    step.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    step.style.transitionDelay = `${0.3 + (index * 0.1)}s`;
    
    setTimeout(() => {
      step.style.opacity = '1';
      step.style.transform = 'translateY(0)';
    }, 100);
  });
}

// Add hover animations to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Add hover animations to testimonial cards
const testimonialCards = document.querySelectorAll('.testimonial-card');
testimonialCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-5px)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Add hover animation to download buttons
const downloadButtons = document.querySelectorAll('.btn');
downloadButtons.forEach(button => {
  const icon = button.querySelector('[data-lucide]');
  if (icon) {
    button.addEventListener('mouseenter', () => {
      icon.style.animation = 'bounce 0.5s ease infinite';
    });
    
    button.addEventListener('mouseleave', () => {
      icon.style.animation = 'none';
    });
  }
});

// Add bounce animation
const style = document.createElement('style');
style.textContent = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;
document.head.appendChild(style);