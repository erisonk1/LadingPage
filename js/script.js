const imgBeneficios = document.querySelectorAll(".sobre");
const container = document.querySelectorAll(".container-base")
let idx = 0

setInterval(() => {
   function carrossel() {
    idx++;
    if(idx > imgBeneficios.length - 1){
      idx = 0;
    }
    imgBeneficios.forEach((section) => {
      section.classList.remove('ativo');
    })

    imgBeneficios[idx].classList.add('ativo');
 
  }
  carrossel();


},8000);

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
    
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

initScrollSuave()

const imgDash = document.querySelectorAll('.img-dash')

let idx2 = 0;
setInterval(() => {
  function carrossel2() {
   idx2++;
   if(idx2 > imgDash.length - 1){
     idx2 = 0;
   }
   imgDash.forEach((section) => {
     section.classList.remove('ativo');
   })

   imgDash[idx2].classList.add('ativo');

 }
 carrossel2();


}, 4000);

const btn = document.querySelector('button');
const nav = document.querySelector('ul');


function menu(){
  btn.classList.toggle('ativo')
  nav.classList.toggle('ativo')

}

btn.addEventListener('click', menu);