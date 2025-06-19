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

    // Enviar dados ao Google Sheets via Google Apps Script
    if (navigator.onLine) {
        google.script.run.sendFormData(formData, 'Formularios');
    } else {
        alert('Formulário salvo localmente. Será enviado quando a conexão for restabelecida.');
    }
});