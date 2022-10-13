// Assignment Code
const generateBtn = document.querySelector("#generate");

function randomInt(min, max){
    return Math.floor(math.random()*(max - min) + min)
}

function randomItem(list) {
    return list[randomInt(0, list.length -1)]
}

function generatePassword() {

    const userInput = prompt("Choose an amount of characters between 8 and 128.");

    // console.log(userInput);

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



    const numberCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    const lowerAlphabetCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const upperAlphabetCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
        'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
        'Y', 'Z']
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')']



    var allList = []


    if (addNumbers) {
        allList += allList.concat(numberCharacter)
    }

    if (lowerCases) {
        allList += allList.concat(lowerAlphabetCharacters)
    }

    if (upperCases) {
        allList += allList.concat(upperAlphabetCharacters)
        
    }

    if (addSpecial) {
        allList += allList.concat(specialCharacters)
    }

    const generatePassword = ""

   
    for (let i=0; i < passwordLength; i++) {
        const randomList = randomItem(allList[i])
        const randomChar = randomItem(randomList)
        console.log(randomChar)
    }

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