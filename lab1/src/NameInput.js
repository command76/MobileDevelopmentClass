import React, { Component } from 'react';
class NameInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.props.onNameChange(event.target.value);
    }

    render() {
        const name = this.props.name;
        return (
            <label>
                Name:
                <input type="text" value={name} onChange={this.handleChange} />
            </label>
            

        )
    }
}
export default NameInput;