var apiKey = require('./../.env').apiKey;
var Temp = require('./../js/temperature.js').tempModule;

$(document).ready(function(){
  $('#tempLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showCelsiusButton').show();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      var kelvin = parseInt(response.main.temp);
      var newTemp = new Temp(kelvin);
      var farenheit = newTemp.convertFarenheit();
      $('.showWeather').text("The temperature in " + city + " is " + farenheit + " degrees(F).");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
    $('#celsius').click(function() {
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
        var kelvin = parseInt(response.main.temp);
        var newTemp = new Temp(kelvin);
        var celsius = newTemp.convertCelsius();
        $('.showWeather').empty().text("The temperature in " + city + " is " + celsius + " degrees(C).");
        $('.showFarenheitButton').show();
        $('.showCelsiusButton').hide();
      });
    });
    $('#farenheit').click(function() {
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
        var kelvin = parseInt(response.main.temp);
        var newTemp = new Temp(kelvin);
        var farenheit = newTemp.convertFarenheit();
        $('.showWeather').empty().text("The temperature in " + city + " is " + farenheit + " degrees(F).");
        $('.showFarenheitButton').hide();
        $('.showCelsiusButton').show();
      });
    });
  });
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      console.log(JSON.stringify(response));
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%" + ".");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
