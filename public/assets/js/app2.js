var api = {
    url: 'http://localhost:3000/api/registerNumber',
    urlCode: 'http://localhost:3000/api/resendCode',
    urlUser: 'http://localhost:3000/api/createUser'
};


var $btnRegistro = $("#btn_registro")
var $inputRegistro = $(".inputRegistro");
var checkPrueba = true;


$btnRegistro.click(makePost)

function makePost() {

    $.post(api.url, {
            phone: $inputRegistro.val(),
            terms: checkPrueba

        }).then(function (response) {
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

        location.href="usuario.html"
      
    }
    
}

function crearUsuario() {
    $.post(api.urlUser, {
        phone: $inputRegistro.val(),
        name: "Bren",
        email: "mrbe@hotmail.com",
        password: "AB444444",



    }).then(function (mensaje) {
        console.log(mensaje)

    }).catch(function (error) {

    })
}

function guardarLocalStorage(repsuesta,recodigo) {
    var res = repsuesta.data;
    var terms__ = res.terms;
    var phone__ = res.phone;
    var code__ = res.code;


    localStorage.setItem("phone", phone__);
    localStorage.setItem("code", code__);
    localStorage.setItem("terms", terms__)
    
     mostrarlocalStorage();
 
}

function mostrarlocalStorage(){
       console.log(localStorage.getItem("phone"))
    console.log(localStorage.getItem("code"))
    console.log(localStorage.getItem("terms"))
}

function guardarNuevoCodigo(mensaje){
   console.log(mensaje)
    localStorage.setItem("newCode",mensaje)
}