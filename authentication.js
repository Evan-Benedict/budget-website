const authenticationForm = document.getElementById("authentication-form");
const authenticationButton = document.getElementById("authentication-form-submit");
const loginErrorMsg = document.getElementById("authentication-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const authCode = loginForm.code.value;

    if (authCode === "Hi") {
        alert("You have successfully logged in.");
        // New page
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})