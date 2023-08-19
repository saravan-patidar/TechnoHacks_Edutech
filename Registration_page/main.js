const registrationForm = document.querySelector("#registration-form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const error = document.querySelector("#output-box");
const popup = document.querySelector("#popup");
const popclose = document.querySelector("#close");

registrationForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    error.textContent="";

    if(username.value.trim() === ''){
        error.textContent="Username is required";
        return;
    }
    else if(email.value.trim() === ''){
        error.textContent="Email is required";
        return;
    }
    else if(number.value.trim() === ''){
        error.textContent="Number is required";
        return;
    }
    else if(password.value.trim() === ''){
        error.textContent="Password is required";
        return;
    }
    else if(cpassword.value.trim() === ''){
        error.textContent="Confirm Password is required";
        return;
    }

    if(username.value.length<6){
        error.textContent="Username minimum 6 character";
        return;
    }
    if(number.value.length<10){
        error.textContent="Number should be contain 10 digits";
        return;
    }
    if(password.value.length<6){
        error.textContent="Password minimum 6 character";
        return;
    }

    if(password.value !== cpassword.value){
        error.textContent="Oops! password is not match";
        return;
    }

    if(password.value === cpassword.value){
       popup.classList.add("open-slide");
       return;
    }
});

popclose.addEventListener('click',(e)=>{
    popup.remove("open-slide");
    username.value="";
    email.value="";
    number.value="";
    password.value="";
    cpassword.value="";
})