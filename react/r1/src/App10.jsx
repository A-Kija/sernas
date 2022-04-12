import { useRef, useState, useEffect, useReducer } from 'react';
import './App.css';
import rand from './Common/rand';
import countReducer from './Reducers/countReducer';

function App() {

    const [count, setCount] = useState(100);
    const countRef = useRef([]);
    const inp = useRef();

    const [countR, dispachR] = useReducer(countReducer, 333);

    
    useEffect(() => {
        inp.current.focus();
        console.log(inp);
        // document.querySelector('input').focus();
      }, []);

    const countNow = () => {
        countRef.current.push(count);
        setCount(c => c + rand(5, 100))
    }

    const undo = () => {
        if (countRef.current.length === 1) {
            setCount(countRef.current[0]);
        } else {
            setCount(countRef.current.pop());
        }
    }


  return (
    <div className="App">
      <h1>USE Ref</h1>
      <h2>Count NOW: {count}</h2>
      <h2>Count REDUCER NOW: {countR}</h2>

      <input type="text" ref={inp}></input>

      <button onClick={countNow}>COUNT NOW!</button>
      <button onClick={undo}>Undo</button>
    </div>
  );
}

export default App;