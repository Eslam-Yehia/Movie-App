export function validateAll() {
  $(".form-inner").on("input", ".form-changes", function (e) {
    checkAllValidation();
  });
  $(".form-inner").on("input", "#userName", function (e) {
    validate(validateName, e.target.value, nameElement);
  });
  $(".form-inner").on("input", "#userEmail", function (e) {
    validate(validateEmail, e.target.value, emailElement);
  });
  $(".form-inner").on("input", "#userPhone", function (e) {
    validate(validateNum, e.target.value, phoneElement);
  });
  $(".form-inner").on("input", "#userAge", function (e) {
    validate(validateAge, e.target.value, ageElement);
  });
  $(".form-inner").on("input", "#userPassword", function (e) {
    validate(validatePassword, e.target.value, passElement);
  });
  $(".form-inner").on("input", "#userRePassword", function (e) {
    validate(validatePassword, e.target.value, RePassElement);
    matchPassword();
  });
}

let nameElement = document.getElementById("userName");
let emailElement = document.getElementById("userEmail");
let phoneElement = document.getElementById("userPhone");
let ageElement = document.getElementById("userAge");
let passElement = document.getElementById("userPassword");
let RePassElement = document.getElementById("userRePassword");
const validateName = /^[a-z0-9_-]{3,15}[ ]?[a-z0-9_-]{0,15}$/gim;
const validateEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm;
const validatePassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm;
const validateNum =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/gim;
const validateAge = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;

function matchPassword() {
  if (validate(validatePassword, $("#userRePassword").val(), RePassElement)) {
    if ($("#userRePassword").val() !== $("#userPassword").val()) {
      $("#userRePassword").next().removeClass("d-none").addClass("d-block");
      return false;
    } else {
      return true;
    }
  }
}

function validate(regex, inputValue, element) {
  if (inputValue.match(regex)) {
    element.nextElementSibling.classList.add("d-none");
    element.nextElementSibling.classList.remove("d-block");
    element.classList.add("warning");
    element.classList.remove("warning");
    return true;
  } else {
    element.nextElementSibling.classList.remove("d-none");
    element.nextElementSibling.classList.add("d-block");
    element.classList.remove("warning");
    element.classList.add("warning");
  }
  if (inputValue == "") {
    element.nextElementSibling.classList.add("d-none");
    element.nextElementSibling.classList.remove("d-block");
    element.classList.add("warning");
    element.classList.remove("warning");
    return false;
  }
}

function checkAllValidation() {
  if (
    validate(validateName, $("#userName").val(), nameElement) &&
    validate(validateEmail, $("#userEmail").val(), emailElement) &&
    validate(validateName, $("#userPhone").val(), phoneElement) &&
    validate(validateAge, $("#userAge").val(), ageElement) &&
    validate(validatePassword, $("#userPassword").val(), passElement) &&
    validate(validatePassword, $("#userRePassword").val(), RePassElement) &&
    matchPassword()
  ) {
    $("#signup").removeClass("disabled");
    console.log("hi true");
  } else {
    console.log("hi false");
    $("#signup").addClass("disabled");
  }
}
