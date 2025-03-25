function limpiar(){
    document.getElementById('numero1').value='';
    document.getElementById('numero2').value='';
    document.getElementById('resultado').value='';
}
function calcular(){
    let strnumero1=document.getElementById('numero1').value;
    let strnumero2=document.getElementById('numero2').value;


    document.getElementById('resultado').value=(parseInt(strnumero1)+parseInt(strnumero2));

}
    function restar(){
        let strnumero1=document.getElementById('numero1').value;
        let strnumero2=document.getElementById('numero2').value;
        document.getElementById('resultado').value=(parseInt(strnumero1)-parseInt(strnumero2))
}
    function multiplicar(){
    let strnumero1=document.getElementById('numero1').value;
    let strnumero2=document.getElementById('numero2').value;
    document.getElementById('resultado').value=(parseInt(strnumero1)*parseInt(strnumero1))   
    }
    function dividir(){
        let strnumero1=document.getElementById('numero1').value;
        let strnumero2=document.getElementById('numero2').value;
        document.getElementById('resultado').value=(parseInt(strnumero1)/parseInt(strnumero2));

    }




