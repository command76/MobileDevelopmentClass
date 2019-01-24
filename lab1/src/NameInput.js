import React, { Component } from 'react';
class NameInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.props.onValueChange(event.target.value);
    }


    render() {
        const value = this.props.value;
        return (
                    <input type="text" value={value} onChange={this.handleChange} />
               
            

        )
    }
}
export default NameInput;