//  1. Declare an empty array using JS literal notation to store
// student names in future.
 var studentname=[] 

// 2. Declare an empty array using JS object notation to store
// student names in future.
let a={
    studentName :'',
}

 // 3. Declare and initialize a strings array.
var fruitsnames = ["apple", "banana", "mango", "pineapple",];
document.write(fruitsnames[2]  + '\n')


 // 4. Declare and initialize a numbers array.
var numbers = [1,2,3,4,5,6,7,8,9];
document.write(numbers[5]  + '\n');

 // 5. Declare and initialize a boolean array.
var boolean = ["true", "false"];
document.write(boolean[1]  + '\n');

 // 6. Declare and initialize a mixed array.
var mixedarray = ["1", "neon", "jacket", "$"];
document.write(mixedarray[3]  + '\n')

 // Question no 7
 var degree = ["SSC", "HSC", "BCS",
    "BS", "BCOM", " MS", "M.Phil", "PhD"];
 document.write(degree[0]);
 document.write(degree[1]);
 document.write(degree[2]);
 document.write(degree[3]);
 document.write(degree[4]);
 document.write(degree[5]);
 document.write(degree[6]);
 document.write(degree[7]  + '\n');

// // //  Question no 8
// // var 

// // Question no 9
// var colors = ["red", "blue", "yellow", "orange", "black", "white", "purple", "green", "brown", "pink", "gray", "silver", "golden"]
// document.write(colors);
// var colorsadd=prompt("what color you want to add on?");

// var studentname=["aliza","areeba","ayesha","bisma"]



// Question no 10
var scored=[320,230,480,120]
scored.sort();
document.write(scored  + '\n');

// Question no 11
let citiesNames=['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
let selectedCities=[];
selectedCities=citiesNames.slice(2);
document.write("Selected Cities:", selectedCities  + '\n');

// Question no 12
let arr=['this','is','my','cat'];
let sentence=arr.join('",');
document.write(sentence + '\n')

// Question no 13
let gadgets=['keyboard','mouse','printer','monitor']
document.write(gadgets + '\n')



// Question no 14
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
 
let devices=['keyboard','mouse','printer','monitor'];
devices.reverse();
document.write(devices)

