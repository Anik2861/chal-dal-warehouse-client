import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../Hooks/firebase.init';

const PrivateRoute = ({ children }) => {
        const [user, loading] = useAuthState(auth);
        const location = useLocation();

        if (loading) {
                return <div className="loading d-flex justify-content-center align-items-center">
                        <img className="img-fluid w-25 mt-5" src="https://i.gifer.com/7gPN.gif" alt="" />
                </div>
        }
        if (!user) {
                return <Navigate to="/login" state={{ from: location }} replace />;
        }
        return children;
};

export default PrivateRoute;