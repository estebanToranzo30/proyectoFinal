var imagenes =['./imagenes/clio_plott.jpeg', './imagenes/ford.jpeg','./imagenes/clio_plott.jpeg','./imagenes/hilux.jpeg','./imagenes/peugeot.jpg'];
cont=0;
function carrousel(contenedor){
   contenedor.addEventListener('click',e=>{
    let atras= contenedor.querySelector('.atras'),
    adelante =  contenedor.querySelector('.atras'),
    img =contenedor.querySelector(img),
    tgt =e.target;

    if(tgt==atras){
        if(cont>0){
           img.src= imagenes[imagenes.length - 1]; 
           cont--;
        }else{
            img.src= imagenes[imagenes.length - 1]; 
            cont= imagenes.length -1;
        }
    
       } else if(tgt==adelante){
        if(cont<imagenes.length -1){
            img.src= imagenes[cont + 1]; 
            cont++;
         }else{
            img.src= imagenes[imagenes.length - 1];
             cont = imagenes.length - 1;
         }
     
       }
   }); 

}
document.addEventListener("DOMContentLoed",()=>{
let contenedor = document.querySelector('.contenedor');
 carrousel(contenedor);
});