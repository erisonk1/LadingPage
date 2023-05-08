const imgBeneficios = document.querySelectorAll(".beneficios");
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


},9000);
