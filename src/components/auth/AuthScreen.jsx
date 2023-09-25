import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import '../../styles/authStyles.css'

export const AuthScreen = () => {

    const navigate = useNavigate()
    const { authAction } = useParams();

    const handleNavigate = () => {
        if(authAction === 'register') {
           navigate('/');
        }else {
           navigate('/auth/register');
       }
    };


    return (
        <div className='auth_container'>
            <h1 className='auth_title'>Recepcion de ofertas</h1>
            <div className='auth_main'>
                <div className='auth_info'>
                    <img src=''/>
                    <small className='mb-3'>{authAction === 'register'? '¿Ya tienes cuenta?' : '¿No tienes cuenta?'}</small>
                    <button className='btn btn-primary' 
                    onClick={handleNavigate} > {authAction === 'register'? 'Ingresar' : 'Registrar'}</button>
                </div>

                <div className="divisor_line"></div>

                <div className='auth_action'>
                    {(authAction === 'register')
                        ? (<RegisterForm />)
                        : <LoginForm />
                    }
                </div>
            </div>
        </div>
    );
}
