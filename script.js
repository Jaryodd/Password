// Assignment Code
var generateBtn = document.querySelector("#generate");
var alpha1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var alpha2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N'
  , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z'];
  var numbers = ['0' , '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9'];
  var symbols = ['!' , '@' , '#' , '$' , '%' , '^' , '&' , '*' , '_' , '-' , '+' , '='];

function characterRandom(array) {
return array[Math.floor(Math.random() * array.legnth)]
}

function generatePassword() {
  var passwordLength = null;
  var specialCharacters = confirm("Do you want special characters?");
  var upperCase = confirm("Do you want upper case letters?");
  var lowerCase = confirm("Do you want lower case letters?");
  var numbers = confirm("Do you want numbers?");
  // console.log("specialCharacters", specialCharacters)
  // console.log("upperCase" , upperCase)
  // console.log("lowerCase", lowerCase)
  // console.log("numbers", numbers)

  var userChoice = []
  var userResults = []

  do {
  passwordLength = parseInt(prompt("Legnth of password?"));
  console.log(passwordLength);
  } while (passwordLength < 8 || passwordLength > 128 || Number.isNaN(passwordLength));
  
  if (specialCharacters === true) {
    userChoice = userChoice.concat(symbols)
    userResults.push(characterRandom(symbols))
      console.log(userChoice)
  console.log(userResults)
  }

  if (upperCase === true) {
    userChoice = userChoice.concat(alpha2)
    userResults.push(characterRandom(alpha2))
      console.log(userChoice)
  console.log(userResults)
  }

  if (lowerCase === true) {
    userChoice = userChoice.concat(alpha1)
    userResults.push(characterRandom(alpha1))
      console.log(userChoice)
  console.log(userResults)
  }

  if (numbers === true) {
    userChoice = userChoice.concat(numbers)
    userResults.push(characterRandom(numbers))
      console.log(userChoice)
  console.log(userResults)
  }

} 

function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

