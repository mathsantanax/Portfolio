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
        }, 1000);
    }
}

downloadCvButton.addEventListener('click', () => {
    const cvUrl = '../assets/CV/Curriculo_Matheus_Augusto_Santana_Atualizado.pdf'; // substitua com o caminho real do seu currículo
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'currículo.pdf'; // nome do arquivo que será baixado
    link.click();
});

function createFallingImage(url) {
    const img = document.createElement('img');
    img.src = url;
    img.classList.add('stacks-image');
    container.appendChild(img);
    img.style.animationDelay = `${Math.random() * 3}s`; // random delay for each image
    const startX = Math.random() * 100; // random horizontal starting position
    img.style.left = `${startX}%`; // set initial horizontal position
}

images.forEach(createFallingImage);

window.onload = function() 
{
    WriterName();
}



