// ****************Q1*****************


// function displayCurrentDateTime() {
//     var currentDate = new Date();
//     var formattedDateTime = currentDate.toLocaleString();
//     document.getElementById("datetime").textContent = formattedDateTime;
// }

// displayCurrentDateTime();



// ****************Q2*****************


// function greetUser(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     console.log("Hello, " + fullName + " !");
//   }
  
//   var firstName = prompt("Enter your first Name");
//   var lastName = prompt("Enter your last Name");
//   greetUser(firstName, lastName); 
  
// ****************Q3*****************

// function equation(num1,num2){
//     var add = num1+num2
//     console.log(add)
// }
// var input1 = +prompt("Enter first Value")
// var input2 = +prompt("Enter second Value")
// equation(input1,input2)

// ****************Q4*****************
// function calculator(num1, operator, num2) {
//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   }
// }

// var num1 = +prompt("Enter first value");
// var operator = prompt("Enter operator");
// var num2 = +prompt("Enter second value");

// var result = calculator(num1, operator, num2);

// console.log(result);


// ****************Q5*****************

// function squares(arg1,arg2){
//     var arguments = arg1*arg2
//     console.log(arguments)
// }
// var input1 = +prompt("Enter value what you want Squares")
// var input2 = input1
// squares(input1,input2)

// ****************Q6*****************

// Sir ya Question Samaj nahi aa raha

// ****************Q7*****************

// function displayCounting(start,end){
//     if(start<=end){
//         for(let i=start;i<=end;i++){
//             console.log(i)
//         }
//     }
//     else{
//         console.log("Start number is less then end number")
//     }
// }

// var startNumber = +prompt("Enter Starting Number")
// var endNumber = +prompt("Enter Ending Number")

// displayCounting(startNumber,endNumber)

// ****************Q8*****************

// Sir ya Question Samaj nahi aa raha

// ****************Q9*****************

// function calculateRectangleArea(width,height){
//     if(width>=0 && height>=0){
//         console.log( width * height)
//     }
//     else{
//         console.log( "plz enter correct true Values both values in non-negative")
//     }
// }
// var firstInput = +prompt("Enter width")
// var secondInput = +prompt("Enter height")
// calculateRectangleArea(firstInput,secondInput)


// ****************Q10*****************

// var string3 = prompt("Please enter a Any word")
// var len = string3.length;
// var msg = " is a Palindrome";
// for(var i=0; i < len/2; i++){
//     if (string3[i] != string3[len - 1 -i]){
//         msg = " is not a Palindrome"
//     }
// }

// console.log(string3,msg)

// ****************Q11*****************

// function capitalizeWords(str) {
//     var words = str.split(" ");
//     var capitalizedWords = words.map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     });
//     return capitalizedWords.join(" ");
// }

// var inputString = prompt("Enter any sentence what you want in Capitalize");
// var result = capitalizeWords(inputString);
// console.log(result); 

// ****************Q12*****************

// function findLongestWord(inputString) {
//     var words = inputString.split(" ");


//     let longestWord = " ";
//     let maxLength = 0;

//     for (let i = 0; i < words.length; i++) {
//         var currentWord = words[i];
//         if (currentWord.length > maxLength) {
//             maxLength = currentWord.length;
//             longestWord = currentWord;
//         }
//     }

//     return longestWord;
// }

// // Example usage:
// var inputString = prompt("Enter any sentence");
// var longestWord = findLongestWord(inputString);

// console.log("The longest word in the string is:", longestWord);


// ****************Q13*****************

// function countOccurancess(input,letter){
//     var count = 0;
//     for(var i=0; i<input.length; i++){
//         if(input[i] === letter){
//             count++
//         }
//     }
//     return count
// }

// var inputString = "JSResourceS.com"
// var letterToCount = "o"
// var occurrences = countOccurancess(inputString,letterToCount)

// console.log("The letter" ,letterToCount, "occurs ",occurrences, "times in the string.");

// ****************Q14*****************

// Sir ya Sawal samaj anahi aa raha hai


// var theEnd = "-- END --"
// document.write("<center>", theEnd, "</center>")