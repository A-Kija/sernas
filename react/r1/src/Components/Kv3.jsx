import { Component } from "react";

class Kv3 extends Component{

    constructor(props) {
        super();
    }

    componentDidMount() {
        console.log('Pasileido:', this.props.color);
    }
  
    componentWillUnmount() {
        console.log('Numire:', this.props.color);
    }

    render() {return(
        <h1 style={{color:'#' + this.props.color}}>
            KV
        </h1>
    )
    }
}

export default Kv3;

