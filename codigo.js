function validarEdad(){
    edad = document.getElementById('edad').value;
    if (edad>=18) {
        alert("usted es mayor de edad");
    }else{
        alert("usted es menor de edad");
    }
}