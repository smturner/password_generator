// Assignment Code
var generateBtn = document.querySelector("#generate");

//variable arrays to take from for password
var numberChars = [0,1, 2, 3, 4, 5,6, 7, 8,9];
var upperChars = ["A", "B", "C", "D"," E"," F", "G", "H", "I", "J" ,"K" ,"L" ,"M" ,"N", "O", "P", "Q", "R", "S", "T" ,"U", "V" ,"W", "X", "Y", "Z"];
var lowerChars = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChars = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "?", "@"];

var selectedChar
var lowerConfirm
var upperConfirm
var numConfirm
var specialConfirm
var lengthInput





function generatePassword() {
lengthInput = prompt("Choose a number between 8 and 128");
var lengthInput = parseInt(lengthInput)
console.log (lengthInput)
if (lengthInput < 8 || lengthInput > 128) {
  alert("Password must be between 8-128 characters");}
// }else if (!lengthInput) {
//   alert("This needs a value");
// }

//return null
// generatePassword()
// }

  lowerConfirm = confirm ("Click OK to confirm including lower case letters in password");
  upperConfirm = confirm ("Click OK to confirm including upper case letters in password");
  numConfirm = confirm ("Click OK to confirm including numbers in password");
  specialConfirm = confirm ("Click OK to confirm including special characters in password");
  console.log (lowerConfirm);
  console.log (upperConfirm);
  console.log (numConfirm);
  console.log (specialConfirm);

 
 

//if none are true
if(!lowerConfirm && !upperConfirm && !numConfirm && !specialConfirm) {
  alert("Password must have at least one parameter!")}

  generatePassword()
}
//if all are true
if(lowerConfirm && upperConfirm && numConfirm && specialConfirm) {
  selectedChar = lowerChars.concat(upperChars, numberChars, specialChars)
  console.log (selectedChar)
}

//if three are true
if (lowerConfirm && upperConfirm && numConfirm){
  selectedChar = lowerChars.concat(upperChars, numberChars)
}
else if (lowerConfirm && upperConfirm && selectedChar){
  selectedChar = lowerChars.concat(upperChars, selectedChar)
}
else if (lowerConfirm && selectedChar && numConfirm){
  selectedChar = lowerChars.concat(selectedChar, numberChars)
}
else if (selectedChar && upperConfirm && numConfirm) {
  selectedChar = selectedChar.concat(upperChars, numberChars)
  console.log(selectedChar)
}

//if two are true
if (lowerChars && upperChars) {
  selectedChar = lowerChars.concat(upperChars)
}
else if (lowerChars && numberChars) {
  selectedChar = lowerChars.concat(numberChars)
}
else if (lowerChars && specialChars) {
  selectedChar = lowerChars.concat(specialChars)
}
else if (specialChars && upperChars) {
  selectedChar = specialChars.concat(upperChars)
}
else if (specialChars && numberChars) {
  selectedChar = specialChars.concat(numberChars)
}
else if (upperChars && numberChars) {
  selectedChar = upperChars.concat(numberChars)
}

//if one is selected

// var thePassword = []

// for(var i=0; i < lengthInput; i++) {
//   var pickChoices = selectedChar [Math.floor(Math.random() * selectedChar.length)]; 
// thePassword.push(pickChoices);
// console.log (pickChoices);
 
// }







// generatePassword ()


  
 // }  

  //var randomstring = math.random().toString(128).slice(-8);
//console.log (numbers)
  //else 
   //console.log ("error")




// function indexRandomizer () {

// }

//function generatePassword(passwordLength) {
//return ""
//}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//1. create variables to save user input from prompts (clicking comfirm (true,) cancel (false))
    //var prompt and var inputs
    // var for passwordLength- string figure out how to change into an intiger
      //var specialCharacters == confirm "chick Ok to confirm including special characters" will be a boolean
      // numericCharacters boolean
      //lowercaseCharacters boolean
      //uppercaseCharacters boolean
    // alert, confirm, prompt
    // use conditionals to validate inputs (if else) (password length,, user enters no imputs)
    //When user says no if else?
//2. create an array with special characters, uppercase letters, lowercase letters, numbers
  //specialCharacters, Uppercase, lowercase, numeric
  //3. use randomizer function to selet characters from each array
//4. generatePassword function --take user input, grab charcters from array and generate password

//5. create an empty array that represents the final password

//6. join the character arrays together based on user input
  // randomize characters from the joined array

  //transforming the array into a string-you can use join
  //array.join ('')}
