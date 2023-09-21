import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuthStore } from '../store/auth';

export const PublicRoutes = ({ children }) => {
    // const [auth] = useAuthStore(state => [state.auth]);
    
    return true
        ? <Navigate to="/" />
        : children
}