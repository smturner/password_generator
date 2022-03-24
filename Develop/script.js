// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberChars = [0,1, 2, 3, 4, 5,6, 7, 8,9];
var upperChars = ["A", "B", "C", "D"," E"," F", "G", "H", "I", "J" ,"K" ,"L" ,"M" ,"N", "O", "P", "Q", "R", "S", "T" ,"U", "V" ,"W", "X", "Y", "Z"];
var lowerChars = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChars = ["!", "#", "$", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "?", "@"];
var selectedChar;
var lowerConfirm
var upperConfirm
var numConfirm
var specialConfirm
var lengthInput




function generatePassword() {
    // generateBtn.onclick=generatePassword;
lengthInput = prompt("Choose a number between 8 and 128");
var lengthInput = parseInt(lengthInput)
console.log (lengthInput)
if (lengthInput < 8 || lengthInput > 128) {
  alert("Password must be between 8-128 characters");

  return null
}


  lowerConfirm = confirm ("Click OK to including lower case letters in password");
  upperConfirm = confirm ("Click OK to including upper case letters in password");
  numConfirm = confirm ("Click OK to including numbers in password");
  specialConfirm = confirm ("Click OK to including special characters in password");
  console.log (lowerConfirm);
  console.log (upperConfirm);
  console.log (numConfirm);
  console.log (specialConfirm);

//if none are true
if(!lowerConfirm && !upperConfirm && !numConfirm && !specialConfirm) {
  alert("Password must have at least one parameter!")}

//if all are true
if(lowerConfirm && upperConfirm && numConfirm && specialConfirm) {
    selectedChar = lowerChars.concat(upperChars, numberChars, specialChars);
    console.log (selectedChar);
  }
  
  //if three are true
else if (lowerConfirm && upperConfirm && numConfirm){
    selectedChar = lowerChars.concat(upperChars, numberChars);
  }
  else if (lowerConfirm && upperConfirm && specialConfirm){
    selectedChar = lowerChars.concat(upperChars, specialChars);
  }
  else if (lowerConfirm && specialConfirm && numConfirm){
    selectedChar = lowerChars.concat(specialChars, numberChars);
  }
  else if (specialConfirm && upperConfirm && numConfirm) {
    selectedChar = specialChars.concat(upperChars, numberChars);
    console.log(selectedChar)
  }
   //if two are true
   else if (lowerConfirm && upperConfirm) {
    selectedChar = lowerChars.concat(upperChars);
  }
  else if (lowerConfirm && numConfirm) {
    selectedChar = lowerChars.concat(numberChars);
  }
  else if (lowerConfirm && specialConfirm) {
    selectedChar = lowerChars.concat(specialChars);
  }
  else if (specialConfirm && upperConfirm) {
    selectedChar = specialChars.concat(upperChars);
  }
  else if (specialConfirm && numConfirm) {
    selectedChar = specialChars.concat(numberChars);
  }
  else if (upperConfirm && numConfirm) {
    selectedChar = upperChars.concat(numberChars);
  }
  
    //if one is ture
  else if (lowerConfirm){
    selectedChar= lowerChars;
  }else if (upperConfirm){
    selectedChar=upperChars;
  }else if (numConfirm){
    selectedChar=numberChars;
  }else if (specialConfirm){
    selectedChar=specialChars;
  }

  var thePassword = []

  for(var i=0; i < lengthInput; i++) {
    var pickChoices = selectedChar[Math.floor(Math.random() * selectedChar.length)]; 
  thePassword.push(pickChoices);
  console.log (pickChoices);
  

}
}

// generatePassword ()


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



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
  //3. use randomizer function to select characters from each array
//4. generatePassword function --take user input, grab charcters from array and generate password

//5. create an empty array that represents the final password

//6. join the character arrays together based on user input
  // randomize characters from the joined array

  //transforming the array into a string-you can use join
  //array.join ('') 