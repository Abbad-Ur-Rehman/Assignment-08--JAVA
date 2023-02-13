


///////////////////////////////////CALCULATE THE PERCENTAGE AND GRADES//////////////////////////////


let phyMarks=100;
let chemMarks=100;
let mathMarks=100;
let compMarks=100;
let bioMarks=50;

if(phyMarks<=100 && chemMarks<=100 && mathMarks<=100 && compMarks<=100 && bioMarks<=100){
    
    let totalMarks= phyMarks+chemMarks+mathMarks+compMarks+bioMarks;
let marksPercentage= totalMarks/500*100;

if(marksPercentage>=90){
    console.log(`You got ${marksPercentage}% Marks`)
    console.log("Your Grade is 'A'")
} else if(marksPercentage>= 80){
    console.log(`You got ${marksPercentage}% Marks`)
    console.log("Your Grade is 'B'")
}else if(marksPercentage>=70){
    console.log(`You got ${marksPercentage}% Marks`)
    console.log("Your Grade is 'C'")
}else if(marksPercentage>=60){
    console.log(`You got ${marksPercentage}% Marks`)
    console.log("Your Grade is 'D'")
}else if(marksPercentage>=40){
    console.log(`You got ${marksPercentage}% Marks`)
    console.log("Your Grade is 'E'")
}else{
    console.log(`You got ${marksPercentage}% Marks`)
    console.log("Your Grade is 'F'")
}
    
}else {
    console.log("Inavlid Input")
}

// let totalMarks= phyMarks+chemMarks+mathMarks+compMarks+bioMarks;
// let marksPercentage= totalMarks/500*100;

// if(marksPercentage>=90){
//     console.log(`You got ${marksPercentage}% Marks`)
//     console.log("Your Grade is 'A'")
// } else if(marksPercentage>= 80){
//     console.log(`You got ${marksPercentage}% Marks`)
//     console.log("Your Grade is 'B'")
// }else if(marksPercentage>=70){
//     console.log(`You got ${marksPercentage}% Marks`)
//     console.log("Your Grade is 'C'")
// }else if(marksPercentage>=60){
//     console.log(`You got ${marksPercentage}% Marks`)
//     console.log("Your Grade is 'D'")
// }else if(marksPercentage>=40){
//     console.log(`You got ${marksPercentage}% Marks`)
//     console.log("Your Grade is 'E'")
// }else{
//     console.log(`You got ${marksPercentage}% Marks`)
//     console.log("Your Grade is 'F'")
// }