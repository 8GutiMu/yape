 $('.carousel.carousel-slider').carousel({
     fullWidth: true
 });



     var $inputRegistro = $(".inputRegistro");
     var $btnRegistro = $("#btn_registro");
     var $form = $("#registro-form");
     var $check = $("#checkBoxRegistro");

     console.log($check)

     $form.submit(sacarNumero)
     $inputRegistro.keyup(contador)

 

 function contador() {
     var contador = $inputRegistro.val().length
     if (contador == 10) {
         console.log("BREN")
         $btnRegistro.removeAttr("disabled")
         $check.attr("checked", "true")
     } else {
         $btnRegistro.attr("disabled", "true")
         $check.removeAttr("checked")
     }

 }

 function sacarNumero(e) {
     e.preventDefault();
     console.log($inputRegistro.val())
 }


