const imgBeneficios = document.querySelectorAll(".beneficios");
let idx = 0

setInterval(() => {
  carrossel();
},6000)
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
