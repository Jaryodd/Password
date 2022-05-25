// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpha1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var alpha2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'
  , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
  var numbers = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'];
  var symbols = ['!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '_' , '-' , '+' , '='];

function generatePassword() {
  var passwordLength = null;
  var specialCharacters = confirm("Do you want special characters?");
  var upperCase = confirm("Do you want upper case letters?");
  var lowerCase = confirm("Do you want lower case letters?");
  var numbers = confirm("Do you want numbers?");
  console.log("specialCharacters", specialCharacters)
  console.log("upperCase" , upperCase)
  console.log("lowerCase", lowerCase)
  console.log("numbers", numbers)
  
  do {
  passwordLength = parseInt(prompt("Legnth of password?"));
  console.log(passwordLength);
  } while (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength));
  
  if (upperCase = true) {
    for (let i = 0; i < passwordLength; i++) {
      var randomNumber = Math.floor(Math.random() + upperCase.legnth) + "<br>";
      password += upperCase.valueOf + (randomNumber + randomNumber +1)
}
console.log(upperCase)

  }

} 

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

