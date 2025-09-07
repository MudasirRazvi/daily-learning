### Day 3: Components (Detailed Notes)

#### Functional vs Class Components
- **Functional Components**: These are JavaScript functions that return JSX. They are simple, easy to read, and recommended for most use cases. Functional components can use React hooks for state and lifecycle features.
- **Class Components**: These are ES6 classes that extend `React.Component`. They have access to lifecycle methods and can hold local state using `this.state`. Class components are less common in modern React due to the introduction of hooks.

#### Creating and Exporting Components
- **Functional Component Example**:
    ```js
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }
    export default Welcome;
    ```
    - Define a function that receives `props` as an argument.
    - Return JSX from the function.
    - Export the component using `export default`.

#### Composing Components
- Components can be nested inside other components to build complex UIs.
- Example of using a component inside another:
    ```js
    <Welcome name="Sara" />
    ```
    - This renders the `Welcome` component and passes the `name` prop as "Sara".
    - Composing components helps in reusing code and organizing the UI into smaller, manageable pieces.

#### Additional Notes
- Props are used to pass data from parent to child components.
- Components must start with a capital letter.
- Functional components are preferred for simplicity and performance.
- Use hooks like `useState` and `useEffect` in functional components for state and side effects.
