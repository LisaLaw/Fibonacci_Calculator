import computeFib from '../Fib_Calc';

describe("Fib Function", () => {

    test('Fib result is undefined on negative input', () => {
        const input = -5;
        const output = 'undefined';
        expect(computeFib(input)).toEqual(output);
    })

    test('Fib result is undefined on float input', () => {
        const input = 5.5;
        const output = 'undefined';
        expect(computeFib(input)).toEqual(output);
    })

    test('Fib result is n for n<2', () => {
        const input1 = 0;
        const input2 = 1;
        const output1 = 0;
        const output2 = 1;
        expect(computeFib(input1)).toEqual(output1);
        expect(computeFib(input2)).toEqual(output2);
    })

    test('Fib result is correct for n>2', () => {
        const input = 3;
        const fib1 = computeFib(2);
        const fib2 = computeFib(1);
        const output = fib1 + fib2;
        expect(computeFib(input)).toEqual(output);
    })
})
