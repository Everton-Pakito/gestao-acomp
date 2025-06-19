// Função para carregar motoristas do arquivo JSON e preencher o datalist
function loadMotoristas() {
    fetch('motoristas.json')
        .then(response => response.json())
        .then(motoristas => {
            const motoristaInput = document.getElementById('motoristas');
            motoristas.forEach(motorista => {
                let option = document.createElement('option');
                option.value = motorista;
                motoristaInput.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar motoristas:', error));
}

// Carregar motoristas quando a página for carregada
window.onload = loadMotoristas;

// Função para registrar data e hora
function setDate(buttonId) {
    const currentDate = new Date().toLocaleString();  // Captura a data e hora atual
    document.getElementById(buttonId).dataset.time = currentDate;  // Armazena a data no botão
    document.getElementById(buttonId).innerText = `Registrado: ${currentDate}`;  // Atualiza o texto do botão
    document.getElementById(buttonId).disabled = true;  // Desabilita o botão após o clique
}

// Adicionando o evento para os botões de data
document.getElementById('balancaSaida').addEventListener('click', function() { setDate('balancaSaida'); });
document.getElementById('chegadaBatedor').addEventListener('click', function() { setDate('chegadaBatedor'); });
document.getElementById('saidaBatedor').addEventListener('click', function() { setDate('saidaBatedor'); });
document.getElementById('balancaEntrada').addEventListener('click', function() { setDate('balancaEntrada'); });

// Coletando e enviando os dados do formulário para o Google Sheets
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Coletando os dados do formulário
    const formData = {
        operacao: document.getElementById('operacao').value,
        motorista: document.getElementById('motorista').value,
        frota: document.getElementById('frota').value,
        configuracao: document.getElementById('configuracao').value,
        marcaModelo: document.getElementById('marcaModelo').value,
        odometroInicial: document.getElementById('odometroInicial').value,
        despacho: document.getElementById('despacho').value,
        balancaSaida: document.getElementById('balancaSaida').dataset.time,
        chegadaBatedor: document.getElementById('chegadaBatedor').dataset.time,
        saidaBatedor: document.getElementById('saidaBatedor').dataset.time,
        balancaEntrada: document.getElementById('balancaEntrada').dataset.time,
        mediaAtingida: document.getElementById('mediaAtingida').value,
        tipoCarregamento: document.getElementById('tipoCarregamento').value,
        viagem: document.getElementById('viagem').value,
        odometroFinal: document.getElementById('odometroFinal').value // Novo campo Odômetro Final
    };

    // Verificando se o formData não está vazio
    if (!formData.operacao || !formData.motorista || !formData.frota) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Verifique o objeto formData no console para garantir que todos os campos estão presentes
    console.log(formData);

    // Enviar dados ao Google Sheets via Google Apps Script
    if (navigator.onLine) {
        google.script.run.sendFormData(formData, 'Formularios');
    } else {
        alert('Formulário salvo localmente. Será enviado quando a conexão for restabelecida.');
    }
});
