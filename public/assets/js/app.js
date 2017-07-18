 $('.carousel.carousel-slider').carousel({
     fullWidth: true
 });


 var $inputRegistro = $(".inputRegistro");
 console.log("BREN", $inputRegistro)
 var $form = $("#registro-form")

 $form.submit(sacarNumero)
 $inputRegistro.keyup(contador)

var contador = 0;


 function contador() {
 var contador = $inputRegistro.val().length
     if(contador = 10){
       console.log("BREN") 
     }
     
 }

 function sacarNumero(e) {
     e.preventDefault();
     console.log($inputRegistro.val())
 }
