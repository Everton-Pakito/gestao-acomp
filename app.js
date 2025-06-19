
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
    const currentDate = new Date().toLocaleString();
    document.getElementById(buttonId).dataset.time = currentDate;
    document.getElementById(buttonId).disabled = true;
}

// Função para enviar dados ao Google Sheets
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
        viagem: document.getElementById('viagem').value
    };

    // Enviar dados se conectado
    if (navigator.onLine) {
        sendDataToGoogleSheets(formData);
    } else {
        alert('Formulário salvo localmente. Será enviado quando a conexão for restabelecida.');
    }
});

// Função para enviar dados ao Google Sheets
function sendDataToGoogleSheets(formData) {
    google.script.run.sendFormData(formData);
}
    