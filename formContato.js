const button = document.querySelector('button[type=submit]');

const addLoading = () => {
    button.innerHTML = '<img src="src/loader.png" class="loading" alt="">';
}

const clearForm = () => {
    document.querySelector('input[name=name]').value = '';
    document.querySelector('input[name=email]').value = '';
    document.querySelector('input[name=phone]').value = '';
    document.querySelector('textarea[name=message]').value = '';
}

const removeLoading = () => {
    // adiciona um delay de 1 segundo para que o usuário veja o check
    button.innerHTML = '<img src="src/check.png" class="check" alt="">';
    setTimeout(() => {
        button.innerHTML = 'Enviar Mensagem';
    }, 1000);
    clearForm();
}

// Função para limpar o form quando o usuario enviar a mensagem

const handleSubmit = (event) => {
    event.preventDefault();
    addLoading();

    const name = document.querySelector('input[name=name]').value;
    const email = document.querySelector('input[name=email]').value;
    const phone = document.querySelector('input[name=phone]').value;
    const message = document.querySelector('textarea[name=message]').value;
    

    fetch('https://api.sheetmonkey.io/form/sEMKMJnpJoZCqBH7VfTLZV', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message }),
    }).then(() => removeLoading());
}

document.querySelector('form').addEventListener('submit', handleSubmit);
