const email = document.getElementById("email");
const button = document.querySelector(".arrow");
const warning = document.querySelector(".warning");
const error = document.querySelector(".error");
button.addEventListener("click", function () {
  checkMessage();
});

// email validation
function validateEmail(inputText) {
  var mailformat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(mailformat)) {
    authenticationSuccess();
  }
  else {
     authenticationError()
     return;
  }
}

// if authentication gets a match

function authenticationSuccess() {
  const message = document.createElement("p");
  message.innerText = "We will get back to you soon";
  warning.appendChild(message);
  setTimeout(function(){
    warning.textContent = ''
    email.value = ''
  },3000)
  error.style.display = 'none'
  email.style.borderColor = 'hsl(0, 36%, 70%)'
}
// if authentication doesn't get a match
function authenticationError() {
  const message = document.createElement("p");
  message.innerText = "Please provide a valid email";
  warning.appendChild(message);
  email.style.borderColor = "hsl(0, 93%, 68%)";
  error.classList.add("show");
}

function checkMessage() {
  if (warning.textContent === "") {
    validateEmail(email.value);
  } else {
    warning.removeChild(warning.firstChild)
    validateEmail(email.value);
  }
}
