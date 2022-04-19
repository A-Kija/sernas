import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Office1 from './Routes/Office1';
import Alabama from './Routes/Alabama';
import Edit from './Routes/Edit';

export const data = [
    {n: 'barsukas', id: 5},
    {n: 'bebras', id: 9},
    {n: 'krokodilas', id: 15},
    {n: 'vilkas', id: 775},
    {n: 'zuikis', id: 29}
];

function App() {
  return (

    <BrowserRouter>
    <div className="App">
      <h1>ROUTER</h1>
        <Link to="/back-office" className="super">Back Office</Link>
        <Link to="/sweet-home" className="super">Alabama</Link>
        <div>-----------------------------------------------</div>
        {
            data.map(a =><Link key={a.id} to={'/edit/' + a.id + '/' + a.n}>{a.n}</Link>)
        }






        <Routes>
            <Route path="/" element={<div>Hello!</div>}></Route>
            <Route path="/back-office" element={<Office1></Office1>}></Route>
            <Route path="/sweet-home" element={<Alabama></Alabama>}></Route>
            <Route path="/edit/:id/:name" element={<Edit></Edit>}></Route>
            <Route path="*" element={<div>404 not found</div>}></Route>
        </Routes>
        
    </div>
    
    </BrowserRouter>

  );
}

export default App;