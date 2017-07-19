var api = {
    url: 'http://localhost:3000/api/registerNumber',
    urlCode: 'http://localhost:3000/api/resendCode'
};


var $btnRegistro = $("#btn_registro")
var $inputRegistro = $(".inputRegistro");
var checkPrueba = true;
console.log($inputRegistro)

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
        

        })
        .catch(function (error) {
            console.log(error)
        });

}


function validacion(response) {

    if (response.success == true) {


        var res = response.data;
        var phone_ = res.phone;
        var code = res.code;


        localStorage.setItem("phone", phone_);
        localStorage.setItem("code", code);
    

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

        phone1= localStorage.getItem("phone")
        code1= localStorage.getItem("code")
        
       location.href = "usuario.html";


    }

}
