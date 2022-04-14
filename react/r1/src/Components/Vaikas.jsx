import { useContext } from "react";
import SenelioZinios from "../Contexts/SenelioZinios";
import SenelioZinios2 from "../Contexts/SenelioZinios2";

function Vaikas() {

    const kaSakeSenelis = useContext(SenelioZinios);

    return (
        <div className="linija">
        <h1>Vaikas --- {kaSakeSenelis}</h1>
        <SenelioZinios2.Consumer>
        {
            value => {
                return (
                    <h1>Vaikas2 --- {value}</h1>
                )
            }
        }
        </SenelioZinios2.Consumer>
        </div>
    )
} 
export default Vaikas;