let userInput;

function submitDetails () {
    console.log("Submit Pressed");
    if (document.getElementById('f_userInput').checkValidity()) {
        console.log("Form Valid!");
        userInput = document.getElementById('i_input').value;
        welcomeMessage.textContent = userInput;
    } else {
        console.log("Form Invalid");
    }
}

function showAlert () {
    alert("Welcome!");
}
