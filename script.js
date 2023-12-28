//* Arquivo javascript */ 
const image = document.getElementById('img');
const input = document.getElementById('input');
const generate = document.getElementById('button-generate');
const download = document.getElementById('button-download');


const api = 'https://api.qrserver.com/v1/';
const api2 = 'create-qr-code/?size=200x200&data=';

const addClass = () =>{
    image.classList.add('qr');
}

generate.addEventListener("click", () => {

    if(input.value == ""){
        alert("Insira informações no campo!")
    }else{
        setTimeout(addClass, 300);
    }    

    image.src = `${api}${api2}${input.value}`;    
    input.value = "";
}); 

download.addEventListener("click",  async () => {   

    const response = await fetch(image.src);
    const blob = await response.blob();
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "qrcode.png";
    downloadLink.click();   

});

