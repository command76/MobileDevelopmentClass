import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameForm from './NameForm';

class App extends Component {
    constructor(props) {
    super(props)
    this.setValid = this.setValid.bind(this);
    this.state = {isValid:true};

    }
    setValid(value) {
        this.setState({isValid:value});
        console.log("getting input!");
        
    }
    render() {
        // let arr = [];
        // arr.push(
        if(this.state.isValid) {
            return(<div>
                <NameForm setValid={this.setValid} />
                {/* {this.state.isValid ? null : <div>Error</div> } */}
                
                </div>);
    } else {
        return(
            <div>
            <NameForm setValid={this.setValid} />
        <div id="error" ref="error" className="error-text">You made an Error!</div>
        </div> );
    }
            

    //         if(!this.state.isValid) {
    //             arr.push();
    // }  
    //     return arr;
        
    }
}

export default App;
