function cargarPagina() {
    $("#password").keyup(checarContrasenia)
    $("#btn_registroClave").click(tarjetaApi)
}

function checarContrasenia() {
    var $contrasenia = $("#password").val()

    if ($contrasenia.length > 4) {
        console.log($contrasenia)
        $("#btn_registroClave").removeAttr("disabled")
    }

}



function tarjetaApi() {

    var numero = localStorage.getItem("numeroT")
    var mes = localStorage.getItem("mesT")
    var anio = localStorage.getItem("anioT")
    var telefono = localStorage.getItem("phone")
    var $contrasenia = $("#password").val()


    $.post("http://localhost:3000/api/registerCard", {
        phone: telefono,
        cardNumber: numero,
        cardMonth: mes,
        cardYear: anio,
        cardPassword: $contrasenia,

    }).then(function (mensaje) {
        console.log(mensaje)
        location.href= "final.html"

    }).catch(function (error) {

    })
    
    
}
$(document).ready(cargarPagina)
