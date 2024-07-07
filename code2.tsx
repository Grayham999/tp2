// Importing React and Component type from React
import React, { Component } from 'react';

// Defining the type for the state
interface CounterState {
  count: number;
}

// Defining the type for the props (if any)
// Here, we assume there are no props, so we use an empty object type
interface CounterProps {}

// Using the defined state and prop types in the class component
class Counter extends Component<CounterProps, CounterState> {
  // Initializing state with the defined state type
  state: CounterState = {
    count: 0
  };

  // Defining the increment method with the correct typing
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Rendering the component
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


//Code 02: Converting Class Component to TypeScript
// Importing React and Types: Import the necessary types from React.
// Defining State Type: Define the type for the state.
// Defining Prop Types: Define the type for the props (if any).
// Updating the Component: Use the defined state and prop types in the component