// Create a loooong teeeext generator that takes in a string and an integer n,
// and multiplies the vowels in the string by n.

// Example:

// $ longText('hello world', 3)
// $ 'heeellooo wooorld'

// $ longText('lol', 10)
// $ 'looooooooool'

export const longText = (string: string, multiplier: number): string => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let resultString = '';

  [...string].forEach((letter) => {
    if (vowels.indexOf(letter) !== -1) {
      for (let i = 0; i < multiplier; i++) {
        resultString += letter;
      }
    } else {
      resultString += letter;
    }
  });

  return resultString;
};

if (import.meta.vitest) {
  const { it, assert, describe } = import.meta.vitest;
  describe('longText', () => {
    it('should multiply one vowel many times by the given multiplier', () => {
      const input = 'lol';
      const multiplier = 10;
      const result = longText(input, multiplier);
      const expectedResult = 'looooooooool';

      assert.equal(result, expectedResult);
    });

    it('should multiply multiple vowels many times by the given multiplier', () => {
      const input = 'hello world';
      const multiplier = 3;
      const result = longText(input, multiplier);
      const expectedResult = 'heeellooo wooorld';

      assert.equal(result, expectedResult);
    });
  });
}
