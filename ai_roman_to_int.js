// Function to convert Roman numeral to integer
function romanToInt(roman) {
  if (!/^[IVXLCDM]+$/.test(roman)) { // Remove the 'i' flag
    throw new Error('Invalid Roman numeral.');
  }
  const invalidPatterns = /(IIII|XXXX|CCCC|MMMM|VV|LL|DD|IL|IC|ID|IM|VX|VL|VC|VD|VM|LC|LD|LM|DM)/;
  if (invalidPatterns.test(roman)) {
    throw new Error('Invalid Roman numeral');
  }

  const romanNumeralMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let intValue = 0;

  for (let i = 0; i < roman.length; i++) {
    const current = romanNumeralMap[roman[i]];
    const next = romanNumeralMap[roman[i + 1]];
    if (next && current < next) {
      intValue -= current;
    } else {
      intValue += current;
    }
  }

  return intValue;
}

// Function to convert integer to Roman numeral
function intToRoman(num) {
  if (
    typeof num !== 'number' ||
!Number.isInteger(num) ||
num < 1 ||
num > 3999
  ) {
    throw new Error('Invalid integer. Must be between 1 and 3999'); // Remove period
  }

  const intToRomanMap = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  let roman = '';

  for (const { value, numeral } of intToRomanMap) {
    while (num >= value) {
      roman += numeral;
      num -= value;
    }
  }

  return roman;
}

export { romanToInt, intToRoman };
