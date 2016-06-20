function isPalindrome(str) {

  if (typeof str === 'string') {
// the above line tests the data type, whether or not the input is a string,
// it has to be a string to test for a palindrome
      var inputString = str.toLowerCase(); // this converts to the input string
      // to lowercase and assigns it to the var inputstring
      var outputString = "";
      // this is the var that will be built as the reverse string of the input

      for (i = inputString.length - 1; i >= 0; i--) {
              outputString = outputString.concat(inputString.charAt(i));
      // this for loop iterates backwards over the input string and builds
      // the outputString as the reverse of the input string, it only works
      // if the second condition is written as i >= 0
      }

      if (inputString === outputString) {
          // if the inputString is a palindrome this code gets executed
          console.log(outputString);
          console.log('this string is a palindrome');
          return true;
      } else {
          // if the inputstring is NOT a palindrome, this code gets executed
          console.log(outputString);
          console.log('this string IS NOT a palindrome');
          return false;
      }

  } else {
    // if the input argument, str, is not a string, then the following
    // statement gets returned and console logged
    console.log('only strings can be tested, please enter a string');
    return 'only strings can be tested, please enter a string';
  }
}
