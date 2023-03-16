const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");
const inputAge = document.getElementById("age");
const inputAgreement = document.getElementById("check");
const buttonSubmit = document.getElementById("submit");

const divName = document.getElementById("errName");
const divEmail = document.getElementById("errEmail");
const divPassword = document.getElementById("errPassword");
const divAge = document.getElementById("errAge");
const divAgree = document.getElementById("errAgree");

const divErr = document.querySelectorAll(".error");

buttonSubmit.addEventListener("click", (event) => {
    event.preventDefault();


    var errName = "";
    var errEmail = "";
    var errPassword = "";
    var errAge = "";
    var errAgree = "";

    const nameValue = inputName.value;
    const emailValue = inputEmail.value;
    const passValue = inputPassword.value;
    const ageValue = inputAge.value;
    const agreeValue = inputAgreement.checked;
    

    var result = 1;

    divName.style.display = "none";
    divEmail.style.display = "none";
    divPassword.style.display = "none";
    divAge.style.display = "none";
    divAgree.style.display = "none";
    inputName.style.border = "1px solid var(--outline)"
    inputEmail.style.border = "1px solid var(--outline)"
    inputPassword.style.border = "1px solid var(--outline)"
    inputAge.style.border = "1px solid var(--outline)"

    if(nameValue == ""){
        result = 0;
        errName += "Name is Required"
        divName.innerHTML = errName;
        divName.style.display = "block";
        inputName.style.border = "1px solid rgb(255, 86, 86)";
    }
    

    if(!emailValue.includes("@gmail.com")){
        result = 0;
        errEmail += "Please Input a valid email";
        divEmail.innerHTML = errEmail;
        divEmail.style.display = "block";
        inputEmail.style.border = "1px solid rgb(255, 86, 86)";
    }

    if(passValue.length < 8){
        result = 0;
        errPassword += "Minimum 8 characters";
        divPassword.innerHTML = errPassword;
        divPassword.style.display = "block";
        inputPassword.style.border = "1px solid rgb(255, 86, 86)";
    }

    if(ageValue < 18){
        result = 0;
        errAge += "Minimum age is 18 years old";
        divAge.innerHTML = errAge;
        divAge.style.display = "block";
        inputAge.style.border = "1px solid rgb(255, 86, 86)";
    }

    if(!agreeValue){
        result = 0;
        errAgree += "Please Agree the terms";
        divAgree.innerHTML = errAgree;
        divAgree.style.display = "block";
    }

    if(result === 1){
        window.location.href = "index.html";
    }
})
