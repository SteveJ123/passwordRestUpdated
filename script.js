let password;
let repassword;


function displayPasswordMatch(){
    document.querySelector(".password-set-container").style.display = "none";
    document.querySelector(".password-changed-container").style.display = "block";
}


function displayPasswordDoNotMatch(){
    document.querySelector(".password-do-not-match").style.display = "block";
}

function passwordText(){

    if(/^[a-zA-Z]+$/.test(password)){
        alert("password contain only alphabet");
        return false;
    }
    return true;
}

function passwordLength(){
    let passwordTextLength = password.length;
    if(passwordTextLength < 8){
        alert("password lenght less than 8");
        return false;
    }        
    return true;
    
}

function checkPassword(){
    console.log("inside");
    if(!passwordLength()){
        return;
    } else if(!passwordText()){
        return;
    }else{
        if(password === repassword){
            console.log("same"); 
            displayPasswordMatch();       
        }else{
            console.log("not match");
            displayPasswordDoNotMatch();
        }
    }
    
}

function passwordValue(){   
    password = document.querySelector(".new-password-text").value;
    repassword = document.querySelector(".re-new-password-text").value;
    checkPassword();
    
}