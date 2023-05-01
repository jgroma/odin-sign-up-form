const initialPassword = document.getElementById("password");
const confirmedPassword = document.getElementById("confirm_password");
const submitButton = document.getElementById("submit")
const passwordContainer = document.getElementById("password-container")

//to create the password error message
const passwordWarning = document.createElement("SPAN")
passwordWarning.innerHTML = "* Passwords do not match"
passwordWarning.style.color = "red";
passwordWarning.style.fontSize = "12px";
passwordWarning.style.display = "block";

//password validation function that disables the submit button if the passwords don't matchs
function confirmPassword() {
    if (initialPassword.value!=="" && confirmedPassword.value!=="" && initialPassword.value === confirmedPassword.value) {
        initialPassword.style.border = "1px solid green";
        confirmedPassword.style.border = "1px solid green";

        passwordContainer.removeChild(passwordWarning);
        
        submitButton.disabled = false;

    } else if (initialPassword.value =="" || confirmedPassword.value =="") {
        initialPassword.className = "error";
        confirmedPassword.className = "error";

        passwordContainer.appendChild(passwordWarning);


        submitButton.disabled = true;
    } else {
        initialPassword.className = "error";
        confirmedPassword.className = "error"

        passwordContainer.appendChild(passwordWarning);

        submitButton.disabled = true;
     
    }
};

confirmPassword() //makes the password error show up on loading the page

//makes confirmPassword function fire up on every key input
initialPassword.onchange = confirmPassword;
confirmedPassword.onkeyup = confirmPassword;
