// JavaScript conditional statement to find the sign of a product of three numbers. Display an alert box with the specified sign. 
var a = prompt('Enter 1st Integer.');
var b = prompt('Enter 2nd Integer.');
var c = prompt('Enter 3rd Integer.');
var product = a*b*c;
if(product>=0)
    alert("+");
else
    alert("-");