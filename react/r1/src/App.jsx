import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Office1 from './Routes/Office1';
import Alabama from './Routes/Alabama';

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <h1>ROUTER</h1>
        <Link to="/back-office" className="super">Back Office</Link>
        <Link to="/sweet-home" className="super">Alabama</Link>


        <Routes>
            <Route path="/" element={<div>Hello!</div>}></Route>
            <Route path="/back-office" element={<Office1></Office1>}></Route>
            <Route path="/sweet-home" element={<Alabama></Alabama>}></Route>
            <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
        
    </div>
    
    </BrowserRouter>

  );
}

export default App;