const sumar = () => {
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const resultado = numero1 + numero2;
    const aca=1000;
   
    document.getElementById('resultado').value = resultado;
    document.getElementById('numero1').value = "";
    document.getElementById('numero2').value = "";
    const tabla = document.getElementById('tabla-sumas').getElementsByTagName('tbody')[0];
    const fila = tabla.insertRow();
  
    const celdaNumero1 = fila.insertCell(0);
    celdaNumero1.innerHTML = numero1;
  
    const celdaNumero2 = fila.insertCell(1);
    celdaNumero2.innerHTML = numero2;
  
    const celdaResultado = fila.insertCell(2);
    celdaResultado.innerHTML = resultado;
    }
    //getElementById() para obtener una referencia al elemento del HTML que tiene el atributo id 
    //value:el valor del campo de texto será actualizado con el resultado de la suma


    const inputNumero1 = document.getElementById('numero1');
const inputNumero2 = document.getElementById('numero2');

inputNumero1.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sumar();
  }
});

inputNumero2.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    sumar();
  }
});