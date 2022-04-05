function Read({zoo}) {

    return (
        <div className="read">
            <h2>List</h2>
            <ul>
                {
                    zoo.map(z => <li key={z.id}>{z.type}</li>)
                }
            </ul>
        </div>
    )
}

export default Read;