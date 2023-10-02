import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export const PrivateRoutes = ({ children }) => {
    // const {auth} = useSelector(state=> state);
    const [auth] = useAuthStore(state => [state.auth]);
    return !!auth.usuario
        ? children
        : <Navigate to="/auth/login" />
}