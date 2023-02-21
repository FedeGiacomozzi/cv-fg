

document.getElementById('boton').onclick = function () {
    console.log("enviando datos")
    document.getElementById("envio").innerHTML = "Será contactado en breve";
    document.getElementById("boton").style.backgroundColor = "black";
    document.getElementById("boton").style.color = "white";
    document.getElementById("boton").innerHTML = "Enviado";

}




const time = new Date().getHours();
var saludo;

if (time < 12) {
    saludo = "Buenos dias";
} else if (time < 19) {
    saludo = "Buenas tardes";
} else {
  saludo = "Buenas noches";
}
document.getElementById("saludo").innerHTML = saludo;


const enlace = document.querySelector('a[href="#info-importante2"]');
enlace.addEventListener('click', function(evento) {
  evento.preventDefault(); // previene el comportamiento predeterminado del enlace
  
  const seccionDestacada = document.getElementById('info-importante2');
  seccionDestacada.scrollIntoView({ behavior: 'smooth' });
});



var mailLink = document.getElementById("mail");
mailLink.onclick = function(event) {
  event.preventDefault(); //  esto era para que  el enlace no siga su comportamiento de abrir el correo
  enviarCorreo();
};

function enviarCorreo() {
  console.log("Ejecutando la función enviarCorreo()");
  var correo = "fede.giacomozzi@gmail.com";
  window.location.href = "mailto:" + correo;
}




