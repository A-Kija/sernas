import { Component } from "react";
import Kv3 from "./Kv3";

class Kv2 extends Component{

    constructor(props) {
        super();
    }


    render() {return(
        <>
        {
            this.props.elements.map((e, i) => <Kv3 key={i} color={e}></Kv3>)
        }
        </>
    )
    }
}

export default Kv2;