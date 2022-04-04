import Bs from "./Bs";
import rand from '../Common/rand';

function SkaiciusH2({sk, kv}) {

    return (
        <>
        <h2>{sk}</h2>
        {
            kv.map((k, i) => <Bs key={i} sk={i} rand={rand(1, 1000)}></Bs>)
        }
        </>
    )
}

export default SkaiciusH2;