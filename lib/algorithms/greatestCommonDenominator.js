function greatestCommonDenominator(number1, number2) {
  const remainder = number1 % number2;
  if (remainder === 0) return number2;

  return greatestCommonDenominator(number2, remainder);
}

module.exports = greatestCommonDenominator;
