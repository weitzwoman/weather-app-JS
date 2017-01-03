(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "8a8261f1d3d4a1ab505d37111aa05d7f";

},{}],2:[function(require,module,exports){
function Temp (kelvin) {
  this.temp = kelvin;
}

Temp.prototype.convertFarenheit = function() {
  var farenheit = (9/5) * (this.temp - 273) + 32;
  return farenheit;
};

Temp.prototype.convertCelsius = function() {
  var celsius = (this.temp - 273.15).toFixed();
  return celsius;
};

exports.tempModule = Temp;

},{}],3:[function(require,module,exports){
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
        console.log(celsius);
        $('.showWeather').empty().text("The temperature in " + city + " is " + celsius + " degrees(C).");
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

},{"./../.env":1,"./../js/temperature.js":2}]},{},[3]);
