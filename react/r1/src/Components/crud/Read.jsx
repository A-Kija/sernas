function Read({zoo}) {

    return (
        <div className="read">
            <div className="header">
                <h2>List</h2>
            </div>
            <ul>
                {
                    zoo.map(z => <li key={z.id}>{z.type}</li>)
                }
            </ul>
        </div>
    )
}

export default Read;