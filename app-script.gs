function sendFormData(formData) {
    const sheet = SpreadsheetApp.openById('1-xWaoRNvlO7W0dU1apcqBATCio4wzFrrE0VhE5b3fpg').getSheetByName('Formularios');
    
    // Garantir que o cabeçalho existe (caso contrário, adiciona)
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    if (headers.length === 0) {
        // Caso o cabeçalho esteja vazio, configura o cabeçalho correto
        const header = [
            "Operação", "Motorista", "Frota", "Configuração", "Marca/Modelo", 
            "Odômetro Inicial", "Despacho", "Balança Saída", "Chegada Batedor", 
            "Saída Batedor", "Balança Entrada", "Média Atingida", "Tipo Carregamento", "Viagem"
        ];
        sheet.appendRow(header);
    }
    
    // Preencher os dados abaixo do cabeçalho
    const row = [
        formData.operacao,
        formData.motorista,
        formData.frota,
        formData.configuracao,
        formData.marcaModelo,
        formData.odometroInicial,
        formData.despacho,
        formData.balancaSaida,
        formData.chegadaBatedor,
        formData.saidaBatedor,
        formData.balancaEntrada,
        formData.mediaAtingida,
        formData.tipoCarregamento,
        formData.viagem
    ];

    // Adicionar uma nova linha com os dados
    sheet.appendRow(row);
}