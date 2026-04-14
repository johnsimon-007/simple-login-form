var nameinput = document.getElementById("nameinput");
var nameError = document.getElementById("nameError");
var email = document.getElementById("email");
var emailError = document.getElementById("emailError");
var password= document.getElementById("password");
var passwordError = document.getElementById("passwordError");
var submitBtn = document.getElementById("submitBtn");

// ===== TOUCHED FLAGS =====
let nameTouched = false
let emailTouched = false
let passwordTouched = false

//Validation
nameinput.addEventListener("input",()=>{
    nameTouched = true
    validate()
})
email.addEventListener("input",() => {
    emailTouched = true
    validate()
})
password.addEventListener("input",() =>{
    passwordTouched = true
    validate()
})

function validate() {
    let isValid = true
    // name validation
       if(nameTouched && nameinput.value.trim()==="")
       {
        nameError.textContent ="Name is required";
        isValid = false
       }
       else
       {
           nameError.textContent  = ""
       }
    // email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailTouched && !emailPattern.test(email.value))
    {
      emailError.textContent  = "Invalid email format";
      isValid = false
    }
    else
    {
        emailError.textContent  = ""
    }
    // password validation
    if(passwordTouched && password.value.length < 6)
    {
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false
    }
    else
    {
        passwordError.textContent = ""    
    }
    submitBtn.disabled = !isValid
}

    const textarea = document.getElementById("message")
    const counter = document.getElementById("counter")
    const warning = document.getElementById("warning")

    const maxlength = 200

textarea.addEventListener("input",() => {
    let text = textarea.value
    let length = textarea.value.length

        if ( length > maxlength ){
         textarea.value = text.substring(0, maxlength)
         warning.textContent = "Character limit reached!"
       }
        else{
        warning.textContent = ""
       }
        // Update counter
    counter.textContent = `${textarea.value.length}/${maxlength} characters`
})

function handleSubmit(e) {
    e.preventDefault()
    alert("Form submitted successfully!")
}

const form = document.querySelector("form")
form.addEventListener("submit", handleSubmit)