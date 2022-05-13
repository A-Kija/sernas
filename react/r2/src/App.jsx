
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [trees, setTrees] = useState([]);

  useEffect( () => {
    axios.get('http://localhost:3003/trees-manager')
    .then(res => {
      console.log(res.data);
      setTrees(res.data);
    })
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Labas</h1>
        {
          trees.filter(t => t.name !== 'Agrastas').map(t => <div key={t.id}>{t.name}</div>)
        }
      </header>
    </div>
  );
}

export default App;
