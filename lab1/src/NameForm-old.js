import React, { Component } from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      nameAvailable:false, 
      isValid: true, 
      setValid:props.setValid
  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //alert('A name was submitted: ' + this.state.value);
    if(/[^a-zA-Z]+/.test(this.state.value)) {
      this.state.setValid(false);
    } else {
      this.setState({nameAvailable:true});
      // this.setState({isValid:false});
      // console.log("false");
    }

  }

  render() {
    let returnArray = [];
    if(!this.state.nameAvailable) {
      returnArray.push(
    
      <form onSubmit={this.handleSubmit} key="main">
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>);
      return returnArray;
    } else {
    return (<div>Good morning! {this.state.value}</div>);
  }
}
}
export default NameForm;















