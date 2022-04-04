import './App.css';
import SkaiciusMygtukas from './Components/SkaiciusMygtukas';
import { useState } from "react"
import SkaiciusH2 from './Components/SkaiciusH2';

function App() {

    const [sk, setSk] = useState(0);

    const add = () => {
        setSk(s => ++s);
    }

  return (
    <div className="App">
      <h1>STaTE UPLiFTINg</h1>

        <SkaiciusMygtukas add={add}></SkaiciusMygtukas>
        <SkaiciusH2 sk={sk}></SkaiciusH2>

    </div>
  );
}

export default App;
