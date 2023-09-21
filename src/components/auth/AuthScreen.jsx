import React from 'react'
import { useParams } from 'react-router-dom'
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import '../../styles/authStyles.css'

export const AuthScreen = () => {
    const { authAction } = useParams();

    return (
        <div className='auth_container'>
            <h1 className='auth_title'>Titulo</h1>
            <div className='auth_main'>
                <div className='auth_info'>
                    <button className='btn btn-primary'> Registrar</button>
                </div>
                <div className='auth_action'>
                    {(authAction === 'register')
                        ? (<RegisterForm />)
                        : <LoginForm />
                    }
                </div>
            </div>
        </div>
    )
}
