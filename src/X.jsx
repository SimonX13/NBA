import React from "react";
 
class X extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name: "Simon",
            position: "Point Guard",
            score : 28,
            number: 13
        }
    }

    componentDidMount() { // mount the state 
        this.timerID = setInterval(
            () => this.three(),
            1000
          );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
   
    three() {
        // this.setState({
        //     score: this.score + 3
        // });
        this.setState(function(state) {
            if(state.score>35){
                return {
                    score: 28
                }
            }
            return {    
              score: state.score + 3
            };
          });
    }

    render(){
        return(<div>
            <h1>It is {this.state.score} </h1>
        </div>)
    }
}
 
export default X;