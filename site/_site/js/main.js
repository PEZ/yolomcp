// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Close mobile menu if it's open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }

        // Scroll to target
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        // Update URL hash
        history.pushState(null, null, targetId);
      }
    });
  });

  // Animation on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const checkIfInView = () => {
    const windowHeight = window.innerHeight;
    const windowTopPosition = window.scrollY;
    const windowBottomPosition = windowTopPosition + windowHeight;

    animatedElements.forEach(element => {
      const elementHeight = element.offsetHeight;
      const elementTopPosition = element.offsetTop;
      const elementBottomPosition = elementTopPosition + elementHeight;

      // Check if element is in view
      if (
        (elementBottomPosition >= windowTopPosition) &&
        (elementTopPosition <= windowBottomPosition)
      ) {
        element.classList.add('animated');
      }
    });
  };

  // Run on initial load
  checkIfInView();

  // Run on scroll
  window.addEventListener('scroll', checkIfInView);

  // Form submission with basic validation
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Simple validation
      const nameInput = this.querySelector('input[type="text"]');
      const emailInput = this.querySelector('input[type="email"]');
      const messageInput = this.querySelector('textarea');

      let isValid = true;

      if (!nameInput.value.trim()) {
        markInvalid(nameInput);
        isValid = false;
      } else {
        markValid(nameInput);
      }

      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        markInvalid(emailInput);
        isValid = false;
      } else {
        markValid(emailInput);
      }

      if (!messageInput.value.trim()) {
        markInvalid(messageInput);
        isValid = false;
      } else {
        markValid(messageInput);
      }

      if (isValid) {
        // For demonstration purposes, just show a success message
        // In a real site, you would submit to a backend server
        const formElements = contactForm.elements;

        // Disable form elements
        for (let i = 0; i < formElements.length; i++) {
          formElements[i].disabled = true;
        }

        // Replace form with success message
        const successMessage = document.createElement('div');
        successMessage.className = 'text-center py-8';
        successMessage.innerHTML = `
          <div class="text-4xl mb-4"><i class="fas fa-check-circle"></i></div>
          <h3 class="text-xl font-bold mb-2">Thank You!</h3>
          <p>We've received your request and will contact you soon.</p>
        `;

        // Replace form with success message with animation
        contactForm.style.opacity = 0;
        setTimeout(() => {
          contactForm.parentNode.replaceChild(successMessage, contactForm);
          successMessage.style.opacity = 0;
          setTimeout(() => {
            successMessage.style.opacity = 1;
          }, 10);
        }, 300);
      }
    });
  }

  // Helper functions
  function markInvalid(element) {
    element.classList.add('ring-2', 'ring-red-500');
    element.classList.remove('ring-secondary');
  }

  function markValid(element) {
    element.classList.remove('ring-2', 'ring-red-500');
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});

// Add some parallax effect to the hero section
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroSection = document.querySelector('.hero-parallax');

  if (heroSection && scrollPosition < window.innerHeight) {
    heroSection.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  }
});