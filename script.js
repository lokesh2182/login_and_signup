const formSlider = document.querySelector(".form-slider");

// Switch forms without submitting
document.getElementById("toLogin").addEventListener("click", (e) => {
  e.preventDefault();
  formSlider.style.transform = "translateX(-50%)"; // show login form
  clearErrors();
});

document.getElementById("toSignup").addEventListener("click", (e) => {
  e.preventDefault();
  formSlider.style.transform = "translateX(0%)"; // show signup form
  clearErrors();
});

// Signup validation
document.getElementById("signupForm").addEventListener("submit", function(e){
  e.preventDefault();

  const username = document.getElementById("signupUsername").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const password = document.getElementById("signupPassword").value.trim();
  const confirm = document.getElementById("signupConfirm").value.trim();
  const error = document.getElementById("signupError");

  // Only allow submission if all fields are filled
  if(!username || !email || !password || !confirm) {
    error.textContent = "Please fill all details";
    return; // stop further action
  }

  // Optional: check password match
  if(password !== confirm) {
    error.textContent = "Password do not match";
    return;
  }

  // If everything filled, you can proceed
  error.textContent = ""; // clear error
  // Add your logic here (e.g., send data to server)
});

// Login validation
document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");

  if(!email || !password) {
    error.textContent = "Please fill all details";
    return; // stop further action
  }

  // If filled, proceed
  error.textContent = ""; // clear error
  // Add your login logic here
});

// Clear errors when switching forms
function clearErrors() {
  document.getElementById("signupError").textContent = "";
  document.getElementById("loginError").textContent = "";
}
