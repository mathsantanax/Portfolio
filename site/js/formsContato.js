    function sendEmail() {
        var params = {
        nome: document.getElementById("nomeid").value,
        telefone: document.getElementById("foneid").value,
        email: document.getElementById("email").value,
        descricao: document.getElementById("text-description").value
        };
    
        var templateParams = {
        'to_name': 'EmailJS team',
        'from_name': params.nome,
        'message': 'Nome: ' + params.nome +'\nTelefone: ' + params.telefone + '\nE-mail: ' + params.email + '\nDescrição: ' + params.descricao
        };
    
        
        var serviceId = 'service_4k6gi4l';
        var templateId = 'template_bkf7ybb';
        var userId = 'dyQzijOU_3fP_aNnn';
    
        var data = {
        'service_id': serviceId,
        'template_id': templateId,
        'user_id': userId,
        'template_params': templateParams
        };
    
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then(response => {
        if (response.ok) {
            console.log('SUCCESS!');
            alert("E-mail enviado com sucesso!");
        } else {
            console.log('FAILED...', response.status, response.statusText);
            alert("Falha ao enviar e-mail.");
        }
        })
        .catch(error => {
        console.log('FAILED...', error);
        alert("Falha ao enviar e-mail.");
        });
    }
