import { Component } from "react";

class Circle extends Component {

    constructor(props) {
        super();
        // this.valio = this.valio.bind(this);
        this.state = {color: 'blue'}; // pradines steito reiksmes
    }

    valio = () => {
        // this.state.color = 'red'; BLOGAI
        if(this.state.color === 'red') {
            this.setState({
                color: 'blue'
              });
        } else {
        this.setState({
            color: 'red'
          });
        }
        setTimeout(() => console.log(this.state.color), 1); //WTF
    }

    render() {
        return(
        <>
            <div style={{
                width: this.props.size,
                height: this.props.size,
                borderRadius: '50%',
                background: this.state.color
            }}>
            </div>
            <button onClick={this.valio}>Valio</button>
        </>
        )
    }
}

export default Circle;