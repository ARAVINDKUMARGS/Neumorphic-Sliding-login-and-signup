const container = document.getElementById("container");
const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const mobileSignup = document.getElementById("mobileSignup");
const mobileLogin = document.getElementById("mobileLogin");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const loginMessage = document.getElementById("loginMessage");
const signupMessage = document.getElementById("signupMessage");
signupBtn.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});
loginBtn.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
mobileSignup.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.add("right-panel-active");
});
mobileLogin.addEventListener("click", (e) => {
    e.preventDefault();
    container.classList.remove("right-panel-active");
});
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;
    if (!email || !password) {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Please fill in all fields.";
        return;
    }
    if (password.length < 6) {
        loginMessage.style.color = "red";
        loginMessage.textContent = "Password must contain at least 6 characters.";
        return;
    }
    loginMessage.style.color = "green";
    loginMessage.textContent = "Login form validated successfully!";
});
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (!name || !email || !password || !confirmPassword) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Please fill in all fields.";
        return;
    }
    if (password.length < 6) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Password must be at least 6 characters.";
        return;
    }
    if (password !== confirmPassword) {
        signupMessage.style.color = "red";
        signupMessage.textContent = "Passwords do not match!";
        return;
    }
    signupMessage.style.color = "green";
    signupMessage.textContent = "Registration form validated successfully!";
});
document.getElementById("forgotPassword").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Please contact support to reset your password.");
});