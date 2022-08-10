
const usernameEl = document.getElementById('userName').value
const emailEl = document.getElementById('email')
const passwordEl = document.getElementById('password').value
const confirmPasswordEl = document.getElementById('cPassword')
const loginForm = document.querySelector('#login');
const signUpForm = document.querySelector('#signUp');

function validate(){
if (usernameEl == 'admin' && passwordEl == 'admin01'){
    alert('login successfully');
    return false;
}else{
    alert('login failed')
}
}
document.querySelector("#signupLink").addEventListener('click', () => {
    e.preventDefault();
    loginForm.classList.add('form-hidden');
    signUpForm.classList.remove('form-hidden');

});
document.querySelector("#loginLink").addEventListener('click', () => {

    loginForm.classList.remove('form-hidden');
    signUpForm.classList.add('form-hidden');
});
loginForm.addEventListener('submit', e => {
    e.preventDefault();
    let isUsernameValid = checkUsername(),
    isEmailValid = checkEmail(),
    isPasswordValid = checkPassword(),
    isConfirmPasswordValid = checkConfirmPassword();

let isFormValid = isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid;

// submit to the server if the form is valid
if (isFormValid) {

}
});

const checkUsername = () =>{
    let valid = false;
    const min =3, max = 25;
    const username = usernameEl.value.trim();
    if (!isRequired(username)){
        showError(usernameEl, 'Username cannot be blank');
    }else if (isBetween(username)){
        showError(usernameEl, `Username must be between ${min} and ${max} characters.`)
    }else{
        showSuccess(usernameEl);
        valid = true
    }
    return valid;
};
const checkEmail = () =>{
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)){
        showError(emailEl, 'email cannot be blank');
    }else if (isEmailValid(email)){
        showError(emailEl, `email is not valid`)
    }else{
        showSuccess(emailEl);
        valid = true
    }
    return valid;
};
const checkPassword = () =>{
    let valid = false;
    const password = passwordEl.value.trim();
    if (!isRequired(password)){
        showError(passwordEl, 'Password cannot be blank');
    }else if (isPasswordSecure(password)){
        showError(passwordEl, `password is not strong`)
    }else{
        showSuccess(passwordEl);
        valid = true
    }
    return valid;
};
const checkConfirmPassword = () =>{
    let valid = false;
    const confirmPassword = confirmPasswordEl.value.trim();
    const password = passwordEl.value.trim();
    if (!isRequired(confirmPassword)){
        showError(confirmPasswordEl, 'Password cannot be blank');
    }else if (password !== confirmPassword){
        showError(confirmPasswordEl, `password does not match`)
    }else{
        showSuccess(confirmPasswordEl);
        valid = true
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;


const showError = (input, message) => {
    
    const formField = input.parentElement;
    
    formField.classList.remove('success');
    formField.classList.add('error');

    
    const error = formField.querySelector('errmsg');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

signUpForm.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'confirm-password':
            checkConfirmPassword();
            break;
    }
}));








