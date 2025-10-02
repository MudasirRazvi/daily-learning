import './App.css';
import {Header1, Header2, Header3} from './components/Header';

export default function App() {
  return (
    <div className="App">
      <Header1 />
      <h1>Hello World</h1>
      <Header2 />
      <p>This is my first React app.</p>
      <Header3 />
    </div>
  );
}

