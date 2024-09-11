const NameDev = "Matheus Santana";

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
}

window.onload = function() 
{
    WriterName();
}

const downloadCvButton = document.getElementById('btn-download');

downloadCvButton.addEventListener('click', () => {
    const cvUrl = '../assets/CV/Curriculo_Matheus_Augusto_Santana_Atualizado.pdf'; // substitua com o caminho real do seu currículo
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'currículo.pdf'; // nome do arquivo que será baixado
    link.click();
});