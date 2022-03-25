//variables to use in the code
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



//generatePassword function runs the entire password generator
function generatePassword() {
lengthInput = prompt("Choose a number between 8 and 128");
var lengthInput = parseInt(lengthInput)
console.log (lengthInput)
if (lengthInput < 8 || lengthInput > 128) {
  alert("Password must be between 8-128 characters");
  return null
}

//the confirm buttons to choose password conditions
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
//empty array
  var thePassword = []
//for loop that selects the random characters for the passwordd
  for(var i=0; i < lengthInput; i++) {
    var pickChoices = selectedChar[Math.floor(Math.random() * selectedChar.length)]; 
  thePassword.push(pickChoices);
  console.log (pickChoices);
  

}

//variable to display the password on the screen
var pw = thePassword.join("")

return pw

}

//function that actually writes the password and calls the generatePassword function
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value=password;

}

// Makes the button clickable to start the password questions
generateBtn.addEventListener("click", writePassword);





