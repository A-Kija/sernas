
import { useEffect, useState } from 'react';
import axios from 'axios';
import './bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import TreeLine from './Components/TreeLine';


function App() {

  const [trees, setTrees] = useState([]);

  const [createData, setCreateData] = useState(null);

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  useEffect(() => {
    axios.get('http://localhost:3003/trees-manager')
      .then(res => {
        console.log(res.data);
        setTrees(res.data);
      })
  }, [lastUpdate]);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post('http://localhost:3003/trees-manager', createData)
    .then(res => {
      console.log(res);
      setLastUpdate(Date.now());
    });

  },[createData])



  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Create setCreateData={setCreateData}></Create>
        </div>
        <div className="col-8">
          <div className="card m-2">
            <div className="card-header">
              <h2>Tree List</h2>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {
                  trees.map(t => <TreeLine key={t.id} tree={t}></TreeLine>)
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
