import React, { Component } from 'react';
import NameInput from './NameInput';
class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {name: ''};
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleSubmit(event) {
      event.preventDefault();
      alert('A name was submitted: ' + this.textInput.value);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
           <input type="text" ref={(input) => this.textInput = input} />
          <input type="submit" value="Submit" />
      </form>
        )
    }
}
export default NameForm;
