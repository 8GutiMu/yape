var api = {
    url: 'http://localhost:3000/api/registerNumber'
};


var $btnRegistro = $("#btn_registro")
var $inputRegistro = $(".inputRegistro");

console.log($inputRegistro)



$btnRegistro.click(makePost)

function makePost() {
   
    console.log("ENTRE A POST")
    $.post(api.url, {
            phone: $inputRegistro.val(),
            terms: "true"

        }).then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        });
}
