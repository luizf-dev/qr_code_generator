//* Arquivo javascript */ 
const image = document.getElementById('img');
const input = document.getElementById('input');
const generate = document.getElementById('button-generate');
const download = document.getElementById('button-download');


const api = 'https://api.qrserver.com/v1/';
const api2 = 'create-qr-code/?size=200x200&data=';


generate.addEventListener("click", () => {
    image.src = `${api}${api2}${input.value}`;
    input.value = "";
}); 

download.addEventListener("click", () => {

    //* cria um elemento canvas temporario
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    //* define o tamanho do canvas igual ao tamanho da imagem
    canvas.width = image.width;
    canvas.height = image.height;

    //*desenha a imagem no canvas 
    context.drawImage(image, 0, 0, image.width, image.height);

    //* obtem a url da imagem em formato PNG
    const imageDataURL = canvas.toDataURL('image/png');

    //*cria um link de download
    const link = document.createElement('a');
    link.href = imageDataURL;
    link.download = 'qr_code.png';

    //*adiciona o link ao documento e simula um clique
    document.body.appendChild(link);
    link.click();

    //* remove o link do documento
    document.body.removeChild(link);
});


//* Neste exemplo, um novo botão "Download" foi adicionado 
//*ao seu HTML, e um evento de clique foi associado a esse botão.
//*Quando o botão é clicado, o código JavaScript cria um
//*elemento <canvas>, desenha a imagem do QR Code no canvas e,
//*em seguida, utiliza toDataURL() para obter uma URL da
//*imagem em formato PNG. Um link de download é criado e
//*é simulado um clique no link, efetivamente iniciando
//*o download da imagem. O link é temporário e é removido
//*do documento após o clique simulado.
