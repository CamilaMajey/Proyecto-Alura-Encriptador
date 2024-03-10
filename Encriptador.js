
document.addEventListener('DOMContentLoaded', function () {
    var textoEncriptado = document.getElementById('txtEncriptado');
    var botonCopiar = document.getElementById('botonCopiar');
    var input = document.getElementById('txtextoOriginal');


    if (textoEncriptado && botonCopiar && input) {
        console.log("Todos los elementos se han encontrado.");

    } else {
        console.error("Alguno de los elementos no se ha encontrado.");
        console.log("Texto Encriptado:", textoEncriptado);
        console.log("Botón Copiar:", botonCopiar);
        console.log("Input:", input);
    }
});

var textoEncriptado = document.getElementById('txtEncriptado');
var botonCopiar = document.getElementById('botonCopiar');
var input = document.getElementById('txtextoOriginal');




input.addEventListener('input', function () {

    var text = this.value;


    var cleanText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');


    cleanText = cleanText.replace(/[^a-z\s]/g, '');


    this.value = cleanText;
});


document.addEventListener('DOMContentLoaded', function () {

    var textoEncriptado = document.getElementById('txtEncriptado');
    var botonCopiar = document.getElementById('botonCopiar'); 
    var input = document.getElementById('txtextoOriginal');

    if (textoEncriptado && botonCopiar && input) {
        
    
        input.addEventListener('input', function () {
            var text = this.value;
            var cleanText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            cleanText = cleanText.replace(/[^a-z\s]/g, '');
            this.value = cleanText;
        });
    } else {
        console.error("Alguno de los elementos no se ha encontrado.");
    }
});


function Encriptar() {
    
    var textarea = document.getElementById('txtextoOriginal');
    var textoOriginal = textarea.value;
    var textoEncriptado = "";
    var letraEncriptada = "";

    for (let i = 0; i < textoOriginal.length; i++) {
        const letra = textoOriginal[i];
        letraEncriptada = "";

        switch (letra) {
            case "a":
                letraEncriptada = "ai";
                break;
            case "e":
                letraEncriptada = "enter";
                break;
            case "i":
                letraEncriptada = "imes";
                break;
            case "o":
                letraEncriptada = "ober";
                break;
            case "u":
                letraEncriptada = "ufat";
                break;
            default:
                letraEncriptada = letra;
                break;
        }

        textoEncriptado = textoEncriptado + letraEncriptada;
    }

    var txtEncriptado = document.getElementById('txtEncriptado');
    if (txtEncriptado) {
        txtEncriptado.style.display = 'block';
        document.getElementById('botonCopiar').style.display = 'block';
        txtEncriptado.value = textoEncriptado;
    } else {
        console.error("No se encontró el elemento con ID 'txtEncriptado'");
    }
}

function DesEncriptar() {
    var input = document.getElementById('txtextoOriginal');
    var textoEncriptado = input.value;
    var Matriz2 = [
        { letra: "a", valor: "ai" },
        { letra: "e", valor: "enter" },
        { letra: "i", valor: "imes" },
        { letra: "o", valor: "ober" },
        { letra: "u", valor: "ufat" }
    ];

    for (let i = 0; i < Matriz2.length; i++) {
        if (textoEncriptado.includes(Matriz2[i].valor)) {
            textoEncriptado = textoEncriptado.replaceAll(Matriz2[i].valor, Matriz2[i].letra);
        }
    }
    
    console.log("El texto Desencriptado es...", textoEncriptado);
    var txtEncriptado = document.getElementById('txtEncriptado');
    txtEncriptado.value = textoEncriptado;
}

function Copiar() {
    var txtEncriptado = document.getElementById('txtEncriptado');
    var txtextoOriginal = document.getElementById('txtextoOriginal');
    
    txtEncriptado.select();
    txtEncriptado.setSelectionRange(0, 99999); 

    try {
        navigator.clipboard.writeText(txtEncriptado.value)
            .then(function () {
                console.log('Texto copiado al portapapeles:', txtEncriptado.value);
            })
            .catch(function (err) {
                console.error('Error al intentar copiar al portapapeles:', err);
            });
    } catch (err) {
        console.error('Error al intentar copiar al portapapeles:', err);
    }

    txtextoOriginal.value = '';
}
