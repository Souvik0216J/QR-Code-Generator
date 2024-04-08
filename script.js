let imgBox = document.querySelector("#qrImg-box");
let qrimg = document.querySelector("#qr-Img");
let qrtext = document.querySelector("#qr-Text");

// Qr Code generate Function
const Generate = () => {
    if (qrtext.value.length > 0) {
        // qrimg.src = "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + qrtext.value;
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
    }
    else {
        qrtext.style.borderColor = 'red';
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove("error");
            qrtext.style.borderColor = '';
        }, 1000);
    }
}

// Qr Code Downlaod Function
const Download = () => {
    if (qrtext.value.length > 0) {
        let imgUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrtext.value);

        fetch(imgUrl)
            .then(response => response.blob())
            .then(blob => {
                // Create a blob URL for the image blob
                const url = URL.createObjectURL(blob);

                // Create a temporary anchor element
                const a = document.createElement('a');
                a.href = url;
                a.download = 'qr-code.png';

                // Programmatically trigger the click event on the anchor element
                a.click();

                // Remove the anchor element
                a.remove();
            })
            .catch(error => {
                console.error('Error downloading QR code:', error);
            });
    } else {
        qrtext.classList.add("error");
        qrtext.style.borderColor = 'red';
        setTimeout(() => {
            qrtext.classList.remove("error");
            qrtext.style.borderColor = '';
        }, 1000);
    }
}

// Generate Qr Clear Function
const Clear = () => {
    if (qrtext.value.length > 0) {
        qrimg.src = '';
        qrtext.value = '';
    }
    else {
        qrtext.style.borderColor = 'red';
        qrtext.classList.add("error");
        setTimeout(() => {
            qrtext.classList.remove("error");
            qrtext.style.borderColor = '';
        }, 1000);
    }
} 
