function GetSelectedValue() {
    var valor = document.getElementById("tiposeguro").value;
    var precio = 0;
    if(valor == "BA") precio=500;
    else if(valor == "IN") precio=1000;
    else if(valor =="PR") precio=1500;
    else if(valor =="NN") precio=0;
    document.getElementById("precioseguro").innerHTML = "Precio: $"+precio;                                
}

function EnviarConsulta(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var email = document.getElementById("email").value;
    var dni = document.getElementById("dni").value;
    var tipoSeguro = document.getElementById("tiposeguro").value;
    alert("Enviando...\n" + nombre + " / " + apellido + " / " + dni + " / " + telefono + " / " + email + " / " + tipoSeguro);
}