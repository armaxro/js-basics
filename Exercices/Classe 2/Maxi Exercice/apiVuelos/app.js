// URL de la API de OpenSky Network para obtener datos de vuelos en tiempo real
const apiUrl = 'https://opensky-network.org/api/states/all';

// Función para obtener datos de vuelos de la API
async function fetchFlightData() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayFlightData(data.states.slice(0, 10)); // Mostrar los primeros 10 vuelos
  } catch (error) {
    console.error('Error al obtener los datos de vuelos:', error);
    document.getElementById('flights').innerText = 'Error al cargar los datos de vuelos.';
  }
}

// Función para mostrar los datos de los vuelos en la página
function displayFlightData(flights) {
  const flightsContainer = document.getElementById('flights');
  flightsContainer.innerHTML = ''; // Limpiar contenido previo

  flights.forEach(flight => {
    const flightElement = document.createElement('div');
    flightElement.className = 'flight';
    flightElement.innerHTML = `
      <strong>Vuelo:</strong> ${flight[1]}<br>
      <strong>Desde:</strong> ${flight[2]}<br>
      <strong>Hacia:</strong> ${flight[3]}<br>
      <strong>Latitud:</strong> ${flight[6]}<br>
      <strong>Longitud:</strong> ${flight[5]}
    `;
    flightsContainer.appendChild(flightElement);
  });
}

// Llamar a la función para obtener y mostrar los datos de vuelos al cargar la página
fetchFlightData();
