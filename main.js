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
  const passwordInput = password.value.trim();
  const cPasswordInput = confirmPassword.value.trim();

  validateFirstName(fNameInput);
  validateLastName(lNameInput);
  validateEmail(emailInput);
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
    emailError.textContent = "Provide a valid email address.";
  } else {
    emailError.textContent = "";
  }
}

function isValidEmail(email) {
  const regExp = /[^\s@]+@[^\s@]+\.[^\s@]+/;
  return email.match(regExp);
}
