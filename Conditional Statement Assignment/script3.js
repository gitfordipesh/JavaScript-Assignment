// JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
var a = prompt('Enter 1st Integer.');
var b = prompt('Enter 2nd Integer.');
var c = prompt('Enter 3rd Integer.');
if(a>b&&a>c){
    if(b>c)
    {
        alert(c+","+b+","+a);
    }
    else
    {
        alert(b+","+c+","+a);
    }
}
else if(b>a&&b>c){
    if(a>c)
    {
        alert(c+","+a+","+b);
    }
    else
        alert(a+","+c+","+b);
}
else{
    if(a>b)
    {
        alert(b+","+a+","+c);
    }
    else
        alert(a+","+b+","+c);
}