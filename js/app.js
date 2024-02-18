import cargarGaleria from './funcionalidades/galeria.js';
import sidebar from './funcionalidades/sidebar.js';
import dataGaleria from './funcionalidades/dataGaleria.js';


document.addEventListener('DOMContentLoaded', () => {
  // mostrar sidebar
  sidebar();
  cargarGaleria(dataGaleria );
  // cargarGaleria('galeria-carteles', 'carteles', 6);
  // cargarGaleria('galeria-disenos', 'disenos', 6);
  // cargarGaleria('galeria-decoracion', 'decoracion', 6);
  // cargarGaleria('galeria-murales', 'murales', 3);
});
