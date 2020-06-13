import React from 'react';
import './UserOutput.css';
function UserOutput (props){
    return (
        <div className="card">
            <p>Welcome to the React Course {props.userName} !!!</p>
            <p>This is functional component which doesnt uses any react hooks.This is a stateless component</p>
            <p>This is a presentation component in which we are going to use props to access the attributes from the html tag</p>
        </div>
    );
}

export default UserOutput;