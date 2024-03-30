# Gerador de QR Code.

Aplicação para gerar QR Code e realizar o download do mesmo em formato PNG.

## **Tecnologias Utilizadas:**

    * HTML
    * CSS
    * Javascript


## **Fluxo do javascript:**

    * Seleção de Elementos HTML:
    image, input, generate, e download são variáveis que armazenam referências a elementos HTML com os IDs correspondentes.

    * Definição da URL da API:
    api e api2 formam a URL base da API que será usada para gerar QR codes. api2 contém parâmetros para o tamanho da imagem e os dados do QR code.

    * Função addClass:
        Uma função que adiciona a classe 'loaded' à imagem.

    * Evento de Clique no Botão "Generate":
        Quando o botão "Generate" é clicado, verifica se o campo de entrada não está vazio.
        Se não estiver vazio, a função addClass é chamada após um atraso de 300 milissegundos, e a classe 'loaded' é adicionada à imagem.
        A imagem SRC é atualizada para a URL do QR code gerado pela API, com base nos dados inseridos no campo de entrada.
        O valor do campo de entrada é limpo.

    * Evento de Clique no Botão "Download":
        Quando o botão "Download" é clicado, uma requisição assíncrona é feita para obter a imagem do QR code.
        A imagem é convertida em um blob.
        Um elemento de link temporário é criado, configurado com o blob e um nome de arquivo para realizar o download.
        O link é clicado, iniciando o processo de download.