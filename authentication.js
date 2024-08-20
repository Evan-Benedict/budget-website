const form = document.getElementById('authentication-form');
    const codeField = document.getElementById('authentication-code-field');
    const errorMsg = document.getElementById('authentication-error-msg');

    // The correct code to compare with (example: '1234')
    const correctCode = '1911';

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const enteredCode = codeField.value;

        // Compare the entered code with the correct code
        if (enteredCode === correctCode) {
            // Code is correct, proceed with the desired action (e.g., redirect, show success message)
            alert('Code is correct!'); // Example action
        } else {
            // Code is incorrect, show error message
            errorMsg.style.opacity = '1'; // Show the error message
            errorMsg.textContent = 'Invalid Code'; // Ensure the error message is correct
        }
    });