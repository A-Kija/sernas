import kvadratelis from '../Reducers/kvadratelis';
import { useReducer } from 'react';
import { addKv } from '../Actions/kvadratelis';

function Kvadratelis() {

    const [kv, dispachKv] = useReducer(kvadratelis, [1,1,1]);

    return (
        <>
        <button onClick={() => dispachKv(addKv())}>ADD</button>
        <div className="kvc">
            {
                kv.map((k, i) => <div key={i} className="BS"></div>)
            }
        </div>
        </>
    )
}

export default Kvadratelis;