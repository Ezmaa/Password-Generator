// Assignment Code
const generateBtn = document.querySelector("#generate");

const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']
const upperAlphabetCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z']
const lowerAlphabetCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

function generatePassword() {
    const passwordLength = prompt("Choose an amount of characters between 8 and 128.");
    const addNumbers = confirm("Add numbers?");
    const lowerCases = confirm("Add lowercase characters?");
    const upperCases = confirm("Add uppercase characters?");
    const addSpecial = confirm("Add special characters?");



}

// Write password to the #password input
function writePassword() {
    const password = generatePassword();
    const passwordText = document.querySelector("#password");

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

