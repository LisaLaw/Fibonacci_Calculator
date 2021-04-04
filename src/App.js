import React, { Component } from 'react';
import './App.css';
import Form from './Components/Form.js';

const title = 'Fibonacci Calculator';
const author = 'made by Lisa Law';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="img_container"></div>
        <h1>{title}</h1>
        <h5>{author}</h5>
        <Form />
        <p id="result_text">Your fib number is:</p>
        <div id="results"> </div>
      </div>
    );
  }
}

export default App;
