// function to generate a password for the user
function passwordGenerator(passLen, acceptNum = false, acceptSymbol = false) {
    // throws an error if the password length is too short or too long
    if (passLen < 8 || passLen > 100) { throw new Error("Password must be between 8 and 100 characters.") }

    // variables to hold our useable characters for our password
    const alphaChars = "abcdefghijklmnopqrstuvwxyz";
    const numeralChars = "1234567890";
    const symbolChars = "!@#$%^&*";
    // variable to hold our generated password
    let newPassword = "";

    // TODO #1 ensure at least one of each character type is chosen based off user preference.

    // create a loop that will repeat "passLen" times
    for (let i = 0; i < passLen; i++) {
        // if "acceptNum" and "acceptSymbol" are both true, randomly select what string to randomly take a character from of all strings
        if (acceptNum && acceptSymbol) {
            const randomChar = randomNum(4);
            if (randomChar === 0) {
                newPassword += alphaChars.charAt(randomNum(26));
            } else if (randomChar === 1) {
                newPassword += alphaChars.toUpperCase().charAt(randomNum(26));
            } else if (randomChar === 2) {
                newPassword += numeralChars.charAt(randomNum(10));
            } else if (randomChar === 3) {
                newPassword += symbolChars.charAt(randomNum(8));
            }
        // if "acceptNum" is true, randomly select a string not including the symbols to randomly take a character from
        } else if (acceptNum) {
            const randomChar = randomNum(3);
            if (randomChar === 0) {
                newPassword += alphaChars.charAt(randomNum(26));
            } else if (randomChar === 1) {
                newPassword += alphaChars.toUpperCase().charAt(randomNum(26));
            } else if (randomChar === 2) {
                newPassword += numeralChars.charAt(randomNum(10));
            }
        // if "acceptSymbol" is true, rondomly select a string not including numbers to randomly take a character from
        } else if (acceptSymbol) {
            const randomChar = randomNum(3);
            if (randomChar === 0) {
                newPassword += alphaChars.charAt(randomNum(26));
            } else if (randomChar === 1) {
                newPassword += alphaChars.toUpperCase().charAt(randomNum(26));
            } else if (randomChar === 2) {
                newPassword += symbolChars.charAt(randomNum(10));
            }
        // if neither "acceptNum" or "acceptSymbol" are true, randomly select a string not including symbols or numbers to randomly take a character from
        } else {
            const randomChar = randomNum(2);
            if (randomChar === 0) {
                newPassword += alphaChars.charAt(randomNum(26));
            } else {
                newPassword += alphaChars.toUpperCase().charAt(randomNum(26));
            }
        }
    }
    document.getElementById('passText').textContent = stringShuffler(newPassword);
}

function stringShuffler(string) {
    // turn the string into a array of characters
    const arrOfString = string.split("");

    // loops over the array and replaces the current index character with a character from another random index
    for (let i = 0; i < arrOfString.length; i++) {
        const randPos = randomNum(arrOfString.length)
        const temp = arrOfString[i];
        arrOfString[i] = arrOfString[randPos];
        arrOfString[randPos] = temp;
    }

    // returns and joins the array back into a string
    return arrOfString.join("");
}

// generate a random number up to 255
function randomNum(maxNum) {
    // divide the max num of a "Uint8Array" by the max num the user wants and saves the divided num in iterator for later use
    let maxNumTester = Math.ceil(255 / maxNum);
    let iterator = maxNumTester;

    // allows the use of the crypto method in a browser window
    let crypto = window.crypto;
    // creates a typed array for "getRandomeValues" with 1 value to be randomized
    let typedArray = new Uint8Array(1);

    // generates the random value
    const rand = crypto.getRandomValues(typedArray);

    // convert the 0-255 random number to a smaller random num if needed
    for (let i = 0; i < maxNum + 1; i++) {
        if (rand <= maxNumTester) {
            return i
        }
        maxNumTester += iterator;
    }
}

