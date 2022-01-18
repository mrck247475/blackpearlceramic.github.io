
// -----------------burgar----------------

let burgar = document.querySelector('.burgar')
let menu = document.querySelector('.navigation-menu')


burgar.addEventListener('click', () => {
    if (menu.style.display === "block") {
        menu.style.display = "none"
    } else {
        menu.style.display = "block"

    }
});


function lockScroll() {
    document.body.classList.toggle('lock-scroll');
}

// --------------------------login-btn------------------------


let login = document.querySelector('.login')
let login1 = document.querySelector('.login1')
let form = document.querySelector('#login-form')

login.addEventListener('click', () => {
    if (form.style.display === "block") {
        form.style.display = "none"
    } else {
        form.style.display = "block"

    }
});
login1.addEventListener('click', () => {
    if (form.style.display === "block") {
        form.style.display = "none"
    } else {
        form.style.display = "block"

    }
});


// ---------login-to-register-------------   




function register() {
    document.getElementById('login-maincontainer').style.left = "-100%";
    document.getElementById('register-container').style.left = "0px";


};
function loginbtn() {
    document.getElementById('login-maincontainer').style.left = "0%";
    document.getElementById('register-container').style.left = "100%";


};

// --------------------------Drop-down menu------------------------


let dropitem = document.querySelector('.drop-item')
let dropdown = document.querySelector('.drop-down')

dropitem.addEventListener('click', () => {
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"
    } else {
        dropdown.style.display = "block"

    }
});
