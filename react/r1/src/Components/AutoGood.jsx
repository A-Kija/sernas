export default function AutoGood({auto}) {
    return (
        <>
        <h3 style={{
            color: auto.color
        }}>{auto.type}</h3>
        <span>{auto.price * 90} RUB</span>
        </>
    )
}