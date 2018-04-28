//document.getElementById("formularz").addEventListener('click', function (e) {
//            e.preventDefault();
//});
var submitButton = document.querySelector("input[type=submit]");
submitButton.onclick = function (e) {
        e.preventDefault();
    var input = e.currentTarget.parentElement.getElementsByTagName("input");
    console.log(input[0].value);
    console.log(input[1].value);
}
