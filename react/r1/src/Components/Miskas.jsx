import Zveris from "./Zveris";

function Miskas({big, forest}) {

    const getBig = big => big ? '20px' : '10px';
    
    
    return (
        <div>
            <h3 style={{
                color:forest,
                fontSize: getBig(big)
                }}>Miškas</h3>

                <Zveris type="Lapė Zita"></Zveris>
                <Zveris type="Kiškis Antanas"></Zveris>
                <Zveris type="Bebras Vytas"></Zveris>
        </div>
    )
}

export default Miskas;