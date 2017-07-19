var api = {
    url: 'http://localhost:3000/api/registerNumber'
};


var $btnRegistro = $("#btn_registro")
var $inputRegistro = $(".inputRegistro");

console.log($inputRegistro)



$btnRegistro.click(makePost)

function makePost() {

    
    $.post(api.url, {
            phone: $inputRegistro.val(),
            terms: "true"

        }).then(function (response) {
            validacion(response)
        actualizarDatos(response)
        })
        .catch(function (error) {
            console.log(error)
        });

}


function validacion(response) {

    if (response.success == true) {
        location.href = "usuario.html";
    }

}

function actualizarDatos(response) {
    alert("hola")
    var res = response.data;
    console.log(res.phone)
}
