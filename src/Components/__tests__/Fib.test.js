import Form from '../Form';

describe("Fib Function", () => {

    test('Form result is undefined on negative input', () => {
        const input = -5;
        const output = 'undefined';
        expect(Form.fib(input)).toEqual(output);
    })
    test('Form result is undefined on float input', () => {
        const input = 5.5;
        const output = 'undefined';
        expect(Form.fib(input)).toEqual(output);
    })
    test('Form result is n for n<2', () => {
        const input1 = 0;
        const input2 = 1;
        const output1 = 0;
        const output2 = 1;
        expect(Form.fib(input1)).toEqual(output1);
        expect(Form.fib(input2)).toEqual(output2);
    })
})
