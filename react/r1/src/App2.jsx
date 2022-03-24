import './App.css';
import Miskas from './Components/Miskas';
import Upe from './Components/Upe';

function App() {
  return (
    <div className="App">
        <h1>PROPS</h1>
        <Miskas forest="blue" big={1} msg="Alio" a={[]}></Miskas>
        <Miskas forest="red" big={0} msg="Super"></Miskas>
        <Upe color="brown"></Upe>
    </div>
  );
}

export default App;