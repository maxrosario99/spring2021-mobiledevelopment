import React, {Component} from "react"

class Pushup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pushups: 0
        } ;
    } ;


render(){
    return(
        <div>
            <h2>Pushup Counter: {this.state.pushups}</h2>
            <button onClick={() => this.setState({pushups: this.state.pushups + 1})}>Add</button>
            <button onClick={() => this.setState({pushups: 0})}>Reset</button>
        </div>
    )
}







}
export default Pushup;