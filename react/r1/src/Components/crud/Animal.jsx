function Animal({animal}) {


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
                <button className="edit">edit</button>
                <button className="delete">delete</button>
            </div>
        </li>
    )
}

export default Animal;