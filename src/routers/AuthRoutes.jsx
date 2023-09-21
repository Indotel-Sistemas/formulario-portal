import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthScreen } from '../components/auth/AuthScreen'
import '../styles/authStyles.css'
// import { LoginScreen } from '../components/auth/LoginScreen'

export const AuthRoutes = () => {
    return (
        <div className="auth__main">
            <Routes>
                <Route
                    path="/:authAction"
                    element={<AuthScreen />}
                />
            </Routes>
        </div>
    )
}