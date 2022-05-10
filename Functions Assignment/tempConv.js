function celsiusToFahrenheit(celcius){
    var f = (celcius*9/5)+32;
    document.write(celcius+"°C is "+f+"°F<br/>");
}
function fahrenheitToCelsius(fahrenheit){
    var c = (fahrenheit-32)*5/9;
    document.write(fahrenheit+"°F is "+c+"°C<br/>");
}
celsiusToFahrenheit(23);
fahrenheitToCelsius(98.6);