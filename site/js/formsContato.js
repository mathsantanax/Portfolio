function sendEmail() {
    var params = {
        nome: document.getElementById("nomeid").value,
        telefone: document.getElementById("foneid").value,
        email: document.getElementById("email").value,
        descricao: document.getElementById("text-description").value
    };

    emailjs.send("your-service-id", "template_bkf7ybb", params)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("E-mail enviado com sucesso!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Falha ao enviar e-mail.");
        });
}


function sendWhatsApp() {
    var telefone = '55' + document.getElementById('foneid').value;
    var mensagem = "Você recebeu uma nova mensagem de: " + document.getElementById("nomeid").value;
    mensagem += " - Telefone: " + document.getElementById("foneid").value;
    mensagem += " - E-mail: " + document.getElementById("email").value;
    mensagem += " - Descrição: " + document.getElementById("text-description").value;

    var whatsapp_url = "https://wa.me/" + telefone + "?text=" + encodeURIComponent(mensagem);
    window.open(whatsapp_url, '_blank');
}
