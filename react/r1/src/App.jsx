import { useEffect, useState } from 'react';
import getNewId from './Common/id';
import Create from './Components/crud/Create';
import Read from './Components/crud/Read';
import './crud.scss';

function App() {

    const [zoo, setZoo] = useState([]);

    useEffect(() => {
        let data = localStorage.getItem('zoo');
        if (null === data) {
            localStorage.setItem('zoo', JSON.stringify([]));
            setZoo([]);
        }
        else {
            setZoo(JSON.parse(data));
        }
    }, []);

    const create = (data) => {
        const animal = {
            type: data.type,
            color: data.color,
            isalive: data.isalive,
            id: getNewId()
        }
        // localStorage logic
        const newData = [...zoo, animal];
        localStorage.setItem('zoo', JSON.stringify(newData));
        //

        setZoo(zoo => [...zoo, animal]);
    } 



  return (
    <div className="app">
            <div className="top">
            <h1>ZoO</h1>
            </div>
            <div className="content">
            <Create create={create}></Create>
            <Read zoo={zoo}></Read>
            </div>
            <div className="bottom">
        
            </div>
    </div>
  );
}


export default App;