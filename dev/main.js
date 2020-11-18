const inputElem = document.getElementById('card-number');

function getUrl (code) {
    return `https://barcode.tec-it.com/barcode.ashx?data=${code}&code=Code128&dpi=96&dataseparator=`;
}

// function renderCodeImage (inputCode) {
//     if(!document.getElementById('card-code'))
//     {
//         const cardCode = new Image();
//         cardCode.id = 'card-code';
//         cardCode.alt = 'card-code';
//         cardCode.src = getUrl(inputCode);
    
//         // document.querySelector('div.image-wrapper').insertAdjacentElement("afterbegin", cardCode);
//     }
//     else 
//     {
//         document.getElementById('card-code').src = getUrl(inputCode);
//     }
// }

function generateImage (code) {
    const cardCode1 = new Image();
    cardCode1.src = getUrl(code);
    crossOrigin = 'Anonymous';
    return cardCode1;
}

function renderImage (image, whereToRender, canvasElem) {
    setTimeout( () => {
        whereToRender.drawImage(image, 0, 0);
        console.log('base64 = ', canvasElem.toDataURL());
    }, 500);
    
}

document.getElementById('generate-code').addEventListener('click', async (event) => {
    if(inputElem.value.trim() !== '')
    {
        const userCode = inputElem.value.trim();

        const canvas = document.getElementById('code');
        const ctx = canvas.getContext('2d');

        const image = generateImage(userCode);

        renderImage(image, ctx, canvas);
    }
    else 
    {
        console.log('Заполните поле');
    }
})

//  9000177943194