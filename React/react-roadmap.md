# React Frontend Roadmap & Daily Learning Plan

## Frontend-Focused Roadmap Overview

1. **Introduction to React**
2. **JSX & Rendering**
3. **Components (Functional & Class)**
4. **Props & State**
5. **Event Handling**
6. **Conditional Rendering**
7. **Lists & Keys**
8. **Forms & Controlled Components**
9. **Component Lifecycle & Hooks**
10. **Styling in React (CSS, CSS-in-JS, Styled Components)**
11. **React Router (Navigation)**
12. **Context API (State Sharing)**
13. **API Calls (fetch, axios)**
14. **State Management (Redux, Zustand, Context)**
15. **Project Structure & Best Practices**
16. **Testing in React**
17. **Deployment**

---

## Daily Tasks & Notes

### Day 1: Introduction to React
- What is React?
- Why use React for frontend?
- Setting up React (Create React App, Vite)
- Basic folder structure

### Day 2: JSX & Rendering
- What is JSX?
- Embedding expressions in JSX
- Rendering elements

### Day 3: Components
- Functional vs Class Components
- Creating and exporting components
- Composing components

### Day 4: Props & State
- Passing data with props
- Using state in components
- setState and state updates

### Day 5: Event Handling
- Handling events in React
- Passing arguments to event handlers

### Day 6: Conditional Rendering
- if/else in JSX
- Ternary operators
- Logical &&

### Day 7: Lists & Keys
- Rendering lists with map()
- Using unique keys

### Day 8: Forms & Controlled Components
- Handling form inputs
- Controlled vs uncontrolled components

### Day 9: Component Lifecycle & Hooks
- Mounting, Updating, Unmounting
- useEffect, useState, custom hooks

### Day 10: Styling in React
- CSS Modules
- Styled Components
- CSS-in-JS libraries

### Day 11: React Router
- Setting up React Router
- Route, Link, Navigate

### Day 12: Context API
- Creating context
- Providing and consuming context

### Day 13: API Calls
- Fetching data with fetch/axios
- useEffect for API calls

### Day 14: State Management
- Introduction to Redux/Zustand/Context
- Actions, Reducers, Store

### Day 15: Project Structure & Best Practices
- Organizing files and folders
- Naming conventions

### Day 16: Testing in React
- Introduction to testing
- Writing simple tests with Jest/React Testing Library

### Day 17: Deployment
- Building for production
- Deploying to Vercel/Netlify

---

