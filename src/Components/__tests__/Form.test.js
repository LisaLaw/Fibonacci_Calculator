import { render } from '@testing-library/react';
import Form from '../Form';

describe('renders form with all elements', () => {
    test('renders label element', () => {

        render(<Form />);
        const labelElem = document.getElementById("label")
        expect(labelElem).toBeInTheDocument();
    })
    test('renders input element', () => {

        render(<Form />);
        const inputElem = document.getElementById("fib_nr");
        expect(inputElem).toBeInTheDocument();
    });
    test('renders button', () => {

        render(<Form />);
        const btn = document.getElementById("submit_button");
        expect(btn).toBeInTheDocument();
    })
})
