import React, { Component } from 'react';
import '../Styles/form.css';
import computeFib from './Fib_Calc';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
    }


    handleButtonClick = val => {
        var results = document.getElementById("results");
        results.innerHTML = computeFib(val);
    }

    render() {
        return (
            < form className="form" id="form" onSubmit={this.handleSubmit}>
                <label htmlFor="fib_nr" id="label">Choose a position in the Fib sequence:
                    <input
                        type="number"
                        id="fib_nr"
                        name="fib_nr"
                        required="required"
                        min="0"
                        step="1"
                        onInvalid={this.handleSubmit}
                        value={this.state.value}
                        onChange={this.handleChange}
                        placeholder="Choose a number." />
                </label>
                <button type="submit" id="submit_button" onClick={() => this.handleButtonClick(this.state.value)}> Get your Fib Number!
                </button >
            </form >
        );
    }

}

export default Form;