import React from 'react';
import Button from '../Button/Button';
import './AccountItem.css'
import propTypes from 'prop-types'

/**
 * Display account item
 * @param {*} props 
 * @returns component
 */
function AccountItem(props) {
    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{props.title}</h3>
          <p className="account-amount">{props.amount}</p>
          <p className="account-amount-description">{props.description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <Button
            class={"transaction-button"}
            content={"View transactions"}
            />
        </div>
      </section>
    );
}

export default AccountItem;

AccountItem.propTypes = {
  title : propTypes.string,
  amount: propTypes.string,
  description: propTypes.string
}