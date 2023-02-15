

let basicSalry= 25000;

let hra,da; 
if(basicSalry<=10000)
{			
    hra = basicSalry*0.2;
    da = basicSalry*0.8;
}
else if(basicSalry<=20000)
{
    hra = basicSalry*0.25;
    da = basicSalry*0.9;
}
else
{
    hra = basicSalry*0.3;
    da = basicSalry*0.95;
}
console.log("Gross Salary : "+(basicSalry+hra+da))