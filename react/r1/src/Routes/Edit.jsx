import { useParams } from "react-router-dom";

import { data } from "../App14";

function Edit() {

    // const params = useParams();

    const {id} = useParams();

    console.log(id)


    return (
        <>
        {
            data.map(a => parseInt(id) === a.id ? <h2 style={{color:'white', backgroundColor:'crimson'}}>{a.n}</h2> : null)
        }
        </>
    )


}


export default Edit;