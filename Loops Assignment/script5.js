        //Pattern
        var i;
        var j;
        var k;
        document.write("<hr>Pattern 1 <hr><br/>");
        for(i=0;i<5;i++)
        {
            for(j=0;j<=i;j++)
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        document.write("<hr>Pattern 2 <hr><br/>");
        for(i=5;i>=1;--i) 
        {
            for(j=1;j<=i;++j) 
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        document.write("<hr>Pattern 3 <hr><br/>");
        for(i=1;i<=5;i++)
        {
            for(j=0;j<5-i;j++)
            {
                document.write("&nbsp&nbsp&nbsp");
            }
            for(k=0;k<i;k++)
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        document.write("<hr>Pattern 4 <hr><br/>");
        for(i=5;i>=1;i--)
        {
            for(j=1;j<=5-i;++j)
            {
                document.write("&nbsp&nbsp&nbsp");
            }
            for(k=0;k<i;k++)
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        document.write("<hr>Pattern 5 <hr><br/>");
        for(i=0;i<5;i++)
        {
            for(j=0;j<=i;j++)
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        for(i=4;i>=1;--i) 
        {
            for(j=1;j<=i;++j) 
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        document.write("<hr>Pattern 6 <hr><br/>");
        for(i=1;i<=5;i++)
        {
            for(j=0;j<5-i;j++)
            {
                document.write("&nbsp&nbsp&nbsp");
            }
            for(k=0;k<i;k++)
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        for(i=4;i>=1;i--)
        {
            for(j=1;j<=5-i;++j)
            {
                document.write("&nbsp&nbsp&nbsp");
            }
            for(k=0;k<i;k++)
            {
                document.write("*&nbsp");
            }
            document.write("<br/>");
        }
        document.write("<hr>Pattern 7 <hr><br/>");
        var num=1;
        for(i=0;i<5;i++)
        {
            for(j=0;j<=i;j++)
            {
                document.write(num+"&nbsp");
                num++;
            }
            document.write("<br/>");
        }
