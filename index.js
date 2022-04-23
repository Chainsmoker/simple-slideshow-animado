const atras = document.querySelector('#atras');
const siguiente = document.querySelector('#siguiente');
const slides = document.querySelectorAll('.slide');

let contador = 0;

siguiente.addEventListener('click', () => {
    mover(true);
});

atras.addEventListener('click', () => {
    mover(false);
});

function mover(condicion) {
    if (condicion){
        if (contador > slides.length-2){
            contador = 0;
            slides[slides.length-1].classList.remove('active');
            slides[contador].classList.add('active');
            return;
        }
        slides[contador].classList.remove('active');
        slides[contador+1].classList.add('active');
        contador = contador + 1;
    } else {
        if (contador == 0){
            slides[contador].classList.remove('active');
            slides[slides.length-1].classList.add('active');
            contador = slides.length;
            return;
        }
        if (contador == slides.length) {
            slides[contador-1].classList.remove('active');
            slides[contador-2].classList.add('active');
            contador = slides.length-2
            return;
        }
        slides[contador].classList.remove('active');
        slides[contador-1].classList.add('active');
        contador = contador - 1;
    }
}
    
