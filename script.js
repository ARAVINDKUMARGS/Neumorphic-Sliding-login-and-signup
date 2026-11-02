
const container = document.getElementById("container");

const signUpButton = document.getElementById("signUpToggle");
const signInButton = document.getElementById("signInToggle");

const mobileSignUp = document.getElementById("mobileSignUpTab");
const mobileSignIn = document.getElementById("mobileSignInTab");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

mobileSignUp.addEventListener("click", () => {
    container.classList.add("right-panel-active");

    mobileSignUp.classList.add("active");
    mobileSignIn.classList.remove("active");
});

mobileSignIn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");

    mobileSignIn.classList.add("active");
    mobileSignUp.classList.remove("active");
});

const passwordButtons = document.querySelectorAll(".toggle-password");

passwordButtons.forEach(button => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.target);

        if (input.type === "password") {
            input.type = "text";
            button.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        } else {
            input.type = "password";
            button.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    });
});

const password = document.getElementById("signupPassword");
const strengthBar = document.getElementById("strengthBarFill");
const strengthLabel = document.getElementById("strengthLabel");

password.addEventListener("input", () => {
    let value = password.value;
    let strength = 0;

    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    const levels = ["Weak", "Fair", "Good", "Strong"];

    strengthBar.style.width = (strength * 25) + "%";

    strengthLabel.textContent = value.length === 0
        ? "Enter password"
        : levels[strength - 1] || "Weak";
});

const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const phone = document.getElementById("signupPhone").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
    const terms = document.getElementById("signupTerms").checked;

    const message = document.getElementById("signupFeedback");

    if (!name || !email || !phone || !password || !confirmPassword) {
        message.textContent = "Please fill all the fields.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must contain at least 8 characters.";
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        return;
    }

    if (!terms) {
        message.textContent = "Please accept the terms and conditions.";
        return;
    }

    message.textContent = "Account created successfully!";

    signUpForm.reset();

    strengthBar.style.width = "0%";
    strengthLabel.textContent = "Enter password";
});

const signInForm = document.getElementById("signInForm");

signInForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    const remember = document.getElementById("rememberMe").checked;

    const message = document.getElementById("loginFeedback");

    if (!email || !password) {
        message.textContent = "Please enter email and password.";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    if (remember) {
        localStorage.setItem("rememberEmail", email);
    } else {
        localStorage.removeItem("rememberEmail");
    }

    message.textContent = "Login successful!";

    signInForm.reset();
});

const savedEmail = localStorage.getItem("rememberEmail");

if (savedEmail) {
    document.getElementById("loginEmail").value = savedEmail;
    document.getElementById("rememberMe").checked = true;
}

document.getElementById("forgotPassLink").addEventListener("click", (event) => {
    event.preventDefault();
    alert("Please contact support to reset your password.");
});
