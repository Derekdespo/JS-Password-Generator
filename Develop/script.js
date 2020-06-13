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
  while (okLength <= 7 || okLength >= 129) {
    alert("Your password should be no less than 8 characters and no more than 128. Please choose a new length for your password.");
    okLength = prompt("Number of character for your new password: ");
  }

  // If the users desired length fits into our parameters, then we should alert them with how long it will be
  alert("Okay, great! Your password will be " + okLength + " characters long.");

  // Okay so now that we have our length we need to find out what types of characters the user wants in their password
  // We will ask the user 'corfirm' questions to see which characters they want and don't want in their password
  okUpCase = confirm("Do you want uppercase letters in your password? (press cancel for 'No')");
  okLowCase = confirm("Do you want lowercase letters in your password?");
  okNum = confirm("Do you want numbers in your password?");
  okSym = confirm("Do you want symbols in your password?");

  // We need to make it so that if the user says no to all of the characters, we will alert them it is not allowed and re ask our confirm questions
  // We can use the while loop that we used before to say if all of the confirm question values are false to aler the user and re run our questions
  while (okUpCase === false && okLowCase === false && okNum === false && okSym === false) {
    alert("You have to choose at least one of the character types!");
    okUpCase = confirm("Do you want uppercase letters in your password? (press cancel for 'No')");
    okLowCase = confirm("Do you want lowercase letters in your password?");
    okNum = confirm("Do you want numbers in your password?");
    okSym = confirm("Do you want symbols in your password?");
  }

  // Now that the user has given values to our global variables, we need to apply that to the password we will generate
  // Should create an empty array that can be filled by the arrays at the top of the page depending on the boolean values from our confirm questions
  var yourPass = []
  // if statement that will say if confirm question is true then add the corresponding array to yourPass
  if (okUpCase === true) {
    yourPass = yourPass.concat(upCase)
  }
  else (okUpCase === false) 
yourPass = yourPass.concat("")
  
}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


