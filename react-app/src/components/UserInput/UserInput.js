import React, {Component} from 'react';
import './UserInput.css';
class UserInput extends Component{
    input = {
        width: '300px',
        padding: '12px 20px',
        margin: '8px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box'
    }
    render(){
        return (
            <input type="text" style={this.input} onChange={this.props.change}></input>
        );
    }
}

export default UserInput;