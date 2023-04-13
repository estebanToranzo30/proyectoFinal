
 var vec=[];
  var vec1=[];



function validarForm(){
        var vValido = true;
        if(document.getElementById('nombre').value.trim() == ''){
          alert('Debe ingresar el nombre');
          vValido = false;
        }

        if(document.getElementById('vehiculo').value.trim() == ''){
          alert('Debe ingresar el vehiculo');
          vValido = false;
        }

        return vValido;
      
      }
function soloLetras(e){
key = e.keyCode || e.which;
teclado= String.fromCharCode(key).toLowerCase();
letras=" abcdefghijklmnñopqrstuwxyz";
especiales="8-37-38-46-164";
teclado_especial=false;
   
for (var i in especiales) {
  if(key==especiales[i]) {
    teclado_especial=true;break;
  } 
}

if(letras.indexOf(teclado)==-1 && !teclado_especial){
   return false;

    }
  } 

function soloNumeros(e){
key = e.keyCode || e.which;
teclado= String.fromCharCode(key).toLowerCase();
numeros=" 0123456789";
especiales="8-37-38";
teclado_especial=false;
   
for (var i in especiales) {
  if(key==especiales[i]) {
    teclado_especial=true;
  } 
}
if(numeros.indexOf(teclado)==-1 && !teclado_especial){
   return false;

    } 

}

function maxLengthNumber(obj){
console.log(obj.value);
 if (obj.value.length > obj.maxLength){
    obj.value = obj.value.slice(0, obj.maxLength); 
     }

}

// funciones para los graficios




(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

