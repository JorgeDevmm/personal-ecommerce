// Referencias
const nombre = document.querySelector('#nombre');
const asunto = document.querySelector('#asunto');
const email = document.querySelector('#email');
const telefono = document.querySelector('#tel');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
const btnEnviar = document.querySelector('.btn');

// Eventos
formulario.addEventListener('submit', validacion);
// btnReset.addEventListener('click', limpiarFormulario);

// funciónes
function validacion(e) {
  e.preventDefault();

  btnEnviar.value = 'Sending...';

  const serviceID = 'default_service';
  // const serviceID = 'service_pclh7eb';
  const templateID = 'template_dnilzrm';

  if (
    nombre.value == '' ||
    email.value == '' ||
    mensaje.value == '' ||
    asunto.value == '' ||
    telefono.value == ''
  ) {
    emptyerror();
    btnEnviar.value = 'Send Email'; // Restaurar el valor del botón
  } else {
    emailjs.sendForm(serviceID, templateID, this).then(
      (response) => {
        // Este bloque se ejecuta solo si la llamada es exitosa
        sendmail(
          nombre.value,
          email.value,
          mensaje.value,
          asunto.value,
          telefono.value
        );
        success();
        formulario.reset();
        btnEnviar.value = 'Send Email'; // Restaurar el valor del botón
      },
      (err) => {
        // Este bloque se ejecuta en caso de error
        emptyerror();
        console.log('Error sending email', err);
        btnEnviar.value = 'Send Email'; // Restaurar el valor del botón
      }
    );
  }

  return false;
}

function sendmail(nombre, email, mensaje, asunto, telefono) {
  // recibe los parametros de los datos obtenidos en el form para el cuerpo del mensaje
  emailjs.send('service_pclh7eb', 'template_dnilzrm', {
    to_name: nombre,
    from_name: nombre,
    email_id: email,
    message: mensaje,
    asunto_id: asunto,
    telefono_id: telefono,
  });
}

// función de mensaje de error
function emptyerror() {
  swal({
    title: 'Oh no...',
    text: 'Falta campos por completar',
    icon: 'error',
  });
}

// función de mensaje enviado correctamente
function success() {
  swal({
    title: 'Email enviado Satisfactoriamente',
    text: 'Se respondera en el trascurso de 24 horas, Si el email no llega recuerda revisar la carpeta de correo no deseado o SPAM.',
    icon: 'success',
  });
}

// función limpiar formulario
function limpiarFormulario() {
  contactoForm.reset();
}
