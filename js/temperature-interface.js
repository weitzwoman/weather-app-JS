var apiKey = require('./../.env').apiKey;

$(document).ready(function(){
  $('#tempLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').text("The temperature in " + city + " is " + response.main.temp + "degrees(k)" + ".");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
