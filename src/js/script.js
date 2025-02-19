document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("GAAOsws3rBK4Vao2Q"); // Initialize EmailJS with your User ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Show the form-messages div
        var formMessages = document.getElementById('form-messages');
        formMessages.style.display = 'block';
        formMessages.innerHTML = 'Submitting...';

        // Send the email
        emailjs.sendForm('service_x2jt0pi', 'template_mdgjlj9', this)
            .then(function(response) {
                formMessages.innerHTML = 'Message sent successfully!';
                formMessages.style.color = 'green';
                // Reset the form
                document.getElementById('contact-form').reset();
                // Re-enable the submit button
                var submitButton = document.querySelector('input[type="submit"]');
                submitButton.disabled = false;
            }, function(error) {
                formMessages.innerHTML = 'Failed to send message. Please try again.';
                formMessages.style.color = 'red';
                // Log the error
                console.log('FAILED...', error);
                // Re-enable the submit button
                var submitButton = document.querySelector('input[type="submit"]');
                submitButton.disabled = false;
            });
    });
});
