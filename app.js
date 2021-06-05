const request = require('request');
const url =
  'http://api.weatherstack.com/current?access_key=95b925454ccd351b9f51eb37f161b42a&query=37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
