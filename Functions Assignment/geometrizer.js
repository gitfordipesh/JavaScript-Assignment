function calcCircumfrence(radius){
    var circumference = 2*Math.PI*radius;
    document.write("The circumference is "+circumference+"<br/>");
}
function calcArea(r){
    var area = Math.PI*r*r;
    document.write("The Area is "+area+"<br/>");
}
calcCircumfrence(5);
calcArea(5);