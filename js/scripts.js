console.log('JS collegato');

//inizializzo array con percorso alle immagini
const carousel = document.querySelector('.carousel');
const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];


//aggiungo elementi all'html



/* carosel.innerHTML += `
    <div class="item"> 
        <img src="${percorso immagine}">
    </div>    
` 
*/


for (i = 0; i < images.length; i++) {
    if (i == 0) {
        carousel.innerHTML += `<img src="${images[i]}" class="active">`;
    }
    else {
        carousel.innerHTML += `<img src="${images[i]}">`;
    }    

    
};



let currentImg = 1;
const myBtnUp = document.getElementById('arrow-up');
myBtnUp.addEventListener(
    'click', function () {
        if (currentImg < images.length) {
            document.querySelector('.carousel > img:nth-child(' + currentImg + ')').classList.remove("active");
            currentImg++;
            document.querySelector('.carousel > img:nth-child(' + currentImg + ')').classList.add("active");
        }
        
    }
);
const myBtnDown = document.getElementById('arrow-down');
myBtnDown.addEventListener(
    'click', function () {
        if (currentImg < images.length) {
            document.querySelector('.my-container > .carousel > img:nth-child(' + currentImg + ')').classList.remove("active");
            currentImg--;
            document.querySelector('.my-container > .carousel > img:nth-child(' + currentImg + ')').classList.add("active");
        }
        
    }
);