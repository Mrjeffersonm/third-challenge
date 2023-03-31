// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordlength = (x);
var x = InputEvent;
const lower = ("abcdefghijklmnopqrstuvwxyz");
const upper = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const number = ("1234567890");
const spec = (" []\"`'~!@#$%^&*|{}()_-=+:;,./?>\\<");
var charset = "";
//will have to make arrays of lower and upper letters, numbers, and symbols

//make generatepassword function
//prompt for password length is a number
//if statement if number is above 8 & below 128
//confirm for lowercase, uppercase, numeric and special characters
//store response in a variable
//if statement for each confirm and if it is a yes or true i would push or add random characters to a big array of all characters selected so far
//for loop while i is less than there answer for num lenght prompt
//in this for loop we would randomly pull characters from the big array
//pull random characters from the array using math.random
//have a var declared above for loop
//that var += theRandomChar
//return the password var


function generatePassword () {
  charset = "";
  var lowercase = prompt("Include Lowercase Symbols? (Yes or No)");
    if (lowercase.toLowerCase() == "yes") {
      charset += lower ;
      console.log ("Includes lowercase") 
    } else {
      console.log ("Does not include lowercase")
    }

  var uppercase = prompt("Include Uppercase Symbols? (Yes or No)");
    if (uppercase.toLowerCase() == "yes") {
      charset += upper ;
      console.log ("Includes uppercase")
    } else {
      console.log ("Does not include uppercase")
    }

    var numbers = prompt("Include Numbers? (Yes or No)");
    if (numbers.toLowerCase() == "yes") {
      charset += number ;
      console.log ("Includes numbers")
    } else {
      console.log ("Does not include numbers")
    }  

      var special = prompt("Include Special Characters? (Yes or No)");
    if (special.toLowerCase() == "yes") {
      charset += spec ;
      console.log ("Includes special characters")
    } else {
      console.log ("Does not include special characters")
    }



    var length = 0;
    while (length < 8 || length > 127) {   
      length = prompt("Length of Password (Must be between 8 and 127)")
    }
      retVal = "";
      n = charset.length; 
    for (var i = 0; i < length; i++) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword("password");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


