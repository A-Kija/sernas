import './App.css';
import SkaiciusMygtukas from './Components/SkaiciusMygtukas';
import { useState } from "react"
import SkaiciusH2 from './Components/SkaiciusH2';

function App() {

    const [sk, setSk] = useState(0);
    const [kv, setKv] = useState([]);

    const add = () => {
        setSk(s => ++s);
    }

    const addKv = () => {
        setKv(k => [...k, 'bū']);
    }

  return (
    <div className="App">
      <h1>STaTE UPLiFTINg</h1>

        <SkaiciusMygtukas add={add} addKv={addKv}></SkaiciusMygtukas>
        <SkaiciusH2 sk={sk} kv={kv}></SkaiciusH2>

    </div>
  );
}

export default App;
