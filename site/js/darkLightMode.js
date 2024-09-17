const schemaPreferLight = window.matchMedia('(prefers-color-scheme: light)'); // pegando o schema de cor do windows dark ou light
const schemaPreferDark = window.matchMedia('(prefers-color-scheme: dark)'); // pegando o schema de cor do windows dark ou light
const switchButton = document.getElementById('toggle-switch'); // pegando o elemento toggle-switch do documento html
const navBar = document.querySelector('.nav-bar');
const navbarH1 = document.querySelector('.name-dev h1');
const menuElements = document.querySelectorAll('.menu-elements a');
const btnDownloadAndSend = document.querySelectorAll('.btn-downloadAndSend');
const Inputs = document.querySelectorAll('.inputs');

// bootstrap mudando a cor
const carouselExampleIndicators = document.querySelector('#carouselExampleIndicators');
const prevButton = document.querySelector('.carousel-control-prev');
const nextButton = document.querySelector('.carousel-control-next');

const btnCarouselIndicators = document.querySelectorAll('.carousel-indicators button');

const prevIcon = prevButton.querySelector('.carousel-control-prev-icon');
const nextIcon = nextButton.querySelector('.carousel-control-next-icon');

document.addEventListener('DOMContentLoaded', (event) => {
    const switchButton = document.getElementById('toggle-switch');

    switchButton.checked = !schemaPreferLight.matches;

    if (switchButton.checked) {
        changeModeDark();
    } else {
        changeModeLigth();
    }
    
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
    navbarH1.style.borderRight = "2px solid black"

    prevIcon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e")`;
    nextIcon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e")`;
    
    btnDownloadAndSend.forEach(element => {
        element.style.color = "black";
    });
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
    navbarH1.style.borderRight = ""
    prevIcon.style.backgroundImage = "";
    nextIcon.style.backgroundImage = "";


    Inputs.forEach(element => {
        element.style.backgroundColor = "";
    });
    btnDownloadAndSend.forEach(element => {
        element.style.color = "";
    });
    btnCarouselIndicators.forEach(element => {
        element.style.backgroundColor = '';
    });
    menuElements.forEach(element => {
        element.style.color = "";
    });
}