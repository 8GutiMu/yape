function localStorage2() {

    //console.log(localStorage.getItem("phone"))
    console.log("Codigo de Validacion", localStorage.getItem("code"))
    //console.log(localStorage.getItem("terms"))
    var codigoGenerado = localStorage.getItem("code");
    localStorage.setItem("codigoGenerado", codigoGenerado)

    setTimeout(function () {
        console.log("NUEVO Codigo de Validacion", localStorage.getItem("newCode"))
        codigoGenerado = localStorage.getItem("newCode");
        localStorage.setItem("codigoGenerado", codigoGenerado)
    }, 22000)

    var numeroResgitro = localStorage.getItem("phone")

    $("#numeroIngresado").html(numeroResgitro)
    $("#usuarioForm").submit(validarCodigo)
}

function validarCodigo(e) {
    e.preventDefault();
    var codigoIngresado = $("#codigoValidacion").val();

    var codigoGenerado = localStorage.getItem("codigoGenerado")
   
    if (codigoGenerado == codigoIngresado) {
        location.href="usuarioDatos.html"
    } else {
        alert("Código Incorrecto")
    }

}

$(document).ready(localStorage2)
