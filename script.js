
// DOM Elements
const header = document.getElementById('header');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');
const toastContainer = document.getElementById('toast-container');

// Set current year in footer
document.querySelector('.footer-copyright').innerHTML = `&copy; ${new Date().getFullYear()} Harsh Shukla. All rights reserved.`;

// Theme toggle functionality
function initTheme() {
  // Check for saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  // Apply saved theme
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeToggleMobile.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    document.documentElement.classList.remove('dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeToggleMobile.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    themeToggleMobile.innerHTML = '<i class="fa-solid fa-moon"></i>';
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    themeToggleMobile.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }
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
      toastContainer.removeChild(toast);
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
    window.open(mailtoLink, '_blank');
    
    // Reset form
    contactForm.reset();
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonContent;
    
    showToast('Message sent successfully! Your email client has been opened.');
  }, 1500);
}

// Setup animations for elements as they scroll into view
function setupScrollAnimations() {
  // Get all elements that should be animated
  const animatedElements = document.querySelectorAll('.animate-fade-in');
  
  // IntersectionObserver configuration
  const observerOptions = {
    root: null, // Use viewport as root
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Adjust trigger point (negative value means "before element comes into view")
  };
  
  // Create observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If element is in view
      if (entry.isIntersecting) {
        // Add animation class
        entry.target.style.animationPlayState = 'running';
        // Stop observing once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Start observing elements
  animatedElements.forEach(element => {
    element.style.animationPlayState = 'paused';
    observer.observe(element);
  });
}

// Initialize everything when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize theme
  initTheme();
  
  // Add event listeners
  themeToggle.addEventListener('click', toggleTheme);
  themeToggleMobile.addEventListener('click', toggleTheme);
  mobileMenuButton.addEventListener('click', toggleMobileMenu);
  contactForm.addEventListener('submit', handleContactFormSubmit);
  window.addEventListener('scroll', handleScroll);
  
  // Setup scroll animations
  setupScrollAnimations();
  
  // Initial header state
  handleScroll();
  
  // Setup smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});
