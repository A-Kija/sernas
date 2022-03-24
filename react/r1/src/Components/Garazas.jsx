import Auto from "./Auto";
// import { v4 as uuidv4 } from 'uuid';

export default function Garazas({autos}) {
    return (
        <>
        {
            autos.map((auto, i) => <Auto key={i} auto={auto}></Auto>)
            
        }

        </>
    )
}