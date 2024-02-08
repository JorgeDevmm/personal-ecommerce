import cargarGaleria from './funcionalidades/galeria.js';
import sidebar from './funcionalidades/sidebar.js';

document.addEventListener('DOMContentLoaded', () => {
  // mostrar sidebar
  sidebar();
  cargarGaleria('galeria-mesas', 'mesas', 6);
  cargarGaleria('galeria-carteles', 'carteles', 6);
  cargarGaleria('galeria-disenos', 'disenos', 6);
  cargarGaleria('galeria-decoracion', 'decoracion', 6);
  cargarGaleria('galeria-murales', 'murales', 3);
});
