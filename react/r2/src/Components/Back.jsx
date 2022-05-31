
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../bootstrap.css';
import '../back.scss';
import Create from './Create';
import TreeLine from './TreeLine';
import Modal from './Modal';
import CreateSize from './CreateSize';
import SizeList from './SizeList';
import { Link } from 'react-router-dom';
import { authConfig } from '../Functions/auth';


function Back() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());// state

  const [trees, setTrees] = useState([]);

  const [createData, setCreateData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [modalData, setModalData] = useState(null);

  const [createSizeData, setCreateSizeData] = useState(null);

  const [sizes, setSizes] = useState([]);


  const [deleteSizeId, setDeleteSizeId] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3003/trees-sizes')
      .then(res => {
        console.log(res.data);
        setSizes(res.data);
      })
  }, [lastUpdate]);

  // Read
  useEffect(() => {
    axios.get('http://localhost:3003/admin/trees-manager', authConfig())
      .then(res => {
        console.log(res.data);
        setTrees(res.data);
      })
  }, [lastUpdate]);

  //Create
  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post('http://localhost:3003/trees-manager', createData)
      .then(res => {
        console.log(res);
        setLastUpdate(Date.now());
      });

  }, [createData]);

  useEffect(() => {
    if (null === createSizeData) {
      return;
    }
    axios.post('http://localhost:3003/trees-size', createSizeData)
      .then(res => {
        console.log(res);
        setLastUpdate(Date.now());
      });

  }, [createSizeData]);

  //Edit
  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios.put('http://localhost:3003/trees-manager/' + editData.id, editData)
      .then(res => {
        console.log(res);
        setLastUpdate(Date.now());
      });

  }, [editData]);

  //Delete
  useEffect(() => {
    if (null === deleteId) {
      return;
    }
    axios.delete('http://localhost:3003/trees-manager/' + deleteId.id,)
      .then(res => {
        console.log(res);
        setLastUpdate(Date.now());
      });

  }, [deleteId])

    //Delete SIZE
    useEffect(() => {
      if (null === deleteSizeId) {
        return;
      }
      axios.delete('http://localhost:3003/trees-manager-sizes/' + deleteSizeId.id,)
        .then(res => {
          console.log(res);
          setLastUpdate(Date.now());
        });
  
    }, [deleteSizeId])

  const deleteComment = id => {
    axios.delete('http://localhost:3003/trees-delete-comment/' + id,)
      .then(res => {
        console.log(res);
        setLastUpdate(Date.now());
      });
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Link to="/logout">Log OUT</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create sizes={sizes} setCreateData={setCreateData} lastUpdate={lastUpdate}></Create>
            <CreateSize setCreateSizeData={setCreateSizeData}></CreateSize>
            <SizeList sizes={sizes} setDeleteSizeId={setDeleteSizeId}></SizeList>
          </div>
          <div className="col-8">
            <div className="card m-2">
              <div className="card-header">
                <h2>Tree List</h2>
              </div>
              <div className="card-body">
                <ul className="list-group">
                  {
                    trees.map(t => <TreeLine key={t.id} tree={t} setDeleteId={setDeleteId} setModalData={setModalData} deleteComment={deleteComment}></TreeLine>)
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal  sizes={sizes} setEditData={setEditData} setModalData={setModalData} modalData={modalData}></Modal>
    </>
  );
}

export default Back;
