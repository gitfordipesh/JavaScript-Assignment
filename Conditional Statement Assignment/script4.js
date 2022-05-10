// JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
var a = prompt('Enter 1st Integer.');
var b = prompt('Enter 2nd Integer.');
var c = prompt('Enter 3rd Integer.');
var d = prompt('Enter 4th Integer.');
var e = prompt('Enter 5th Integer.');
if(a>b&&a>c&&a>d&&a>e)
    alert("A : "+a+" is  Large.");
else if(b>a&&b>c&&b>d&&b>e)
    alert("B : "+b+" is  Large.");
else if(c>a&&c>b&&c>d&&c>e)
    alert("C : "+c+" is  Large.");
else if(d>a&&d>b&&d>c&&d>e)
    alert("D : "+d+" is  Large.");
else if(e>a&&e>b&&e>c&&e>d)
    alert("E : "+e+" is  Large.");

