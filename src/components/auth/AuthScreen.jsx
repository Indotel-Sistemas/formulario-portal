import React from 'react'
import { LoginForm } from './LoginForm';
import '../../styles/authStyles.css'
import { useParams } from 'react-router-dom';
import { RegisterForm } from './RegisterForm';

export const AuthScreen = () => {
    const { authAction } = useParams();
    return (
        <div className='auth_container'>
            <h1 className='auth_title'>Recepción de ofertas</h1>
            <div className='auth_main'>
                <div className='auth_action'>
                    {
                        authAction === 'login' ? (
                            <LoginForm />
                        ) : (
                            <RegisterForm />
                        )
                    }
                </div>
            </div>
        </div>
    );
}
