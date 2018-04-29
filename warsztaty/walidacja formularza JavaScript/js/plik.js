//var submitButton = document.getElementById("wyslij");
//submitButton.onclick = function (e) {
//    e.preventDefault();
//
//    validateFormFields();
//}
//
//function validateFormFields() {
//    var nameTextBox = document.getElementById("name");
//    var emailTextBox = document.getElementById("email");
//    var marketingAccept = document.getElementById("zgoda-marketingowa-1")
//
//    if (nameTextBox.value.trim().length <= 0) {
//        insertErrorMessage("Nie wpisano imienia! ", nameTextBox);
//        //        var errorMessaeElement = document.createElement('p');
//        //        errorMessaeElement.style.color = "red";
//        //        errorMessaeElement.innerHTML = "Nie wpisano imienia";
//    }
//    if (emailTextBox.value.trim().length <= 0) {
//        insertErrorMessage("Nie wpisano emiala! ", emailTextBox);
//
//    }
//    if (!marketingAccept.checked) {
//        insertErrorMessage("Nie wpisano emiala! ", marketingAccept);
//    }
//
//    function insertErrorMessage(errorMessage, inputElement) {
//        var errorMessageElement = document.createElement('p');
//        errorMessageElement.style.color = "red";
//        errorMessageElement.innerHTML = errorMessage;
//
//        insertAfter(errorMessageElement, inputElement);
//    }
//
//    function insertAfter(newNode, referenceNode) {
//        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
//    }
//
//
//    //var wszystkieZgody = document.getElementById('wszystkie-zgody');
//    //var allCheckBoxs = document.querySelectorAll('input[type=checkbox]');
//    //
//    //wszystkieZgody.onclick = function checkboxState(){
//    //    
//    //}


var lastCheckbox = document.getElementById("wszystkie-zgody");
var allCheckboxes = document.querySelectorAll('input[type=checkbox]');

lastCheckbox.onchange = function (e) {
    checkboxState(lastCheckbox.checked);
}

var submitButton = document.getElementById("wyslij");

function checkboxState(lastCheckboxState) {

    if (lastCheckboxState === true) {
        allCheckboxes[0].checked = true;
        allCheckboxes[0].disabled = true;
        allCheckboxes[1].checked = true;
        allCheckboxes[1].disabled = true;
    } else {
        allCheckboxes[0].checked = false;
        allCheckboxes[0].disabled = false;
        allCheckboxes[1].checked = false;
        allCheckboxes[1].disabled = false;
    }
}

submitButton.addEventListener("click", validateForm)

function validateForm(e) {
    var textInputs = document.querySelectorAll('input[type=text]');

    for (var i = 0; i < textInputs.length; i++) {
        if (textInputs[i].value.trim().length = 0) {


            e.preventDefault();
            var warning = document.createElement('p');
            warning.id = "aletr-" + i;
            warning.innerText = "To pole jest wymagane";
            textInputs[i].nextSibling = warning;
        } else {
            var nextElement = textInputs[i].nextElementSibling;
            if (nextElement.id === "alert-" + i) {
                nextElement.parentElement.removeChild(nextElement);
            }
        }
    }
}
if (allCheckboxes[0].checked === false) {
    e.preventDefault();
    var warning = document.createElement('p');
    warning.id = "alert-checkbox";
    warning.innerText = "To pole jest wymagane";

    allCheckboxes[0].nextSibling = warning;
} else {
    var nextElement = textInputs[i].nextElementSibling;
    if (nextElement.id === "alert-checkbox") {
        nextElement.parentElement.removeChild(nextElement);
    }
}
