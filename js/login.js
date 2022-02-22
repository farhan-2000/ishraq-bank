document.getElementById('submit-button').addEventListener('click', function () {
    const emailId = document.getElementById('email-id');
    const emailText = emailId.value;
    emailId.value = '';

    const passwordId = document.getElementById('password');
    const passwordText = passwordId.value;
    passwordId.value = '';

    if (emailText == 'farhanishraq@gmail.com' && passwordText == '12345') {
        window.location.href = 'banking.html';
    }
    else {
        alert('invalid email or password');
    }
})