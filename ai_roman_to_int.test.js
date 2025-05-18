import { romanToInt, intToRoman } from './ai_roman_to_int.js';

describe('intToRoman', () => {
  test('TC1: 0 → Error', () => {
    expect(() => intToRoman(0)).toThrow('Invalid integer. Must be between 1 and 3999');
  });

  test('TC2: 1 → "I"', () => {
    expect(intToRoman(1)).toBe('I');
  });

  test('TC3: 3999 → "MMMCMXCIX"', () => {
    expect(intToRoman(3999)).toBe('MMMCMXCIX');
  });

  test('TC5: 4 → "IV"', () => {
    expect(intToRoman(4)).toBe('IV');
  });

  test('TC6: -9 → Error', () => {
    expect(() => intToRoman(-9)).toThrow('Invalid integer. Must be between 1 and 3999');
  });

  test('TC7: 1938 → "MCMXXXVIII"', () => {
    expect(intToRoman(1938)).toBe('MCMXXXVIII');
  });
});

describe('romanToInt', () => {
  test('TC1: "I" → 1', () => {
    expect(romanToInt('I')).toBe(1);
  });

  test('TC2: "IV" → 4', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  test('TC3: "MCMXCIV" → 1994', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });

  test('TC4: "IIII" → Error', () => {
    expect(() => romanToInt('IIII')).toThrow('Invalid Roman numeral');
  });

  test('TC6: "ix" → Error', () => {
    expect(() => romanToInt('ix')).toThrow('Invalid Roman numeral.');
  });

  test('TC7: "23" → Error', () => {
    expect(() => romanToInt('23')).toThrow('Invalid Roman numeral.');
  });
});
