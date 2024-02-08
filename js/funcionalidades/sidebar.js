function sidebar() {
  // Referencias
  const sidebar = document.querySelector('#sidebar');
  const botonNavegacion = document.querySelector('#header__menu-burger');
  const botonCerrar = document.querySelector('#close-btn');
  const hmtl = document.querySelector('html');
  const enlaces = document.querySelectorAll('.sidebar__links a');

  // eventos
  eventListener();

  function eventListener() {
    botonNavegacion.addEventListener('click', mostrarSidebar);
    botonCerrar.addEventListener('click', cerrarSidebar);

    // recorrer los enlace y en cada enlace ejecutar el método
    enlaces.forEach((enlace) => {
      enlace.addEventListener('click', abrirEnlaces);
    });
  }

  // Funciones
  function mostrarSidebar(e) {
    // validamos si existe la clase show-sidebar, si no existe la creamos
    if (sidebar.classList.contains('show-sidebar')) {
      sidebar.classList.remove('show-sidebar');
      hmtl.style.overflow = 'scroll'; // Restablecer el desbordamiento a su valor predeterminado
    } else {
      sidebar.classList.add('show-sidebar');
      hmtl.style.overflow = 'hidden'; // O el valor que desees
    }
  }

  function cerrarSidebar() {
    // validamos si existe la clase show-sidebar la eliminamos como clase
    if (sidebar.classList.contains('show-sidebar')) {
      sidebar.classList.remove('show-sidebar');
      hmtl.style.overflow = 'scroll'; // Restablecer el desbordamiento a su valor predeterminado
    }
  }

  function abrirEnlaces() {
    // Cerrar el sidebar al ejecutar algun enlace
    cerrarSidebar();
  }
}

export default sidebar;
