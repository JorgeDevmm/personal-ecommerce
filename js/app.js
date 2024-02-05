//Referencia a la lista
const listaGaleria = document.querySelector('.galeria');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 27; i++) {
    const liGaleria = document.createElement('li');
    const aGaleria = document.createElement('a');
    const imgGaleria = document.createElement('img');

    // Verificar si existe el archivo con extensión .jpg
    const rutaJPG = `img/galeria${i}.jpg`;
    if (fileExists(rutaJPG)) {
      aGaleria.href = rutaJPG;
      imgGaleria.src = rutaJPG;
    } else {
      // Si no existe, asumir que existe con la extensión .jpeg
      aGaleria.href = `img/galeria${i}.jpeg`;
      imgGaleria.src = `img/galeria${i}.jpeg`;
    }

    // Establecer el atributo 'loading' en 'lazy'
    imgGaleria.setAttribute('loading', 'lazy');

    liGaleria.append(imgGaleria);
    listaGaleria.append(liGaleria);
  }
});

// Función para verificar si un archivo existe
function fileExists(url) {
  const http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status !== 404;
}