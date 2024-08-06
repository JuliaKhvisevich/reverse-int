module.exports = function reverse (n) {
  const positiveNumber = Math.abs(n);
  const stringNumber = String(positiveNumber);
  const splitNumber = stringNumber.split('');
  const reverseNumber = splitNumber.reverse();
  if (reverseNumber[0] === '0') {
    delete reverseNumber[0];
  };
  const newTextNumber = reverseNumber.join('');
  const newNumber = Number(newTextNumber);
  return newNumber;
}
