function PasswordGenerator(passLen, acceptNum, acceptSymbol) {
    const alphaChars = "abcdefghijklmnopqrstuvwxyz";
    let acceptUpper = false
    let upperNum = null

    const numeralChars = "1234567890";

    const symbolChars = "!@#$%^&*";

    let newPassword = "";

    // goal for loop: create a password that will use at least 1 of each type of character that the user selects including, a lowercase alpha, a uppercase alpha, a numeral character, and a symbol, to do this, 

    // create a loop that will repeat "passLen" times

        
}

function randomNum(maxNum) {
    let maxNumTester = Math.ceil(255 / maxNum);
    let iterator = maxNumTester;

    // allows the use of the crypto method in a browser window
    let crypto = window.crypto;
    // creates a typed array for "getRandomeValues" with 1 value to be randomized
    let typedArray = new Uint8Array(1);

    // generates the random value
    const rand = crypto.getRandomValues(typedArray);
    
    /*if (rand[0] < maxNumTester) {
        return 1
    }*/

    for (let i = 0; i < maxNum; i++) {
        if (rand[0] <= maxNumTester) {
            return i + 1
        }
        maxNumTester += iterator;
    }
}

console.log(randomNum(4))