import React, {Component} from "react"

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            exercises: 0
        } ;
    } ;


render(){
    return(
        <div>
            <h2>Number of Squats: {this.state.exercises}</h2>
            <button onClick={() => this.setState({exercises: this.state.exercises + 1})}>Add</button>
            <button onClick={() => this.setState({exercises: 0})}>Reset</button>
        </div>
    )
}







}
export default Exercise;