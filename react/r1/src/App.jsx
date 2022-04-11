import { useRef, useState } from 'react';
import './App.css';

function App() {

    const [count, setCount] = useState(100);
    const countRef = useRef(100);
    let countLet = 100;


  return (
    <div className="App">
      <h1>USE Ref</h1>
      <h2>Count NOW: {count}</h2>
      <h2>Count REF: {countRef.current}</h2>
      <h2>Count LET: {countLet}</h2>


      <button onClick={() => setCount(c => c + 1)}>COUNT NOW!</button>
      <button onClick={() => countRef.current = ++countRef.current}>SET REF</button>
      <button onClick={() => countLet = ++countLet}>SET LET</button>
    </div>
  );
}

export default App;