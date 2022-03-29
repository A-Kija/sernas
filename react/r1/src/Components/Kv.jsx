import { Component } from "react";
import Kv2 from "./Kv2";

class Kv extends Component{

    constructor(props) {
        super();
        this.state = {elements: []};
    }

    add = () => {
        const elementsCopy = [...this.state.elements];
        elementsCopy.push(Math.floor(Math.random()*16777215).toString(16).padEnd(6, '0'));
        this.setState({
            elements: elementsCopy
          });
    }

    reset = () => {
            this.setState({
            elements: []
          });
    }

    render(){
        return (
            <>
            <button onClick={this.add}>ADD</button>
            <button onClick={this.reset}>Reset</button>
            <Kv2 elements={this.state.elements}/>
            </>
        )
    }

}

export default Kv;