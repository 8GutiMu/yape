var api = {
    url: 'http://localhost:3000/api/registerNumber',
    urlCode: 'http://localhost:3000/api/resendCode',
    urlUser: 'http://localhost:3000/api/createUser'
};



//El navegador lee Tarjeta y me manda warnigs asi que le cambie de tarjeta a PERRITO :D 

var $btnRegistro = $("#btn_registro")
var $inputRegistro = $(".inputRegistro");
var $nombre = $("#registroNombre")
var $email = $("#registroEmail")
var $contrasena = $("#registroContrasena")
var checkPrueba = true;
var nuemroDeTarjetaCasilla = $("#perrito");
var mesTarjeta = $("#mesPerrito")
var anioTarjeta = $("#anoPerrito")

$nombre.keyup(validarDatosUsuario)
$email.keyup(validarDatosUsuario)
$contrasena.keyup(validarDatosUsuario)
nuemroDeTarjetaCasilla.keyup(validarPerrito)
mesTarjeta.keyup(validarPerrito)
anioTarjeta.keyup(validarPerrito)

var contador = 0;

$btnRegistro.click(makePost)


function makePost() {

    $.post(api.url, {
            phone: $inputRegistro.val(),
            terms: checkPrueba

        }).then(function (response) {
            console.log(response)
            console.log("CODIGO DE VALIDACION", response.data.code)
            validacion(response)

        })
        .catch(function (error) {
            console.log(error)
        });

}

function validacion(response) {

    if (response.success == true) {

        guardarLocalStorage(response)


        setTimeout(function (response) {

            $.post(api.urlCode, {
                phone: $inputRegistro.val(),
                terms: checkPrueba

            }).then(function (mensaje) {
                console.log(mensaje)
                guardarNuevoCodigo(mensaje.data)

            }).catch(function (error) {
                console.log(error)
            })
        }, 21000)

        location.href = "usuario.html"

    }

}

function crearUsuario(nombre,email,contrasena) {
    
    var number = localStorage.getItem("phone")
    console.log(number,nombre,email,contrasena)
    
    $.post(api.urlUser, {
        phone: number,
        name: nombre,
        email: email,
        password: contrasena,



    }).then(function (mensaje) {
        console.log(mensaje)

    }).catch(function (error) {

    })
}

function guardarLocalStorage(repsuesta, recodigo) {
    var res = repsuesta.data;
    var terms__ = res.terms;
    var phone__ = res.phone;
    var code__ = res.code;


    localStorage.setItem("phone", phone__);
    localStorage.setItem("code", code__);
    localStorage.setItem("terms", terms__)

    mostrarlocalStorage();

}

function mostrarlocalStorage() {
    console.log(localStorage.getItem("phone"))
    console.log(localStorage.getItem("code"))
    console.log(localStorage.getItem("terms"))
}

function guardarNuevoCodigo(mensaje) {
    console.log(mensaje)
    localStorage.setItem("newCode", mensaje)
}

function validarDatosUsuario() {
    var nombre = $nombre.val();
    var email = $email.val()
    var contrasena = $contrasena.val()
    if (nombre != "" && email != "" && contrasena != ""){
       $("#btn_registroDATOS").removeAttr("disabled")
        $("#btn_registroDATOS").click(function(){
            crearUsuario(nombre,email,contrasena)
        })
        setTimeout(function(){location.href= "bien.html"},10)
    }else{
        $("#btn_registroDATOS").attr("disabled")
    }
    
}


//El navegador lee Tarjeta y me manda warnigs asi que le cambie de tarjeta a PERRITO :D 

function validarPerrito(){
    var numeroDePerrito = $("#perrito").val()
    var mesDePerrito = $("#mesPerrito").val()
    var anoDePerrito = $("#anoPerrito").val()
    var btnRegistroTarje = $("#btn_registroTarjeta")
    contador +=1;
    console.log(contador)
    console.log(numeroDePerrito)
    console.log(mesDePerrito)
    console.log(anoDePerrito)
    if(numeroDePerrito.length == 16 &&  mesDePerrito >0 && mesDePerrito <13  && (anoDePerrito >17)){
        console.log("HOLA")
        btnRegistroTarje.removeAttr("disabled")
        
    }
}