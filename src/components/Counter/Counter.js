import React from "react";

export default class Counter extends React.Component{
    state = {
        counter: 0,
    }

    handleClick(value){
        this.setState(({counter}) => ({
            counter: counter + value,
        }));
    }

    handleReset = () => {
        this.setState({
            counter: 0,
        })
    }
    
    render(){
        return(
            <>
                <h3>Class component</h3>
                <p>Value : {this.state.counter}</p>
                <button onClick={this.handleClick.bind(this, -1)}>-1</button>
                <button onClick={this.handleClick.bind(this, 1)}>+1</button>
                <button onClick={this.handleReset}>Reset</button>
            </>
        )
    }
}