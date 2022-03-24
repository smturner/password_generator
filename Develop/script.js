// Assignment Code
var generateBtn = document.querySelector("#generate");

//variable arrays to take from for password
var numberChars = [0,1, 2, 3, 4, 5,6, 7, 8,9];
var upperChars = ["A", "B", "C", "D"," E"," F", "G", "H", "I", "J" ,"K" ,"L" ,"M" ,"N", "O", "P", "Q", "R", "S", "T" ,"U", "V" ,"W", "X", "Y", "Z"];
var lowerChars = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChars = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "?", "@"];

  //variables for selectors
var selectedChar
var lowerConfirm
var upperConfirm
var numConfirm
var specialConfirm
var lengthInput

  //creates a clickable button
generateBtn.onclick=generatePassword;

 function generatePassword() {
    //passwordlength prompt
lengthInput=prompt("Choose a number between 8 and 128");
var lengthInput = parseInt(lengthInput)
//console.log (lengthInput)
if (lengthInput < 8 || lengthInput > 128) {
  alert("Password must be between 8-128 characters");
}else if (!lengthInput) {
 prompt("Need a valid input. Choose a number between 8 and 128");
}

//return null
  //password value confirms
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
  alert("Password must have at least one parameter!")
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
if (lowerConfirm && upperConfirm) {
  selectedChar = lowerChars.concat(upperChars)
}
else if (lowerConfirm && numConfirm) {
  selectedChar = lowerChars.concat(numberChars)
}
else if (lowerConfirm && specialConfirm) {
  selectedChar = lowerChars.concat(specialChars)
}
else if (specialConfirm && upperConfirm) {
  selectedChar = specialChars.concat(upperChars)
}
else if (specialConfirm && numConfirm) {
  selectedChar = specialChars.concat(numberChars)
}
else if (upperConfirm && numConfirm) {
  selectedChar = upperChars.concat(numberChars)
}

  //if one is ture
if (lowerConfirm){
  selectedChar= lowerChars
}else if (upperConfirm){
  selectedChar=upperChars
}else if (numConfirm){
  selectedChar=numberChars
}else if (specialConfirm){
  selectedChar=specialChars
}


  //for loop to gather the password characters
var thePassword = []

for(var i=0; i < lengthInput; i++) {
  var pickChoices = selectedChar [Math.floor(Math.random() * selectedChar.length)]; 
thePassword.push(pickChoices);
console.log (pickChoices);
}

}
generatePassword()








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
