function findNextSquare(sq) {

  // Return the next square if sq if a perfect square, -1 otherwise

      var isInt = Math.sqrt(sq); // takes the square root of the input

      var toBeSquared; // undefined var to be defined later

      var nextSquare; // undefined var to be defined later
  if (Number.isInteger(isInt)) {
      /* this is a boolean that resolves to true if the square root of the
      input is an integer */

      var toBeSquared = (isInt + 1); /* takes the square root of the
      input and increments it by 1 */

      var nextSquare = Math.pow(toBeSquared, 2); /* squares the now incremented
      toBeSquared var */

      return nextSquare; // returns the next perfect square

      } else if (!(Number.isInteger(isInt))) {

      /* this is a boolean that resolves to true if the square root of
      the input IS NOT an integer, hence the input is not a perfect
      square, if it is not an integer, the function returns -1 */

      return -1;

      }
}
