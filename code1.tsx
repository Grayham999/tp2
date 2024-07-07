// Importing React and FunctionComponent type from React
import React, { FunctionComponent } from 'react';

// Defining the type for the props
interface GreetingProps {
  name: string;
}

// Using the defined prop type in the functional component
const Greeting: FunctionComponent<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;


//Code 01: Converting Functional Component to TypeScript
// Importing React and Types: Import the necessary types from React.
// Defining Prop Types: Define the type for the props.
// Updating the Component: Use the defined prop type in the component.