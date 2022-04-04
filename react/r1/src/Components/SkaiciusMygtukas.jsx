import { useState } from "react"

function SkaiciusMygtukas() {

    const [sk, setSk] = useState(0);

    const add = () => {
        setSk(s => ++s);
    }

    return (
        <>
        <h2>{sk}</h2>
        <button onClick={add}>ADD</button>
        </>
    )
}

export default SkaiciusMygtukas;