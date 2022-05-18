function TreeLine({ tree }) {

    return (
        <li className="list-group-item">
            <div className="tree-line">
                <div className="tree-line__content">
                    {tree.name}

                </div>
                <div className="tree-line__buttons">
                <button type="button" className="btn btn-outline-danger">Delete</button>
                </div>
            </div>
        </li>
    )
}

export default TreeLine;