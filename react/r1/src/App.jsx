import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>ROUTER</h1>
        <Link to="/back-office" className="super">Back Office</Link>
        <Link to="/sweet-home" className="super">Alabama</Link>
    </div>
    </BrowserRouter>
  );
}

export default App;