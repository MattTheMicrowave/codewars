function removeSmallest(numbers) {


  var valueCheck = numbers[0];

  for (i = 1; i = numbers.length - 1; i++) {

      if (valueCheck <= numbers[i]) {
          return valueCheck;
      } else if (valueCheck > numbers[i]) {
          valueCheck = numbers[i];
          return valueCheck;
      }


  var smallestIndex = numbers.indexOf(valueCheck);

  numbers.splice(smallestIndex, 1);
  }
  return numbers;

}
