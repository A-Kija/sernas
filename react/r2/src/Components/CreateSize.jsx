import { useState } from "react";

function CreateSize({setCreateSizeData}) {

    const [size, setSize] = useState('');

    const sizeHandler = () => {
        setCreateSizeData({size});
        setSize('');
    }

    return (
        <div className="card m-2">
            <div className="card-header">
                <h2>Add New Size</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Tree Size</label>
                    <input type="text" className="form-control" onChange={e => setSize(e.target.value)} value={size} />
                    <small className="form-text text-muted">Add new size name.</small>
                </div>
                <div className="container p-0">
                    <div className="buttons">
                        <button type="button" className="btn btn-outline-primary m-3" onClick={sizeHandler}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateSize;