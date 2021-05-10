
// window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    // var form = document.getElementById("contactForm");
    // // var button = document.getElementById("my-form-button");
    // var status = document.getElementById("success_message");

    // Success and Error functions for after the form is submitted

//     function success() {
//         form.reset();
//         status.classList.add("success");
//         status.innerHTML = "Thanks!";
//     }

//     function error() {
//         status.classList.add("error");
//         status.innerHTML = "Oops! There was a problem.";
//     }

//     // handle the form submission event

//     form.addEventListener("submit", function (ev) {
//         ev.preventDefault();
//         var data = new FormData(form);
//         ajax(form.method, form.action, data, success, error);
//     });
// });


function validatefirstName() {
    var firstname = document.getElementById('firstname').value;
    if (firstname.length == 0) {
        alert("Name can't be blank");
        return false;

    }
    if (!firstname.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name");//Validation Message
        return false;
    }
    return true;
}

function validatelastName() {
    var lastname = document.getElementById('lastname').value;
    if (lastname.length == 0) {
        alert("Name can't be blank");
        return false;

    }
    if (!lastname.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
        alert("Please enter your correct name");//Validation Message
        return false;
    }
    return true;
}
function validateEmail() {

    var email = document.getElementById('email').value;
    if (email.length == 0) {
        alert("Email can't be blank");//Validation Message
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        alert("Please enter a correct email address");//Validation Message
        return false;

    }

    return true;

}
function validateForm() {
    if (!validatefirstName() || !validatelastName() || !validateEmail()) {

        alert("Form not submitted");//Validation Message
        return false;
    }
    else {
        submitted = true;
        return true;
    }
}