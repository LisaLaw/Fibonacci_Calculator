import React, { Component } from 'react';
import '../Styles/form.css';

function handleChange() {
    var results = document.getElementById("results");
    var error = document.getElementById("error_message");

    var rootElem = document.getElementById('root');
    var root_children = rootElem.childNodes;
    if (results) {
        results.innerHTML = '';
    }
    if (error) {
        root_children[0].unmountComponentAtNode();
    }
    return null;
}

function fib(n) {
    var rootElem = document.getElementById('root');
    var root_children = rootElem.childNodes;
    var error = document.createElement('div', { id: 'error_message' }, '');

    if (n < 0) {
        root_children[0].appendChild(error);
        error.innerHTML = 'Please choose a positive input.';
        handleChange();
    }
    else if (n % 1 !== 0) {
        root_children[0].appendChild(error);
        error.innerHTML = 'Please choose an integer.';
        handleChange();
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
                <label htmlFor="fib_nr">Type in a number:
                    <input type="number" id="fib_nr" name="fib_nr" required="required" oninvalid="this.setCustomValidity('')" placeholder="Choose a number." />
                </label>
                <button type="submit" onClick={() => handleClick(document.getElementById("fib_nr").value)}> Get your Fib Number!
                </button >
            </form >
        );
    }

}

export default Form;