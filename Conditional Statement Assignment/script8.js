function sumDigitSquare(n) {
    var sum = 0;
    while (n) {
        var dig = n % 10;
        var p = dig ** 2;
        sum = sum + p;
        n = Math.floor(n / 10);
    }
    return sum;
}
function isHappy(num) {

    while (num) {
        if (num == 1)
            return true;
        num = sumDigitSquare(num);
    }
    return false;
}
var n1=23;
if(isHappy(n1))
    document.write(n1+" Happy number");
else
    document.write(n1+" Not A Happy number");


document.write('First 5 happy numbers are : ');
for(i=1;i<100;i++){
    if(isHappy(i))
        document.write(i+",");
}
