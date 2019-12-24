
console.log("javascript funciona");




//Función para cargar el texto con efecto typewriting

//Texto Elaine Fernández que aparece letra por letra
var text = "Elaine Fernández. Personal Shopper.";

// Variable for current position
var count = 0;

var Write = function write(){

    // Find the target element to write to
    var elem = document.getElementById("elaine");

    // Append next character into the text content
    elem.textContent = elem.textContent + text.charAt(count);

    // Update the current position
    count++;

    // if we're not yet in the end of the string
    // we have a little (100ms) pause before we write the next character
    if (count < text.length)
        window.setTimeout(write, 100);
};

Write(); // And of course we have to call the function
