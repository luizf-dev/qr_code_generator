//* Seleciona os elementos do HTML pelos IDs
const image = document.getElementById('img');
const input = document.getElementById('input');
const generate = document.getElementById('button-generate');
const download = document.getElementById('button-download');

//* Define a URL da API para gerar QR codes
const api = 'https://api.qrserver.com/v1/';
const api2 = 'create-qr-code/?size=200x200&data=';


//* Função para adicionar a classe 'loaded' à imagem
const addClass = () =>{
    
    image.classList.add('loaded');
}

//* Adiciona um evento ao botão de geração de QR code
generate.addEventListener("click", () => {

    if(input.value == ""){
        alert("Insira informações no campo!")
    }else{
        //* Adiciona a classe 'loaded' após um atraso de 300 milissegundos
        setTimeout(addClass, 300);
    }    

    //* Atualiza a imagem SRC para a URL do QR code gerado pela API
    image.src = `${api}${api2}${input.value}`;    
    //*limpa o valor do campo de entrada
    input.value = "";
}); 

//* Adiciona um  evento ao botão de download
download.addEventListener("click",  async () => {   

    //* Faz uma requisição assíncrona para obter a imagem
    const response = await fetch(image.src);

    //*A constante blob  refere-se a um objeto Blob (Binary Large Object) em JavaScript.
    //*a constante blob é criada para armazenar o conteúdo binário da imagem obtida pela requisição assíncrona (fetch). 
    const blob = await response.blob();


    //* Cria um elemento de link temporário para realizar o download
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.png";
    downloadLink.click();   

});

