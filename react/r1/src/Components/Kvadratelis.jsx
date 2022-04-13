// import kvadratelis from '../Reducers/kvadratelis';
import { useReducer } from 'react';
import { addKv, delKv } from '../Actions/kvadratelis';
import kvMaster from '../Reducers/kvMaster';

function Kvadratelis() {

    const [kv, dispachKv] = useReducer(kvMaster, []);

    return (
        <>
        <button onClick={() => dispachKv(addKv())}>ADD</button>
        <button onClick={() => dispachKv(delKv())}>REM</button>
        <div className="kvc">
            {
                kv.map((k, i) => <div key={i} className="BS"></div>)
            }
        </div>
        </>
    )
}

export default Kvadratelis;