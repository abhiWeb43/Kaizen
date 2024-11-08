// Layout of Login and Register Page
import React from 'react';
import { Link } from 'react-router-dom';
import LoginSam from '../assets/images/jap_001.png';
import LoginForm from './LoginForm';
import RegisterForm from './Register';

const Login = ({ isRegister }) => {
    return (
        <section id="login">
            <section className="login-page">
                <div className="login-nav">
                    <Link to="/">
                        <h1 className="logo">Kaizen</h1>
                    </Link>
                    {isRegister ? <RegisterForm /> : <LoginForm />}

                </div>
                <img className="login-image" src={LoginSam} alt="samurai" />
            </section>
        </section>
    )
}

export default Login
