var n = prompt("Enter an number:");
var exp = n.length;
var sum = 0;
var t = n;

while(t){
    var dig=t%10;
    var p = dig**exp;
    sum = sum+p;
    t=Math.floor(t/10);
} 
if(sum==n)
    document.write(n+" is Armstrong.");
else
    document.write(n+" is Not Armstrong.");
