if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    handleGeolocation,
    handleGeolocationError
  );
} else {
  console.error('Geolocation is not supported by this browser.');
}

function handleGeolocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  sendGeolocationDataToServer(latitude, longitude);
}

function handleGeolocationError(error) {
  console.error('Error retrieving geolocation:', error.message);
}

function sendGeolocationDataToServer(latitude, longitude) {
  const data = {
    lat: latitude,
    lon: longitude,
  };

  fetch('http://localhost:3300/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(weatherData => {
      console.log('Weather Information:');
      console.log('Location:', weatherData.location);
      console.log('Temperature:', weatherData.temperature);
      console.log('Condition:', weatherData.condition);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
