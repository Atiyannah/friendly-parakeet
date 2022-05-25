/// Assignment code here
var numbers = "1234567890";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!?%$&";

var passwordLength = [];

var promptPassword = window.prompt("How long would you like your password to be? Choose a number between 8 and 27.");
// link to passwordLength variable and move to after eventListener function

// continue for rest of variables and test
var numbersConfirm = window.confirm ("Would you like your password to have NUMBERS?");
  if (numbersConfirm) {
    for (var i = 0; i < numbers.length; i++);
  }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
