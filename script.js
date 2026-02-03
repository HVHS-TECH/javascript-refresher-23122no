let userInput;

function submitDetails () {
    if (document.getElementById('f_userInput').checkValidity()) {
        userInput = document.getElementById('i_input').value;
        userInput = userInput.trim();
        welcomeMessage.textContent = userInput;
    } 
}

function showAlert () {
    alert("Welcome!");
}
