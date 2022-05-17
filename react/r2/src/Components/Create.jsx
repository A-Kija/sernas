function Create() {

    return (
        <div className="card m-2">
            <div className="card-header">
                <h2>Add New Tree</h2>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label>Tree title</label>
                    <input type="text" className="form-control" />
                    <small className="form-text text-muted">Add new tree name here.</small>
                </div>
                <div className="container p-0">
                    <div className="row">
                        <div className="col-4">
                        <div className="form-group">
                    <label>Tree height</label>
                    <input type="text" className="form-control" />
                    <small className="form-text text-muted">Tree height.</small>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Create;