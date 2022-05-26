/// Assignment code here
var numbers = "1234567890";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!?%$&@#^*_+-=";

var generatedPasswordLength = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // password criteria
  var numbersConfirm = window.confirm ("Would you like your password to have NUMBERS?");
    if (numbersConfirm) {
    for (var i = 0; i < numbers.length; i++); {
    }
  }
  else {
    window.alert("Okay, you do NOT want numbers in your password.");
  }
  var lowercaseLettersConfirm = window.confirm ("Would you like your password to have LOWERCASE LETTERS?");
    if (lowercaseLettersConfirm) {
    for (var i = 0; i < lowercaseLetters.length; i++);
  }
  else {
    window.alert("Okay, you do NOT want lowercase letters in your password.");
  }
  var uppercaseLettersConfirm = window.confirm ("Would you like your password to have UPPERCASE LETTERS?");
    if (uppercaseLettersConfirm) {
    for (var i = 0; i < uppercaseLetters.length; i++);
  }
  else {
    window.alert("Okay, you do NOT want uppercase letters in your password.");
  }
  var specialCharactersConfirm = window.confirm ("Would you like your password to have SPECIAL CHARACTERS?");
    if (specialCharactersConfirm) {
    for (var i = 0; i < specialCharacters.length; i++);
  }
  else {
    window.alert("Okay, you do NOT want special characters in your password.");
  }

  // passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to generate password length
var passwordLength = function() {
  var promptPassword = window.prompt("How long would you like your password to be? Choose a number between 8 and 128.");
  if (promptPassword >= 8 && promptPassword <= 128) {
    console.log(promptPassword);
    writePassword();
  }
  else {
    window.alert("You need to pick a valid password length.");
    passwordLength();
  }
};

// function calls
passwordLength();

