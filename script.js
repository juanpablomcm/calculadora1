function sumar(){
    //DATOS
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = document.getElementById('result').value;
    let r;

    //PROCESO Y RESULTADO
    r = result.value = parseFloat(num1) + parseFloat(num2);
    //RESULTADO
    result.value = r;

}