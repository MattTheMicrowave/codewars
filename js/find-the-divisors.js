function divisors(integer) {
  /* since you want to output an array you have to declare an empty array to
  which you will push to */

  divArray = [];

  /* then you have to loop from 2, since you are not interested in divisions by 1, and
  the integer one less than your argument, since you are not interested in divisions by
  the same number into itself */
  for (i = 2; i < integer; i++) {

  // you want to declare a variable to store the remander value
      var rem = (integer) % i;

        /* then you want to test if it was divisible by i, ie the remainder is equal to 0,
        if it is you want to push it to the previously declared array */
        if (rem == 0) {
          divArray.push(i);
      }

    }

    /* since only i's that produce remainders of 0 will be pushed to the array, if we have an empty
    array at the end, that means the integer passed as the argument was a prime number */


    if (divArray.length == 0) {

    return integer + " is prime";

    }
    /* if the array is not empty, then the argument was not a prime number, and the array
    gets returned */
    else {

    return divArray;
    }
};
