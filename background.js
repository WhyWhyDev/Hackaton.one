let lng, lat;

let timeZURL = `http://api.timezonedb.com/v2.1/get-time-zone?key=68AJZPSMRSDC&format=json&by=position&lat=${lat}&lng=${lng}`

let sunSRURL = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`

fetch(timeZURL)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

fetch(sunURL)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
