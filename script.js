var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "?", "/"];

function getrandom(max) {
  return Math.ceil(Math.random() * max);
}

function generatePassword() {

  var passwordLength = prompt("How many characters would you like your password to be? (8-128)", "12");
  var useUppercase = confirm("Would you like to use uppercase letters?");
  var useLowercase = confirm("Would you like to use lowercase letters?");
  var useNumbers = confirm("Would you like to use numbers?");
  var useSpecial = confirm("Would you like to use special characters?");

  var potrntialCharacters = [];
  if(useUppercase) {
    potrntialCharacters = potrntialCharacters.concat(uppercase);
  }
  if(useLowercase) {
    potrntialCharacters = potrntialCharacters.concat(lowercase);
  }
  if(useNumbers) {
    potrntialCharacters = potrntialCharacters.concat(numbers);
  }
  if(useSpecial) {
    potrntialCharacters = potrntialCharacters.concat(special);
  }

  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomIndex = getrandom(potrntialCharacters.length - 1);
    password = password + potrntialCharacters[randomIndex];
  }

  return password;
}


