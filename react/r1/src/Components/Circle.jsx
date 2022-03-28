import { Component } from "react";

class Circle extends Component {


    render() {
        return(
        <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'blue'
        }}>
        </div>
        )
    }
}

export default Circle;