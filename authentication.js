const form = document.getElementById('authentication-form');
    const codeField = document.getElementById('authentication-code-field');
    const errorMsg = document.getElementById('authentication-error-msg');

    // The correct code to compare with (example: '1234')
    const correctCode = '3636';

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way
        const enteredCode = codeField.value;

        // Compare the entered code with the correct code
        if (enteredCode === correctCode) {

            window.location.href = "./AppContent/income.html";
        } else {
            errorMsg.style.opacity = '1'; // Show the error message
        }
    });