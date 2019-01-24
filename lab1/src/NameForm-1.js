import React, { Component } from 'react';
import NameInput from './NameInput';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});

    }
  
    handleSubmit(event) {
    const filter = new RegExp('/[a-zA-Z]*/');
      if (filter == this.state.value) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      } else {
          alert("wtf man!");
      }
      
    }
  
    render() { 
      const value = this.state.value;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <NameInput type="text" value={value} onValueChange={(value) => this.setState({value})} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default NameForm;















