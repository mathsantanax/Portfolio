const schemaPrefer = window.matchMedia('(prefers-color-scheme: light)'); // pegando o schema de cor do windows dark ou light
const switchButton = document.getElementById('toggle-switch'); // pegando o elemento toggle-switch do documento html
const navBar = document.querySelector('.nav-bar');
const menuElements = document.querySelectorAll('.menu-elements a');
const btnDownload = document.querySelector('#btn-download');

// bootstrap mudando a cor
const carouselExampleIndicators = document.querySelector('#carouselExampleIndicators');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

const btnCarouselIndicators = document.querySelectorAll('.carousel-indicators button');

const prevIcon = prevButton.querySelector('.carousel-control-prev-icon');
const nextIcon = nextButton.querySelector('.carousel-control-next-icon');

console.log(prevIcon);


document.addEventListener('DOMContentLoaded', (event) => {
    const switchButton = document.getElementById('toggle-switch');

    switchButton.checked = !schemaPrefer.matches;

    switchButton.addEventListener('change', () => {
        if (switchButton.checked) {
            changeModeDark();
        } else {
            changeModeLigth();
        }
    });
});



function changeModeLigth()
{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    navBar.style.backgroundColor = "white";
    btnDownload.style.color = "black";

    // prevIcon.style.backgroundColor = 'black';
    // nextIcon.style.backgroundColor = 'black';

    prevIcon.style.backgroundImage = 
    btnCarouselIndicators.forEach(element => {
        element.style.backgroundColor = 'black';
    });
    
    menuElements.forEach(element => {
        element.style.color = "black";
    });
}

function changeModeDark()
{
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
    navBar.style.backgroundColor = "";
    btnDownload.style.color = ""; 


    btnCarouselIndicators.forEach(element => {
        element.style.backgroundColor = '';
    });
    menuElements.forEach(element => {
        element.style.color = "";
    });
}