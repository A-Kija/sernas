import Animal from "./Animal";

function Read({zoo}) {

    return (
        <div className="read">
            <div className="header">
                <h2>List</h2>
            </div>
            <ul>
                {
                    zoo.map(z => <Animal key={z.id} animal={z}></Animal>)
                }
            </ul>
        </div>
    )
}

export default Read;