## Tips
- Focus on frontend concepts and UI building.
- Practice daily, build small frontend projects.
- Read official [React documentation](https://react.dev/).
- Join React communities for help.

---











**Continue with detailed notes for each day as you progress.**
---

### Day 1: Introduction to React (Detailed Notes)
- **What is React?**
    - A JavaScript library for building user interfaces, especially single-page applications.
    - Developed and maintained by Facebook.
- **Why use React?**
    - Component-based architecture for reusable UI.
    - Virtual DOM for efficient updates.
    - Large ecosystem and community support.
- **Setting up React**
    - Use `npx create-react-app my-app` for a quick start.
    - Alternative: Vite (`npm create vite@latest my-app -- --template react`).
- **Basic folder structure**
    - `/src`: Main source code.
    - `/public`: Static files.
    - `App.js`: Root component.
    - `index.js`: Entry point.

---

### Day 2: JSX & Rendering (Detailed Notes)
- **What is JSX?**
    - JavaScript XML: Syntax extension for JavaScript.
    - Allows writing HTML-like code in JavaScript files.
- **Embedding expressions**
    - Use `{}` to embed JavaScript expressions: `<h1>{2 + 2}</h1>`
- **Rendering elements**
    - ReactDOM renders components to the DOM: `ReactDOM.createRoot(document.getElementById('root')).render(<App />);`
    - Elements are immutable; create new elements to update UI.

---

### Day 3: Components (Detailed Notes)
- **Functional vs Class Components**
    - Functional: Functions returning JSX.
    - Class: ES6 classes extending `React.Component`.
- **Creating and exporting components**
    - Functional: 
        ```js
        function Welcome(props) {
            return <h1>Hello, {props.name}</h1>;
        }
        export default Welcome;
        ```
- **Composing components**
    - Nest components inside others: `<Welcome name="Sara" />`

---

### Day 4: Props & State (Detailed Notes)
- **Passing data with props**
    - Props are read-only, passed from parent to child.
- **Using state in components**
    - Functional: `const [count, setCount] = useState(0);`
    - Class: `this.state = { count: 0 }`
- **setState and state updates**
    - Always use `setState` or updater functions to change state.

---

### Day 5: Event Handling (Detailed Notes)
- **Handling events**
    - Use camelCase: `onClick={handleClick}`
    - Pass functions, not strings.
- **Passing arguments**
    - Use arrow functions: `onClick={() => handleClick(id)}`

---

### Day 6: Conditional Rendering (Detailed Notes)
- **if/else in JSX**
    - Use variables or functions outside JSX.
- **Ternary operators**
    - `{isLoggedIn ? <Logout /> : <Login />}`
- **Logical &&**
    - `{messages.length > 0 && <Notification />}`

---

### Day 7: Lists & Keys (Detailed Notes)
- **Rendering lists**
    - Use `map()` to render arrays: `{items.map(item => <li key={item.id}>{item.text}</li>)}`
- **Keys**
    - Use unique, stable keys (not array index).

---

### Day 8: Forms & Controlled Components (Detailed Notes)
- **Handling form inputs**
    - Use `onChange` to update state.
- **Controlled vs uncontrolled**
    - Controlled: Value managed by React state.
    - Uncontrolled: Value managed by DOM.

---

### Day 9: Component Lifecycle & Hooks (Detailed Notes)
- **Lifecycle phases**
    - Mounting, Updating, Unmounting.
- **useEffect**
    - Side effects (fetching, subscriptions): `useEffect(() => { ... }, [deps]);`
- **useState**
    - State in functional components.
- **Custom hooks**
    - Reuse logic across components.

---

### Day 10: Styling in React (Detailed Notes)
- **CSS Modules**
    - Scoped CSS: `import styles from './App.module.css'`
- **Styled Components**
    - CSS-in-JS: `const Button = styled.button\`color: red;\`;`
- **CSS-in-JS libraries**
    - Emotion, styled-components, etc.

---

### Day 11: React Router (Detailed Notes)
- **Setting up**
    - Install: `npm install react-router-dom`
- **Route, Link, Navigate**
    - `<Route path="/about" element={<About />} />`
    - `<Link to="/about">About</Link>`
    - `<Navigate to="/login" />`

---

### Day 12: Context API (Detailed Notes)
- **Creating context**
    - `const MyContext = React.createContext();`
- **Providing context**
    - `<MyContext.Provider value={value}>...</MyContext.Provider>`
- **Consuming context**
    - `const value = useContext(MyContext);`

---

### Day 13: API Calls (Detailed Notes)
- **Fetching data**
    - Use `fetch` or `axios` in `useEffect`.
- **useEffect for API calls**
    - Fetch on mount: `useEffect(() => { fetchData(); }, []);`

---

### Day 14: State Management (Detailed Notes)
- **Redux/Zustand/Context**
    - Redux: Centralized state, actions, reducers.
    - Zustand: Minimal, hooks-based state.
    - Context: For simple state sharing.
- **Actions, Reducers, Store**
    - Redux: `dispatch({ type: 'INCREMENT' })`, reducer functions, store setup.

---

### Day 15: Project Structure & Best Practices (Detailed Notes)
- **Organizing files**
    - Group by feature or type (components, hooks, utils).
- **Naming conventions**
    - PascalCase for components, camelCase for functions/variables.

---

### Day 16: Testing in React (Detailed Notes)
- **Introduction to testing**
    - Test components, logic, and UI.
- **Jest/React Testing Library**
    - Render components, simulate events, assert output.

---

### Day 17: Deployment (Detailed Notes)
- **Building for production**
    - `npm run build` creates optimized build.
- **Deploying**
    - Upload `build/` to Vercel, Netlify, or similar platforms.

---