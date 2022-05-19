import TreeLine from "./Front/TreeLine";
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../bootstrap.css';

function Front() {

    const [trees, setTrees] = useState([]);

    // Read
  useEffect(() => {
    axios.get('http://localhost:3003/trees-manager')
      .then(res => {
        console.log(res.data);
        setTrees(res.data);
      })
  }, []);

    return (
        <>
            
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <h1>Welcome to the Tree Shop</h1>
                    </div>
                    <div className="col-12">
                    <ul className="list-group">
                {
                  trees.map(t => <TreeLine key={t.id} tree={t}></TreeLine>)
                }
              </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Front;