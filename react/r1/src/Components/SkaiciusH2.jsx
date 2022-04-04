import Bs from "./Bs";

function SkaiciusH2({sk, kv}) {

    return (
        <>
        <h2>{sk}</h2>
        {
            kv.map((k, i) => <Bs key={i} sk={i}></Bs>)
        }
        </>
    )
}

export default SkaiciusH2;