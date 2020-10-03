const form = document.querySelector('#form');


function error(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.textContent = message;
}

function success(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}


function inputs() {
    const usernameValue = form.username.value.trim();
    const emailValue = form.email.value.trim();
    const passwordValue = form.password.value.trim();
    const password2Value = form.password2.value.trim();

    if (usernameValue === '' || usernameValue.length < 4) {
        error(username, 'Name cannot be blank or less than 4 chars long');
    } else {
        success(username);
    }

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }

    if (emailValue === '') {
        error(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        error(email, 'Not a valid email');
    } else {
        success(email);
    }

    if (passwordValue === '') {
        error(password, 'Password cannot be blank');
    } else {
        success(password);
    }

    if (password2Value === '') {
        error(password2, 'Password cannot be blank');
    } else if (passwordValue !== password2Value) {
        error(password2, 'Passwords do not match');
    } else {
        success(password2);
    }
}
form.addEventListener('submit', e => {
    e.preventDefault();

    inputs();
});