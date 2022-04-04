function SkaiciusH2({sk, kv}) {

    return (
        <>
        <h2>{sk}</h2>
        {
            kv.map((k, i) => <div className="BS" key={i}>{i + 1}</div>)
        }
        </>
    )
}

export default SkaiciusH2;