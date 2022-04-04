import { useEffect } from "react";

function Bs({sk}) {

    useEffect(()=> {
        console.log('SK ', sk + 1);
        return () => {
            console.log('SK mirė', sk + 1)
        }
    }, []);

    // console.log('SK ', sk);


    return (
        <div className="BS" >{sk + 1}</div>
    )
}

export default Bs;