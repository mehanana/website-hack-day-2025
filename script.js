// Initialize EmailJS with your public key
(function() {
    // Using your actual EmailJS public key
    emailjs.init('lo2dXBZD22GwehZ5J');
  })();
  
  // Add event listener to the contact form
  document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = 'Sending...';
        submitButton.disabled = true;
        
        // Get form data
        const name = document.getElementById('formName').value;
        const email = document.getElementById('formEmail').value;
        const subject = document.getElementById('formSubject').value;
        const message = document.getElementById('formMessage').value;
        
        // Prepare template parameters for EmailJS
        const templateParams = {
          name: name,
          email: email, 
          subject: subject,
          message: message
        };
        
        // Using your actual EmailJS service and template IDs
        emailjs.send('service_f1ju7jb', 'template_sis70cp', templateParams)
          .then(function(result) {
            // Show success message
            window.alert('Thank you for contacting me! I will reach out to you as soon as possible.');
            
            // Reset form
            contactForm.reset();
          })
          .catch(function(error) {
            // Show error message
            window.alert('There was an error. Please try submitting the form again!');
            console.error('Error sending email:', error);
          })
          .finally(function() {
            // Restore button state
            submitButton.innerHTML = originalButtonText;
            submitButton.disabled = false;
          });
      });
    }
    
    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar-nav a.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#') && targetId.length > 1) {
          e.preventDefault();
          
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70, // Adjust for navbar height
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            
            if (navbarCollapse.classList.contains('show')) {
              navbarToggler.click();
            }
          }
        }
      });
    });
  });