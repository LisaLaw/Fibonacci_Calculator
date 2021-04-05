import React, { Component } from 'react';
import '../Styles/form.css';

function clearResult() {
    var results = document.getElementById("results");
    results.innerHTML = '';
    return null;
}

function removeErrorMessage() {
    var error = document.getElementById("error_message");
    error.parentNode.removeChild(error);
    document.getElementById("fib_nr").classList.remove("input_error");
}

function createErrorMsg(msg) {
    var label = document.getElementById('label');
    var error = document.createElement('div');
    error.id = 'error_message';
    error.innerHTML = msg;
    document.getElementById("fib_nr").classList.add("input_error");
    label.appendChild(error);
}

function fib(n) {
    var results = document.getElementById("results");
    var error = document.getElementById("error_message");
    if (results) {
        clearResult();
    }
    if (error) {
        removeErrorMessage();
    }
    if (n < 0) {
        let msg = 'Please choose a positive value.';
        createErrorMsg(msg);
        clearResult();
    }
    else if (n % 1 !== 0) {
        let msg = 'Please choose an integer.';
        createErrorMsg(msg);
        clearResult();
    }
    else if (n < 2) {
        return n;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
}

const handleClick = val => {
    var results = document.getElementById("results");
    results.innerHTML = fib(val);
}

class Form extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            < form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="fib_nr" id="label">Choose a position in the Fib sequence:
                    <input type="number" id="fib_nr" name="fib_nr" required="required" min="0" step="1" onInvalid={this.handleSubmit} placeholder="Choose a number." />
                </label>
                <button type="submit" onClick={() => handleClick(document.getElementById("fib_nr").value)}> Get your Fib Number!
                </button >
            </form >
        );
    }

}

export default Form;