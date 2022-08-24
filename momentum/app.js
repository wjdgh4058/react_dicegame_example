const h1 = document.querySelector("div.hello:first-child h1")

function handletitleclick(){
    h1.style.color ="blue";
}

function handleMouseEnter(){
    h1.innerText = "mouse is here!"
}

function handleMouseLeave(){
    h1.innerText = "mouse is gone!"
}

function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy(){
    alert("copier!");
}

function handleWinsowOffline(){
    alert("SOS no wifi");
}

function handleWinsowOnline(){
    alert("ALL GOOD!");
}


h1.addEventListener("click",handletitleclick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWinsowOffline);
window.addEventListener("online",handleWinsowOnline);