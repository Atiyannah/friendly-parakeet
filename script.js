/// Assignment code here
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var lowercaseLetters = ["a","b","c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharacters = ["!","?","%","$","&","@","#","^","*","_","+","-","="];

var generatedPasswordLength = [];
console.log(generatedPasswordLength);

var userOptions = [];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // password criteria
  var numbersConfirm = window.confirm ("Would you like your password to have NUMBERS?");
    if (numbersConfirm) {
    userOptions = userOptions.concat(numbers);
    // console.log(userOptions);
    var randomChar = Math.floor(Math.random() * 10);
  }
  else {
    window.alert("Okay, you do NOT want numbers in your password.");
  }
  var lowercaseLettersConfirm = window.confirm ("Would you like your password to have LOWERCASE LETTERS?");
    if (lowercaseLettersConfirm) {
    userOptions = userOptions.concat(lowercaseLetters);
    // console.log(userOptions);
    var randomChar = Math.floor(Math.random() * 26);
  }
  else {
    window.alert("Okay, you do NOT want lowercase letters in your password.");
  }
  var uppercaseLettersConfirm = window.confirm ("Would you like your password to have UPPERCASE LETTERS?");
    if (uppercaseLettersConfirm) {
    userOptions = userOptions.concat(uppercaseLetters);
    // console.log(userOptions);
    var randomChar = Math.floor(Math.random() * 26);
  }
  else {
    window.alert("Okay, you do NOT want uppercase letters in your password.");
  }
  var specialCharactersConfirm = window.confirm ("Would you like your password to have SPECIAL CHARACTERS?");
    if (specialCharactersConfirm) {
    userOptions = userOptions.concat(specialCharacters);
    // console.log(userOptions);
    var randomChar = Math.floor(Math.random() * 13);
  }
  else {
    window.alert("Okay, you do NOT want special characters in your password.");
  }
  generatedPasswordLength = generatedPasswordLength.concat(randomChar);
  console.log(generatedPasswordLength);
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

