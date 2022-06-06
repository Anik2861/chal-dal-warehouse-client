import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Hooks/firebase.init';
import grocery from '../../images/registration.png';
import spinner from '../../images/spinner.gif';

const Registration = () => {
        // Using React hooks Registration:
        const [
                createUserWithEmailAndPassword,
                user,
                loading,
                error,
        ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

        // Using Hooks Sign In With Google:
        const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
        // Update Profile for Name:
        const [updateProfile, updating, nameError] = useUpdateProfile(auth);

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
        const nameRef = useRef('')
        const emailRef = useRef('');
        const passwordRef = useRef('');

        const handleRegistration = async e => {
                e.preventDefault();
                const name = nameRef.current.value;
                const email = emailRef.current.value;
                const password = passwordRef.current.value;
                await createUserWithEmailAndPassword(email, password);
                await updateProfile({ displayName: name });
                const data = await axios.post('https://chaldal-warehouse.herokuapp.com/get-token', { email });
                localStorage.setItem('token', data?.data)
        }
        const navigate = useNavigate();
        useEffect(() => {
                if (user || googleUser) {
                        navigate('/home');
                }
        }, [user, googleUser]);

        // Handling Error Message:
        let errorElement;
        if (error || googleError) {
                errorElement = <p className="text-danger">{error?.message} {googleError?.message}</p>;
        }

        // Spinner:
        if (loading || googleLoading) {
                return <div className="loading d-flex justify-content-center align-items-center">
                        <img className="img-fluid mt-5" src={spinner} alt="" />
                </div>
        }
        return (
                <div className="container pb-5">
                        <div className="row pt-5">
                                <div className="col-md-6 d-flex justify-content-center align-items-center">
                                        <div className="mx-auto">
                                                <img className="img-fluid p-5" src={grocery} alt="" />
                                        </div>
                                </div>
                                <div className="col-lg-6 signInForm">
                                        <h2 className="text-center brand-color p-4 fw-bold mt-5 mb-3">Please Registration Here!</h2>
                                        <form onSubmit={handleRegistration} className="w-75 mx-auto">
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Your Name</label>
                                                        <input type="text" className="form-control" placeholder="Your Name" required ref={nameRef} />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                                                        <input type="email" className="form-control" placeholder="Your Email" required ref={emailRef} />
                                                </div>
                                                <div className="mb-3">
                                                        <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
                                                        <input type="password" className="form-control" required placeholder="Your Password (at least 6digit)" ref={passwordRef} />
                                                </div>

                                                <div className="d-grid gap-2">
                                                        <button type="submit" className="btn fw-bold btn-lg text-white login-btn">
                                                                Registration <i className="fas fa-sign-in-alt"></i>
                                                        </button>
                                                </div>
                                                <div className="mb-3 pt-2 ps-2">
                                                        <p>Already have an account?
                                                                <Link to="/login"> Login Here</Link>
                                                        </p>
                                                </div>
                                                <div className="mb-3 ps-2">
                                                        {errorElement}
                                                </div>
                                        </form>

                                        <div className="d-grid gap-2 w-75 mt-3 mx-auto">
                                                <button onClick={() => usingGoogle()} className="btn login-btn btn-lg fw-bold login-btn text-white">
                                                        <img src="https://cdn.icon-icons.com/icons2/2108/PNG/512/google_icon_130924.png" className="img-fluid rounded-circle me-3" width="32" alt="" /> Sign In Using Google
                                                </button>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default Registration;