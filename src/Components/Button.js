import React from 'react';
import '../Styles/btn.css';

handleFibCalculation = val => {
    let prev_nr = document.getElementById("fib_nr").value;
    let new_nr = prev_nr * val;
    document.write("Your number is " + new_nr);
};

const btn = props => (<div className="btn" onClick={props.handleFibCalculation(props.children)}></div>);

export default btn;