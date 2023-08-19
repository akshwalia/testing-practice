

function isValidString(str) {
    if(typeof str !== 'string') 
        return false;

    return true;
}

function isUpperCase (character) {
    if((Number(character)>=65 && Number(character)<=90))
        return true;
    
    return false;
}

function isLowerCase(character) {
    if((Number(character)>=97 && Number(character)<=122))
        return true;
    else    
        return false;
}

function raiseIndex(char) {
    let cipherChar = "";
    if(char === 122)
        cipherChar = 'a';
    else    
        cipherChar = String.fromCharCode(char+1);

    return cipherChar;
}

function caesarCipher (str) {
    if(!isValidString(str)) {
        return 'not a valid string';
    }

    let newStr = "";
    for(let i=0; i<str.length; i++) {
        if(isLowerCase(str.charCodeAt(i))) {
            newStr = newStr + raiseIndex(str.charCodeAt(i));
        }
        else if(isUpperCase(str.charCodeAt(i))) {
            newStr =  newStr + raiseIndex(str[i].toLowerCase().charCodeAt(0)).toUpperCase();
        }
        else {
            newStr = newStr + str[i];
        }
    }

    return newStr;
}

module.exports = caesarCipher;