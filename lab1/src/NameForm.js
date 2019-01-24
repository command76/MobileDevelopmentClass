import React, { Component } from 'react';
import NameInput from './NameInput';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    //handleChange is an event that is supposed to set a new instance of the data entered into the text box.  I tried to store this data and
    //compare it with a regular expression that only evaluates alphabetical characters.  But the variable would not be stored so I couldn't perform
    //the comparison and give users an indication of whether or not their data is valid. This binds the handler so that react will recognize it.
    this.handleChange = this.handleChange.bind(this);
    //handleSubmit was my attempt to possibly store the information entered into the input box into an const variable but it would not work and
    //I tried so many different things.  This binds the function so that react will recognize it.
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //This handler is supposed to store the data entered into the text box.
  handleChange(event) {
    this.setState({value: event.target.value});

  }
  //My attempt at getting the onsubmit to possibly store the data from the variable state.  Setting up the props in the child component and trying to
  //use it in the parent component.
  handleSubmit(event) {
    this.props.handleOnSubmit(event.target.value);
  }

  Render() {
    //to try to store the value entered into the textbox as a variable.  This would not work no matter what I tried.
    const value = this.state.value;
    //first render of form data, rendered through child of parent.  Right now my code is completely broken.
    return (
        <form onSubmit={this.handleSubmit}>

          <label>
            Name:
            <NameInput type="text" value={value} onValueChange={(value) => this.setState({value})} />
          </label>
          <input type="submit" value="Submit" />
        
        </form>
       
       

      )
    }
  }
  


class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    
  //The validator/ error checker I was trying to get working that wouldn't work because it had no variable or data to go against.
  //because the setState would not store the input data into a variable no matter what I tried.
    handleSubmit(event) {
    const filter = new RegExp('/[a-zA-Z]*/');
      if (filter == this.state.value) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      } else {
          alert("wtf man!");
      }
      
    }
  //the onsubmit form which also includes the component NameInput which was imported.  The form appears, but its functionality is completely broken.
    render() { 
      return (
        <Submit handleOnSubmit={(value) => this.setState({value})} />
          
      );
    }
  }
export default NameForm;















