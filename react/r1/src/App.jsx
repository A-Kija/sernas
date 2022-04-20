import { useCallback, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

    const [users, setUsers] = useState([]);

    const [c, setC] = useState(1);

    // const abc = () => {
    //     console.log('ABC');
    // }

    const abc = useCallback(() => {
        console.log('ABC');
    }, []);


    useEffect(() => {
        console.log('GO EFFECT');
        abc();
    }, [abc]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users?delay=3')
        .then(res => setUsers(res.data.data));
    }, []);

    
    return (
        <div className="App">
            <h1>The End season: {c}</h1>
            <button onClick={() => setC(a => a + 1)}>ReRender</button>
            {
                users.length ? users.map(u => <img key={u.id} alt="aik" src={u.avatar}></img>) : <div className="lds-heart"><div></div></div>
            }
        </div>
    );
}

export default App;