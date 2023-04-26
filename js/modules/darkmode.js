const body = document.body;
const navBar = document.querySelectorAll('.navs');
const logo = document.querySelectorAll('nav h1');
const temaBtn = document.querySelector('[data-button="tema"]')


export default function DarkMode() {

    body.classList.toggle('dark-body');
    navBar.classList.toggle('dark-nav');
    logo.classList.toggle('dark-nav');
    
}

temaBtn.addEventListener('click', DarkMode)

console.log(navBar)