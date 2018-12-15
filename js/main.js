$(document).ready(function() {
  smoothie();
  wow = new WOW({
    animateClass: 'animated',
    offset: 100,
    callback: function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
  });
  wow.init();

  $('#formulario').submit(function(event) {
    event.preventDefault();
    let host = 'smtp.gmail.com';
    let adressee = 'pablorincones95@gmail.com';
    let password = 'v--24418291';
    let formName = 'Formulario de mantenimiento de lavadoras';
    let names = document.getElementById('names').value;
    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let body = ` 
      <div>
        <p>Nombre: ${names} </p>
        <p>Asunto: ${subject} </p>
        <p>Mensaje: ${message} </p>
      </div>
    `;

    Email.send({
      Host: host,
      Username: adressee,
      Password: password,
      To: adressee,
      From: email,
      Subject: formName,
      Body: body
    }).then(message => {

      if (message === 'OK') {
        document.getElementById('msg').innerHTML = '<div class ="alert alert-success">Formulario enviado gracias</div>';
      } else {
        document.getElementById('msg').innerHTML = '<div class ="alert alert-danger">A ocurrido un error intente mas tarde</div>';
      }
      document.getElementById('formulario').reset();
    });
  });
});