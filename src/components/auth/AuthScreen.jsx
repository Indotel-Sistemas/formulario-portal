import React from 'react'
import { LoginForm } from './LoginForm';
import '../../styles/authStyles.css'

export const AuthScreen = () => {
    return (
        <div className='auth_container'>
            <h1 className='auth_title'>Recepcion de ofertas</h1>
            <div className='auth_main'>
                <div className='auth_action'>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
