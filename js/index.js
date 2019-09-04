// Your code goes here

// Mouseover - logo
const logo = document.querySelector(".logo-heading");
logo.addEventListener("mouseover", e => {logo.style.color = "red"});

// Mousedown - navLinks 
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(item => {
    item.addEventListener("mousedown", e => {item.style.color = "blue"})
    }
);

// Double Click - Images
const img = document.querySelectorAll("img");

img.forEach(item => {
    item.addEventListener("dblclick", e => {item.style.opacity = 0.5});
});

// Resize - Logo
window.addEventListener("resize", e => {
    const bumLogo = document.querySelector(".logo-heading");
    bumLogo.textContent = "Bum Bus";
});

// Disable Context Menu - Header
const header = document.querySelector("header");
header.addEventListener("contextmenu", e => {
    e.preventDefault();
});

// Click - paragraphs
const p = document.querySelectorAll("p");
p.forEach(item => {
    item.addEventListener("click", e => {item.style.backgroundColor = "yellow"});
});


// Copy - h2
const h2 = document.querySelectorAll("h2");
h2.forEach(item => {
    item.addEventListener("copy", e => window.alert("You copied an H2."));
});


// Keydown
const body = document.querySelector("body");
body.addEventListener("keydown", e => {
    if(e.keyCode === 32){
        return window.alert("You pressed the spacebar");
    }
});

// Keyup
const r = document.querySelector("body");
r.addEventListener("keyup", e => {
    if(e.keyCode === 82){
        return window.alert("My name starts with an R");
    }
});

// preventDefault
const links = document.querySelectorAll(".nav-link");

links.forEach(item => {
    item.addEventListener("click", e => {
        console.log("You clicked a link");
        e.preventDefault();
    });
});

// Mouse Enter - h4
const h4 = document.querySelectorAll("h4");
h4.forEach(item => {
    item.addEventListener("mouseenter", e =>{
        item.style.transform = "scale(3)";
        item.style.transition = "2s";
    });
    item.addEventListener("mouseleave", event => {
        item.style.transform = "scale(1)"; 
    });
});