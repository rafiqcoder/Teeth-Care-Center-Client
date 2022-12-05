import React,{ useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import { UserContext } from '../Context/Context';

const PrivateRoute = ({ children }) => {
    const { loader,user } = useContext(UserContext);
    const location = useLocation();
    if (loader) {
        return (
            <Spinner></Spinner>
        );
       
    }
    if (user && user.uid) {
        return children;
    }

    return (
        <Navigate to='/login' state={{from:location}} replace></Navigate>
    );

};

export default PrivateRoute;