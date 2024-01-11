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
  let pInput = password.value.trim();
  let cPasswordInput = confirmPassword.value.trim();

  validateFirstName(fNameInput);
  validateLastName(lNameInput);
  validateEmail(emailInput);
  validatePassword(pInput);
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
  }
}

function isValidEmail(email) {
  const regExp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return email.match(regExp);
}

function validatePassword(p) {
  let upperCaseLetters = /[A-Z]/g;
  let lowerCaseLetters = /[a-z]/g;
  let numbers = /[0-9]/g;

  if (p === "") {
    passwordError.textContent = "Password is required.";
  } else if (p.match(!upperCaseLetters)) {
    passwordError.textContent =
      "Password must be 8 characters long, contain 1 uppercase and lowercase letter, and 1 number.";
  } else if (p.match(!lowerCaseLetters)) {
    passwordError.textContent =
      "Password must be 8 characters long, contain 1 uppercase and lowercase letter, and 1 number.";
  } else if (p.length < 8) {
    passwordError.textContent =
      "Password must be 8 characters long, contain 1 uppercase and lowercase letter, and 1 number.";
  } else {
    return;
  }
}
