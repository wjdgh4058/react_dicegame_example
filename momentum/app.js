const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden";

const USERNAME_KEY = "username";

//username 검사 -> username이 없으면 안되고, 너무 긴것또한 안된다.
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CALSSNAME);
    const username = loginInput.value;

    localStorage.setItem(USERNAME_KEY,username);

    paintGreetings();
}

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CALSSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CALSSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    paintGreetings();
}