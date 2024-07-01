const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerHTML = message;
    div.className = "invalid-feedback";
}

function success(input) {
    input.className = "form-control is-valid";
}

const checkEmail = (input) => {
    re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).toLowerCase())) {
        success(input);
    } else {
        error(input, "Email is not valid");
    }
};

function checkRequired(inputs) {
    inputs.forEach((input) => {
        if (input.value.trim() === "") {
            error(input, `${input.id} is required`);
        } else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        error(input, `${input.id} must be less than ${max} characters`);
    } else {
        success(input);
    }
}

function checkPasswordMatch(input) {
    if (input.value !== repassword.value) {
        error(input, "Passwords do not match");
    } else {
        success(input);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([username, email, password, repassword]);
    checkEmail(email);
    checkLength(username, 3, 15);
    checkLength(password, 6, 15);
    checkPasswordMatch(password);
});
