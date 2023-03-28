// CLIENT SIDE VALIDATION
const form = document.getElementById("form");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const fullName = document.getElementById("fullName");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const postal = document.getElementById("postal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(".error");

  errorDisplay.innerText = message;
  formGroup.classList.add("error");
  formGroup.classList.remove("success");
};

const setSuccess = (element) => {
  const formGroup = element.parentElement;
  const errorDisplay = formGroup.querySelector(".error");

  errorDisplay.innerText = "";
  formGroup.classList.add("success");
  formGroup.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(string(email).toLowerCase());
};

const validateInputs = () => {
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const fullNameValue = fullName.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const countryValue = country.value.trim();
  const postalValue = postal.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (phoneValue === "") {
    setError(phone, "Phone number is required");
  } else {
    setSuccess(phone);
  }

  if (fullNameValue === "") {
    setError(fullName, "Full name is required");
  } else {
    setSuccess(fullName);
  }

  if (addressValue === "") {
    setError(address, "Address is required");
  } else {
    setSuccess(address);
  }

  if (cityValue === "") {
    setError(city, "City is required");
  } else {
    setSuccess(city);
  }

  if (countryValue === "") {
    setError(country, "Country is required");
  } else {
    setSuccess(country);
  }

  if (postalValue === "") {
    setError(postal, "Postal number is required");
  } else {
    setSuccess(postal);
  }
};

// COUNTER
const minus = document.getElementById("min");
const add = document.getElementById("plus");
const value = document.getElementById("count");
const minuss = document.getElementById("mins");
const adds = document.getElementById("pluss");
const values = document.getElementById("counts");
let integer = 0;
let integers = 0;

add.addEventListener("click", function () {
  integer += 1;
  value.innerHTML = integer;
});

minus.addEventListener("click", function () {
  integer -= 1;
  value.innerHTML = integer;
});

adds.addEventListener("click", function () {
  integers += 1;
  values.innerHTML = integers;
});

minuss.addEventListener("click", function () {
  integers -= 1;
  values.innerHTML = integers;
});
