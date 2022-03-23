import './App.css';
import Miskas from './Components/Miskas';

function App() {
  return (
    <div className="App">
        <h1>PROPS</h1>
        <Miskas forest="blue" big={true} msg="Alio"></Miskas>
        <Miskas forest="red" big={false} msg="Super"></Miskas>
    </div>
  );
}

export default App;