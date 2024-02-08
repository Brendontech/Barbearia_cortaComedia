function validarFormulario() {
    // Verificar se o checkbox de termos foi marcado
    if (!document.getElementById('termosCheckbox').checked) {
        document.getElementById('termos-mensagem').innerText = 'Você deve concordar com os Termos e Condições.';
        return false;
    } else {
        document.getElementById('termos-mensagem').innerText = '';
    }

    // Outras validações podem ser adicionadas aqui

    // Permitir que o formulário seja enviado
    return true;
}

function mostrarTermos() {
    // Exibir a janela de Termos e Condições
    document.getElementById('termos-janela').style.display = 'flex';
}

function fecharTermos() {
    // Fechar a janela de Termos e Condições
    document.getElementById('termos-janela').style.display = 'none';
}

function redirecionar() {
    // Chame a função validarFormulario para verificar o checkbox
    if (validarFormulario()) {
        // Redirecione para a página desejada
        window.location.href = "/index.html";
    }
}
























function validarFormulario() {
    // Verificar se o checkbox de termos foi marcado
    if (!document.getElementById('termosCheckbox').checked) {
        document.getElementById('termos-mensagem').innerText = 'Você deve concordar com os Termos e Condições.';
        return;
    } else {
        document.getElementById('termos-mensagem').innerText = '';
    }

    // Outras validações podem ser adicionadas aqui

    // Exibir mensagem de boas-vindas
    document.getElementById('formulario-container').style.display = 'none';
    document.getElementById('mensagem-bem-vindo').style.display = 'block';

    // Permitir que o formulário seja enviado
    // Aqui, você pode adicionar a lógica para enviar os dados do formulário, se necessário.
}

function mostrarTermos() {
    // Exibir a janela de Termos e Condições
    document.getElementById('termos-janela').style.display = 'flex';
}

function fecharTermos() {
    // Fechar a janela de Termos e Condições
    document.getElementById('termos-janela').style.display = 'none';
}

function redirecionar() {
    // Obtenha os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    // Adicione mais campos conforme necessário

    // Realize a validação
    if (nome.trim() === '' || email.trim() === '') {
        alert('Por favor, preencha todos os campos antes de prosseguir.');
        return;
    }

    // Chame a função validarFormulario para verificar o checkbox
    validarFormulario();

    // Redirecione para a página desejada
    window.location.href = "/caminho/do/seu/redirecionamento.html";
}
