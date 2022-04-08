import React from 'react';
import AccountItem from '../../components/AccountItem/AccountItem';
import Button from '../../components/Button/Button';
import { accountItemContent } from '../../data/accountItemContent';
import './Profile.css'

function Profile(props) {
    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <Button
                class={"edit-button"}
                content={"Edit Name"}
                />
            </div>
            <h2 className="sr-only">Accounts</h2>
            {accountItemContent.map(account => {
                return (
                    <AccountItem
                    key={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                    />
                )
            })}        
        </main>
    );
}

export default Profile;