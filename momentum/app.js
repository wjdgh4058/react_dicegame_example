const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


//username 검사 -> username이 없으면 안되고, 너무 긴것또한 안된다.
function loginBtnClick(){
    const value = loginInput.value;
    if(value === ""){
        console.log("please write your name");
    }
}

loginButton.addEventListener("click",loginBtnClick );