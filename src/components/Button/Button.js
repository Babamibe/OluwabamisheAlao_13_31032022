import React from 'react';
import './Button.css'
import propTypes from 'prop-types'

/**
 * Display button
 * @param {*} props 
 * @returns component
 */

function Button(props) {
    return (
        <button className={props.class} onClick={props.onClick}>{props.content}</button>
    );
}

export default Button;

Button.propTypes = {
    class: propTypes.string,
    onClick: propTypes.func,
    content: propTypes.string
}