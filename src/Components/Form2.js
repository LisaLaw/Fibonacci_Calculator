import React, { Component } from 'react';
import handleClick from '../Components/Form.js';

class Form2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fib_nr: ''
        }
    }

    handleNumberChange = (event) => {
        this.setState({
            fib_nr: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(`${this.state.fib_nr}`)
        event.preventDefault() //prevent deletion
    }

    render() {
        const { fib_nr } = this.state
        return (
            <form onSubmit={this.handleSubmit}>

                <div>
                    <label>Your number:</label>
                    <input type="number" value={fib_nr} onChange={this.handleNumberChange} />
                </div>
                <button type="submit" onClick={() => handleClick(document.getElementById("fib_nr").value)}>Calculate"</button>

            </form>
        );
    }
}

export default Form2;