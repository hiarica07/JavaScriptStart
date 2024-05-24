function countDigit(number) {
  if (number < 0) {
    number = -number;
  }

  if (number < 10) {
    return 1;
  } else {
    return 1 + countDigit(Math.floor(number / 10));
  }
}

console.log(countDigit(-1234));
