//Referencia a la lista
const listaGaleria = document.querySelector('.galeria');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 1; i <= 9; i++) {
    const liGaleria = document.createElement('li');
    const aGaleria = document.createElement('a');
    const imgGaleria = document.createElement('img');

    aGaleria.href = `img/galeria${i}.jpg`;
    imgGaleria.src = `img/galeria${i}.jpg`;
    liGaleria.append(imgGaleria);

    listaGaleria.append(liGaleria);
  }
});
