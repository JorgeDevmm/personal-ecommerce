import cargarGaleria from './funcionalidades/galeria.js';
import sidebar from './funcionalidades/sidebar.js';
import dataGaleria from './funcionalidades/dataGaleria.js';


document.addEventListener('DOMContentLoaded', () => {
  // mostrar sidebar
  sidebar();
  cargarGaleria(dataGaleria );
});
