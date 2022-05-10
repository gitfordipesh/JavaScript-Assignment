var n = prompt("Enter an number:");
var sum = 0;
var t = n;
while(t){
    var dig = t%10;
    sum = sum+dig;
    t=Math.floor(t/10);
}
document.write("For "+n+" The Sum Of Digits : "+sum);