let textoCopiado = "";

function encriptarTexto() {
    let texto = document.getElementById("inputText").value;
    
    // Función de reemplazo personalizada
    let textoEncriptado = texto.replace(/[aeiou]/g, function(match) {
        switch (match) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
        }
    });    
    document.getElementById("outputText").innerText = textoEncriptado;
    textoCopiado = textoEncriptado;
    document.getElementById("copiarTexto").style.display = "inline";
    document.getElementById("ocultar").style.display = "none";
    document.getElementById("ocultar").style.display = "none";
    document.getElementById('desencriptar').removeAttribute('disabled');
    document.getElementById("inputText").value = "";
}

function desencriptarTexto() {
    let texto = document.getElementById("inputText").value;

    // Función de reemplazo personalizada para desencriptar
    let textoDesencriptado = texto
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e')
        .replace(/ai/g, 'a');
    document.getElementById("outputText").innerText = textoDesencriptado;
    document.getElementById("inputText").value = "";
}


function copiarTexto() {
    // Obtén el elemento de texto
    // let texto = document.getElementById('outputText').value;
    
    // Usa la API de Portapapeles para copiar el texto
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            // Informa al usuario que el texto fue copiado exitosamente
            alert('Texto copiado al portapapeles!');
        })
        .catch(err => {
            // Maneja cualquier error que ocurra
            console.error('Error al copiar el texto: ', err);
        });
}

