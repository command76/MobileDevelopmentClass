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
    let arr = [];
    arr.push(
    <NameForm key="wtf" setValid={this.setValid} />
    );
        if(!this.state.isValid) {
            arr.push(<div>Error</div>);
 }  
       return arr;
    
}
}

export default App;
