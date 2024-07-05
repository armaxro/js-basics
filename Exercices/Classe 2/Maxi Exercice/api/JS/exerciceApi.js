
/*
// Solicitud GET (Request).
fetch('https://api.github.com/users/armaxro')
    // Exito
    .then(response => response.json())  // convertir a json
    .then(json => console.log(json))    //imprimir los datos en la consola
    .catch(err => console.log('Solicitud fallida', err)); // Capturar errores

*/

fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(data => {
    document.querySelector('#quote').textContent = data.fact;
  })
  .catch(error => {
    console.error('Error:', error);
  });