
// DOM Elements
const header = document.getElementById('header');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');
const toastContainer = document.getElementById('toast-container');
const yearElement = document.getElementById('current-year');

// Set current year in footer
yearElement.textContent = new Date().getFullYear();

// Theme toggle functionality
function initTheme() {
  // Check for saved theme
  const savedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    updateThemeIcons('dark');
  } else {
    document.documentElement.classList.remove('dark');
    updateThemeIcons('light');
  }
}

function updateThemeIcons(theme) {
  if (theme === 'dark') {
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeToggleMobile.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeToggleMobile.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    updateThemeIcons('light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    updateThemeIcons('dark');
  }
  
  // Show toast notification
  showToast(`Switched to ${document.documentElement.classList.contains('dark') ? 'dark' : 'light'} mode`);
}

// Mobile menu functionality
function toggleMobileMenu() {
  mobileMenu.classList.toggle('active');
  
  if (mobileMenu.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
    mobileMenuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    document.body.style.overflow = '';
    mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  document.body.style.overflow = '';
  mobileMenuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

// Header scroll effect
function handleScroll() {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Update active nav link
  const scrollPosition = window.scrollY + 100;
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
  
  // Check for elements to animate on scroll
  checkScrollAnimation();
}

// Toast notification system
function showToast(message, type = 'success', duration = 5000) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icon = type === 'success'
    ? '<i class="fa-solid fa-check-circle toast-icon"></i>'
    : '<i class="fa-solid fa-triangle-exclamation toast-icon"></i>';
  
  toast.innerHTML = `
    ${icon}
    <div class="toast-content">${message}</div>
    <button class="toast-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
  `;
  
  toastContainer.appendChild(toast);
  
  // Add event listener for close button
  const closeButton = toast.querySelector('.toast-close');
  closeButton.addEventListener('click', () => {
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode === toastContainer) {
        toastContainer.removeChild(toast);
      }
    }, 300);
  });
  
  // Auto close after duration
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode === toastContainer) {
        toastContainer.removeChild(toast);
      }
    }, 300);
  }, duration);
}

// Contact form submission handler
function handleContactFormSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(contactForm);
  const formProps = Object.fromEntries(formData);
  
  // Validate form
  if (!formProps.name || !formProps.email || !formProps.subject || !formProps.message) {
    showToast('Please fill in all fields', 'error');
    return;
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formProps.email)) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  
  // Simulate sending form (in real application, this would be an API call)
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const originalButtonContent = submitButton.innerHTML;
  
  submitButton.disabled = true;
  submitButton.innerHTML = `
    <span class="flex items-center justify-center">
      <i class="fa-solid fa-spinner fa-spin mr-2"></i>
      Sending...
    </span>
  `;
  
  // Prepare email content
  const emailBody = `
    Name: ${formProps.name}
    Email: ${formProps.email}
    Subject: ${formProps.subject}
    Message: ${formProps.message}
  `;
  
  // Send email using mailto
  setTimeout(() => {
    const mailtoLink = `mailto:harsh206090307117@gmail.com?subject=${encodeURIComponent(formProps.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonContent;
    
    showToast('Email client opened with your message');
  }, 1500);
}

// Setup animations for elements as they scroll into view
function setupScrollAnimations() {
  // No need to set up anything, the checking will be done in checkScrollAnimation function
}

function checkScrollAnimation() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll:not(.animated)');
  
  animatedElements.forEach(element => {
    const elementPosition = element.getBoundingClientRect();
    
    // If element is in viewport
    if (elementPosition.top < window.innerHeight * 0.85) {
      element.classList.add('animated');
    }
  });
}

// Typewriter animation for subtitle
function typeWriter() {
  const text = "Aspiring Software Developer";
  const subtitle = document.querySelector('.typewriter-text');
  let i = 0;
  
  function type() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    } else {
      // Add blinking cursor effect after typing is complete
      subtitle.classList.add('typewriter-done');
    }
  }
  
  setTimeout(() => {
    type();
  }, 500);
}

// Initialize everything when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  
  // Start typewriter animation
  typeWriter();
  
  // Add event listeners
  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  contactForm.addEventListener('submit', handleContactFormSubmit);
  window.addEventListener('scroll', handleScroll);
  
  // Setup scroll animations
  setupScrollAnimations();
  
  // Initial header state and animations check
  handleScroll();
  
  // Setup smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Close mobile menu if open
        if (mobileMenu.classList.contains('active')) {
          closeMobileMenu();
        }
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Check for animated elements on initial load
  checkScrollAnimation();
});
