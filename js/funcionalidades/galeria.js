const cargarGaleria = async (objGaleria) => {
  const listaGaleria = document.querySelector(`.galeria-listado`);

  limpiarHTML();

  for (const element of objGaleria) {
    const liGaleria = document.createElement('li');
    const imgGaleria = document.createElement('img');

    // Verificar si existe el archivo con extensión .jpg
    const rutaJPG = `${element.src}`;
    // bloque solicitud asincrona de la funciónfileExistesAsync y hasta que se cumpla continuara con la otra (sincrona)
    const exists = await fileExistsAsync(rutaJPG);
    if (exists) {
      imgGaleria.src = rutaJPG;
    } else {
      // Si no existe, asumir que existe con la extensión .jpeg
      imgGaleria.src = `${element.src}`;
    }

    liGaleria.classList.add('flex');

    // Establecer el atributo 'loading' en 'lazy'
    imgGaleria.setAttribute('loading', 'lazy');

    // Agregar el spinner a cada li
    const spinnerElement = spinner();
    liGaleria.appendChild(spinnerElement);

    // Escuchar el evento load de la imagen
    imgGaleria.addEventListener('load', () => {
      // Cuando la imagen carga, eliminar el spinner
      liGaleria.removeChild(spinnerElement);
    });

    liGaleria.append(imgGaleria);
    listaGaleria.append(liGaleria);
  }

  // Función para verificar si un archivo existe
  async function fileExistsAsync(url) {
    try {
      // valir obtiene la url con fetch mediante el method "HEAD" que devuelve información y no el cuerpo
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch (error) {
      return false;
    }
  }

  function limpiarHTML() {
    // iterar si se encuentra un elemento en resultado
    while (listaGaleria.firstChild) {
      if (listaGaleria.firstChild) {
        listaGaleria.removeChild(listaGaleria.firstChild);
      }
    }
  }

  // Función para crear y devolver un nuevo elemento de spinner
  function spinner() {
    const spinner = document.createElement('DIV');
    // agrego clase de estilo spinner y para centrar x y y
    spinner.classList.add('loader');
    return spinner;
  }
};

export default cargarGaleria;
