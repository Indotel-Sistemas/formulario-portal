import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuthStore } from '../store/auth';
// import { AuthContext } from '../auth/AuthContext';

export const PrivateRoutes = ({ children }) => {
    // const {auth} = useSelector(state=> state);
    // const [ auth ] = useAuthStore(state => [state.auth])
    return true
    ? children
        : <Navigate to="/auth/login" />
}