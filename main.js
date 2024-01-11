const form = document.querySelector("#account-creation");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#phonenumber");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmpassword");

const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const phoneNumberError = document.querySelector("#phone-error");
const passwordError = document.querySelector("#password-error");
const confirmPasswordError = document.querySelector("#confirm-password-error");

//Prevent the form being submitted.
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

//Call validate functions for each input.
const validateInputs = () => {
  const fNameInput = firstName.value.trim();
  const lNameInput = lastName.value.trim();
  const emailInput = email.value.trim();
  let passwordInput = password.value.trim();
  let confirmPasswordInput = confirmPassword.value.trim();

  validateFirstName(fNameInput);
  validateLastName(lNameInput);
  validateEmail(emailInput);
  validatePassword(passwordInput);
  validatePasswordMatch(confirmPasswordInput);
};

function validateFirstName(name) {
  if (name === "") {
    firstNameError.textContent = "Please enter your first name.";
  }
}

function validateLastName(name) {
  if (name === "") {
    lastNameError.textContent = "Please enter your last name.";
  }
}

function validateEmail(email) {
  if (email === "") {
    emailError.textContent = "Email is required.";
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Please provide a valid email address.";
  } else {
    emailError.textContent = "";
    document.getElementById("email").style.border =
      "2px solid rgb(115, 215, 21)";
  }
}

function isValidEmail(email) {
  const regExp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return email.match(regExp);
}

email.addEventListener("input", function (event) {
  validateEmail(email.value.trim());
});

function validatePassword(p) {
  if (p === "") {
    passwordError.textContent = "Password is required.";
  } else if (p.includes(!upperCaseLetters)) {
    passwordError.textContent =
      "Password must be 8 characters long, contain 1 uppercase and lowercase letter, and 1 number.";
  } else if (p.includes(!lowerCaseLetters)) {
    passwordError.textContent =
      "Password must be 8 characters long, contain 1 uppercase and lowercase letter, and 1 number.";
  } else if (p.length < 8) {
    passwordError.textContent = "Password must be 8 characters long.";
  } else {
    return;
  }
}

function validatePasswordMatch(p) {
  if (password.value === "" && p === "") {
    confirmPasswordError.textContent = "Passwords do not match.";
  } else if (p === "") {
    confirmPasswordError.textContent = "";
  } else if (p !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    return;
  }
}
