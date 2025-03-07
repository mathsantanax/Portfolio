const NameDev = "Matheus Santana";
const downloadCvButton = document.getElementById('btn-download');
const container = document.querySelector('.imagens-stacks');

const images = [
    '../assets/img/stacks/c-sharp_6132221.png',
    '../assets/img/stacks/html-5_5968267.png',
    '../assets/img/stacks/css-3_5968242.png',
    '../assets/img/stacks/js_5968292.png',
    '../assets/img/stacks/mysql_5968313.png',
    '../assets/img/stacks/python_5968350.png',
    '../assets/img/stacks/sql-server_5968364.png',
];

let indexName = 0;
const speed = 100;

function WriterName()
{
    if(indexName < NameDev.length)
    {
        document.getElementById('name-dev-h1').innerHTML += NameDev.charAt(indexName);
        indexName++;
        setTimeout(WriterName, speed);
    }
    else
    {
        setTimeout(function () {
            document.getElementById('name-dev-h1').innerHTML = '';
            indexName = 0;
            WriterName();
        }, 5000);
    }
}

downloadCvButton.addEventListener('click', () => {
    const cvUrl = '../assets/CV/Curriculo Matheus Santana.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV.pdf';
    link.click();
});

function createFallingImage(url) {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('stacks-image');
    container.appendChild(img);
    img.style.animationDelay = `${Math.random() * 3}s`;
    const startX = Math.random() * 100; 
    img.style.left = `${startX}%`; 
}

images.forEach(createFallingImage);

window.onload = function() 
{
    WriterName();
}



