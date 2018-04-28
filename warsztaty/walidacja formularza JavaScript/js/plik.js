var submitButton = document.getElementById("wyslij");
submitButton.onclick = function (e) {
    e.preventDefault();

    validateFormFields();
}

function validateFormFields() {
    var nameTextBox = document.getElementById("name");
    var emailTextBox = document.getElementById("email");

    if (nameTextBox.value.trim().length <= 0) {
        insertErrorMessage("Nie wpisano imienia! ", nameTextBox);
        //        var errorMessaeElement = document.createElement('p');
        //        errorMessaeElement.style.color = "red";
        //        errorMessaeElement.innerHTML = "Nie wpisano imienia";
    }
    if (emailTextBox.value.trim().length <= 0) {
        insertErrorMessage("Nie wpisano emiala! ", emailTextBox);

    }
}

function insertErrorMessage(errorMessage, inputElement) {
    var errorMessageElement = document.createElement('p');
    errorMessageElement.style.color = "red";
    errorMessageElement.innerHTML = errorMessage;

    insertAfter(errorMessageElement, inputElement);
}

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


//var wszystkieZgody = document.getElementById('wszystkie-zgody');
//var allCheckBoxs = document.querySelectorAll('input[type=checkbox]');
//
//wszystkieZgody.onclick = function checkboxState(){
//    
//}
