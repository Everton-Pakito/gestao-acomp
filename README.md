
# Gestão de Acompanhamento

## Descrição
Este projeto é um sistema de gestão de acompanhamento de operações com integração a uma planilha Google Sheets.

## Requisitos
- Conta no Google
- ID da Planilha do Google para integração
- Navegador com suporte a PWA (Progressive Web App)

## Instruções de Instalação

1. Faça o clone deste repositório:
    ```bash
    git clone https://github.com/seu_usuario/gestao-acompanhamento.git
    ```

2. Suba os arquivos para o seu servidor ou ambiente local.
3. Importe o arquivo `app-script.gs` para o Google Apps Script e associe à sua planilha.
4. Ajuste o ID da planilha no script para o seu próprio.
5. Configure a publicação para funcionar offline utilizando o arquivo `service-worker.js`.

## Como Usar
1. Acesse o site.
2. Preencha os dados no formulário.
3. Se a conectividade estiver presente, os dados serão enviados para a planilha Google.
4. Caso contrário, serão armazenados localmente até o envio.

## License
MIT
    