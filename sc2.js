

/////////////////////////FIND MAXIMUM NUMBER B/W THREE NUMBERS/////////////////////////////

let girlAge = 392;
let boyAge =321;
let kidAge =222;

if(girlAge > boyAge && girlAge > kidAge){
    console.log(`The maximum Numer is ${girlAge}`);
} else if(boyAge > girlAge &&  boyAge > kidAge){
    console.log(`The maximum Number is ${boyAge}`);
}else {
   console.log(`The maximum Number is ${kidAge}`);
}