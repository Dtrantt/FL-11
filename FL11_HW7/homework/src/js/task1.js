const minLenghtEmail = 6;
const minLenghtNewPass = 5;

let data = {

    'user@gmail.com': 'UserPass',
    'admin@gmail.com': 'AdminPass'
}

let email = prompt('Enter your email', '');

if (!email) {
    alert('Canceled.');
} else if (email.length < minLenghtEmail) {
    alert('I don\'t know any emails having name length less than 6 symbols.');
} else {
    
    if (data[email]) {
        let password = prompt('Enter your password', '');

        if (data[email] === password) {
            let changePass = confirm('Do you want to change your password?');

            if (changePass) {
                password = prompt('Enter your old password.', '');

                if (data[email] === password) {
                    let newPassword = prompt('Enter new password.', '');

                    if (newPassword.length < minLenghtNewPass) {
                        alert('It’s too short password. Sorry.');

                    } else {
                        let newPasswordCheck = prompt('Enter new password again.', '');

                        if (newPasswordCheck === newPassword) {
                            alert('You have successfully changed your password.');
                        } else {
                            alert('You wrote the wrong password.');
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            } else {
                alert('You have failed the change.');
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert('I don\'t know you');
    }
}