window.onload = function(){
    //login
    btnRegistrar = document.getElementById("btnRegistrar");
    Ingreso = document.getElementById("Ingreso");
    registro = document.getElementById("Registro");
    //registro
    btnRegistro = document.getElementById("btnRegistro");
    txtCorreo = document.getElementById("correoR");
    txtNombre = document.getElementById("nombre");
    txtContrasena = document.getElementById("contrasenaR");
    txtConfirmacion = document.getElementById("confirmacion");
    txtFecha = document.getElementById("fecha");
    btningresa = document.getElementById("btnIngresar");
    //elementos de inicio 
    inicio = document.getElementById("principal");
    txtCorreoI = document.getElementById("correo");
    txtcontrasenaI =  document.getElementById("contrasena");
    nombreP = document.getElementById("nombreP");
    //enviar mensaje 

    txtpara =document.getElementById("correoM");
    txtmensaje = document.getElementById("mensajeM");
    btnMensaje = document.getElementById("enviarM");
    //fotos
    photo = document.getElementById("photo");
    camera=document.getElementById("camera");
    mapa = document.getElementById("mapa");


    if(localStorage.getItem("login") !== "1"){
        Ingreso.style.display = "block";
        document.getElementById("principal").style.display="none";
        document.getElementById("redactar").style.display="none";
        document.getElementById("camara").style.display="none";
    }
    else{
        Ingreso.style.display="none";
        document.getElementById("principal").style.display="block";
        document.getElementById("redactar").style.display="block";
        txtNombre = localStorage.getItem("nombre");
        txtCorreoI = localStorage.getItem("correo");
        document.getElementById("nombreP").innerHTML = txtNombre;
        cerrarSesion();
        
    }
    
}
document.getElementById("enviarM").addEventListener("click", function()
{
 if (txtpara.value == "")//validacion campo correo lleno
 {
     alert("Debe escribir el correo ");
     txtpara.classList.add ("errorCampo");//agregar mediante codigo una clase (estilo)
     return false;
 }
 else{
     txtpara.classList.remove("errorCampo");//quitar el codigo de una clase estilo

   
    
 }
 if (txtmensaje.value == "")// validacion campo nombre lleno
 {
     alert("el correo esta vacio ");
     txtmensaje.classList.add("errorCampo");
     return false;

 }
 else
 {
     txtmensaje.classList.remove("errorCampo");
 }

 let datos = new FormData();
    datos.append("correoM", txtpara.value);
    datos.append("mensajeM", txtmensaje.value);
    

    fetch("http://tpadse.orgfree.com/guardarMensaje.php",{
        method : 'post',
        body : datos
    })
 .then (function (response){
     if(response.ok){
         alert("mensaje enviado");
         //Ingreso.style.display = "block";
         //registro.style.display = "none";
         
     }
     else
     {
         alert("Ocurrion un problema ");
         console.log(response);
        
     }
 })
 .catch(function(err){
     alert("ocurrio un error ->" + err);
 });

});
//ingresar
document.getElementById("btnIngresar").addEventListener("click", function()
{
    if (txtCorreoI.value == "")//validacion campo correo lleno
 {
     alert("Debe escribir el correo ");
     txtCorreoI.classList.add ("errorCampo");//agregar mediante codigo una clase (estilo)
     return false;
 }
 else{
     txtCorreoI.classList.remove("errorCampo");//quitar el codigo de una clase estilo

 }
 if (txtcontrasenaI.value == "")//validacion campo correo lleno
 {
     alert("Debe escribir el correo ");
     txtcontrasenaI.classList.add ("errorCampo");//agregar mediante codigo una clase (estilo)
     return false;
 }
 else{
    txtcontrasenaI.classList.remove("errorCampo");//quitar el codigo de una clase estilo

   
    
 }
 let datosI = new FormData();
 datosI.append("correoI", txtCorreoI.value);
 datosI.append("contrasenaI",txtcontrasenaI.value);

 fetch("http://tpadse.orgfree.com/ingreso.php",{

 method : 'POST',
 body : datosI
 })
 .then(function (response){
     return response.json();
 } )

 .then (function(data){
     if(data.fallo == "contrasena"){
         alert("debe escribir la contra");
     }
     if(data.fallo == "usuario"){
        alert("debe escribir el usu");
    }
    else 
    {
        nombre = data.nombre;
        correo = data.correo;
        Ingreso.style.display = "none";
        inicio.style.display = "block";
        nombreP.innerHTML = nombre;
        localStorage.setItem("login", 1);
        localStorage.setItem("nombre",nombre);
        localStorage.setItem("correo",correo);
        leerM();

        
    }
 
 })
.catch(function(err){
    alert("ocurrio un problema!!!!!!");
    console.log(err);
    //console.log("ocurrio un error al iniciar ->" +err);
});

});
//mandar a registro
btnRegistrar.addEventListener("click", function(){

Ingreso.style.display = "none";
registro.style.display = "block";


});

