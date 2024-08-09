document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.querySelector('form[action="/register"]');
    const loginForm = document.querySelector('form[action="/login"]');

    // Validate Registration Form
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirm-password');
            let valid = true;

            // Username validation
            if (username.value.trim() === '') {
                showError(username, 'Username is required');
                valid = false;
            } else {
                clearError(username);
            }

            // Email validation
            if (!validateEmail(email.value.trim())) {
                showError(email, 'Invalid email format');
                valid = false;
            } else {
                clearError(email);
            }

            // Password validation
            if (password.value.trim() === '') {
                showError(password, 'Password is required');
                valid = false;
            } else {
                clearError(password);
            }

            // Confirm password validation
            if (confirmPassword.value.trim() === '') {
                showError(confirmPassword, 'Please confirm your password');
                valid = false;
            } else if (password.value !== confirmPassword.value) {
                showError(confirmPassword, 'Passwords do not match');
                valid = false;
            } else {
                clearError(confirmPassword);
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }

    // Validate Login Form
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const email = document.getElementById('login-email');
            const password = document.getElementById('login-password');
            let valid = true;

            // Email validation
            if (!validateEmail(email.value.trim())) {
                showError(email, 'Invalid email format');
                valid = false;
            } else {
                clearError(email);
            }

            // Password validation
            if (password.value.trim() === '') {
                showError(password, 'Password is required');
                valid = false;
            } else {
                clearError(password);
            }

            if (!valid) {
                event.preventDefault();
            }
        });
    }

    // Function to show error messages
    function showError(input, message) {
        let error = input.nextElementSibling;
        if (!error || !error.classList.contains('error')) {
            error = document.createElement('span');
            error.classList.add('error');
            input.parentNode.insertBefore(error, input.nextSibling);
        }
        error.textContent = message;
    }

    // Function to clear error messages
    function clearError(input) {
        let error = input.nextElementSibling;
        if (error && error.classList.contains('error')) {
            error.remove();
        }
    }

    // Function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
