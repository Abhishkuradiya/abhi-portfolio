

var handleMenuIcon = document.getElementById("handleMenuIcon");
var handleMenuBar = document.getElementById("handleMenuBar");
var handleNavbar = document.getElementById("handleNavbar");
var handleLogo = document.getElementById("handleLogo");
var navLink = document.querySelectorAll(".nav-link");


handleMenuIcon.onclick = ()=>{
    handleMenuBar.classList.toggle("activeMenu"); 
    handleMenuIcon.classList.toggle("fa-xmark");  
}

window.onscroll = ()=>{
    if(window.scrollY > 100){
        handleNavbar.classList.add("bg-light");
        handleMenuIcon.style.color = "#000";
        handleLogo.style.color = "#695aa6";
        navLink.forEach((link)=>{
            link.style.color = "#000";
        })
    }else{
        handleNavbar.classList.remove("bg-light");
        handleMenuIcon.style.color = "#fff";
        handleLogo.style.color = "#fff";
        navLink.forEach((link)=>{
            link.style.color = "#fff";
        })
    }
}