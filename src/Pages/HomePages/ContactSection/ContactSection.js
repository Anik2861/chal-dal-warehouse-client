import React from 'react';
import './ContactSection.css';
import contact from '../../images/contact.png';

const ContactSection = () => {
        return (
                <div className="contact-section">
                        <div className="container pb-5 mb-5">
                                <h1 className="brand-color text-center fw-bold">Get in Touch</h1>
                                <p className="text-center">To get dill, please submit the form</p>
                                <div className="row pt-5">
                                        <div className="col-lg-6 pb-3">
                                                <img src={contact} className="img-fluid mx-auto" alt="" />
                                        </div>
                                        <div className="col-lg-6 brand-light-color fw-bold d-flex align-items-center">
                                                {/* Form Section */}
                                                <div className="w-75 mx-auto bg-dark p-5 rounded-3">
                                                        <div className="pt-3">
                                                                <label className="form-label text-white">Your Name</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Name" />
                                                        </div>
                                                        <div className="">
                                                                <label className="form-label text-white">Your Email</label>
                                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label className="form-label text-white">Your Message</label>
                                                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                                                        </div>
                                                        <div className="d-grid gap-2 pb-4">
                                                                <button type="submit" className="btn login-btn text-white"><h5>Submit</h5></button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ContactSection;