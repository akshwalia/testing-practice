function reverse(str) {
    let newstr = "";
    for(let i=0; i<str.length; i++) {
        newstr = str.charAt(i) + newstr;
    }

    return newstr;
}

module.exports = reverse;