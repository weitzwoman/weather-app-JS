var apiKey = require('./../.env').apiKey;
var Temp = require('./../js/temperature.js').tempModule;

$(document).ready(function(){
  $('#tempLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var kelvin = parseInt(response.main.temp);
      var newTemp = new Temp(kelvin);
      console.log(newTemp);      var farenheit = newTemp.convertFarenheit();
      var celsius = newTemp.convertCelsius();
      $('.showWeather').text("The temperature in " + city + " is " + farenheit + " degrees(F)" + " & " + celsius + " degrees(C).");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
