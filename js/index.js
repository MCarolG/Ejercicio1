function multiplicar() {
    let n1 = parseInt(document.getElementById('txtN1').value)
    let n2 = parseInt(document.getElementById('txtN2').value)
    
    if (isNaN(n1)) {
        alert('Numero 1 en blanco')
    }   else if(isNaN(n2)) {
        alert('Numero 2 en blanco')
    } else {
        let multiplicacion = n1 * n2;
        document.getElementById('txtResultado').value = multiplicacion
    }

}

function limpiar() {
    document.getElementById('txtN1').value = ''
    document.getElementById('txtN2').value = ''
    document.getElementById('txtResultado').value = ''
}