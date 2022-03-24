import AutoGood from "./AutoGood"

export default function Auto({auto}) {
    if (auto.type != 'MB') {
        return (
        <AutoGood auto={auto}></AutoGood>
        )
    } else {
        return (
            <h3>
            {auto.type} yra surudijusi gelda
            </h3>
        )
    }
}