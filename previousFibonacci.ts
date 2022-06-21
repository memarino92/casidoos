// Given a Fibonacci number, give the previous Fibonacci number.
// If the number given is not a Fibonacci number, return -1.

const previousFibonacci = (input:number): number => {
    if (input === 0 || input === 1) return 0
    const fibSequence = [0,1]
    
    while (fibSequence.at(-1)! < input) {
        fibSequence.push(fibSequence[0] + fibSequence[1])
        fibSequence.shift()
    }
    if (fibSequence.at(-1) === input) return fibSequence.at(-2)!
    return -1
}

if (import.meta.vitest) {
    const { it, assert, describe } = import.meta.vitest;
    describe('previousFibonacci', () => {
        it('should return the previous Fibonacci number than the input', () => {
            const input = 55
            const expectedOutput = 34
            const actualOutput = previousFibonacci(input)
            assert.equal(actualOutput, expectedOutput)
        })
        it('should return -1 if the number is not a part of the fibonacci sequence', () => {
            const input = 10
            const expectedOutput = -1
            const actualOutput = previousFibonacci(input)
            assert.equal(actualOutput, expectedOutput)
        })
    })
}
