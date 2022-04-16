import React from 'react';
import './Button.css'

function Button(props) {
    return (
        <button className={props.class} onClick={props.onClick}>{props.content}</button>
    );
}

export default Button;