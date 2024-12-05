document.addEventListener('DOMContentLoaded', function() {
    // Back to Top functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    // Throttle scroll event for performance
    let isScrolling = false;
    window.addEventListener('scroll', function() {
        if (!isScrolling) {
            window.requestAnimationFrame(function() {
                if (window.scrollY > 20) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message!');
            this.reset();
        });
    }
});