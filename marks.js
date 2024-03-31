"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt = require('prompt-sync')();
// varible declaration
let r_no = prompt("Enter Student Roll No: ");
let stName = prompt("Enter Student Name: ");
let totalMarks = 300;
let eng = parseInt(prompt("Enter English Marks: "));
let maths = parseInt(prompt("Enter Maths Marks: "));
let urdu = parseInt(prompt("Enter Urdu Marks: "));
let obt;
let pr;
let grd;
// operation
obt = eng + maths + urdu;
pr = obt / 300 * 100;
//condition 
if (pr >= 80) {
    (grd = "A+");
}
else if (pr >= 70) {
    (grd = "A");
}
else if (pr >= 60) {
    (grd = "B");
}
else if (pr >= 50) {
    (grd = "C");
}
else if (pr >= 40) {
    (grd = "D");
}
else {
    grd = "Fail";
}
//result
console.log("Roll Number : ", r_no);
console.log("Student Name: ", stName);
console.log("Total Marks : ", totalMarks);
console.log("Marks Obtained: ", obt);
console.log("Percentage: ", pr, "%");
console.log("Grade: ", grd);
