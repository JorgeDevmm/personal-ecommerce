const cargarGaleria = (objGaleria) => {
  const listaGaleria = document.querySelector(`.galeria-listado`);

  objGaleria.forEach((element) => {
    const liGaleria = document.createElement('li');
    const imgGaleria = document.createElement('img');

    // Verificar si existe el archivo con extensión .jpg
    const rutaJPG = `${element.src}`;
    if (fileExists( rutaJPG)) {
      imgGaleria.src = rutaJPG;
    } else {
      // Si no existe, asumir que existe con la extensión .jpeg

      imgGaleria.src = `${element.src}`;
    }

    // Establecer el atributo 'loading' en 'lazy'
    imgGaleria.setAttribute('loading', 'lazy');

    liGaleria.append(imgGaleria);
    listaGaleria.append(liGaleria);
  });

  // Función para verificar si un archivo existe
  function fileExists(url) {
    const http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status !== 404;
  }
};

export default cargarGaleria;
