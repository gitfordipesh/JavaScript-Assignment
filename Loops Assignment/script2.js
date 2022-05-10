for(i=1;i<=100;i++)
{
    if(i%3==0&&i%5!=0)
        document.write("FIZZ<br/>");
    else if(i%5==0&&i%3!=0)
        document.write("BUZZ<br/>");
    else if(i%3==0&&i%5==0)
        document.write("FIZZBUZZ<br/>");
    else
        document.write(i+"<br/>");
}