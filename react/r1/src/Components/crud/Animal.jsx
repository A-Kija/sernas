function Animal({animal, deleteA, show}) {

    const handleDelete = id => {
        deleteA(parseInt(id));
    }

    return (
        <li>
            <div className="content">
            <span>{animal.type}</span>
            <i>{animal.color}</i>
            {
                animal.isalive ? <div className="isalive"></div> : null
            }
            </div>
            <div className="buttons">
                <button className="edit" onClick={()=>show(animal.id)}>edit</button>
                <button className="delete" onClick={() => handleDelete(animal.id)}>delete</button>
            </div>
        </li>
    )
}

export default Animal;