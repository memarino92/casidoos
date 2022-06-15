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

console.log(longText('lol', -1))