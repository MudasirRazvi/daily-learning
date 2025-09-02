import React from "react";

// App.js
// Day 2: JSX & Rendering Practice


// Example 1: Embedding Expressions in JSX
function ExpressionExample() {
    const user = { name: "Mudasir" };
    return (
        <div>
            {/* Embedding a simple expression */}
            <h2>2 + 2 = {2 + 2}</h2>
            {/* Embedding a variable */}
            <p>User Name: {user.name}</p>
        </div>
    );
}

// Example 2: Rendering Elements with Props
function Greeting(props) {
    // Professional comment: Using props to pass dynamic data to components
    return <h1>Hello, {props.name}!</h1>;
}

// Example 3: Immutability of Elements
function ImmutabilityExample() {
    // Professional comment: React elements are immutable; to update, create new elements
    const firstGreeting = <Greeting name="World" />;
    const secondGreeting = <Greeting name="React Learner" />;
    return (
        <div>
            {firstGreeting}
            {secondGreeting}
        </div>
    );
}

// Main App Component
export default function App() {
    return (
        <div>
            {/* Professional comment: Practicing JSX syntax and rendering */}
            <h1>JSX & Rendering Practice</h1>
            <ExpressionExample />
            <Greeting name="Developer" />
            <ImmutabilityExample />
        </div>
    );
}