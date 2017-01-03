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
}

exports.tempModule = Temp;
