### Day 2: JSX & Rendering (Detailed Notes)

#### What is JSX?
- **JSX (JavaScript XML)** is a syntax extension for JavaScript, commonly used with React.
- It allows you to write HTML-like code directly within JavaScript files, making UI code more readable and expressive.
- Browsers do not understand JSX directly; tools like Babel transpile JSX into standard JavaScript.

#### Why use JSX?
- Makes code easier to understand and maintain.
- Helps visualize the UI structure within JavaScript logic.
- Enables embedding dynamic data and expressions directly in the markup.

#### Embedding Expressions in JSX
- You can embed any valid JavaScript expression inside curly braces `{}` within JSX.
    ```jsx
    <h1>{2 + 2}</h1> // Renders: 4
    <p>{user.name}</p> // Renders the value of user.name
    ```
- You can use functions, variables, and expressions, but not statements (like `if` or `for`).

#### Rendering Elements
- **ReactDOM** is used to render React elements into the DOM.
    ```jsx
    import ReactDOM from 'react-dom/client';
    ReactDOM.createRoot(document.getElementById('root')).render(<App />);
    ```
- The first argument is the DOM node where you want to mount your React app.
- The second argument is the React element or component you want to render.

#### Immutability of Elements
- React elements are **immutable**; once created, their properties (props) cannot be changed.
- To update the UI, you create new elements with updated data and let React handle the DOM updates efficiently.
- This approach helps React optimize rendering and improves performance.

#### Key Points
- JSX is not required, but it makes React code more intuitive.
- Embedding expressions allows dynamic content in the UI.
- Rendering is handled by ReactDOM, connecting React components to the actual DOM.
- Immutability ensures predictable UI updates and better performance.

#### Example
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting name="World" />);
```
- This renders: `Hello, World!` in the browser.
- If you want to change the name, you create a new element with a different prop value.