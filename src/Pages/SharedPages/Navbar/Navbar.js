import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Hooks/firebase.init';
import './Navbar.css';
import defaultUser from '../../images/defaultUser.png';
import logo from '../../images/chaldal-logo.png';
import ActiveLink from '../../ActiveLink/ActiveLink';

const Navbar = () => {
        const [user] = useAuthState(auth);

        // Handle Sign Out:
        const handleSignOut = () => {
                signOut(auth);
        }

        return (
                <div className="pb-5">
                        <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                                <div className="container">
                                        <Link to="/" className="navbar-brand">
                                                <div className="d-flex align-items-center justify-content-center">
                                                        <div>
                                                                <img className="img-fluid" height="45" width="45" alt="logo" src={logo} />
                                                                <h6 className="fst-italic">Chaldal</h6>
                                                        </div>
                                                        <div>
                                                                <h4 className="fst-italic brand-color">Warehouse</h4>
                                                        </div>
                                                </div>
                                        </Link>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav ms-auto text-center mb-2 mb-lg-0">
                                                        <li className="nav-item">
                                                                <ActiveLink to="/" className="nav-link active fs-5" aria-current="page" href="#">Home</ActiveLink>
                                                        </li>
                                                        <li className="nav-item">
                                                                <ActiveLink to="/all-items" className="nav-link active fs-5" aria-current="page" href="#">All Items</ActiveLink>
                                                        </li>

                                                        <li className="nav-item">
                                                                {
                                                                        user?.email ?
                                                                                <ActiveLink to="/manage-inventories" className="nav-link active fs-5">Manage Items</ActiveLink>
                                                                                :
                                                                                ''
                                                                }
                                                        </li>
                                                        <li className="nav-item">
                                                                {
                                                                        user?.email ?
                                                                                <ActiveLink to="/add-item" className="nav-link active fs-5">Add Item</ActiveLink>
                                                                                :
                                                                                ''
                                                                }
                                                        </li>
                                                        <li className="nav-item">
                                                                {
                                                                        user?.email ?
                                                                                <ActiveLink to="/my-items" className="nav-link active fs-5">My-Items</ActiveLink>
                                                                                :
                                                                                ''
                                                                }
                                                        </li>
                                                        <li className="nav-item">
                                                                <ActiveLink to="/blog" className="nav-link active fs-5" aria-current="page">Blog</ActiveLink>
                                                        </li>
                                                        <li className="nav-item">
                                                                {
                                                                        user?.email ?
                                                                                <img src={user?.photoURL ? user?.photoURL : defaultUser} className="img-fluid rounded-circle me-3 border border-dark border-3" width="50" alt="" />
                                                                                :
                                                                                ''

                                                                }
                                                        </li>
                                                        {
                                                                user ?
                                                                        < div className="ps-2 pt-1">                                                                 <button onClick={handleSignOut} className="btn login-btn fw-bold">SignOut</button>
                                                                        </div>
                                                                        :

                                                                        <li className="nav-item">
                                                                                <Link to="/login" className="nav-link active fs-5">Login</Link>
                                                                        </li>
                                                        }
                                                </ul>
                                        </div>
                                </div>
                        </nav>
                </div>
        );
};

export default Navbar;