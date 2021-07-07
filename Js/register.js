const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show Input Error Message
function showError(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control error';
    const small = formcontrol.querySelector('small');
    small.innerText = message;
}

//Show Input Success
function showSuccess(input,message){
    const formcontrol = input.parentElement;
    formcontrol.className = 'form-control success';
}

//Check Email is Valid
function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
}

//Check Required Fields
function checkRequired(inputArr){
    
    inputArr.forEach(function(input){
        console.log(inputArr.value);
    });
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    
    /*
    //Username Details
    if(username.value === ''){
       showError(username, 'Username is required');
    }
    else{
        showSuccess(username);
    }

    //Email Details
    if(email.value === ''){
        showError(email, 'Email is required');
     }
     else{
         showSuccess(email);
     }*/


 

});