// Assignment Code
var generateBtn = document.querySelector("#generate");
  var alpha = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numbers = ["0123456789"];
  var symbols = ["!@#$%^&*_-+="];

function generatePassword() {
  var passwordLength = null;
  var specialCharacters = confirm("Do you want special characters?");
  var upperCase = confirm("Do you want upper case letters?");
  var lowerCase = confim("Do you want lower case letters?");
  var numbers = confirm("Do you want numbers?");

  do {
  passwordLength = parseInt(prompt("Legnth of password?"));
  console.log(passwordLength);
  } while (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength));
  
} 

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

