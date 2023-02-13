

//

let units=475
let amount;

if(units<=50){
    amount= (units*0.5);

}else if(units<=150){
    amount= 25+(units-50)*0.75;

}else if(units<=250){
    amount= 100+(units-150)*1.20;
}else{
    amount= 220+(units-250)*1.5;
}
 let subCharge= amount*20/100;
 let totalBill= amount+subCharge;
 
 console.log(totalBill);
