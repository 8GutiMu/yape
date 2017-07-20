var api = {
    url: 'http://localhost:3000/api/registerNumber',
    urlCode: 'http://localhost:3000/api/resendCode',
    urlUser: 'http://localhost:3000/api/createUser'
};


var $btnRegistro = $("#btn_registro")
var $inputRegistro = $(".inputRegistro");
var checkPrueba = true;


var phone1;
var code1;




$btnRegistro.click(makePost)

function makePost() {
    
    $.post(api.url, {
            phone: $inputRegistro.val(),
            terms: checkPrueba

        }).then(function (response) {
            console.log("CODIGO DE VALIDACION", response.data.code)
            validacion(response)
crearUsuario();

        })
        .catch(function (error) {
            console.log(error)
        });

}

function validacion(response) {

    if (response.success == true) {


        var res = response.data;
        var terms = res.terms;
        var phone_ = res.phone;
        var code = res.code;


        localStorage.setItem("phone", phone_);
        localStorage.setItem("code", code);
        console.log(response.data.code)

        setTimeout(function (response) {

            $.post(api.urlCode, {
                phone: phone_,
                terms: checkPrueba

            }).then(function (mensaje) {
                console.log(mensaje)
                console.log("NUEVO CODIGO DE VALIDACION", mensaje.data),
                    localStorage.setItem("code", mensaje.data)
                console.log(localStorage.getItem("code"))
            }).catch(function (error) {
                console.log(error)
            })
        }, 21000)


        phone1 = localStorage.getItem("phone")
        code1 = localStorage.getItem("code")

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

