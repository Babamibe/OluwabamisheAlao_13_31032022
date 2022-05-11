import React from 'react';
import './FeatureItem.css'
import propTypes from 'prop-types'

/**
 * Display ARGENT BANK features
 * @param {*} props 
 * @returns component
 */
function FeatureItem(props) {
    return (
        <div className="feature-item">
          <img src={props.src} alt={props.alt} className="feature-icon" />
          <h3 className="feature-item-title">{props.title}</h3>
          <p>{props.content}</p>
        </div>
    );
}

export default FeatureItem;

FeatureItem.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  title: propTypes.string,
  content: propTypes.string
}