import React from 'react';
import LogInForm from '../../components/LogInForm/LogInForm';
import './Login.css'

function LogIn(props) {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <LogInForm/>
            </section>
        </main>
    );
}

export default LogIn;