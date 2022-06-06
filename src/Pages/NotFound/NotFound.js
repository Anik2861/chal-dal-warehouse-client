import React from 'react';
import notFound from '../images/404.png';

const NotFound = () => {
        return (
                <div className="container mt-5 d-flex justify-content-center align-items-center">
                        <img src={notFound} className="img-fluid" alt="" />
                </div>
        );
};

export default NotFound;