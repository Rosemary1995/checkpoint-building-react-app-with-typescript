//original code

import React from 'react'; 

const Greeting = ({ name }) => { 
    return <div>Hello, {name}!</div>;
}; 

export default Greeting;

//transformed code


import React from 'react';

// Define the type for props
interface GreetingProps {
    name: string;
}

// Use the defined type in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

export default Greeting;

//interface GreetingProps defines the type for the name prop, which should be a string.
//React.FC<GreetingProps> provides type-checking for props and enforces the name prop to be a string.



// Code 02: Class Component
//original code

import React, { Component } from 'react'; 

class Counter extends Component { 
    state = {
        count: 0
    }; 

    increment = () => {
        this.setState({ count: this.state.count + 1 }); 
    }; 

    render() { 
        return ( 
            <div> 
                <p>Count: {this.state.count}</p> 
                <button onClick={this.increment}>Increment</button> 
            </div> 
        );
    }
} 

export default Counter;


//transformed code

import React, { Component } from 'react';

// Define the type for state
interface CounterState {
    count: number;
}

// Define the type for props (empty in this case)
interface CounterProps {}

// Extend React.Component with the defined state and props types
class Counter extends Component<CounterProps, CounterState> {
    state: CounterState = {
        count: 0
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default Counter;


//interface CounterState defines the type for the state, ensuring count is a number.
//interface CounterProps defines the type for props (empty here as there are no props).
//class Counter extends Component<CounterProps, CounterState> specifies the types for props and state, providing type-checking and ensuring the state structure is maintained.
