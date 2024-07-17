console.log('JS collegato');

//inizializzo array con percorso alle immagini

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];


//aggiungo elementi all'html

const carousel = document.querySelector('.carousel');
let i 
/* carosel.innerHTML += `
    <div class="item"> 
        <img src="${percorso immagine}">
    </div>    
` 
*/


for (i = 0; i < images.length; i++) {
    carousel.innerHTML += `
    <div class="item inactive"> 
        <img src="${images[i]}">
    </div> 
    `
    let j = i;
    if (j >= 1) {
        let active = document.querySelector('.item');
        active.classList.remove("inactive");
       } 
};

/*  */


/* const myBtn = document.querySelector(#btn);
myBtn.addEventListener(
    'click'
    function {

    }
) */