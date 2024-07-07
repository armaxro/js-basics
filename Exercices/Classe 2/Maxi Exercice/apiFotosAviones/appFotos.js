// URL de la API de JetPhotos para obtener fotos de aviones
const apiUrl = 'https://api.jetphotos.com/v2/photos';

// Agrega tu clave de API aquí
const apiKey = 'YOUR_API_KEY';

// Función para obtener fotos de aviones de la API
async function fetchPlanePhotos() {
  try {
    const response = await fetch(`${apiUrl}?apiKey=${apiKey}&limit=10`);
    const data = await response.json();
    displayPlanePhotos(data.photos);
  } catch (error) {
    console.error('Error al obtener las fotos de aviones:', error);
    document.getElementById('photos').innerText = 'Error al cargar las fotos de aviones.';
  }
}

// Función para mostrar las fotos de los aviones en la página
function displayPlanePhotos(photos) {
  const photosContainer = document.getElementById('photos');
  photosContainer.innerHTML = ''; // Limpiar contenido previo

  photos.forEach(photo => {
    const photoElement = document.createElement('div');
    photoElement.className = 'photo';
    photoElement.innerHTML = `
      <img src="${photo.image}" alt="Foto de avión">
      <div class="photo-info">
        <strong>Aerolínea:</strong> ${photo.airline}<br>
        <strong>Modelo:</strong> ${photo.aircraft}<br>
        <strong>Registro:</strong> ${photo.registration}
      </div>
    `;
    photosContainer.appendChild(photoElement);
  });
}

// Llamar a la función para obtener y mostrar las fotos de aviones al cargar la página
fetchPlanePhotos();
