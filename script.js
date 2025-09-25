function irParaPaginaSobre() {
    window.location.href = 'contato.html';
}

function VoltaparaoComeço() {
    window.location.href = 'index.html';
}





// === AVISOOOOOOOOOOO DO CONTATOOOOOOOOOOOOOO === //
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');


    form.addEventListener('submit', function(event) {
        

        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;


        const confirmationMessage = `
            Obrigado por enviar sua mensagem, ${name}!
            Responderei em breve no e-mail: ${email}.
            Sua Mensagem: "${message}" foi recebida com sucesso.`;
        alert(confirmationMessage);

        form.reset();
    });

});