import { useEffect, useReducer, useState } from 'react';
import { add1, add11, addRand, cc, dif1, dif11, difRand } from './Actions/basic';
import './App.css';
import rand from './Common/rand';
import countReducer from './Reducers/countReducer';

function App() {

    const [countR, dispachR] = useReducer(countReducer, 333);
    const [random, setRandom] = useState(100);

    const [color, dispachColor] = useReducer(countReducer, 'pink');

    useEffect(() => {
        setRandom(rand(10, 80));
    }, []);

    const getNewRand = (a) => {
        if ('+' === a) {
            dispachR(addRand(random));
        } else {
            dispachR(difRand(random));
        }
        setRandom(rand(10, 80));
    }

    return (
        <div className="App">
            <h1>USE REduCER</h1>
            <h2>Count REDUCER NOW: {countR}</h2>
            <div className="buttons">
                <button onClick={() => dispachR(add1())}>+1</button>
                <button onClick={() => dispachR(dif1())}>-1</button>
                <button onClick={() => dispachR(add11())}>+11</button>
                <button onClick={() => dispachR(dif11())}>-11</button>
                <button onClick={() => dispachR(addRand(random))}>+{random}</button>
                <button onClick={() => dispachR(difRand(random))}>-{random}</button>
                <button onClick={() => getNewRand('+')}>+RAND</button>
                <button onClick={() => getNewRand('-')}>-RAND</button>
                <button onClick={() => dispachColor(cc())}>Change</button>
            </div>
            <div className="S" style={{
                background: color
                }}>

            </div>
        </div>
    );
}

export default App;