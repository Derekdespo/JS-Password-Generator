// Assignment Code (basically this will link our variable here with the generate id from our html)
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button (this will allow us to get un event when the generate id button is clicked on)
generateBtn.addEventListener("click", writePassword); 

// We need to create some Arrays for the different character types used in our password generator: Numbers, Upper and Lowercase letters, Symbols
// So here we will declare some Arrays
var upCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"]
var lowCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "?", "_", "+", "/",]

// Global variables (we will need to get values for them later from user input)
var okLength = "";
var okUpCase = "";
var okLowCase = "";
var okNum = "";
var okSym = "";




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


