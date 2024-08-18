const formEl = document.querySelector("form");
const firstNEl = document.querySelector(".first-name");
const lastNEl = document.querySelector(".last-name");
const emailEl = document.querySelector(".email");
const messageEl = document.querySelector(".txt-message");
const messageParent = document.querySelector(".message");
const btnRadio = document.getElementsByClassName("btn-radio");
const btnEl = document.querySelector("button");
const termEl = document.querySelector("termsCondition");
const termsWrapper = document.querySelector(".terms-wrapper");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  errorHandler();
});

function errorHandler() {
  const firstName = firstNEl.value.trim();
  const lastName = lastNEl.value.trim();
  const email = emailEl.value.trim();
  const textMessage = messageEl.value.trim();

  //first Name
  if (firstName === "") {
    showError(firstNEl, showErrorMessage());
  } else {
    setSuccess(firstNEl);
  }
  //Last Name
  if (lastName === "") {
    showError(lastNEl, showErrorMessage());
  } else {
    setSuccess(lastNEl);
  }
  //email
  if (email === "") {
    showError(emailEl, showErrorMessage());
  } else if (!isValidEmail(email)) {
    showError(emailEl, "Please Enter Valid Email");
  } else {
    setSuccess(emailEl);
  }
  //texterea Message
  if (textMessage === "") {
    showError(messageParent, showErrorMessage());
  } else {
    setSuccess(messageParent);
  }

  // If all fields are valid, show success message and reset the form
  if (
    firstName !== "" &&
    lastName !== "" &&
    isValidEmail(email) &&
    textMessage !== ""
  ) {
    successHandler(event);
  }
}

function successHandler(event) {
  event.preventDefault();
  alert(" Message Sent! Thanks for completing the form. We'll be in touch soon!  ")
  event.target.reset(); // reset page
  window.location.href = window.location.href; // refresh page
  
}

// checkBox handel
document.addEventListener("DOMContentLoaded", () => {
  const btnRadio = Array.from(document.getElementsByClassName("btn-radio"));

  function errorHandler(event) {

    
    event.preventDefault();
    showError("Error message");
  }

  function checkBoxHandler() {
    btnRadio.forEach((btn) => {
      btn.addEventListener("click", () => {
        btnRadio.forEach((b) => b.parentElement.classList.remove("active"));
        btn.parentElement.classList.add("active");
      });
    });
  }

  const form = document.querySelector("form");
  form.addEventListener("submit", errorHandler);
  if (form.checkValidity()) {
    successHandler(event);
  } else {
    errorHandler(event);
  }
  checkBoxHandler();
});

//show error message
const showError = (el, msg) => {
  const inputControl = el.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = msg;
  inputControl.classList.add("errormessage");
};

// success message
const setSuccess = (ele) => {
  const inputControl = ele.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = "";
  inputControl.classList.remove("errormessage");
};

// valid email
const isValidEmail = (email) => {
  const reTest = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return reTest.test(String(email).toLowerCase());
};

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Perform form validation here
  // If the form is valid, show the success message and reset the form
  successMessage.style.display = "block";
  form.reset();
});
//display error text message
function showErrorMessage() {
  return "Please fill in the blanks";
}
