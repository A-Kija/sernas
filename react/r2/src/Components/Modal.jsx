import { useState } from "react";
function Modal() {

    const [title, setTitle] = useState('');
    const [height, setHeight] = useState('');
    const [type, setType] = useState('1');

    const buttonHandler = () => {
        // setCreateData({
        //     title,
        //     height,
        //     type
        // });
        setTitle('');
        setHeight('');
        setType(1);
    }

    const inputHandler = (e, which) => {
        switch(which) {
            case 'title': 
            setTitle(e.target.value);
            break;
            case 'height': 
            setHeight(e.target.value.replace(/,/g, '.'));
            break;
            case 'type': 
            setType(e.target.value);
            break;
            default:
        }
    }

    return (
        <div className="modal modal-dialog-centered" id="modal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="card-body">
                            <div className="form-group">
                                <label>Tree title</label>
                                <input type="text" className="form-control" onChange={e => inputHandler(e, 'title')} value={title} />
                                <small className="form-text text-muted">Add new tree name here.</small>
                            </div>
                            <div className="container p-0">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="form-group">
                                            <label>Tree height</label>
                                            <input type="text" className="form-control" onChange={e => inputHandler(e, 'height')} value={height} />
                                            <small className="form-text text-muted">Tree height.</small>
                                        </div>
                                    </div>
                                    <div className="col-8">
                                        <div className="form-group">
                                            <label>Tree type</label>
                                            <select className="form-control" onChange={e => inputHandler(e, 'type')} value={type}>
                                                <option value="1">Leaf</option>
                                                <option value="2">Spike</option>
                                                <option value="3">Palm</option>
                                            </select>
                                            <small className="form-text text-muted">Tree type.</small>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-outline-primary m-3" onClick={buttonHandler}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;