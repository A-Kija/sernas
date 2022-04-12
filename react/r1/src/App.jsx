import { useReducer } from 'react';
import { add1, add11, dif1, dif11 } from './Actions/basic';
import './App.css';
import rand from './Common/rand';
import countReducer from './Reducers/countReducer';

function App() {

    const [countR, dispachR] = useReducer(countReducer, 333);

    return (
        <div className="App">
            <h1>USE REduCER</h1>
            <h2>Count REDUCER NOW: {countR}</h2>
            <div className="buttons">
                <button onClick={() => dispachR(add1())}>+1</button>
                <button onClick={() => dispachR(dif1())}>-1</button>
                <button onClick={() => dispachR(add11())}>+11</button>
                <button onClick={() => dispachR(dif11())}>-11</button>
            </div>
        </div>
    );
}

export default App;