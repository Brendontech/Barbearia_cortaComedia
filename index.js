document.addEventListener('DOMContentLoaded', function () {
    var textoCortes = document.getElementById('textoCortes');
    var cursorBar = document.createElement('span');
    cursorBar.classList.add('cursor-bar');
    textoCortes.appendChild(cursorBar);

    function reiniciarAnimacao() {
        textoCortes.innerHTML = ''; // Limpa o conteúdo atual
        escreverTexto("Na nossa seção 'Corte', transformamos visões em realidade, elevando seu estilo a cada tesourada. Descubra o poder de um corte impecável na Corta Comédia");
    }

    function escreverTexto(texto) {
        var index = 0;
        var intervalo = setInterval(function () {
            textoCortes.innerHTML += texto.charAt(index);
            index++;
            if (index > texto.length) {
                clearInterval(intervalo);
            }
        }, 50);
    }

    escreverTexto("Transformamos visões em realidade, elevando seu estilo a cada tesourada. Descubra o poder de um corte impecável na Corta Comédia");

    document.querySelectorAll('.escolhas li a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            reiniciarAnimacao();
        });
    });
});






function agendarCorte() {
    var corteSelecionado = document.getElementById('corte').value;
    var dataSelecionada = document.getElementById('data').value;
    var horarioSelecionado = document.getElementById('horario').value;

    // Verificar se a data foi escolhida
    if (!dataSelecionada) {
        mostrarAlerta("Por favor, escolha uma data.", true);
        return;
    }

    // Validação do horário (9:00 - 20:00)
    var horarioValido = validarHorario(horarioSelecionado);

    if (horarioValido) {
        // Exibir mensagem de confirmação centralizada
        mostrarAlerta("Agendamento confirmado!");
    } else {
        // Exibir mensagem de erro
        mostrarAlerta("Por favor, escolha um horário entre 9:00 e 20:00.", true);
    }
}

function validarHorario(horario) {
    var hora = parseInt(horario.split(":")[0]);
    return hora >= 9 && hora <= 20;
}

function mostrarAlerta(mensagem, erro = false) {
    var alertElement = document.getElementById('customAlert');
    var alertMessageElement = document.getElementById('alertMessage');

    // Definir a mensagem e a classe CSS com base no tipo de alerta
    alertMessageElement.textContent = mensagem;
    alertElement.className = erro ? 'alert-container error' : 'alert-container success';

    // Exibir o alerta
    alertElement.style.display = 'block';

    // Ocultar o alerta após 3 segundos (3000 milissegundos)
    setTimeout(function () {
        alertElement.style.opacity = '0';
    }, 3000);

    // Restaurar o estilo original e ocultar o alerta após a transição
    setTimeout(function () {
        alertElement.style.opacity = '1';
        alertElement.style.display = 'none';
    }, 3500);
}







document.addEventListener('DOMContentLoaded', function () {
    var mapa = L.map('mapa').setView([ -15.9196, -47.9503], 15); // Coordenadas do Centro de São Paulo e nível de zoom
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(mapa);

    var marcador = L.marker([ -15.9196, -47.9503]).addTo(mapa)
        .bindPopup('Barbearia Corta comédia')
        .openPopup();
});

// Carrega o mapa quando a página estiver totalmente carregada

