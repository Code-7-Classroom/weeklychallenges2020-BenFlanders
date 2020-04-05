// function that checks user input and determines validity
function validation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('e-mail').value;
    const message = document.getElementById('message').value;
    const error = document.getElementById('error_message');
    let text;

    error_message.style.padding = '1rem';
    // simple if statements that set eerror-message text based on condition
    if (name.length < 3) {
        text = 'Please Enter Valid Name';
        error_message.innerHTML = text;
        return false;
    }

    if (email.indexOf("@") == -1 || email.length < 10) {
        text = 'Please Enter Valid Email Address';
        error_message.innerHTML = text;
        return false;
    }

    if (message.length < 6) {
        text = 'Please Enter A Detailed Message';
        error_message.innerHTML = text;
        return false;
    }

    alert('Form Submitted Successfully!');
    return true;
}