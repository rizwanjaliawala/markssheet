var prompt = require('prompt-sync')();

// variable declaration
let r_no:string = prompt("Enter Student Roll No: ");
let stName:string = prompt("Enter Student Name: ");
let totalMarks:number = 300;
let eng:number = parseInt(prompt("Enter English Marks: "));
let maths:number =parseInt(prompt("Enter Maths Marks: "));
let urdu:number = parseInt(prompt("Enter Urdu Marks: "));
let obt:number ;
let pr:number;
let grd:string;

// operation

obt = eng + maths + urdu;
pr = obt / 300 * 100;


//condition 
if (pr >= 80){
    (grd = "A+");

}
else if (pr >= 70)
  {      (grd = "A")
    
}
else if (pr >= 60)
  {      (grd = "B")
    
}
else if (pr >= 50)
  {      (grd = "C")
    
}
else if (pr >= 40)
  {      (grd = "D")
    
}
else 
{grd = "Fail"}

//result

console.log("Roll Number : " ,r_no);
console.log("Student Name: " ,stName);
console.log("Total Marks : ", totalMarks);
console.log("Marks Obtained: ", obt);
console.log("Percentage: ", pr ,"%");
console.log("Grade: ", grd);

export {}