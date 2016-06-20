function isPalindrome(str) {
    var inputString = str.toLowerCase();
    var outputArray = [];
    for (var i = inputString.length - 1; i >= 0; i--) {
        outputArray.push(inputString.charAt(i));
    }

    var outputString = outputArray.join("");
    if (outputString === inputString) {
        console.log(outputString);
        return true;
    } else if (outputString != inputString) {
        console.log(outputString);
        return false;
    }
}
