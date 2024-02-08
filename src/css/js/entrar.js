function validarFormulario() {
    // Verificar se o checkbox de termos foi marcado
    if (!document.getElementById('termosCheckbox').checked) {
        document.getElementById('termos-mensagem').innerText = 'Você deve concordar com os Termos e Condições.';
        return false;
    } else {
        document.getElementById('termos-mensagem').innerText = '';
    }

    // Outras validações podem ser adicionadas aqui

    // Exibir mensagem de boas-vindas
    document.getElementById('formulario-container').style.display = 'none';
    document.getElementById('mensagem-bem-vindo').style.display = 'block';

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
    // Obtenha os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    
    // Realize a validação
    if (nome.trim() === '' || email.trim() === '' || telefone.trim() === '') {
        alert('Por favor, preencha todos os campos antes de prosseguir.');
        return;
    }
    
    // Redirecione para a página desejada
    window.location.href = "/index.html";
}













