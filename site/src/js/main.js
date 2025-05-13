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
  const staggerAnimations = document.querySelectorAll('.stagger-animation');

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

    // Handle staggered animations separately
    staggerAnimations.forEach(element => {
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
        const formData = new FormData(contactForm);
        // Netlify will pick up the submission from the current path if action is not specified
        const formAction = contactForm.getAttribute('action') || window.location.pathname;

        // Disable form elements during submission
        const formElements = contactForm.elements;
        for (let i = 0; i < formElements.length; i++) {
          formElements[i].disabled = true;
        }

        fetch(formAction, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        .then(response => {
          if (response.ok) {
            // Display success message (your existing logic)
            const successMessage = document.createElement('div');
            successMessage.className = 'text-center py-8 text-white'; // Added text-white for better visibility on dark bg
            successMessage.innerHTML = `
              <div class="text-4xl mb-4"><i class="fas fa-check-circle"></i></div>
              <h3 class="text-xl font-bold mb-2">Thank You!</h3>
              <p>I've received your request, brave soul.

              You should have received a confirmation e-mail.

              I will let you know if I move forward with YOLO-ifying MCP.</p>
            `;

            contactForm.style.opacity = 0;
            setTimeout(() => {
              contactForm.parentNode.replaceChild(successMessage, contactForm);
              successMessage.style.opacity = 0;
              setTimeout(() => {
                successMessage.style.opacity = 1;
              }, 10);
            }, 300);
          } else {
            // Handle server errors or non-OK responses from Netlify
            response.json().then(data => {
              alert('Submission failed: ' + (data.error || 'Please try again.'));
            }).catch(() => {
              alert('Submission failed. Please try again.');
            });
            // Re-enable form elements on failure
            for (let i = 0; i < formElements.length; i++) {
              formElements[i].disabled = false;
            }
          }
        })
        .catch(error => {
          console.error('Form submission error:', error);
          alert('Submission failed due to a network error. Please try again.');
          // Re-enable form elements on failure
          for (let i = 0; i < formElements.length; i++) {
            formElements[i].disabled = false;
          }
        });
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

// Add some parallax effect to the hero section, but only on larger screens
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroSection = document.querySelector('.hero-parallax');

  // Only apply parallax on screens wider than 768px (md breakpoint in Tailwind)
  if (heroSection && scrollPosition < window.innerHeight && window.innerWidth > 768) {
    heroSection.style.transform = `translateY(${scrollPosition * 0.3}px)`;
  } else if (heroSection) {
    // Reset transform for mobile to avoid layout issues
    heroSection.style.transform = 'none';
  }
});