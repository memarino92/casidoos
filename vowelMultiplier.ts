// Create a loooong teeeext generator that takes in a string and an integer n,
// and multiplies the vowels in the string by n.

// Example:

// $ longText('hello world', 3)
// $ 'heeellooo wooorld'

// $ longText('lol', 10)
// $ 'looooooooool'

const longText = (string: string, multiplier: number): string => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let resultString = '';
    
    [...string].forEach((letter) => {
        if (vowels.indexOf(letter) !== -1) {
            for (let i = 0; i < multiplier; i++){
                resultString += letter 
            }
        }
        else {
            resultString += letter
        }
    })
    
    return resultString
}

console.log(longText('hello world', 3))
// heeellooo wooorld
console.log(longText('lol', 10))
// looooooooool