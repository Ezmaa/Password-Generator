// Assignment Code
const generateBtn = document.querySelector("#generate");


function generatePassword() {

    const userInput = prompt("Choose an amount of characters between 8 and 128.");
    const passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)) {
        window.alert("Error, Please enter a number.")
        return;
    }

    if (passwordLength < 8 || passwordLength > 128) {
        window.alert("Please choose a password length between 8 and 128.")
        return;
    }

    const addNumbers = confirm("Add numbers?");
    const lowerCases = confirm("Add lowercase characters?");
    const upperCases = confirm("Add uppercase characters?");
    const addSpecial = confirm("Add special characters?");

    let numberCharacter = ['0123456789']
    let lowerAlphabetCharacters = ['abcdefghijklmnopqrstuvwxyz']
    let upperAlphabetCharacters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    let specialCharacters = ['!@#$%^&*()']

    let allList = []

    if (addNumbers) {
        allList += numberCharacter;
    }

    if (lowerCases) {
        allList += lowerAlphabetCharacters;
    }

    if (upperCases) {
        allList += upperAlphabetCharacters;
        
    }

    if (addSpecial) {
        allList += specialCharacters;
    }
        let password = "";

    for (let i=0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random()* allList.length);
        password += allList.substring(randomNum, randomNum + 1);
    }
    return password;
}




    // Write password to the #password input
    function writePassword() {
        const password = generatePassword();
        const passwordText = document.querySelector("#password");

        passwordText.value = password;

        console.log(password);
    }


    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);