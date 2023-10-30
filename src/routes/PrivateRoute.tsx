import { Navigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

const PrivateRoute = ({ children }: IProps) => {
    const storedAuthData = localStorage.getItem('auth');
    const token = storedAuthData ? JSON.parse(storedAuthData).token : null;

    return token ? children : <Navigate to="/login" />;
};

const PublicRoute = ({ children }: IProps) => {
    const storedAuthData = localStorage.getItem('auth');
    const token = storedAuthData ? JSON.parse(storedAuthData).token : null;

    return token ? <Navigate to="/" /> : children;
};

export { PublicRoute, PrivateRoute };