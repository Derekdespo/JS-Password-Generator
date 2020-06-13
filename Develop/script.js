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

// Now we need to ask the user some questions to determine the values of the above variables to see which arrays will be called upon later on
// We start by creating the function for generate password which we will call upon later on
function generatePassword() {
   okLength = prompt("Number of characters for your new password: ");

  // Now we want to make sure that the password is at least 8 chracaters and no more than 128 (we will use a while loop)
  // So if they choose an amount that doesn't fit our parameters, we want to inform them of the parameters and ask again for a length
  while(okLength <= 7 || okLength >= 129) {
    alert("Your password should be no less than 8 characters and no more than 128. Please choose a new length for your password");
    okLength = prompt("Number of character you'd like in your new password: ");
  }

  // If the users desired length fits into our parameters, then we should alert them with how long it will be
  alert("Okay, great! Your password will be " + okLength + " characters long.")
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


