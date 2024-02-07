import cargarGaleria from './funcionalidades/galeria.js';

document.addEventListener('DOMContentLoaded', () => {
  cargarGaleria('galeria-mesas', 'mesas', 6);
  cargarGaleria('galeria-carteles', 'carteles', 6);
  cargarGaleria('galeria-disenos', 'disenos', 6);
  cargarGaleria('galeria-decoracion', 'decoracion', 6);
  cargarGaleria('galeria-murales', 'murales', 3);
});
