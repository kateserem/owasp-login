//wehn a form is submitted, run this function instread of refreshing the page
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    //get the users input and remove extra spaces
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    message.textContent = "";

    //enusre both text boxes are filled
    if (emailInput === "" || passwordInput === "") {
        message.textContent = "Both fields are required.";
        return;
    }

    //ensure the emil has an @ symbol
    if (!emailInput.includes("@")) {
        message.textContent = "Email must contain @.";
        return;
    }

    //ensure password is at least 8 characters
    if (passwordInput.length < 8) {
        message.textContent = "Password must be at least 8 characters long.";
        return;
    }

    //basic sanitization
    //replace < and > to prevent injected scripts
    const safeEmail = emailInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const safePassword = passwordInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    //placeholders
    const storedEmail = "user@example.com";
    const storedPassword = "Password123";

    //ensure input matches
    if (safeEmail === storedEmail && safePassword === storedPassword) {
        message.style.color = "green";
        message.textContent = "Login successful.";

    } else {
        message.style.color = "red";
        message.textContent = "Invalid email or password.";

    }
});