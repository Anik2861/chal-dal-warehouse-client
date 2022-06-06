import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../Hooks/firebase.init';
import grocery from '../../images/login.png';
import './Login.css';
import spinner from '../../images/spinner.gif';

const Login = () => {
        // Using Hook Login:
        const [
                signInWithEmailAndPassword,
                user,
                loading,
                error,
        ] = useSignInWithEmailAndPassword(auth);

        // Using Hooks Sign In With Google:
        const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

        // Using Google Sign In:
        const [user1] = useAuthState(auth);
        const usingGoogle = async () => {
                await signInWithGoogle();
        }
        if (user1) {
                const sendUserInformation = async () => {
                        const email = user1?.email;
                        const data = await axios.post('https://chaldal-warehouse.herokuapp.com/get-token', { email });
                        localStorage.setItem('token', data?.data);
                }
                sendUserInformation();
        }

        // UseRef
        const emailRef = useRef('');
        const passwordRef = useRef('');

        const handleLogin = async e => {
                e.preventDefault();
                const email = emailRef.current.value;
                const password = passwordRef.current.value;
                await signInWithEmailAndPassword(email, password);
                const data = await axios.post('https://chaldal-warehouse.herokuapp.com/get-token', { email });
                localStorage.setItem('token', data?.data);
        }

        // Reset Password:
        const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

        const resetPassword = async () => {
                const email = emailRef.current.value;
                if (email) {
                        await sendPasswordResetEmail(email);
                        toast("Check Your Email Please!");
                }
                else {
                        toast("Please Enter Your Correct Email!");
                }
        }

        // Navigate:
        const location = useLocation();
        let from = location.state?.from?.pathname || "/";
        const navigate = useNavigate();
        useEffect(() => {
                if (user || googleUser) {
                        return navigate(from, { replace: true });
                }
        }, [user, googleUser]);

        // Handling Error Message:
        let errorElement;
        if (error || googleError || resetError) {
                errorElement = <p className="text-danger">{error?.message} {googleError?.message} {resetError?.message}</p>;
        }

        // Spinner:
        if (loading || googleLoading || sending) {
                return <div className="loading d-flex justify-content-center align-items-center">
                        <img className="img-fluid mt-5" src={spinner} alt="" />
                </div>
        }
        return (
                <div className="container pt-5 pb-5">
                        <div className="row">
                                <div className="col-lg-6 signInForm">
                                        <h1 className="text-center brand-color p-4 fw-bold mt-5 mb-3">Please Login</h1>
                                        <form onSubmit={handleLogin} className="w-75 mx-auto">
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                                        <input type="email" className="form-control" placeholder="Your Email" required ref={emailRef} />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                                        <input type="password" className="form-control" required placeholder="Your Password (at least 6digit)" ref={passwordRef} />
                                                </div>

                                                <div className="d-grid gap-2">
                                                        <button type="submit" className="btn fw-bold btn-lg login-btn">
                                                                Login <i className="fas fa-sign-in-alt"></i>
                                                        </button>
                                                </div>
                                                <div className="mb-3 pt-2 ps-2">
                                                        <p>Need To Create New Account?
                                                                <Link to="/registration"> Click Here</Link>
                                                        </p>
                                                        <p>Forget Password?
                                                                <Link onClick={resetPassword} to="" className="brand-color text-decoration-none"> Reset Password</Link>
                                                        </p>
                                                        <ToastContainer />
                                                </div>
                                                <div className="mb-3 ps-2">
                                                        {errorElement}
                                                </div>
                                        </form>

                                        <div className="d-grid gap-2 w-75 mt-3 mx-auto">
                                                <button onClick={() => usingGoogle()} className="btn login-btn btn-lg fw-bold login-btn">
                                                        <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" className="img-fluid rounded-circle me-3" width="32" alt="" /> Sign In Using Google
                                                </button>
                                        </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                        <div className="">
                                                <img className="img-fluid p-5" src={grocery} alt="" />
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Login;