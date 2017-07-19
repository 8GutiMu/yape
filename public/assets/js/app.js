 $('.carousel.carousel-slider').carousel({
     fullWidth: true
 });



     var $inputRegistro = $(".inputRegistro");
     var $btnRegistro = $("#btn_registro");
     var $form = $("#registro-form");
     var $check = $("#checkBoxRegistro");


    
     $inputRegistro.keyup(contador)

 

 function contador() {
     var contador = $inputRegistro.val().length
     if (contador == 10) {
         $btnRegistro.removeAttr("disabled")
         $check.attr("checked", "true")
     } else {
         $btnRegistro.attr("disabled", "true")
         $check.removeAttr("checked")
     }
     
   
     
     if($check.check){
         console.log("bren")
     }

 }



