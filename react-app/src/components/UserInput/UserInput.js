import React, {Component} from 'react';
class UserInput extends Component{
    render(){
        return (
            <input onChange={this.props.change}></input>
        );
    }
}

export default UserInput;