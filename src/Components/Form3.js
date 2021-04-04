import React, { Component } from 'react';

class Form3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fib_nr: null
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = this.state
        console.log(data)
    }

    handleInputChange = (e) => {
        e.preventDefault()
        console.log(e.target.name)
        console.log(e.target.value)
        this.setState({
            fib_nr: e.target.value
        })

        return e.target.value
    }
    render() {
        const { fib_nr } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p><input type="number" name="fib_nr" onChange={this.handleInputChange} /></p>
                    <p><button>Calculate my number.</button></p>
                </form>
            </div>
        );
    }

}

export default Form3;