btnRegistro.addEventListener("click", function()
{
 if (txtCorreo.value == "")//validacion campo correo lleno
 {
     alert("Debe escribir el correo ");
     txtCorreo.classList.add ("errorCampo");//agregar mediante codigo una clase (estilo)
     return false;
 }
 else{
     txtCorreo.classList.remove("errorCampo");//quitar el codigo de una clase estilo

   
    
 }
 if (txtNombre.value == "")// validacion campo nombre lleno
 {
     alert("debe escribir el nombre ");
     txtNombre.classList.add("errorCampo");
     return false;

 }
 else
 {
     txtNombre.classList.remove("errorCampo");
 }
 if(txtContrasena.value == "")//validacion campo contraseña lleno
 {
     alert("debes escribir la contraseña");
     txtContrasena.classList.add("errorCampo");
     return false;
 }
 else
 {
     txtContrasena.classList.remove("errorCampo");
 }
 

 if (txtConfirmacion.value == "")//vlidacion contraseña lleno  
 {
     alert("todos los campos con * son obligatorios");
     txtConfirmacion.classList.add("errorCampo");
     return false;
 }
 else
 {
     txtConfirmacion.classList.remove("errorCampo");
 }
 if (txtContrasena.value !== txtConfirmacion.value)//vlidacion contraseñas iguales 
 {
     alert("Las contraseñas no coinciden ");
     txtConfirmacion.classList.add("errorCampo");
     return false;
 }
 else
 {
     txtConfirmacion.classList.remove("errorCampo");
 }
 if (txtFecha.value == "")//vlidacion fecha lleno  
 {
     alert("todos los campos con * son obligatorios");
     txtFecha.classList.add("errorCampo");
     return false;
 }
 else
 {
     txtFecha.classList.remove("errorCampo");
 }



 let datos = new FormData();
    datos.append("correoR", txtCorreo.value);
    datos.append("nombre", txtNombre.value);
    datos.append("contrasenaR", txtContrasena.value);
    datos.append("fecha", txtFecha.value);

    fetch("http://tpadse.orgfree.com/registro.php",{
        method : 'post',
        body : datos
    })
 .then (function (response){
     if(response.ok){
         alert("Usuario registrado");
         Ingreso.style.display = "block";
         registro.style.display = "none";
     }
     else
     {
         alert("Ocurrion un problema ");
         console.log(response);
        
     }
 })
 .catch(function(err){
     alert("ocurrio un error ->" + err);
 });

});
function abrirBarra(){
    document.getElementById("barraMenu").style.width = "250px";

}
function  cerrarBarra(){

    document.getElementById("barraMenu").style.width = "0px"



}

function leerM()
{
    let datosLM = new FormData();
    datosLM.append("correoUsuario", correo);
    fetch("http://tpadse.orgfree.com/leerMensajes.php",{
        method : 'POST',
        body: datosLM
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        for ( let x = 0; x < data.length; x++){
            document.getElementById("mensajes").innerHTML =
            document.getElementById("mensajes").innerHTML + data[x].mensajes +"<br>"+
            data[x].fechahora + "<br>"
        }
    });

}//leer mensajes 

function tomarFoto(){
    
    document.getElementById("redactar").style.display ="none";
    document.getElementById("mensajes").style.display ="none";
    document.getElementById("camara").style.display ="block";
    cerrarBarra();
    
}
//tomar foto 
function mesajes(){
    
    document.getElementById("redactar").style.display ="block";
    document.getElementById("mensajes").style.display ="block";
    document.getElementById("camara").style.display ="none";
    cerrarBarra();

}//abrir mensajes 

document.getElementById("btnOpen").addEventListener("click",function(){
    camera.click();
});
camera.addEventListener("change", function(e){
    ruta =  URL.createObjectURL(e.target.files[0]);
    obtenerLugar();
    photo.src = ruta;
    if (obtenerSO() == "iOS"){
        let link = document.createElement('a');
        link.download= "test.png";
        link.href = ruta;
        link.click();
        alert("Foto capturada");
    }

   // link.href = photo.toDataURL("image/png").replace("image/png","image/octet-stream");
    
});

function obtenerSO(){
    let so = null;
    let platform = window.navigator.platform,iosplatforms = ['iPhone', 'iPad', 'iPod'];
    if (iosplatforms.includes(platform)){
        so ='iOS';
    }
    return so;
}

function cerrarSesion(){
    cerrarBarra();
    localStorage.removeItem("nombre");
    localStorage.removeItem("correo");
    localStorage.setItem("login",0);
    document.getElementById("redactar").style.display = "none";
    document.getElementById("principal").style.display = "none";
    document.getElementById("mensajes").style.display = "none";
    document.getElementById("camara").style.display = "none";
    Ingreso.style.display = "block";
    
}
/*function obtenerSO(){
    let so = null; 
    let platform = window.navigator.platform,
    iosplatforms = ['iPhone','iPad','iPod'];
    if (iosplatforms.includes(platform)){
        so ='iOS';

    } 
    return so;
}//obtener SO*/

function obtenerLugar (){
coordenadas ={lat:0, lon:0};
navigator.geolocation.getCurrentPosition(function(position) {
coordenadas = {lat: position.coords.latitude, lon: position.coords.longitude}
 fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + coordenadas.lat + "&lon=" + coordenadas.lon )
 .then(response => response.json())
 .then(data => {
     document.getElementById("lugar").value = data.address.country + " " + data.address.state;
 })
 .catch(error => {
     console.log(error);
     coordenadas= {lat: 0, lon: 0};
 });
});



}

mapa.addEventListener('click' , function(){
    window.open("http://www.openstreetmap.org/?mlat="+ coordenadas.lat +"&mlon=" + coordenadas.lon + "&zoom=20" );
})

 




